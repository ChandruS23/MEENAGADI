var wms_layers = [];

var format_CommunityHall1_0 = new ol.format.GeoJSON();
var features_CommunityHall1_0 = format_CommunityHall1_0.readFeatures(json_CommunityHall1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityHall1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityHall1_0.addFeatures(features_CommunityHall1_0);
var lyr_CommunityHall1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityHall1_0, 
                style: style_CommunityHall1_0,
                popuplayertitle: "CommunityHall1",
                interactive: true,
                title: '<img src="styles/legend/CommunityHall1_0.png" /> CommunityHall1'
            });
var format_Dustbin1_1 = new ol.format.GeoJSON();
var features_Dustbin1_1 = format_Dustbin1_1.readFeatures(json_Dustbin1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dustbin1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dustbin1_1.addFeatures(features_Dustbin1_1);
var lyr_Dustbin1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dustbin1_1, 
                style: style_Dustbin1_1,
                popuplayertitle: "Dustbin1",
                interactive: false,
                title: '<img src="styles/legend/Dustbin1_1.png" /> Dustbin1'
            });
var format_Location_2 = new ol.format.GeoJSON();
var features_Location_2 = format_Location_2.readFeatures(json_Location_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Location_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_2.addFeatures(features_Location_2);
var lyr_Location_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_2, 
                style: style_Location_2,
                popuplayertitle: "Location",
                interactive: true,
                title: '<img src="styles/legend/Location_2.png" /> Location'
            });
var format_PHC_3 = new ol.format.GeoJSON();
var features_PHC_3 = format_PHC_3.readFeatures(json_PHC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PHC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PHC_3.addFeatures(features_PHC_3);
var lyr_PHC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PHC_3, 
                style: style_PHC_3,
                popuplayertitle: "PHC",
                interactive: false,
                title: '<img src="styles/legend/PHC_3.png" /> PHC'
            });
var format_Road1_4 = new ol.format.GeoJSON();
var features_Road1_4 = format_Road1_4.readFeatures(json_Road1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road1_4.addFeatures(features_Road1_4);
var lyr_Road1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road1_4, 
                style: style_Road1_4,
                popuplayertitle: "Road1",
                interactive: false,
                title: '<img src="styles/legend/Road1_4.png" /> Road1'
            });
var format_School_5 = new ol.format.GeoJSON();
var features_School_5 = format_School_5.readFeatures(json_School_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_5.addFeatures(features_School_5);
var lyr_School_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_5, 
                style: style_School_5,
                popuplayertitle: "School",
                interactive: true,
                title: '<img src="styles/legend/School_5.png" /> School'
            });
var format_Toddy_6 = new ol.format.GeoJSON();
var features_Toddy_6 = format_Toddy_6.readFeatures(json_Toddy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toddy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toddy_6.addFeatures(features_Toddy_6);
var lyr_Toddy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toddy_6, 
                style: style_Toddy_6,
                popuplayertitle: "Toddy",
                interactive: true,
                title: '<img src="styles/legend/Toddy_6.png" /> Toddy'
            });
var format_BOUN_7 = new ol.format.GeoJSON();
var features_BOUN_7 = format_BOUN_7.readFeatures(json_BOUN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUN_7.addFeatures(features_BOUN_7);
var lyr_BOUN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOUN_7, 
                style: style_BOUN_7,
                popuplayertitle: "BOUN",
                interactive: true,
                title: '<img src="styles/legend/BOUN_7.png" /> BOUN'
            });

lyr_CommunityHall1_0.setVisible(true);lyr_Dustbin1_1.setVisible(true);lyr_Location_2.setVisible(true);lyr_PHC_3.setVisible(true);lyr_Road1_4.setVisible(true);lyr_School_5.setVisible(true);lyr_Toddy_6.setVisible(true);lyr_BOUN_7.setVisible(true);
var layersList = [lyr_CommunityHall1_0,lyr_Dustbin1_1,lyr_Location_2,lyr_PHC_3,lyr_Road1_4,lyr_School_5,lyr_Toddy_6,lyr_BOUN_7];
lyr_CommunityHall1_0.set('fieldAliases', {'Name': 'Name', });
lyr_Dustbin1_1.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', });
lyr_Location_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', });
lyr_PHC_3.set('fieldAliases', {'Name': 'Name', });
lyr_Road1_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_School_5.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', 'ANU': 'ANU', });
lyr_Toddy_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', });
lyr_BOUN_7.set('fieldAliases', {'id': 'id', 'BOUN': 'BOUN', });
lyr_CommunityHall1_0.set('fieldImages', {'Name': '', });
lyr_Dustbin1_1.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', });
lyr_Location_2.set('fieldImages', {'OBJECTID': '', 'name': '', 'WARD_NO': '', 'WARD_NAME': '', });
lyr_PHC_3.set('fieldImages', {'Name': '', });
lyr_Road1_4.set('fieldImages', {'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', });
lyr_School_5.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', 'ANU': '', });
lyr_Toddy_6.set('fieldImages', {'id': '', 'Name': '', 'Location': '', });
lyr_BOUN_7.set('fieldImages', {'id': 'TextEdit', 'BOUN': 'TextEdit', });
lyr_CommunityHall1_0.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Dustbin1_1.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', });
lyr_Location_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'name': 'no label', 'WARD_NO': 'no label', 'WARD_NAME': 'no label', });
lyr_PHC_3.set('fieldLabels', {'Name': 'no label', });
lyr_Road1_4.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_School_5.set('fieldLabels', {'Name': 'inline label - always visible', 'LULC': 'no label', 'Name2': 'no label', 'ANU': 'no label', });
lyr_Toddy_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', });
lyr_BOUN_7.set('fieldLabels', {'id': 'no label', 'BOUN': 'no label', });
lyr_BOUN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});