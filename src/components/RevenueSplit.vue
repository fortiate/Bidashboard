<template>
 <div class="tile fortiate tile-fort square-tile">
    
    <div class="revenue-split-title">
        <span>Revenue Split</span>
    </div>
    <div class="revenue-split"> </div>
          
       
     
                   
</div>
</template>

<script>

import * as d3 from 'd3';
export default {
    name: 'ConsumerAnalytics',
    props: {
        msg: String
    },
    components: {
        
    },
    data() {

        return {

            selected: 'Last week',

            options: ['Last week', 'Last month'],

        }

    },

    mounted() {

        var data = [{
            "browser": "Chrome",
            "percent": "52",
         }, {
            "browser": "IE/Edge",
            "percent": "12",
         }, {
            "browser": "Firefox",
            "percent": "10",
         }, {
            "browser": "Safari",
            "percent": "11",
         }, {
            "browser": "Opera",
            "percent": "8",
        }, {
            "browser": "UCB",
            "percent": "7"
        }];

        var width = 180,
            height = 180,
            radius = Math.min(width, height) / 2;

        var svg = d3.select(".revenue-split")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height);
            
        
        var g = svg.append("g")
                   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c','#3b454c']);

        var pie = d3.pie().value(function(d) { 
                return d.percent; 
            });

        var path = d3.arc()
                     .outerRadius(radius - 10)
                     .innerRadius(45);

        var label = d3.arc()
                      .outerRadius(radius)
                      .innerRadius(radius - 80);

        // d3.csv("browseruse.csv", function(error, data) {
        //     if (error) {
        //         throw error;
        //     }
            var arc = g.selectAll(".arc")
                       .data(pie(data))
                       .enter().append("g")
                       .attr("class", "arc");

            arc.append("path")
               .attr("d", path)
               .attr("fill", function(d) { return color(d.data.browser); });
        
            console.log(arc)
        
            arc.append("text")
               .attr("transform", function(d) { 
                        return "translate(" + label.centroid(d) + ")"; 
                })
               .text(function(d) { return d.data.percent; });
            // });

            // svg.append("g")
            //    .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
            //    .append("text")
            //    .text("Browser use statistics - Jan 2017")
            //    .attr("class", "title")


    }
}    

</script>    

<style>

  .rect-tile{
            background-color: #ffffff;
            width: 90% !important;
            height: 110px !important;
        }

        .square-tile{
            background-color: #ffffff;
            width: 90% !important;
            height: 200px !important;
        }

        .long-tile{
            background-color: #ffffff;
            width: 97% !important;
            height: 200px !important;
            margin-top: 35px;
        }

        .arc text {
            font: 10px sans-serif;
            text-anchor: middle;
        }

        .arc path {
            stroke: #fff;
        }

        .title {
            fill: teal;
            font-weight: bold;
        }
</style>