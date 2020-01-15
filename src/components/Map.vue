<template lang="pug">
#map.absolute.absolute--fill
</template>

<script>
import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
const WFS = require('webfeatureservice');
// const FeatureService = require('featureservice');
const FeatureService = require('arcgis-featureservice');
import { flatten } from 'array-flatten';
import { EventBus } from '../EventBus';
export default {
    data: () => ({
        agencyColors: 
            ['NSW Rural Fire Service', 'hsla(0,80%,60%, 0.5)',
            'VIC Dept of Environment, Land, Water and Planning', 'hsla(40,80%,60%, 0.5)',
            'SA Country Fire Service', 'hsla(110, 50%, 60%, 0.5)',
            'TAS Tasmanina Fire Service', 'hsla(260, 80%, 60%, 0.5)',
            'Queensland Fire and Emergency Services', 'hsla(310, 80%, 60%, 0.5)'
            ],
        
    }),
    props: ['layers', 'historyColors'],
    computed: {
        // legendColors() {
        //     return [['NSW RFS', this.agencyColors[1]],
        //         ['VIC DELWP', this.agencyColors[3]],
        //         ['SA CFS', this.agencyColors[5]],
        //         ['TAS TFS', this.agencyColors[7]],
        //         ['QLD F&ES', this.agencyColors[9]],
        //         ];
        // },
        activeFillColor() {
            if (this.layers.history) {
                return 'red';
            } else {
                return ['match', ['get','Agency'],
                        ...this.agencyColors,
                        'blue'
                    ]
            }
        },
        history() { return this.layers.history; },

    },

    watch: {
        history(val) {
            this.map.U.toggle('fire-history', val);
            this.map.U.setFillColor('bushfire-fills', this.activeFillColor);

        }
    },
    async mounted() {
        // replace this Mapbox access token with your own
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazNmNGV5enAwMTF1M2tuejhtc2twcXo5In0.mLPrYIYJ2FiFZ3KMqVIj6w';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [145.96, -32.33],
            zoom: 4,
            // style: 'mapbox://styles/mapbox/light-v9',
            style: 'mapbox://styles/stevage/ck52zyvft0bdo1co3bzk2vfib/draft',
            hash: true
        });
        U.init(map, mapboxgl);
        window.map = map;
        this.map = map;
        window.MapVue = this;

        map.U.onLoad(async () => {
            map.U.setFillColor('fire-history',
                ['interpolate', ['linear', 2], ['get', 'SEASON'], 
                ...flatten(this.historyColors)
                ]
            ),
            map.U.setFillOpacity('fire-history', 0.5);


            map.U.addGeoJSON('bushfire-areas');
            map.U.addFill('bushfire-fills', {
                source: 'bushfire-areas',
                fillColor: this.activeFillColor,
                fillOutline: 'transparent'
                
            });
            map.U.addLine('bushfire-lines', {
                source: 'bushfire-areas',
                // lineColor: 'red',
                lineWidth: 2,
                lineColor: ['match', ['get','Agency'],
                    ...this.agencyColors.map(c => c.replace(/\.\d+\)$/, '.9)')),
                    'blue'
                ]
            });        
            map.U.addSymbol('bushfire-labels', {
                source:'bushfire-areas',
                textColor: 'black',
                textField: '{Title}',
                textHaloWidth: 1,
                textHaloColor: 'hsla(0,0%,100%,0.5)',
                textSize: ['interpolate', ['linear'], ['zoom'],
                    6, 8,
                    12, 16
                ],
                textOpacity: ['interpolate',['linear'],['zoom'],
                    6, ['case', ['>', ['get','Hectares'], 100000], 1, 0],
                    8, ['case', ['>', ['get','Hectares'], 20000], 1, 0],
                    10, 1
                ],

                minZoom: 8
            });

            map.U.hoverPointer(['bushfire-fills','fire-history']);
            map.U.clickLayer(['bushfire-fills', 'fire-history'], e => {
                console.log(e.features[0]);
                window.FeatureInfo.feature = e.features[0];
            });

            this.map.U.toggle('fire-history', this.layers.history);


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
                    window.data = featureCollection
                    this.$emit('bushfire-data', featureCollection.features.sort((a,b) => -a.properties.Hectares + b.properties.Hectares))
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


        
        
        
    },
}
import 'mapbox-gl/dist/mapbox-gl.css';

</script>

<style scoped>
</style>