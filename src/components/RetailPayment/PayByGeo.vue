<template>
<div>
    <div class="tile fortiate tile-fort" style="width:600px;height:280px">
        <div class="column">
            <div class="title sel" style="text-align:right"> Payments By Geography
                <multiselect v-model="selected" :multiple="false" :options="options" style="margin-left:164%">
                </multiselect>
            </div>
            <div class="graph" id="barGraph" style="margin-right:55%"></div>
        </div>
    </div>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import * as d3 from 'd3';
export default {
    name: 'RetailPayment',
    props: {
        msg: String
    },
    components: {
        Multiselect
    },
    data() {

        return {

            selected: 'Last week',

            options: ['Last week', 'Last month'],

        }

    },

    mounted() {

        var data = [{
            "name": "A",
            "actor": "Will Smith",
            "rank": 100,
            "description": "An expert marksman and assassin."
        }, {
            "name": "B",
            "actor": "Margot Robbie",
            "rank": 90,
            "description": "The Joker's main squeeze, the former psychiatrist is an insane sociopath with tremendous sex appeal."
        }, {
            "name": "C",
            "actor": "Joel Kinnaman",
            "rank": 20,
            "description": "The defacto leader of the group, he takes his orders directly from Amanda Waller."
        }, {
            "name": "Q",
            "actor": "Jai Courtney",
            "rank": 50,
            "description": "As his name suggests, Boomerang is an assassin who uses ... boomerangs."
        }, {
            "name": "D",
            "actor": "Jay Hernandez",
            "rank": 40,
            "description": "A former gang member who has seen a lot of violence, El Diablo can summon flames but tends to keep his anger and bloodlust in check."
        }, {
            "name": "E",
            "actor": "Adewale Akinnuoye-Agbaje",
            "rank": 80,
            "description": "The most unique in appearance, Killer Croc is one of the most vicious and scariest of all the members, being a deformed humanoid with the appearance of a crocodile."
        }, {
            "name": "F",
            "actor": "Cara Delevingne",
            "rank": 70,
            "description": "Once an archeologist, the former June Moone was possessed by a witch."
        }, {
            "name": "P",
            "actor": "Karen Fukuhara",
            "rank": 60,
            "description": "Expert martial artists and swordswoman who can trap souls in her katana blade."
        }];

        var margin = {
                top: 20,
                right: 20,
                bottom: 100,
                left: 60
            },
            width = 300 - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom,
            x = d3.scaleBand().rangeRound([15, width]).paddingInner(0.5),
            y = d3.scaleLinear().range([height, 0]);

        //draw axis
        var xAxis = d3.axisBottom().scale(x).ticks(6);

        var yAxis = d3.axisLeft().scale(y).ticks(5).tickSizeInner(-width).tickSizeOuter(0).tickPadding(10);

        var svg = d3.select("#barGraph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        x.domain(data.map(function (d) {
            return d.name;
        }));

        y.domain([0, d3.max(data, function (d) {
            return d.rank;
        })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0, " + height + ")")
            .call(xAxis)
        // .selectAll("text")
        // .style("text-anchor", "end")
        // .attr("dx", "-0.5em")
        // .attr("dy", "-.55em")
        // .attr("y", 30)
        // .attr("transform", "rotate(-45)");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        // svg.append("text")
        //   .attr("transform", "rotate(-90)")
        //   .attr("y", 5)
        //   .attr("dy", "0.8em")
        //   .attr("text-anchor", "end")
        //   .text("y axis");

        svg.selectAll("bar")
            .data(data)
            .enter()
            .append("rect")
            .style("fill", "orange")
            .attr("x", function (d) {
                return x(d.name);
            })
            .attr("width", x.bandwidth())
            .attr("y", function (d) {
                return y(d.rank);
            })
            .attr("height", function (d) {
                return height - y(d.rank);
            })
        // .on("mouseover", function() {
        //   tooltip.style("display", null);
        // })
        // .on("mouseout", function() {
        //   tooltip.style("display", "none");
        // })

        // .on("mousemove", function(d) {

        //   tooltip.transition().duration(200)
        //     .style("opacity", 0.9);
        //   tooltip.select("div").html("Name: <strong>" + d.name + "</strong><br/>Rank: <strong>" + d.rank + "</strong>")
        //     .style("position", "fixed")
        //     .style("left", (d3.event.pageX) + "px")
        //     .style("top", (d3.event.pageY - 28) + "px");

        // });

        // var tooltip = d3.select("body").append("div")
        //   .attr("class", "tooltip")
        //   .style("opacity", 0.5);

        // tooltip.append("rect")
        //   .attr("width", 30)
        //   .attr("height", 20)
        //   .attr("fill", "#ffffff")
        //   .style("opacity", 0.5);

        // tooltip.append("div")
        //   .attr("x", 15)
        //   .attr("dy", "1.2em")
        //   .style("text-anchor", "middle")
        //   .attr("font-size", "1.5em")
        //   .attr("font-weight", "bold");

    }

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
