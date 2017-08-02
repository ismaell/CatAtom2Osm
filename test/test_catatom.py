import unittest
import mock
import codecs
from cStringIO import StringIO
from contextlib import contextmanager
import random
import os, sys
os.environ['LANGUAGE'] = 'C'

import main
import catatom
import setup

@contextmanager
def capture(command, *args, **kwargs):
    out = sys.stdout
    sys.stdout = codecs.getwriter('utf-8')(StringIO())
    try:
        command(*args, **kwargs)
        sys.stdout.seek(0)
        yield sys.stdout.read()
    finally:
        sys.stdout = out

prov_atom = """<feed xmlns="http://www.w3.org/2005/Atom" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:georss="http://www.georss.org/georss"  xmlns:inspire_dls = "http://inspire.ec.europa.eu/schemas/inspire_dls/1.0" xml:lang="en"> 
<title>Download Office foobar</title>
<entry>
<title> 09001-FOO buildings</title>
</entry>
<entry>
<title> 09002-BAR buildings</title>
</entry>
<entry>
<title> 09999-TAZ buildings</title>
<georss:polygon>42.0997821981015 -3.79048777556759 42.0997821981015 -3.73420761211555 42.1181603073135 -3.73420761211555 42.1181603073135 -3.79048777556759 42.0997821981015 -3.79048777556759</georss:polygon>
</entry>
</feed>
"""

metadata = """<?xml version="1.0" encoding="ISO-8859-1"?>
<gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco">
	<gmd:dateStamp>
		<gco:Date>2017-02-25</gco:Date>
	</gmd:dateStamp>
</gmd:MD_Metadata>
"""

gmlfile = """<?xml version="1.0" encoding="ISO-8859-1"?>
<gml:FeatureCollection xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:AD="urn:x-inspire:specification:gmlas:Addresses:3.0">
    <AD:geometry>
        <gml:Point srsName="urn:ogc:def:crs:EPSG::32628"></gml:Point>
    </AD:geometry>
</gml:FeatureCollection>"""

