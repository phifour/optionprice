import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChange, DoCheck, KeyValueDiffers, ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BinTree } from "../models/bintree";
import { Parameters } from "../models/parameters";
import { BSPrice } from '../models/bsprice';

declare var math:any; // Magic
declare var MathJax:any;
declare var d3:any;

@Component({
    selector: 'app-binominaltree',
    template: `
    <h3>{{callprice}} = {{price}}</h3>
 
    <div class="checkbox">
    <label>
        <input type="checkbox" data-toggle="toggle"  [(ngModel)]="showparameters">
        Show derived parameters
    </label>
    </div>

  <table *ngIf="showparameters" class="table table-striped">
    <tbody>
      <tr>
        <td><h3> $ {{tex_q}} $ </h3></td>
        <td><h3>{{q}}</h3></td>
      </tr>

      <tr>
        <td><h3>{{tex_up}}</h3></td>
        <td><h3>{{up}}</h3></td>
      </tr>

      <tr>
        <td><h3>{{tex_down}}</h3></td>
        <td><h3>{{down}}</h3></td>
      </tr>

      <tr>
        <td><h3>{{tex_delta_t}}</h3></td>
        <td><h3>{{delta_t}}</h3></td>
      </tr>


      <tr>
        <td><h3>{{callprice}}</h3></td>
        <td><h3>{{price}}</h3></td>
      </tr>

    </tbody>
  </table>
    <div id="binominaltree"></div>
  `,



    // <thead>
    //   <tr>
    //     <th>sss</th>
    //     <th>Lastname</th>
    //   </tr>
    // </thead>

  changeDetection: ChangeDetectionStrategy.Default
})

export class BinominalmodelComponent implements OnInit {

    @Input() p: Parameters;
    showparameters:boolean;
	differ: any;
    // changeDetectorRefs:ChangeDetectorRef[] = [];

	constructor(private differs: KeyValueDiffers) {
        console.log('calling constructor');
		this.differ = differs.find({}).create(null);
        this.bintree = new BinTree();
	}


    ngAfterViewInit() {
        MathJax.Hub.Typeset();

    }



    tex_q:string;
    callprice:string ="$c=e^{-r t}(q P_u+(1-q)P_d)$";
    tex_delta_t:string = "$\\Delta t =$";
    price:number = 2.3;
    bintree:BinTree;
    q:number;
    up:number;
    tex_up:string="$u=e^{\\sigma \\sqrt{t} }$";
    down:number;
    tex_down:string="$d=e^{-\\sigma \\sqrt{t} }$";
    delta_t:number;


    calc_values() {
        this.delta_t = math.round(this.p.T/this.p.N,2);
        this.up = math.round(math.exp(this.p.sigma*math.sqrt(this.p.T)),2);
        this.down = math.round(math.exp(this.p.sigma*math.sqrt(this.p.T)),2);        
        console.log('Recalculating values',this.delta_t);
        this.q = math.round(this.bintree.q_prob(this.p.r, this.delta_t, this.p.sigma),2);
    }


    ngOnInit() {
        this.tex_up = "$u=e^{\\sigma \\sqrt{t} }$"
        this.tex_q = "q = \\frac{e^{r \\Delta t}-u}{u-d}";

        this.calc_values();
        this.update();
        // setTimeout(() => {
        //     console.log('finished loading');
        //   MathJax.Hub.Typeset();
        //     // run jQuery stuff here
        // }, 0);

    // ngOnInit() {
    //   setTimeout(() => {
    //       console.log('finished loading');
    //       MathJax.Hub.Typeset();
    //         // run jQuery stuff here
    //     }, 0);
    // }

    }


	ngDoCheck() {
		var changes = this.differ.diff(this.p);

		if(changes) {
			console.log('changes detected');
			changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
			changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
			changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
            this.calc_values();
            //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            // MathJax.Hub.Typeset();


       // MathJax.Hub.Typeset();
        // setTimeout(() => {
        //   console.log('finished loading');
        //   MathJax.Hub.Typeset();
        //   //MathJax.Hub.Queue(["Typeset",MathJax.Hub])
        //     // run jQuery stuff here
        // }, 0);

		} else {
            this.update();
            this.calc_values();

			console.log('nothing changed');
		}
	}

    // ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    //     this.update();
    //     this.calc_values();

