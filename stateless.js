

// Set tooltips
var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
              // return d.name + " has <br>" + d.value + " stateless people";
              return "<strong>Country: </strong><span class='details'>" + d.name + "<br></span>" + "<strong>Stateless: </strong><span class='details'>" + d.value +"</span>";
            })

// Set margin, with and height
var margin = {top: 20, right: 20, bottom: 30, left: 30},
            width = 1000 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;  

// Set projection 
var projection = d3.geo.mercator()
                   .scale(150)
                   .translate( [width / 2, height / 1.5]);

// Set path
var path = d3.geo.path().projection(projection);


// Setsvg and then give it a class called map
var svg = d3.select("#stateless")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append('g')
            .attr('class', 'map');

// Call tooltips
svg.call(tip);


d3.json("world_countries.json", function(data){

      // Binding geodata
      var map = svg.selectAll('path')
                           .data(data.features)
                           .enter()
                           .append('path')
                           .attr('d', path)
                           .style('fill', '#c9cbcd')
                           .style('opacity','0.7')
                           .style('stroke', 'white')
                           .style('stroke-width', 1.5);

      // Bubbles data
      var population = [
        {
          "name" : "Myanmar",
          "location" : [16.799999,96.150002],
          "value":"810000"
        },
        {
          "name" : "Ivory Coast",
          "location" : [6.8500,-5.3000],
          "value":"700000"
        },
        {
          "name" : "Thailand",
          "location" : [13.7500,100.4833],
          "value":"506197"
        },
        {
          "name" : "Latvia",
          "location" : [57.0000,25.0000],
          "value":"267559"
        },
        {
          "name":"Dominican Republic",
          "location":[19.0000,-70.6667],
          "value":"210000"
        },
        {
          "name":"Russian Federation",
          "location":[60.0000,90.0000],
          "value":"178000"
        },
        {
          "name":"Syrian Arab Republic",
          "location":[33.5000,36.3000],
          "value":"160000"
        },
        {
          "name":"Iraq",
          "location":[33.3333,44.4333],
          "value":"120000"
        },
        {
          "name":"Kuwait",
          "location":[29.3667,47.9667],
          "value":"93000"
        },
        {
          "name":"Estonia",
          "location":[59.0000,26.0000],
          "value":"91281"
        },
        {
          "name":"Saudi Arabia",
          "location":[24.0000,45.0000],
          "value":"70000"
        },
        {
          "name":"Malaysia",
          "location":[3.1333,101.7000],
          "value":"40000"
        },
        {
          "name":"Ukraine",
          "location":[49.0000,32.0000],
          "value":"33271"
        },
        {
          "name":"Brunei Darussalam",
          "location":[4.8903,114.9422],
          "value":"20524"
        },
        {
          "name":"Sweden",
          "location":[59.3500,18.0667],
          "value":"20450"
        },
        {
          "name":"Kenya",
          "location":[-1.2667,36.8000],
          "value":"20000"
        },
        {
          "name":"Germany",
          "location":[52.5167,13.3833],
          "value":"11709"
        },
        {
          "name":"Kyrgyzstan",
          "location":[42.8667,74.6000],
          "value":"11425"
        },
        {
          "name":"Vietnam",
          "location":[21.0333,105.8500],
          "value":"11000"
        },
        {
          "name":"Poland",
          "location":[52.2167,21.0333],
          "value":"10825"
        },
        {
          "name":"Turkmenistan",
          "location":[37.9667,58.3333],
          "value":"8320"
        },
        {
          "name":"Albania",
          "location":[41.0000,20.0000],
          "value":"7443"
        },
        {
          "name":"Kazakhstan",
          "location":[48.0000,68.0000],
          "value":"6942"
        },
        {
          "name":"Belarus",
          "location":[53.9167,27.5500],
          "value":"6712"
        },
        {
          "name":"Philippines",
          "location":[13.0000,122.0000],
          "value":"6015"
        },
        {
          "name":"Denmark",
          "location":[55.7200,12.5700],
          "value":"4263"
        },
        {
          "name":"Serbia",
          "location":[44.8000,20.4667],
          "value":"4195"
        },
        {
          "name":"Lithuania",
          "location":[55.0000,24.0000],
          "value":"3892"
        },
        {
          "name":"Azerbaijan",
          "location":[40.3000,47.7000],
          "value":"3585"
        },
        {
          "name":"Montenegro",
          "location":[42.7833,19.4667],
          "value":"3341"
        },
        {
          "name":"Croatia",
          "location":[45.8000,16.0000],
          "value":"2886"
        },
        {
          "name":"Belgium",
          "location":[50.8500,4.3500],
          "value":"2466"
        },
        {
          "name":"Finland",
          "location":[64.0000,26.0000],
          "value":"2122"
        },
        {
          "name":"Norway",
          "location":[61.0000,8.0000],
          "value":"1975"
        },
        {
          "name":"Netherlands",
          "location":[52.3167,5.5500],
          "value":"1951"
        },
        {
          "name":"Slovakia",
          "location":[48.1500,17.1167],
          "value":"1523"
        },
        {
          "name":"Czech Republic",
          "location":[49.7500,15.7500],
          "value":"1502"
        },
        {
          "name":"Tajikistan",
          "location":[38.5500,68.8000],
          "value":"1364"
        },
        {
          "name":"Burundi",
          "location":[-3.5000,30.0000],
          "value":"1302"
        },
        {
          "name":"France",
          "location":[47.0000,2.0000],
          "value":"1247"
        },
        {
          "name":"Qatar",
          "location":[25.3000,51.5167],
          "value":"1200"
        },
        {
          "name":"Japan",
          "location":[35.6833,139.7667],
          "value":"852"
        },
        {
          "name":"The former Yugoslav Republic of Macedonia",
          "location":[41.6000,21.7000],
          "value":"819"
        },
        {
          "name":"Bosnia and Herzegovina",
          "location":[44.0000,18.0000],
          "value":"792"
        },
        {
          "name":"Turkey",
          "location":[39.9167,32.8333],
          "value":"780"
        },
        {
          "name":"Georgia",
          "location":[41.7167,44.7833],
          "value":"776"
        },
        {
          "name":"Austria",
          "location":[48.2000,16.3500],
          "value":"604"
        },
        {
          "name":"Portugal",
          "location":[38.7000,-9.1833],
          "value":"553"
        },
        {
          "name":"Italy",
          "location":[41.9000,12.4833],
          "value":"470"
        },
        {
          "name":"Romania",
          "location":[44.4167,26.1000],
          "value":"297"
        },
        {
          "name":"Spain",
          "location":[40.4333,-3.7000],
          "value":"270"
        },

        {
          "name":"United Kingdom",
          "location":[51.5000,-0.1167],
          "value":"205"
        },
        {
          "name":"Rep. of Korea",
          "location":[37.5500,126.9667],
          "value":"194"
        },
        {
          "name":"Armenia",
          "location":[40.1833,44.5167],
          "value":"180"
        },
        {
          "name":"Greece",
          "location":[39.0000,22.0000],
          "value":"178"
        },
        {
          "name":"Luxembourg",
          "location":[49.6000,6.1167],
          "value":"177"
        },
        {
          "name":"Iceland",
          "location":[65.0000,-18.0000],
          "value":"119"
        },
        {
          "name":"Hungary",
          "location":[47.4333,19.2500],
          "value":"113"
        },
        {
          "name":"Switzerland",
          "location":[46.8333,8.3333],
          "value":"79"
        },
        {
          "name":"Ireland",
          "location":[53.3442,-6.2675],
          "value":"73"
        },
        {
          "name":"Egypt",
          "location":[26.0000,30.0000],
          "value":"23"
        },
        {
          "name":"Mongolia",
          "location":[46.0000,105.0000],
          "value":"16"
        },
        {
          "name":"Israel",
          "location":[31.0000,35.0000],
          "value":"14"
        },
        {
          "name":"Mexico",
          "location":[19.0000,-99.1333],
          "value":"13"
        },
        {
          "name":"Colombia",
          "location":[4.5833,-74.0667],
          "value":"12"
        },
        {
          "name":"Slovenia",
          "location":[46.0500,14.5000],
          "value":"4"
        },
        {
          "name":"Brazil",
          "location":[-15.7833,-47.8667],
          "value":"2"
        },
        {
          "name":"Liechtenstein",
          "location":[47.1417,9.5233],
          "value":"2"
        },
        {
          "name":"Panama",
          "location":[8.9667,-79.5333],
          "value":"2"
        },
        {
          "name":"Aruba",
          "location":[12.5000,-69.9667],
          "value":"1"
        },
        {
          "name":"Honduras",
          "location":[14.1000,-87.2167],
          "value":"1"
        },
        {
          "name":"Hong Kong",
          "location":[22.2783,114.1747],
          "value":"1"
        },
        {
          "name":"Liberia",
          "location":[6.3167,-10.8000],
          "value":"1"
        },
        {
          "name":"Nicaragua",
          "location":[13.0000,-85.0000],
          "value":"1"
        }
      ];

      // Draw bubbles
      svg.selectAll("circle")
        .data(population)
        .enter()
        .append("circle")
        .attr("cx", function(d){ return projection([d.location[1], d.location[0]])[0]; } ) //projection([long, lat])[1]
        .attr("cy", function(d){ return projection([d.location[1], d.location[0]])[1]; })
        // .attr("r", function(d){ return d.value/18000;})
        .attr("r",5)
        .attr("fill", "#C74848")
        .style("opacity",0.6)
        .style("stroke","white")
        .style('stroke-width', 0.5)
        .on('mouseover',function(d){
          tip.show(d);

          d3.select(this)
            .style("opacity", 0.9)
            .style("stroke","black")
            .style("stroke-width",1.5);
        })
        .on('mouseout', function(d){
          tip.hide(d);

          d3.select(this)
            .style("opacity", 0.6)
            .style("stroke","white")
            .style("stroke-width",0.5);
        })
        .transition()
        .duration(2500)
        .delay(function(d, i){
          return i * 20;
        })
        .attr("r",function(d){
          if( +d.value > 700000){ return 40 }
            else if( +d.value > 500000){return 35}
            else if( +d.value > 100000){ return 30}
            else if (+d.value > 50000){return 25}
            else if (+d.value > 10000){return 20}  
            else if (+d.value > 5000){return 15}
            else if (+d.value > 1000){return 10}
            else if (+d.value > 500){return 5}        
            else{ return 3 };

        })
        });

        // Add legend bubble 
        d3.select("svg")
          .append("circle")
          .attr("cx",width/12)
          .attr("cy",(height - height/3))
          .attr("r",35)
          .attr('class', 'legendCircle');

        d3.select("svg") 
          .append("circle")
          .attr("cx",width/12)
          .attr("cy",(height - height/4.6))
          .attr("r",25)
          .attr('class', 'legendCircle');

          d3.select("svg") 
          .append("circle")
          .attr("cx",width/12)
          .attr("cy",(height - height/7.3))
          .attr("r",15)
          .attr('class', 'legendCircle');

          d3.select("svg") 
          .append("circle")
          .attr("cx",width/12)
          .attr("cy",(height - height/10.5))
          .attr("r",5)
          .attr('class', 'legendCircle');

        d3.select("svg") 
          .append("text")
          .attr("x",width/28)
          .attr("y",(height - height/20))
          .text("Data source: UNHCR 2013")
          .style("font-family","avenir next")
          .style("font-size","11")
          .style("font-weight","400");

        d3.select("svg") 
          .append("text")
          .attr("x",width/28)
          .attr("y",(height - height/33))
          .text("Data is not complete and includes estimates.")
          .style("font-family","avenir next")
          .style("font-size","11")
          .style("font-weight","400");

        d3.select("svg") 
          .append("text")
          .attr("x",width/28)
          .attr("y",(height - height/2.3))
          .text("Stateless Population")
          .style("font-family","avenir next")
          .style("font-size","15")
          .style("font-weight","600");

        d3.select("svg") 
          .append("text")
          .attr("x",width/7.5)
          .attr("y",(height - height/3.2))
          .text("More than 500000")
          .attr("class","legendText");

        d3.select("svg") 
          .append("text")
          .attr("x",width/7.5)
          .attr("y",(height - height/4.7))
          .text("50000")
          .attr("class","legendText");

        d3.select("svg") 
          .append("text")
          .attr("x",width/7.5)
          .attr("y",(height - height/7.5))
          .text("5000")
          .attr("class","legendText");

         d3.select("svg") 
          .append("text")
          .attr("x",width/7.5)
          .attr("y",(height - height/11))
          .text("Less than 500")
          .attr("class","legendText");
