Search.setIndex({docnames:["api","api/catatom2osm","api/csvtools","api/download","api/hgwnames","api/layer","api/main","api/modules","api/osm","api/osmxml","api/setup","api/test","api/test.test_csvtools","api/test.test_download","api/test.test_hgwnames","api/test.test_layer","api/test.test_osm","api/test.test_osmxml","api/test.test_translate","api/test.unittest_main","api/translate","changes","coverage","genindex","index","readme"],envversion:50,filenames:["api.rst","api/catatom2osm.rst","api/csvtools.rst","api/download.rst","api/hgwnames.rst","api/layer.rst","api/main.rst","api/modules.rst","api/osm.rst","api/osmxml.rst","api/setup.rst","api/test.rst","api/test.test_csvtools.rst","api/test.test_download.rst","api/test.test_hgwnames.rst","api/test.test_layer.rst","api/test.test_osm.rst","api/test.test_osmxml.rst","api/test.test_translate.rst","api/test.unittest_main.rst","api/translate.rst","changes.rst","coverage.rst","genindex.rst","index.rst","readme.rst"],objects:{"":{catatom2osm:[1,0,0,"-"],csvtools:[2,0,0,"-"],download:[3,0,0,"-"],hgwnames:[4,0,0,"-"],layer:[5,0,0,"-"],main:[6,0,0,"-"],osm:[8,0,0,"-"],osmxml:[9,0,0,"-"],setup:[10,0,0,"-"],test:[11,0,0,"-"],translate:[20,0,0,"-"]},"catatom2osm.CatAtom2Osm":{exit:[1,2,1,""],export_layer:[1,2,1,""],get_atom_file:[1,2,1,""],get_crs_from_gml:[1,2,1,""],get_gml_date:[1,2,1,""],merge_address:[1,2,1,""],osm_from_layer:[1,2,1,""],path:[1,3,1,""],qgs:[1,3,1,""],read_gml_layer:[1,2,1,""],run:[1,2,1,""],split_building_in_tasks:[1,2,1,""],write_osm:[1,2,1,""],zip_code:[1,3,1,""]},"download.ProgressBar":{update:[3,2,1,""]},"layer.BaseLayer":{"export":[5,2,1,""],append:[5,2,1,""],copy_feature:[5,2,1,""],join_field:[5,2,1,""],reproject:[5,2,1,""],search:[5,2,1,""],translate_field:[5,2,1,""]},"layer.ConsLayer":{check_levels_and_area:[5,2,1,""],clean:[5,2,1,""],index_of_building_and_parts:[5,2,1,""],is_building:[5,5,1,""],is_part:[5,5,1,""],is_pool:[5,5,1,""],merge_building_parts:[5,2,1,""],merge_greatest_part:[5,2,1,""],move_address:[5,2,1,""],remove_duplicated_holes:[5,2,1,""],remove_outside_parts:[5,2,1,""],remove_parts_below_ground:[5,2,1,""],set_tasks:[5,2,1,""]},"layer.DebugWriter":{add_point:[5,2,1,""]},"layer.Point":{boundingBox:[5,2,1,""],get_angle_with_context:[5,2,1,""]},"layer.PolygonLayer":{add_topological_points:[5,2,1,""],clean:[5,2,1,""],clean_duplicated_nodes_in_polygons:[5,2,1,""],explode_multi_parts:[5,2,1,""],get_adjacents_and_features:[5,2,1,""],get_duplicates:[5,2,1,""],get_parents_per_vertex_and_features:[5,2,1,""],get_vertices:[5,2,1,""],merge_adjacents:[5,2,1,""],merge_duplicates:[5,2,1,""],simplify:[5,2,1,""]},"layer.ZoningLayer":{clasify_zoning:[5,5,1,""],set_labels:[5,2,1,""]},"osm.Element":{is_uploaded:[8,2,1,""],new_index:[8,2,1,""]},"osm.Node":{geometry:[8,2,1,""]},"osm.Osm":{merge_duplicated:[8,2,1,""],new_indexes:[8,2,1,""],nodes:[8,3,1,""],relations:[8,3,1,""],replace:[8,2,1,""],ways:[8,3,1,""]},"osm.Relation":{Member:[8,1,1,""],append:[8,2,1,""],geometry:[8,2,1,""],replace:[8,2,1,""]},"osm.Relation.Member":{ref:[8,3,1,""],type:[8,3,1,""]},"osm.Way":{clean_duplicated_nodes:[8,2,1,""],geometry:[8,2,1,""],replace:[8,2,1,""],search_node:[8,2,1,""]},"test.test_csvtools":{TestCsvTools:[12,1,1,""]},"test.test_csvtools.TestCsvTools":{test_csv2dict:[12,2,1,""],test_dict2csv:[12,2,1,""]},"test.test_download":{TestGetResponse:[13,1,1,""],TestProgressBar:[13,1,1,""],TestWget:[13,1,1,""]},"test.test_download.TestGetResponse":{test_get_response_bad:[13,2,1,""],test_get_response_ok:[13,2,1,""]},"test.test_download.TestProgressBar":{test_init:[13,2,1,""],test_update100:[13,2,1,""],test_update:[13,2,1,""]},"test.test_download.TestWget":{test_wget:[13,2,1,""]},"test.test_hgwnames":{TestHgwnames:[14,1,1,""]},"test.test_hgwnames.TestHgwnames":{test_get_names:[14,2,1,""],test_parse:[14,2,1,""]},"test.test_layer":{TestAddressLayer:[15,1,1,""],TestBaseLayer:[15,1,1,""],TestConsLayer:[15,1,1,""],TestDebugWriter:[15,1,1,""],TestParcelLayer:[15,1,1,""],TestPoint:[15,1,1,""],TestPolygonLayer:[15,1,1,""],TestZoningLayer:[15,1,1,""]},"test.test_layer.TestAddressLayer":{setUp:[15,2,1,""],test_append:[15,2,1,""],test_join_field:[15,2,1,""]},"test.test_layer.TestBaseLayer":{setUp:[15,2,1,""],test_append_all_fields:[15,2,1,""],test_append_with_query:[15,2,1,""],test_append_with_rename:[15,2,1,""],test_copy_feature_all_fields:[15,2,1,""],test_copy_feature_with_rename:[15,2,1,""],test_export_default:[15,2,1,""],test_export_other:[15,2,1,""],test_reproject:[15,2,1,""],test_translate_field:[15,2,1,""]},"test.test_layer.TestConsLayer":{setUp:[15,2,1,""],test_add_topological_points:[15,2,1,""],test_append_building:[15,2,1,""],test_append_buildingpart:[15,2,1,""],test_append_othercons:[15,2,1,""],test_check_levels_and_area:[15,2,1,""],test_index_of_building_and_parts:[15,2,1,""],test_is_building:[15,2,1,""],test_is_part:[15,2,1,""],test_is_pool:[15,2,1,""],test_merge_building_parts:[15,2,1,""],test_merge_greatest_part:[15,2,1,""],test_move_address:[15,2,1,""],test_remove_duplicated_holes_buildings:[15,2,1,""],test_remove_duplicated_holes_parts:[15,2,1,""],test_remove_outside_parts:[15,2,1,""],test_remove_parts_below_ground:[15,2,1,""],test_set_tasks:[15,2,1,""],test_simplify1:[15,2,1,""],test_simplify2:[15,2,1,""]},"test.test_layer.TestDebugWriter":{test_add_point:[15,2,1,""],test_init:[15,2,1,""]},"test.test_layer.TestParcelLayer":{test_init:[15,2,1,""],test_not_empty:[15,2,1,""]},"test.test_layer.TestPoint":{test_boundigBox:[15,2,1,""],test_is_corner_with_context:[15,2,1,""]},"test.test_layer.TestPolygonLayer":{setUp:[15,2,1,""],test_clean_duplicated_nodes_in_polygons:[15,2,1,""],test_explode_multi_parts:[15,2,1,""],test_get_duplicates:[15,2,1,""],test_get_parents_per_vertex_and_features:[15,2,1,""],test_get_vertices:[15,2,1,""],test_merge_duplicates:[15,2,1,""]},"test.test_layer.TestZoningLayer":{setUp:[15,2,1,""],test_clasify_zoning:[15,2,1,""],test_get_adjacents_and_features:[15,2,1,""],test_merge_adjacents:[15,2,1,""],test_set_labels:[15,2,1,""]},"test.test_osm":{OsmTestCase:[16,1,1,""],TestOsm:[16,1,1,""],TestOsmElement:[16,1,1,""],TestOsmMultiPolygon:[16,1,1,""],TestOsmNode:[16,1,1,""],TestOsmPolygon:[16,1,1,""],TestOsmRelation:[16,1,1,""],TestOsmWay:[16,1,1,""]},"test.test_osm.OsmTestCase":{setUp:[16,2,1,""]},"test.test_osm.TestOsm":{test_getattr:[16,2,1,""],test_init:[16,2,1,""],test_merge_duplicated:[16,2,1,""],test_new_indexes:[16,2,1,""],test_properties:[16,2,1,""],test_replace:[16,2,1,""]},"test.test_osm.TestOsmElement":{test_init:[16,2,1,""],test_is_uploaded:[16,2,1,""],test_new_index:[16,2,1,""]},"test.test_osm.TestOsmMultiPolygon":{test_init:[16,2,1,""]},"test.test_osm.TestOsmNode":{test_eq:[16,2,1,""],test_geometry:[16,2,1,""],test_getitem:[16,2,1,""],test_init:[16,2,1,""],test_init_round:[16,2,1,""],test_ne:[16,2,1,""],test_str:[16,2,1,""]},"test.test_osm.TestOsmPolygon":{test_init:[16,2,1,""]},"test.test_osm.TestOsmRelation":{test_append:[16,2,1,""],test_eq:[16,2,1,""],test_geometry:[16,2,1,""],test_init:[16,2,1,""],test_member_eq:[16,2,1,""],test_member_ne:[16,2,1,""],test_ne:[16,2,1,""],test_ref:[16,2,1,""],test_replace:[16,2,1,""],test_type:[16,2,1,""]},"test.test_osm.TestOsmWay":{test_clean_duplicated_nodes:[16,2,1,""],test_eq:[16,2,1,""],test_geometry:[16,2,1,""],test_init:[16,2,1,""],test_replace:[16,2,1,""],test_search_node:[16,2,1,""]},"test.test_osmxml":{OsmxmlTest:[17,1,1,""]},"test.test_osmxml.OsmxmlTest":{test_serialize:[17,2,1,""]},"test.test_translate":{TestTranslate:[18,1,1,""]},"test.test_translate.TestTranslate":{test_address_tags:[18,2,1,""],test_all_tags:[18,2,1,""],test_building_tags:[18,2,1,""]},"test.unittest_main":{QgsSingleton:[19,1,1,""]},catatom2osm:{CatAtom2Osm:[1,1,1,""],list_municipalities:[1,4,1,""]},csvtools:{csv2dict:[2,4,1,""],dict2csv:[2,4,1,""]},download:{ProgressBar:[3,1,1,""],get_response:[3,4,1,""],wget:[3,4,1,""]},hgwnames:{get_translations:[4,4,1,""],parse:[4,4,1,""]},layer:{AddressLayer:[5,1,1,""],BaseLayer:[5,1,1,""],ConsLayer:[5,1,1,""],DebugWriter:[5,1,1,""],ParcelLayer:[5,1,1,""],Point:[5,1,1,""],PolygonLayer:[5,1,1,""],ZoningLayer:[5,1,1,""],get_attributes:[5,4,1,""],is_inside:[5,4,1,""]},osm:{Element:[8,1,1,""],MultiPolygon:[8,1,1,""],Node:[8,1,1,""],Osm:[8,1,1,""],Polygon:[8,1,1,""],Relation:[8,1,1,""],Way:[8,1,1,""]},osmxml:{serialize:[9,4,1,""]},test:{test_csvtools:[12,0,0,"-"],test_download:[13,0,0,"-"],test_hgwnames:[14,0,0,"-"],test_layer:[15,0,0,"-"],test_osm:[16,0,0,"-"],test_osmxml:[17,0,0,"-"],test_translate:[18,0,0,"-"],unittest_main:[19,0,0,"-"]},translate:{address_tags:[20,4,1,""],all_tags:[20,4,1,""],building_tags:[20,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:staticmethod"},terms:{"0295603cs6109n":5,"6wien":25,"case":[12,13,14,15,16,17,18],"class":[1,3,5,8,12,13,14,15,16,17,18,19],"default":[1,4,5,25],"espa\u00f1ol":24,"export":[1,5],"float":5,"function":[1,2],"import":[1,25],"new":[4,5,8],"return":[1,4,5,8],"short":1,"static":5,"true":[1,5,8],"try":[1,3],CRS:[1,5],For:5,The:[5,25],There:5,Will:5,With:5,_core:[5,19],_part:5,_pi:5,a_dict:2,a_path:1,abl:5,abov:5,abreviatur:4,accord:5,acord:5,action:8,acut:5,acute_thr:5,add:[5,21],add_point:5,add_topological_point:5,address:[1,4,5,20,21,25],address_lay:4,address_osm:1,address_tag:20,addresslay:[4,5],adjac:5,adminunitnam:1,alert:4,all:[1,5,20,25],all_tag:[1,20],allow_empti:1,also:5,angl:5,ani:[1,5,25],anoth:5,api:[1,24],app:1,append:[5,8],appli:5,applic:[1,4,5,10,25],area:[5,21],aren:5,arg:[8,13,15],argument:25,asign:5,ass:5,assign:8,associ:5,atom:[1,21,24,25],attribut:[1,5],au_id:5,avail:25,avoid:5,bar:[3,5],base:[5,8,12,13,14,15,16,17,18,19],baselay:5,basenam:5,basic:3,becaus:1,becous:5,been:[5,25],befor:5,below:5,between:[5,25],big:5,bool:[1,4,5],bound:5,boundari:21,boundingbox:5,box:5,brows:25,bug:21,build:[1,5,21,25],building_osm:1,building_tag:20,buildingpart:1,buildings_import:25,cadastr:[1,4,5,21,24,25],cadastralparcel:[1,5],cadastralzon:[1,5],call:5,can:25,catastro:25,catatom2osm:[0,6,25],cath_thr:5,cathetu:5,center:5,chang:24,changeset:21,check:21,check_levels_and_area:5,clasify_zon:5,clean:5,clean_duplicated_nod:8,clean_duplicated_nodes_in_polygon:5,close:5,code:[0,1,21,24,25],collect:8,command:6,component_href:5,configur:4,consecut:5,conslay:[5,21],construct:[5,20,25],contain:[1,4,5,8],content:[7,24],convent:4,convert:[1,24,25],coordin:[5,8],copi:[1,5],copy_featur:5,corner:5,correct:4,correctli:1,correspond:5,coverag:[0,19,24],creat:[1,4,5,8],creation:21,critic:25,crs:[1,5],csv2dict:2,csv:[2,4],csv_path:2,csvtool:7,data:[1,5,8,9,24,25],dataset:[1,8,25],date:1,debug:[5,25],debugwrit:5,degre:5,delet:5,deriv:1,detect:1,determin:1,develop:21,dict2csv:2,dict:[4,5],dictionari:[2,4,5],differ:5,digit:[1,25],directori:[1,4,25],discov:0,displai:3,distanc:5,distinct:5,distribut:5,don:[1,4,25],download:[1,7,21,25],dptz:25,driver_nam:[1,5],dup_thr:5,duplic:5,each:[5,8],element:8,els:[1,4],empti:1,encod:2,english:24,enhanc:21,enough:5,entranc:[5,21],entri:[6,19],equal:5,equival:25,error:[21,25],esri:[1,5],everyth:25,exampl:5,except:[1,3],exclud:5,execut:21,exist:[1,4,5],exit:[1,25],explode_multi_part:5,export_lay:1,express:5,extend:5,fals:[1,3],feat:5,featur:[1,5,20],fid:5,field:[1,4,5,20],field_nam:5,field_names_subset:5,file:[1,2,4,5,21,24,25],filenam:[1,3,5],final_attribut:5,final_valu:5,find:25,first:8,five:1,fix:21,fixm:5,flag:4,floor:[5,21],folder:4,foo:5,footprint:[5,21],form:5,format:[5,9],from:[1,2,4,5,20,24,25],full:4,func:5,gdal:25,gener:1,geom:5,geometri:[5,8],get:[1,3,5],get_adjacents_and_featur:5,get_angle_with_context:5,get_atom_fil:1,get_attribut:5,get_crs_from_gml:1,get_dupl:5,get_gml_dat:1,get_parents_per_vertex_and_featur:5,get_respons:3,get_transl:4,get_vertic:5,ggmmm:[1,25],git:24,github:25,give:5,given:[1,5,8,25],gml:1,gml_path:1,gob:25,greater:5,greatest:5,groud:5,ground:5,group:5,gui:5,has:25,have:5,help:[2,25],helper:8,hgwname:7,highwai:4,highway_nam:4,highway_typ:4,host:24,housenumb:4,housenumber_fn:4,html:25,http:[3,25],hub:24,identifi:5,implement:8,impli:25,improv:21,increment:3,index:[0,5,8,24,25],index_of_building_and_part:5,info:25,initi:21,inner:[5,8],input:25,insid:5,inspir:[1,24,25],instal:24,instanc:1,instead:25,integ:5,invalid:5,is_build:5,is_empti:1,is_insid:5,is_part:5,is_pool:5,is_upload:8,iso8859:2,issu:21,its:5,javiersanp:25,join:5,join_field:5,join_field_nam:5,join_fieldsnam:5,josm:21,keywarg:[13,15],kwarg:8,label:5,lambda:5,languag:24,launch:1,layer:[1,4,7,20],layernam:1,less:5,lev_abov:5,lev_below:5,level:[5,25],levelnam:5,line:6,list:[1,5,8,25],list_municip:1,localid:5,locat:[1,4],log:[24,25],log_level:25,low:5,mai:5,main:[1,7,25],manag:1,mani:[3,5,8],manzana:5,match:[1,25],md_path:1,mechan:5,member:[5,8],memori:5,merg:[5,8,21],merge_address:1,merge_adjac:5,merge_building_part:5,merge_dupl:[5,8],merge_greatest_part:5,messag:25,metadata:1,meter:5,method:[5,21],methodnam:[12,13,14,15,16,17,18],minhap:25,minor:21,mmm:1,mode:5,model:8,modifi:8,modul:7,moment:5,more:5,move:[5,21],move_address:5,multipart:5,multipolygon:8,municip:[1,25],name:[1,4,5,25],names_lay:4,nearest:5,necessari:1,need:25,never:[1,8],new_index:8,node:[5,8],none:[1,5,8],note:5,number:5,object:8,occur:8,offic:25,ogr:5,one:[4,5,8],ones:4,onli:[5,25],openstreetmap:[8,25],option:[1,5,25],org:25,origin:4,original_attribut:5,original_valu:5,osm:[1,4,5,7,9,20,21,24,25],osm_from_lay:1,osmtestcas:16,osmxml:7,osmxmltest:17,otherconstruct:1,outer:[5,8],output:[1,5,9,25],output_fold:4,outputh:4,outsid:5,overwrit:5,packag:7,pair:[5,8],paramet:[1,4,5],parcel:[1,5,25],parcellay:5,parent:5,pars:4,part:[5,8,25],path:[1,4,5,25],pd_id:5,percent:3,point:[5,6,19],poligono:5,polygon:[5,8],polygonlay:5,pool:5,posit:[5,8],postaldescriptor:1,precondit:5,prefer:10,prefix:5,previou:4,previous:5,print:25,prioriti:5,process:25,product:1,program:25,progress:3,progressbar:3,propag:5,propos:25,prov:25,prov_cod:1,providerlib:5,provinc:[1,25],provinci:25,purposess:5,purposs:25,put:5,pyqgi:25,python:[0,25],qgi:[1,5,19,25],qgs:1,qgsapplic:[1,19],qgscoordinatereferencesystem:[1,5],qgsfeatur:5,qgsgeometri:5,qgspoint:5,qgssingleton:19,qgsvectorfilewrit:5,qgsvectorlay:[1,5],queri:5,radiu:5,rais:[1,3],read:[2,4,24],read_gml_lay:1,receiv:5,reduc:[5,21],ref:8,refer:[5,24],relat:[2,5,8],remov:5,remove_duplicated_hol:5,remove_outside_part:5,remove_parts_below_ground:5,renam:5,replac:[5,8],reproject:5,requeri:24,resolv:5,respons:3,result:25,rewrit:21,ring:[5,8],role:8,run:[0,1,19,25],runtest:[12,13,14,15,16,17,18],rustic:5,rustic_zon:[1,5],same:[5,8],script:5,sdgc:5,search:5,search_nod:8,see:5,segment:5,select:25,self:1,sequenc:5,serial:9,servic:[1,24,25],set:[1,5,8,9,24,25],set_label:5,set_task:5,setup:[7,15,16],shall:25,shapefil:[1,5],share:5,show:[5,25],simplifi:[5,21],singl:25,small:5,softwar:25,some:[5,21],sourc:[1,2,3,4,5,8,9,12,13,14,15,16,17,18,19,20,21],source_d:5,source_lay:5,spanish:[1,21,24,25],spanish_cadastr:25,spec:5,specif:5,split:[5,25],split_building_in_task:1,standalon:5,start:25,state:25,step:3,str:[1,4,5],str_format:5,straight:5,straight_thr:5,stream:3,street:4,street_fn:4,string:5,submodul:7,sum:5,support:21,tabl:5,tag:[1,8,20,21],tags_transl:1,target:5,target_cr:5,target_field_nam:5,task:[1,5,21,25],test:[0,5,7,25],test_add_point:15,test_add_topological_point:15,test_address_tag:18,test_all_tag:18,test_append:[15,16],test_append_all_field:15,test_append_build:15,test_append_buildingpart:15,test_append_othercon:15,test_append_with_queri:15,test_append_with_renam:15,test_boundigbox:15,test_building_tag:18,test_check_levels_and_area:15,test_clasify_zon:15,test_clean_duplicated_nod:16,test_clean_duplicated_nodes_in_polygon:15,test_copy_feature_all_field:15,test_copy_feature_with_renam:15,test_csv2dict:12,test_csvtool:[7,11],test_dict2csv:12,test_download:[7,11],test_eq:16,test_explode_multi_part:15,test_export_default:15,test_export_oth:15,test_geometri:16,test_get_adjacents_and_featur:15,test_get_dupl:15,test_get_nam:14,test_get_parents_per_vertex_and_featur:15,test_get_response_bad:13,test_get_response_ok:13,test_get_vertic:15,test_getattr:16,test_getitem:16,test_hgwnam:[7,11],test_index_of_building_and_part:15,test_init:[13,15,16],test_init_round:16,test_is_build:15,test_is_corner_with_context:15,test_is_part:15,test_is_pool:15,test_is_upload:16,test_join_field:15,test_lay:[7,11],test_member_eq:16,test_member_n:16,test_merge_adjac:15,test_merge_building_part:15,test_merge_dupl:[15,16],test_merge_greatest_part:15,test_move_address:15,test_n:16,test_new_index:16,test_not_empti:15,test_osm:[7,11],test_osmxml:[7,11],test_pars:14,test_properti:16,test_ref:16,test_remove_duplicated_holes_build:15,test_remove_duplicated_holes_part:15,test_remove_outside_part:15,test_remove_parts_below_ground:15,test_replac:16,test_reproject:15,test_search_nod:16,test_seri:17,test_set_label:15,test_set_task:15,test_simplify1:15,test_simplify2:15,test_str:16,test_transl:[7,11],test_translate_field:15,test_typ:16,test_upd:13,test_update100:13,test_wget:13,testaddresslay:15,testbaselay:15,testcas:[12,13,14,15,16,17,18],testconslay:15,testcsvtool:12,testdebugwrit:15,testgetrespons:13,testhgwnam:14,testosm:16,testosmel:16,testosmmultipolygon:16,testosmnod:16,testosmpolygon:16,testosmrel:16,testosmwai:16,testparcellay:15,testpoint:15,testpolygonlay:15,testprogressbar:13,testtransl:18,testwget:13,testzoninglay:15,text:[3,5],than:5,thei:5,them:25,thi:[1,5,25],thoroughfarenam:1,threshold:5,time:[3,21],tn_id:5,too:5,tool:[1,24,25],topolog:[5,21],total:3,transform:[4,5],translat:[1,4,5,7,21],translate_field:5,translatio:20,tri:1,two:[5,25],type:[1,4,8],ubuntu:25,under:25,underscor:5,uniqu:[5,8],unittest:[0,12,13,14,15,16,17,18],unittest_main:[7,11],updat:3,upload:[1,8,25],urban:5,urban_zon:[1,5],url:[1,3],usag:24,used:5,using:25,util:5,valid:21,valu:[4,5],vector:1,version:[21,25],vertex:5,vertic:5,visibl:8,wai:8,warn:24,wasen:4,webinspir:25,websit:25,wget:3,where:[1,4],wiki:25,within:5,without:5,witn:8,wkbmultipolygon:5,wkbpolygon:5,work:5,write:[2,4,5],write_osm:1,www:25,xlink:5,xml:[1,9,21],you:[5,25],zip:1,zip_cod:1,zip_path:1,zone:[1,5,25],zoninglay:5},titles:["API reference","catatom2osm module","csvtools module","download module","hgwnames module","layer module","main module","CatAtom2Osm","osm module","osmxml module","setup module","test package","test.test_csvtools module","test.test_download module","test.test_hgwnames module","test.test_layer module","test.test_osm module","test.test_osmxml module","test.test_translate module","test.unittest_main module","translate module","Change log","Code coverage","Index","Welcome to CatAtom2Osm&#8217;s documentation!","Read me"],titleterms:{api:0,catatom2osm:[1,7,24],chang:21,code:22,content:11,coverag:22,csvtool:2,document:[24,25],download:3,hgwname:4,index:23,instal:25,layer:5,log:21,main:6,modul:[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20],osm:8,osmxml:9,packag:11,read:25,refer:0,requeri:25,setup:10,submodul:11,test:[11,12,13,14,15,16,17,18,19],test_csvtool:12,test_download:13,test_hgwnam:14,test_lay:15,test_osm:16,test_osmxml:17,test_transl:18,translat:20,unittest_main:19,usag:25,warn:25,welcom:24}})