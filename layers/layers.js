ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2790").setExtent([316159.279905, 554507.560212, 392274.158394, 594538.805058]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZipCodeBoundaries_1 = new ol.format.GeoJSON();
var features_ZipCodeBoundaries_1 = format_ZipCodeBoundaries_1.readFeatures(json_ZipCodeBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2790'});
var jsonSource_ZipCodeBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZipCodeBoundaries_1.addFeatures(features_ZipCodeBoundaries_1);
var lyr_ZipCodeBoundaries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZipCodeBoundaries_1, 
                style: style_ZipCodeBoundaries_1,
                interactive: false,
                title: '<img src="styles/legend/ZipCodeBoundaries_1.png" /> Zip Code Boundaries'
            });
var format_PercentChange_2 = new ol.format.GeoJSON();
var features_PercentChange_2 = format_PercentChange_2.readFeatures(json_PercentChange_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2790'});
var jsonSource_PercentChange_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentChange_2.addFeatures(features_PercentChange_2);
var lyr_PercentChange_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentChange_2, 
                style: style_PercentChange_2,
                interactive: true,
    title: 'Percent Change<br />\
    <img src="styles/legend/PercentChange_2_0.png" /> <-24%<br />\
    <img src="styles/legend/PercentChange_2_1.png" /> -24% - 58%<br />\
    <img src="styles/legend/PercentChange_2_2.png" /> 150% - 300%<br />\
    <img src="styles/legend/PercentChange_2_3.png" /> >300%<br />\
    <img src="styles/legend/PercentChange_2_4.png" /> 58% - 150%<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ZipCodeBoundaries_1.setVisible(true);lyr_PercentChange_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ZipCodeBoundaries_1,lyr_PercentChange_2];
lyr_ZipCodeBoundaries_1.set('fieldAliases', {'objectid': 'objectid', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'zip': 'zip', });
lyr_PercentChange_2.set('fieldAliases', {'objectid': 'objectid', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'zip': 'zip', '_field_1': '_field_1', '_region': '_region', '_region_code': '_region_code', '_zip': '_zip', '_totpop2015': '_totpop2015', '_totpop2020': '_totpop2020', '_sapop2015': '_sapop2015', '_sapop2020': '_sapop2020', '_sapct2015': '_sapct2015', '_sapct2020': '_sapct2020', '_pctchange': '_pctchange', '_Chicago Region': '_Chicago Region', '_Total Population 2015': '_Total Population 2015', '_Total Population 2020': '_Total Population 2020', '_South Asian Population 2015': '_South Asian Population 2015', '_South Asian Population 2020': '_South Asian Population 2020', '_South Asian % 2015': '_South Asian % 2015', '_South Asian % 2020': '_South Asian % 2020', '_South Asian % Change': '_South Asian % Change', });
lyr_ZipCodeBoundaries_1.set('fieldImages', {'objectid': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'zip': 'TextEdit', });
lyr_PercentChange_2.set('fieldImages', {'objectid': 'Hidden', 'shape_area': 'Hidden', 'shape_len': 'Hidden', 'zip': 'TextEdit', '_field_1': 'Hidden', '_region': 'Hidden', '_region_code': 'Hidden', '_zip': 'Hidden', '_totpop2015': 'Hidden', '_totpop2020': 'Hidden', '_sapop2015': 'Hidden', '_sapop2020': 'Hidden', '_sapct2015': 'Hidden', '_sapct2020': 'Hidden', '_pctchange': 'Hidden', '_Chicago Region': 'TextEdit', '_Total Population 2015': 'TextEdit', '_Total Population 2020': 'TextEdit', '_South Asian Population 2015': 'TextEdit', '_South Asian Population 2020': 'TextEdit', '_South Asian % 2015': 'TextEdit', '_South Asian % 2020': 'TextEdit', '_South Asian % Change': 'TextEdit', });
lyr_ZipCodeBoundaries_1.set('fieldLabels', {'objectid': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'zip': 'no label', });
lyr_PercentChange_2.set('fieldLabels', {'zip': 'inline label', '_Chicago Region': 'inline label', '_Total Population 2015': 'inline label', '_Total Population 2020': 'inline label', '_South Asian Population 2015': 'inline label', '_South Asian Population 2020': 'inline label', '_South Asian % 2015': 'inline label', '_South Asian % 2020': 'inline label', '_South Asian % Change': 'inline label', });
lyr_PercentChange_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});