    //     console.log('CHECK Parameters',this.p);

    //     // this.data = [];
    //     // for (var j = 0; j < this.values.length; j++) {
    //     //     this.data.push(this.values[j].close);
    //     // }
    //     // this.datalength = this.values.length;
    //      console.log('changes',changes);
    //     // for (let propName in changes) {
    //     //     console.log('changes',changes);
    //     // // let changedProp = changes[propName];
    //     // // let from = JSON.stringify(changedProp.previousValue);
    //     // // let to =   JSON.stringify(changedProp.currentValue);
    //     // // log.push( `${propName} changed from ${from} to ${to}`);
    //     // }
    // }


    update() {
        d3.select("#binominaltree").selectAll("*").remove();
        var N = this.p.N;
        var S0 = this.p.S0;
        var vOffset = 50;
        var hOffset = 100;
        var rootXoffset = 30;
        var rootYoffset = 50 * N;
        var width = rootXoffset + hOffset * N;
        var height = rootYoffset + vOffset * N + 30;
        var rectWidth = 60;
        var rectHeight = 30;

        var svg = d3.select("#binominaltree")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var i, j;
        var textbox;
        var startX;
        var startY;
        var targetX;
        var targetY;

        var tree = math.zeros(this.p.N+1, this.p.N+1);
        var option_tree = math.zeros(this.p.N+1, this.p.N+1);

        // first draw lines
        for (i = 0; i < N; i++) {
            for (j = 0; j < i + 1; j++) {
                if (j === 0) {
                    startX = rootXoffset + hOffset * i + rectWidth / 2;
                    startY = rootYoffset - vOffset * i + rectHeight / 2;
                    svg.append("line")
                        .attr("x1", startX)
                        .attr("y1", startY)
                        .attr("x2", startX + hOffset * (N - i - 1))
                        .attr("y2", startY + vOffset * (N - i - 1))
                        .attr("stroke-width", 1)
                        .attr("stroke", "black");
                }
                if (j === i) {
                    startX = rootXoffset + hOffset * i + rectWidth / 2;
                    startY = rootYoffset + vOffset * i + rectHeight / 2;
                    svg.append("line")
                        .attr("x1", startX)
                        .attr("y1", startY)
                        .attr("x2", startX + hOffset * (N - i - 1))
                        .attr("y2", startY - vOffset * (N - i - 1))
                        .attr("stroke-width", 1)
                        .attr("stroke", "black");
                };
            }
        }

        // ...than arrows and link labels...
        for (i = 0; i < N - 1; i++) {
            for (j = 0; j < i + 1; j++) {
                targetX = rootXoffset + hOffset * i + hOffset;
                targetY = rootYoffset - vOffset * i + (2 * vOffset) * j - vOffset + rectHeight;
                svg.append("line")
                    .attr("x1", targetX)
                    .attr("y1", targetY)
                    .attr("x2", targetX - 9)
                    .attr("y2", targetY + 3)
                    .attr("stroke-width", 2)
                    .attr("stroke", "black");
                svg.append("line")
                    .attr("x1", targetX)
                    .attr("y1", targetY)
                    .attr("x2", targetX - 8)
                    .attr("y2", targetY + 6)
                    .attr("stroke-width", 1)
                    .attr("stroke", "black");
                textbox = svg.append("text")
                    .attr("x", targetX - 20)
                    .attr("y", targetY + 4)
                    .style("text-anchor", "end")
                    .style("font-size", "12px")
                    .text("q");
                targetY = rootYoffset - vOffset * i + (2 * vOffset) * j + vOffset;
                svg.append("line")
                    .attr("x1", targetX)
                    .attr("y1", targetY)
                    .attr("x2", targetX - 9)
                    .attr("y2", targetY - 3)
                    .attr("stroke-width", 2)
                    .attr("stroke", "black");
                svg.append("line")
                    .attr("x1", targetX)
                    .attr("y1", targetY)
                    .attr("x2", targetX - 8)
                    .attr("y2", targetY - 6)
                    .attr("stroke-width", 1)
                    .attr("stroke", "black");
                textbox = svg.append("text")
                    .attr("x", targetX - 20)
                    .attr("y", targetY + 2)
                    .style("text-anchor", "end")
                    .style("font-size", "12px")
                    .text("1-q");
            }
        }

       ;
        var prices;
        if ( this.p.view === "P101") {
            prices = this.bintree.getBackPropTree(this.p.N,this.p.S0,this.p.K,0.1,0.1,1);
        } else {
            prices = this.bintree.getPriceTree(this.p.N,this.p.S0,this.p.K,0.1,0.1,1);
        }

        // ... and rectangles and their labels
        for (i = 0; i < N; i++) {
            for (j = 0; j < i + 1; j++) {

                var strike = this.p.K;
                var price = prices.subset(math.index(i, j));
                var color = "blue";
                if (price - strike <= 0) {
                    color = "red";
                } else {
                    color = "green";
                }


                svg.append("rect")
                    .attr("x", rootXoffset + hOffset * i)
                    .attr("y", rootYoffset - vOffset * i + (2 * vOffset) * j)
                    .attr("width", 60)
                    .attr("height", 30)
                    .attr("ry", 5)
                    .style("stroke", "#787878")
                    // .style("fill", "beige");
                    .style("fill", color);

                textbox = svg.append("text")
                    .attr("x", rootXoffset + hOffset * i)
                    .attr("y", rootYoffset - vOffset * i + (2 * vOffset) * j)
                    .attr("dx", 30)
                    .attr("dy", 20)
                    .style("text-anchor", "middle")
                    .style("font-size", "12px");
                textbox.append("tspan")
                    .text("S=" + price);


                // if ((i === 0) && (j === 0)) {
                //     textbox.append("tspan")
                //         .text("S");
                //     textbox.append("tspan")
                //         .attr("dy", 3)
                //         .style("font-size", "10px")
                //         .text("0");
                // } else if (j === 0) {
                //     if (i === 1) {
                //         textbox.append("tspan")
                //             .text("u.S");
                //     } else {
                //         textbox.append("tspan")
                //             .text("u");
                //         textbox.append("tspan")
                //             .attr("dy", -5)
                //             .style("font-size", "10px")
                //             .text(i);
                //         textbox.append("tspan")
                //             .attr("dy", 5)
                //             .text(".S");
                //     };
                //     textbox.append("tspan")
                //         .attr("dy", 3)
                //         .style("font-size", "10px")
                //         .text("0");
                // } else if (j === i) {
                //     if (i === 1) {
                //         textbox.append("tspan")
                //             .text("d.S");
                //     } else {
                //         textbox.append("tspan")
                //             .text("d");
                //         textbox.append("tspan")
                //             .attr("dy", -5)
                //             .style("font-size", "10px")
                //             .text(i);
                //         textbox.append("tspan")
                //             .attr("dy", 5)
                //             .text(".S");
                //     };
                //     textbox.append("tspan")
                //         .attr("dy", 3)
                //         .style("font-size", "10px")
                //         .text("0");
                // } else {
                //     if ((i === 2) && (j === 1)) {
                //         textbox.append("tspan")
                //             .text("ud.S");
                //     } else if (j === 1) {
                //         textbox.append("tspan")
                //             .text("ud");
                //         textbox.append("tspan")
                //             .attr("dy", -5)
                //             .style("font-size", "10px")
                //             .text(i - j);
                //         textbox.append("tspan")
                //             .attr("dy", 5)
                //             .text(".S");
                //     } else if (i === j + 1) {
                //         textbox.append("tspan")
                //             .text("u");
                //         textbox.append("tspan")
                //             .attr("dy", -5)
                //             .style("font-size", "10px")
                //             .text(j);
                //         textbox.append("tspan")
                //             .attr("dy", 5)
                //             .text("d.S");
                //     } else {
                //         textbox.append("tspan")
                //             .text("u");
                //         textbox.append("tspan")
                //             .attr("dy", -5)
                //             .style("font-size", "10px")
                //             .text(j);
                //         textbox.append("tspan")
                //             .attr("dy", 5)
                //             .text("d");
                //         textbox.append("tspan")
                //             .attr("dy", -5)
                //             .style("font-size", "10px")
                //             .text(i - j);
                //         textbox.append("tspan")
                //             .attr("dy", 5)
                //             .text(".S");
                //         textbox.append("tspan")
                //             .attr("dy", 3)
                //             .style("font-size", "10px")
                //             //.text("0");
                //             .text(price);

                //     }
            }
        }


    }



}


