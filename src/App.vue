<template lang="pug">
    #app.flex.flex-column.vh-100.avenir
        #top.bb.b--gray.bg-washed-yellow.h3
            h1 Bushfire areas
        #middle.flex.flex-auto
            #sidebar.br.b--light-gray.overflow-auto.w3.w5-ns.pa2
                .b.i This is just a demonstration of EMSINA's public fire areas 
                a(href="https://services9.arcgis.com/ZFlIzBMHgtgl0EYj/arcgis/rest/services/Bushfire_Boundaries/FeatureServer/0") spatial endpoints
                | .
                p It is not intended for any other purpose, including decision making.
                FeatureInfo
            #map-container.relative.flex-auto
                Map
                #overlay.absolute
        #bottom.bt.b--light-gray.flex-none.h2
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
