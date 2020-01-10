<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
const WFS = require('webfeatureservice');
// const FeatureService = require('featureservice');
const FeatureService = require('arcgis-featureservice');


export default {
    async mounted() {
        // replace this Mapbox access token with your own
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazNmNGV5enAwMTF1M2tuejhtc2twcXo5In0.mLPrYIYJ2FiFZ3KMqVIj6w';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [145.96, -32.33],
            zoom: 4,
            style: 'mapbox://styles/mapbox/light-v9',
            hash: true
        });
        U.init(map, mapboxgl);
        window.map = map;
        window.Map = this;

        map.U.onLoad(async () => {
            map.U.addGeoJSON('bushfire-areas');
            map.U.addFill('bushfire-fills', {
                source: 'bushfire-areas',
                fillColor: ['match', ['get','Agency'],
                    'NSW Rural Fire Service', 'hsla(0,80%,60%,0.5)',
                    'VIC Dept of Environment, Land, Water and Planning', 'hsla(40,80%,60%,0.5)',
                    'SA Country Fire Service', 'hsla(80, 80%, 60%, 0.5)',
                    'TAS Tasmanina Fire Service', 'hsla(300, 80%, 60%, 0.5)',
                    'blue'
                ],
            });
            map.U.addLine('bushfire-lines', {
                source: 'bushfire-areas',
                lineColor: 'red',
                lineWidth: 2,
            });        
            map.U.addSymbol('bushfire-labels', {
                source:'bushfire-areas',
                textColor: 'black',
                textField: '{Title}',
                textHaloWidth: 1,
                textHaloColor: 'hsla(0,0%,100%,0.5)',
                minZoom: 8
            });

            map.U.hoverPointer('bushfire-fills');
            map.on('click', 'bushfire-fills', e => {
                console.log(e);
                window.FeatureInfo.feature = e.features[0];
            });

            // const service = new WFS({
            //     url: 'https://dservices9.arcgis.com/ZFlIzBMHgtgl0EYj/arcgis/services/BushfireBoundaries/WFSServer',
            // });
            // const caps = await service.getCapabilities();
            // console.log(caps);

            const url = 'https://services9.arcgis.com/ZFlIzBMHgtgl0EYj/arcgis/rest/services/BushfireBoundaries/FeatureServer/0';

            const service = new FeatureService({
                url,
            });

            const updateData = async () => {

                // const feature = await service.getFeature({
                //     typeName: 'BushfireBBoundaries:National_Bushfire_Boundaries_Aggregated',
                //     maxFeatures: 15,
                //     outputFormat: 'GEOJSON'
                // });
                // console.log(feature);

                service.get({
                    where: '1=1',
                }, (err, featureCollection) => {
                    console.log('Updated data', featureCollection);
                    map.U.setData('bushfire-areas', featureCollection);
                });
            };
            updateData();
            window.setInterval(updateData, 10 * 60 * 1000);
        });

        // const service = new WFS({
        //     url: 'https://dservices9.arcgis.com/ZFlIzBMHgtgl0EYj/arcgis/services/BushfireBoundaries/WFSServer',
        // });
        // const caps = await service.getCapabilities();
        // console.log(caps);
        // const feature = await service.getFeature({
        //     typeName: 'Bushfire_Boundaries:National_Bushfire_Boundaries_Aggregated',
        //     maxFeatures: 15,
        //     outputFormat: 'GML3'
        // });
        // console.log (feature);
        // const service = new FeatureService(url, {});
        // service.pages((err, pages) => {
        //     console.log(pages);
        // });


        
        
        
    }
}
import 'mapbox-gl/dist/mapbox-gl.css';

</script>

<style scoped>
</style>