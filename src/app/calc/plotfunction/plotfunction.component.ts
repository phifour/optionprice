import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';

declare var math:any; // Magic
declare var MathJax:any;
declare var d3:any;


@Component({
    selector: 'app-plotfunction',
    template: `
    <div class="container">
        <h5>{{title}}</h5>
        <div id="plotscreen"></div>
        <div *ngIf="datalength < 1">
            <h5>No data to plot</h5>
        </div>
        <h5>{{datalength}}</h5>
    </div>
  `,
    styleUrls: ['./plotfunction.component.css']
})


    // <div *ngIf="values.length > 0" id="plotscreen"></div>
    // <div *ngIf="values.length < 1">
    //     <h5>No data to plot</h5>
    // </div>
    //    <div id="plotscreen"></div>

export class PlotfunctionComponent implements OnInit {

    @Input() values: any;
    @Input() title: string;
    @Input() usedates: number;
    @Input() height: number;
    @Input() width: number;


    data: number[];
    datalength:number = 0;

    ngOnInit() {
        this.data = [];
        this.update(); 
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        let log: string[] = [];
        this.update();
        this.data = [];
        for (var j = 0; j < this.values.length; j++) {
            this.data.push(this.values[j].close);
        }
        this.datalength = this.values.length;
        // for (let propName in changes) {
        //     console.log('changes',changes);
        // // let changedProp = changes[propName];
        // // let from = JSON.stringify(changedProp.previousValue);
        // // let to =   JSON.stringify(changedProp.currentValue);
        // // log.push( `${propName} changed from ${from} to ${to}`);
        // }
    }


    update() {
        var data = this.values;
        d3.select("#plotscreen").selectAll("*").remove();
        
        var margin = { top: 30, right: 20, bottom: 30, left: 50 },
            width = this.width - margin.left - margin.right,
            height = this.height - margin.top - margin.bottom;

        // Parse the date / time
        // var parseDate = d3.time.format("%d-%b-%y").parse;

        var all_ymin = data[0];
        var all_ymax = data[0];

        data.forEach(function(d) {
        
        if (d.close < all_ymin.close ) { all_ymin = d; }
        if (d.close > all_ymax.close ) { all_ymax = d; }

        
    })




        var ymin = d3.min(all_ymin, function (d) { return d.close; });
        var ymax = d3.max(all_ymax, function (d) { return d.close; });

        var xmin = d3.min(data[0], function (d) { return d.date; });
        var xmax = d3.max(data[0], function (d) { return d.date; });


      //x.domain([0, d3.max(data, function (d) { return d.date; })]);
            //y.domain([0, d3.max(data, function (d) { return d.close; })]);

        // Set the ranges
        //var x = d3.time.scale()
        var x = d3.scale.linear()
            .domain([xmin, xmax])
            .range([0, width]);

        var y = d3.scale.linear()
            .domain([ymin, ymax])
            .range([height, 0]);

        // Define the axes
        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);

        var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);





  // Adds the svg canvas
        var svg = d3.select("#plotscreen")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


        var cnt = 0;
        data.forEach(function(d) {
                // console.log(d);
        // Define the line
                var valueline = d3.svg.line()
                    .x(function (d) { return x(d.date); })
                    .y(function (d) { return y(d.close); });


            var r = Math.floor((Math.random() * 255) + 1);
            var g = Math.floor((Math.random() * 255) + 1);
            var b = Math.floor((Math.random() * 255) + 1);


            // Add the valueline path.
            svg.append("path")
                .attr("class", "line")
                .attr("d", valueline(d))//
                .attr("stroke", d3.rgb(r, g, b))
                .attr("stroke-width", 1)
                .attr("fill", "none");
            cnt++;
            
            });



            // Add the X Axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);


   // now add titles to the axes
        var padding = -20; 
        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (padding/2) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Stock price S");

        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (width/2) +","+(height-(padding/3))+")")  // centre below axis
            .text("Time");
    }

    }
