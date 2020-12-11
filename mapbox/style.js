
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "BDortho_0": {
            "type": "raster",
            "tiles": ["https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg"],
            "tileSize": 256
        },
        "Double_1": {
            "type": "geojson",
            "data": json_Double_1
        }
                    ,
        "Test_2": {
            "type": "geojson",
            "data": json_Test_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_BDortho_0_0",
            "type": "raster",
            "source": "BDortho_0"
        },
        {
            "id": "lyr_Double_1_0",
            "type": "fill",
            "source": "Double_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Propriétaire'], 'Guillaume / Cécilia'], 1.0, ['==', ['get', 'Propriétaire'], 'Inconnu'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'Propriétaire'], 'Inconnu'], '#000000', '#ffffff']}
        }
,
        {
            "id": "lyr_Test_2_0",
            "type": "fill",
            "source": "Test_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Propriétaire'], 'Cécilia'], 1.0, ['==', ['get', 'Propriétaire'], 'Françine'], 1.0, ['==', ['get', 'Propriétaire'], 'Guillaume'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'Propriétaire'], 'Cécilia'], '#7bdb57', ['==', ['get', 'Propriétaire'], 'Françine'], '#b86fd2', ['==', ['get', 'Propriétaire'], 'Guillaume'], '#d5876f', '#ffffff']}
        }
],
}