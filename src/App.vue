<template lang="pug">
    #app.flex.flex-column.vh-100.avenir
        #top.bb.b--gray.bg-washed-yellow
            //- h1 Bushfire areas
        #middle.flex.flex-auto
            #sidebar.br.b--light-gray.overflow-auto.w.w-30-ns.pa2
                .b.i This is just a demonstration of EMSINA's public fire areas 
                    a(href="https://www.arcgis.com/home/item.html?id=bc87de02d8ae4911b070607838370184") spatial endpoints
                    | .
                p It is not intended for any other purpose, including decision making.
                FeatureInfo
                div(v-if="bushfires.length")
                    h3.mb0 Largest fires
                    table.tl
                        tr
                            th Name
                            th Km²
                        tr.tl(v-for="fire in bushfires.slice(0,20)")
                            td.pa1.pr4.f7.dim.shadow-hover.pointer(@click="clickFire(fire)") {{ fire.properties.Title }} 
                            td.pa1.f7 {{ Math.round(fire.properties.Hectares/100).toLocaleString() }}
            
            #map-container.relative.flex-auto
                Map(:layers="layers" :historyColors="historyColors" @bushfire-data="data => bushfires = data")
                #overlay.absolute.bg-white.ma2.pa2.ba
                    Legend(:layers="layers" :historyColors="historyColors" @layers-change="l => layers = l")
                    Layers(ref="layers" :layers="layers")
        #bottom.bt.b--light-gray.flex-none
            p(v-html="'Made by <a href=\"https://hire.stevebennett.me\">Steve Bennett.'")
</template>

<script>
import Map from './components/Map.vue'
import FeatureInfo from './components/FeatureInfo.vue'
import Layers from './components/Layers.vue'
import Legend from './components/Legend.vue';
import { EventBus } from './EventBus';
import bbox from 'geojson-bbox';

export default {
    name: 'app',
    data: () => ({
        layers: {
            history: false//true
        },
        historyColors: [
            [1900, 'hsl(120, 75%, 44%)'],
            [1940, 'hsl(150, 75%, 44%)'],
            [1980, 'hsl(170, 75%, 44%)'],
            [2000, 'hsl(200, 75%, 44%)'],
            [2005, 'hsl(240, 75%, 44%)'],
            [2010, 'hsl(270, 75%, 44%)'],
            [2015, 'hsl(290, 75%, 44%)'],
            [2020, 'hsl(310, 75%, 44%)'],
        ],
        bushfires: []
    }),
    components: {
      Map,
      FeatureInfo,
      Layers,
      Legend
    },
    created() {
        window.App = this;
    },
    methods: {
        clickFire(fire) {
            const bb = bbox(fire);
            window.map.fitBounds(bb);
        }
    }
        // layers() { return window.Layers ? window.Layers.activeLayers : []
}

require('tachyons/css/tachyons.min.css');
</script>

<style>
html, body {
  height: 100vh;
  width: 100%;
  margin:0;
  padding:0;
}

</style>
