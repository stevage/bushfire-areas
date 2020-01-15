<template lang="pug">
legend#Legend
    h3 This season
    div.pa1(v-for="agency in legendColors()")
        div.mr2.dib.block.w1.h1(:style="{background: agency[1]}")
        span.v-top {{ agency[0] }}

    div(v-if="layers.history")
        h3 Past bushfires (VIC)
        div.close(v-for="year in historyColors")
            div.mr2.dib.block.w1.h1(:style="{background: year[1]}")
            span.ma0.pa0.v-base {{ year[0] }}
</template>

<script>
export default {
    name: "Legend",
    data: () => ({
        
    }),
    created() {
        window.Legend = this;
    },
    props: ['layers', 'historyColors'],
    methods: {
        legendColors() {
            if (this.layers.history) {
                return [['Current', 'red']];
            } else {
                return [
                    [
                        "NSW RFS",
                        "hsla(0,80%,60%,0.8)"
                    ],
                    [
                        "VIC DELWP",
                        "hsla(40,80%,60%,0.8)"
                    ],
                    [
                        "SA CFS",
                        "hsla(110, 50%, 60%, 0.8)"
                    ],
                    [
                        "TAS TFS",
                        "hsla(260, 80%, 60%, 0.8)"
                    ],
                    [
                        "QLD F & ES",
                        "hsla(310, 80%, 60%, 0.8)"
                    ]
                ]
            }
        },
        historyLayer() {
            return window.Layers && window.Layers.layers.history || false;
        },
    }
}
</script>

<style scoped>
.close {
    line-height: 10px;
}
</style>