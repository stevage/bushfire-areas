<template lang="pug">
div(v-if="feature").bt-black
    br
    h2 {{ p.Title }}
    .gray {{ p.Agency }}
    .b Size: {{ p.Hectares }} ha
    br
    p.f7 Retrieved: {{ p.Date_retrieved }}
    p.f7 Published: {{ p.PublishedDate }}
    //- img.image(v-if="imageUrl" :src="imageUrl")
    //- table#FeatureInfo(v-if="feature").bg-white.b--gray.ba.helvetica.ma1
    //-     tr(v-for="(value, prop) in feature.properties")
    //-         template(v-if="ignoreProps.indexOf(prop) === -1")
    //-             th.f6 {{ prop }}
    //-             td.f6 {{ value }}
</template>

<script>
export default {
    name: "FeatureInfo",
    data: () => ({
        feature: undefined,
        ignoreProps: ['id','Longitude','Latitude', 'image_url']
    }),
    computed: {
        imageUrl() {
            return this.feature && this.feature.properties.image_url
        },
        p() {
            return this.feature && this.feature.properties;
        }
    },
    created() {
        window.FeatureInfo = this;
    }
}
</script>

<style scoped>
#FeatureInfo th {
    text-align:  right;
}

.image {
    width: 100%;
}

</style>