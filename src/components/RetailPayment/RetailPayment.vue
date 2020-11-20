<template>
<div>

    <div class="columns is-mobile">
        <div class="column">
            <div class="tile wide quote">
                <div class="header">
                </div>
                <div class="body">
                </div>
            </div>
        </div>
        <div class="column">
            <div class="tile wide invoice">
                <div class="header">
                </div>
                <div class="body">
                </div>
            </div>
        </div>
        <div class="column">
            <div class="tile wide invoice">
                <div class="header">
                </div>
                <div class="body">
                </div>
            </div>
        </div>
        <div class="column">
            <div class="tile wide invoice">
                <div class="header">
                </div>
                <div class="body">
                </div>
            </div>
        </div>
    </div>
    <div class="columns is-mobile">
        <div class="column">
            <div class="container">
               <PayByGeo> </PayByGeo>
            </div>
        </div>
        <div class="column">
            <div class="tile fortiate tile-fort" style="margin-top:74%;margin-left:48px;height:280px">
                <div class="title sel" style="text-align:right">Payment split
                    <multiselect v-model="selected" :multiple="false" :options="options" style="margin-left:164%">
                    </multiselect>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="tile fortiate tile-fort" style="margin-top:74%;height:280px">
                <div class="title sel">Score
                    <multiselect v-model="selected" :multiple="false" :options="options" style="margin-left:164%">
                    </multiselect>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import PayByGeo from './PayByGeo';
export default {
    name: 'RetailPayment',
    props: {
        msg: String
    },
    components: {
        Multiselect,
        PayByGeo
    },
    data() {

        return {

            selected: 'Last week',

            options: ['Last week', 'Last month'],

        }

    },



}
</script>

<style>
.sel {
    width: max-content;
}

/* 
.tile.fortiate {
    margin-right: 60px;
} */

.bar {
    fill: steelblue;
}

.graph {
    width: auto;
}

.tooltip {
    color: black;
}

.title {
    font-size: 18px;
    font-display: bolder;
}

.axis {
    font: 12px Georgia, Arial, sans-serif;
}

.axis path,
.axis line {
    fill: none;
    stroke: #dadada;
    shape-rendering: crispEdges;
}
</style>