class TestCatAtom(unittest.TestCase):

    def setUp(self):
        self.m_cat = mock.MagicMock()

    @mock.patch('catatom.os')
    def test_init(self, m_os):
        m_os.path.split = lambda x: x.split('/')
        self.m_cat.init = catatom.Reader.__init__.__func__
        with self.assertRaises(ValueError) as cm:
            self.m_cat.init(self.m_cat, '09999/xxxxx')
        self.assertIn('directory name', cm.exception.message)
        with self.assertRaises(ValueError) as cm:
            self.m_cat.init(self.m_cat, 'xxx/999')
        self.assertIn('directory name', cm.exception.message)
        with self.assertRaises(ValueError) as cm:
            self.m_cat.init(self.m_cat, 'xxx/99999')
        self.assertIn('Province code', cm.exception.message)
        m_os.path.exists.return_value = True
        m_os.path.isdir.return_value = False
        with self.assertRaises(IOError) as cm:
            self.m_cat.init(self.m_cat, 'xxx/12345')
        self.assertIn('Not a directory', cm.exception.message)
        m_os.makedirs.assert_not_called()
        m_os.path.exists.return_value = False
        m_os.path.isdir.return_value = True
        self.m_cat.init(self.m_cat, 'xxx/12345')
        m_os.makedirs.assert_called_with('xxx/12345')
        self.assertEquals(self.m_cat.path, 'xxx/12345')
        self.assertEquals(self.m_cat.zip_code, '12345')
        self.assertEquals(self.m_cat.prov_code, '12')

    @mock.patch('catatom.os')
    @mock.patch('catatom.open')
    def test_get_gml_date_from_gml(self, m_open, m_os):
        self.m_cat.get_gml_date = catatom.Reader.get_gml_date.__func__
        m_os.path.exists.return_value = True
        m_open.return_value.read.return_value = metadata
        gmldate = self.m_cat.get_gml_date(self.m_cat, 'foo')
        self.assertEquals(gmldate, '2017-02-25')
        m_open.assert_called_once_with('foo', 'r')
        
    @mock.patch('catatom.os')
    @mock.patch('catatom.open')
    @mock.patch('catatom.zipfile')
    def test_get_gml_date_from_zip(self, m_zip, m_open, m_os):
        self.m_cat.get_gml_date = catatom.Reader.get_gml_date.__func__
        m_os.path.exists.return_value = False
        m_zip.ZipFile.return_value.read.return_value = metadata
        gmldate = self.m_cat.get_gml_date(self.m_cat, 'foo', 'bar')
        self.assertEquals(gmldate, '2017-02-25')
        m_zip.ZipFile.assert_called_once_with('bar')
        m_os.path.basename.assert_called_once_with('foo')
        m_zip.ZipFile().read.assert_called_once_with(m_os.path.basename())
        
    @mock.patch('catatom.os')
    @mock.patch('catatom.open')
    @mock.patch('catatom.etree')
    @mock.patch('catatom.hasattr')
    def test_get_gml_date_empty(self, m_has, m_etree, m_open, m_os):
        self.m_cat.get_gml_date = catatom.Reader.get_gml_date.__func__
        m_os.path.exists.return_value = True
        del m_etree.fromstring.return_value.root
        m_etree.fromstring.return_value.__len__.return_value = 0
        m_has.return_value = False
        with self.assertRaises(IOError):
            self.m_cat.get_gml_date(self.m_cat, 'foo')
        ns = m_etree.fromstring().find.call_args_list[0][0][1]
        self.assertEquals(set(ns.keys()), {'gco', 'gmd'})

    @mock.patch('catatom.os')
    @mock.patch('catatom.download')
    def test_get_atom_file(self, m_download, m_os):
        self.m_cat.get_atom_file = catatom.Reader.get_atom_file.__func__
        m_os.path.join = lambda *args: '/'.join(args)
        url = setup.prov_url['BU'] % ('38', '38')
        m_download.get_response.return_value.text = "xxxxhttpfobar/38001bartazzipxxx"
        self.m_cat.path = 'lorem'
        self.m_cat.zip_code = '38001'
        self.m_cat.get_atom_file(self.m_cat, url)
        m_download.wget.assert_called_once_with("httpfobar/38001bartazzip", "lorem/38001bartazzip")
        self.m_cat.zip_code = '38002'
        with self.assertRaises(ValueError):
            self.m_cat.get_atom_file(self.m_cat, url)

    @mock.patch('catatom.os')
    @mock.patch('catatom.open')
    @mock.patch('catatom.QgsCoordinateReferenceSystem')
    def test_get_crs_from_gml(self, m_crs, m_open, m_os):
        self.m_cat.get_crs = catatom.Reader.get_crs.__func__
        m_os.path.exists.return_value = True
        m_open.return_value.read.return_value = gmlfile
        (is_empty, crs) = self.m_cat.get_crs(self.m_cat, 'foo')
        m_open.assert_called_once_with('foo', 'r')
        m_crs.assert_called_once_with(32628)
        self.assertEquals(crs, m_crs.return_value)
        self.assertFalse(is_empty)

    @mock.patch('catatom.os')
    @mock.patch('catatom.open')
    @mock.patch('catatom.zipfile')
    @mock.patch('catatom.QgsCoordinateReferenceSystem')
    def test_get_crs_from_zip(self, m_crs, m_zip, m_open, m_os):
        self.m_cat.get_crs = catatom.Reader.get_crs.__func__
        m_os.path.exists.return_value = False
        m_zip.ZipFile.return_value.read.return_value = gmlfile
        (is_empty, crs) = self.m_cat.get_crs(self.m_cat, 'foo', 'bar')
        m_zip.ZipFile.assert_called_once_with('bar')
        m_os.path.basename.assert_called_once_with('foo')
        m_zip.ZipFile().read.assert_called_once_with(m_os.path.basename())
        m_crs.assert_called_once_with(32628)
        self.assertEquals(crs, m_crs.return_value)
        self.assertFalse(is_empty)

    @mock.patch('catatom.os')
    @mock.patch('catatom.open')
    @mock.patch('catatom.etree')
    @mock.patch('catatom.QgsCoordinateReferenceSystem')
    def test_get_crs_empty(self, m_crs, m_etree, m_open, m_os):
        self.m_cat.get_crs = catatom.Reader.get_crs.__func__
        m_os.path.exists.return_value = True
        m_etree.fromstring.return_value.__len__.return_value = 0
        (is_empty, crs) = self.m_cat.get_crs(self.m_cat, 'foo')
        m_crs.assert_called_once_with(None)
        self.assertEquals(crs, m_crs.return_value)
        self.assertTrue(is_empty)

    @mock.patch('catatom.os')
    def test_get_layer_paths(self, m_os):
        self.m_cat.get_layer_paths = catatom.Reader.get_layer_paths.__func__
        m_os.path.join = lambda *args: '/'.join(args)
        with self.assertRaises(ValueError):
            self.m_cat.get_layer_paths(self.m_cat, 'foobar')
        self.m_cat.path = 'foo'
        self.m_cat.zip_code = 'bar'
        ln = random.choice(['building', 'buildingpart', 'otherconstruction'])
        (md_path, gml_path, zip_path, vsizip_path, g) = self.m_cat.get_layer_paths(self.m_cat, ln)
        self.assertEquals(g, 'BU')
        self.assertEquals(md_path, 'foo/A.ES.SDGC.BU.MD.bar.xml')
        self.assertEquals(gml_path, 'foo/A.ES.SDGC.BU.bar.' + ln + '.gml')
        self.assertEquals(zip_path, 'foo/A.ES.SDGC.BU.bar.zip')
        self.assertEquals(vsizip_path, '/vsizip/' + zip_path + '/' + gml_path.split('/')[-1])
        ln = random.choice(['cadastralparcel', 'cadastralzoning'])
        (md_path, gml_path, zip_path, vsizip_path, g) = self.m_cat.get_layer_paths(self.m_cat, ln)
        self.assertEquals(g, 'CP')
        self.assertEquals(md_path, 'foo/A.ES.SDGC.CP.MD..bar.xml')
        self.assertEquals(gml_path, 'foo/A.ES.SDGC.CP.bar.' + ln + '.gml')
        self.assertEquals(zip_path, 'foo/A.ES.SDGC.CP.bar.zip')
        ln = random.choice(['address', 'thoroughfarename', 'postaldescriptor', 'adminunitname'])
        (md_path, gml_path, zip_path, vsizip_path, g) = self.m_cat.get_layer_paths(self.m_cat, ln)
        self.assertEquals(g, 'AD')
        self.assertEquals(md_path, 'foo/A.ES.SDGC.AD.MD.bar.xml')
        self.assertEquals(gml_path, 'foo/A.ES.SDGC.AD.bar.gml|layername=' + ln)
        self.assertEquals(zip_path, 'foo/A.ES.SDGC.AD.bar.zip')

    @mock.patch('catatom.os')
    @mock.patch('catatom.log')
    @mock.patch('catatom.layer')
    def test_read(self, m_layer, m_log, m_os):
        self.m_cat.read = catatom.Reader.read.__func__
        g = random.choice(['BU', 'CP', 'AD'])
        self.m_cat.get_layer_paths.return_value = ('1', '2', '3', '4', g)
        m_crs = mock.MagicMock()
        m_crs.isValid.return_value = True
        m_os.path.exists.return_value = True
        m_layer.BaseLayer.return_value.isValid.return_value = True
        self.m_cat.get_crs.return_value = (False, m_crs)
        self.m_cat.prov_code = '99'
        self.m_cat.get_gml_date.return_value = 'bar'
        gml = self.m_cat.read(self.m_cat, 'foobar')
        self.m_cat.get_layer_paths.assert_called_once_with('foobar')
        self.m_cat.get_atom_file.assert_not_called()
        self.m_cat.get_gml_date.assert_called_once_with('1', '3')
        self.m_cat.get_crs.assert_called_once_with('2', '3')
        output = m_log.info.call_args_list[0][0][0]
        self.assertNotIn('empty', output)
        m_layer.BaseLayer.assert_called_once_with('4', 'foobar.gml', 'ogr')
        m_layer.BaseLayer.return_value.setCrs.assert_called_once_with(m_crs)
        self.assertEquals(m_layer.BaseLayer.return_value.source_date, 'bar')
        self.assertEquals(gml, m_layer.BaseLayer.return_value)

        url = setup.prov_url[g] % ('99', '99')
        m_os.path.exists.return_value = False
        self.m_cat.get_crs.return_value = (True, m_crs)
        gml = self.m_cat.read(self.m_cat, 'foobar', allow_empty=True)
        self.m_cat.get_atom_file.assert_called_once_with(url)
        output = m_log.info.call_args_list[-1][0][0]
        self.assertIn('empty', output)
        self.assertEquals(gml, None)
        m_layer.BaseLayer.assert_called_with('4', 'foobar.gml', 'ogr')

        m_os.path.exists.side_effect = [False, True]
        with self.assertRaises(IOError) as cm:
            self.m_cat.read(self.m_cat, 'foobar', force_zip=True)
        self.m_cat.get_atom_file.assert_called_with(url)
        self.assertIn('empty', cm.exception.message)

        m_crs.isValid.return_value = False
        m_os.path.exists.side_effect = None
        self.m_cat.get_crs.return_value = (False, m_crs)
        with self.assertRaises(IOError) as cm:
            self.m_cat.read(self.m_cat, 'foobar')
        self.assertIn('Could not determine the CRS', cm.exception.message)

        m_crs.isValid.return_value = True
        m_layer.BaseLayer.return_value.isValid.return_value = False
        with self.assertRaises(IOError) as cm:
            self.m_cat.read(self.m_cat, 'foobar')
        self.assertIn('Failed to load', cm.exception.message)

        m_layer.BaseLayer.return_value.isValid.side_effect = [False, True]
        gml = self.m_cat.read(self.m_cat, 'foobar')
        self.assertEquals(gml, m_layer.BaseLayer.return_value)
        

    @mock.patch('catatom.log.warning')
    @mock.patch('catatom.overpass')
    @mock.patch('catatom.hgwnames')
    @mock.patch('catatom.download')
    def test_get_boundary(self, m_download, m_hgw, m_overpass, m_log):
        self.m_cat.get_boundary = catatom.Reader.get_boundary.__func__
        bbox09999 = "41.9997821981,-3.83420761212,42.1997821981,-3.63420761212"
        data = {"id": 2, "tags": {"name": "Tazmania"}}
        m_hgw.fuzz = True
        m_download.get_response.return_value.content = prov_atom
        m_overpass.Query().read.return_value = '{"elements": "foobar"}'
        m_hgw.dsmatch.return_value = data
        self.m_cat.prov_code = '09'
        self.m_cat.zip_code = '09999'
        self.m_cat.get_boundary(self.m_cat)
        url = setup.prov_url['BU'] % ('09', '09')
        m_download.get_response.assert_called_once_with(url)
        m_overpass.Query.assert_called_with(bbox09999, 'json', False, False)
        self.assertEquals(m_hgw.dsmatch.call_args_list[0][0][0], 'TAZ')
        self.assertEquals(m_hgw.dsmatch.call_args_list[0][0][1], 'foobar')
        self.assertEquals(m_hgw.dsmatch.call_args_list[0][0][2](data), 'Tazmania')
        self.assertEquals(self.m_cat.boundary_search_area, '2')
        self.assertEquals(self.m_cat.boundary_name, 'Tazmania')
        
        m_hgw.dsmatch.return_value = None
        self.m_cat.get_boundary(self.m_cat)
        output = m_log.call_args_list[0][0][0]
        self.assertIn("Failed to find", output)
        self.assertEquals(self.m_cat.boundary_search_area, bbox09999)
        
        m_hgw.fuzz = False
        m_hgw.dsmatch.return_value = data
        self.m_cat.get_boundary(self.m_cat)
        output = m_log.call_args_list[-1][0][0]
        self.assertIn("Failed to import", output)

    @mock.patch('catatom.download')
    def test_list_municipalities(self, m_download):
        with self.assertRaises(ValueError):
            catatom.list_municipalities('01')
        url = setup.prov_url['BU'] % ('09', '09')
        m_download.get_response.return_value.content = prov_atom
        with capture(catatom.list_municipalities, '09') as output:
            m_download.get_response.assert_called_once_with(url)
            self.assertIn('foobar', output)
            self.assertIn('FOO', output)
            self.assertIn('BAR', output)
