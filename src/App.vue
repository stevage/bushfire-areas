<template lang="pug">
    #app.flex.flex-column.vh-100.avenir
        #top.bb.b--gray.bg-washed-yellow.h3
            h1 Bushfire areas
        #middle.flex.flex-auto
            #sidebar.br.b--light-gray.overflow-auto.w3.w5-ns.pa2
                .b.i This is just a demonstration of EMSINA's public fire areas 
                    a(href="https://www.arcgis.com/home/item.html?id=bc87de02d8ae4911b070607838370184") spatial endpoints
                    | .
                p It is not intended for any other purpose, including decision making.
                FeatureInfo
            #map-container.relative.flex-auto
                Map
                #overlay.absolute
        #bottom.bt.b--light-gray.flex-none
            p(v-html="'Made by <a href=\"https://hire.stevebennett.me\">Steve Bennett.'")
</template>

<script>
import Map from './components/Map.vue'
import FeatureInfo from './components/FeatureInfo.vue'

export default {
    name: 'app',
    components: {
      Map,
      FeatureInfo
    }
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
