<template lang="pug">
#Layers
    //- h2 Layers
    input#history(type="checkbox" v-model="ourLayers.history")
    label(for="history") Previously burnt areas (VIC)
</template>

<script>
import { EventBus } from '../EventBus';
export default {
    name: "Layers",
    data: function() {
        return {
            ourLayers: this.layers
        
        }
    },
    props: ['layers'],

    created() {
        window.Layers = this;
    },
    computed: {
        // activeLayers() {
        //     return Object.keys(this.layers).filter(l => this.layers[l]))
        // }
    },
    watch: {
        ourLayers() {
            console.log(this.ourLayers)
            this.$emit('layers-change', this.ourLayers);
        }
    }
}
</script>

<style scoped>

</style>