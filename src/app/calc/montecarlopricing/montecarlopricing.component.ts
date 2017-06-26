import { Component, OnInit, Input, OnChanges, SimpleChange, DoCheck, KeyValueDiffers, ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Option } from "../models/option";
import { BSPrice } from "../models/bsprice";
import { MonteCarlo } from "../models/montecarlo";
import { PlotfunctionComponent } from "../plotfunction/plotfunction.component";
import { HistogramComponent } from "../histogram/histogram.component";
import { CSVExporter } from "../../tools/csvexporter";

@Component({
  selector: 'app-montecarlopricing',
  templateUrl: './montecarlopricing.component.html',
  styleUrls: ['./montecarlopricing.component.css']
})
export class MontecarlopricingComponent implements OnInit {

 id:number;
 data:any;
 graph:any;
 type:string;
 option:Option;
 bsprice:BSPrice;
 bs_price:number;
 Nsteps:number;
 mc:MonteCarlo;
 satt:number[];
 result:any;
 showresults:boolean;
 filename:string;
 csvexporter:CSVExporter;
 current_bs_price:any;

 constructor() { }
 
  ngOnInit() {
    this.csvexporter = new CSVExporter();
    this.showresults = false;
    this.Nsteps = 200;
    this.option = new Option('eurocall',0.3,0.1,100,110,180);
    this.satt = [1,2,3];
    this.result = {price:100};
    this.data = [];
    this.bs_price = 0;
    this.bsprice = new BSPrice();//this.option

  }

	// ngDoCheck() {
	// 	var changes = this.differ.diff(this.option);

	// 	if(changes) {
	// 		console.log('changes detected');
  //     this.current_bs_price = this.bsprice.EuropeanCallPut(this.option.S0,this.option.K,this.option.r,this.option.volatility,this.option.T);
	// 		//changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
	// 		//changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
	// 		//changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
  //     //this.calc_values();
	// 	} else {
	// 		console.log('nothing changed');
	// 	}
	// }


setcomma(x) {
  var newx = '' + x;
  return newx.replace(".", ",");
}

  testrun() {
    var d = new Date();
    this.filename = 'result_' + d.toDateString() + ".csv";
    this.showresults = true;
    // this.genseries();this.option.K
    this.mc = new MonteCarlo(this.option);
    this.data = this.mc.geoBrownian_series(1,50);
    console.log('Data for plotting', this.data);
    // console.log('option',this.option);
    // // this.result = this.mc.priceOption(1,50,this.Nsteps,abc);
    // console.log('Price European Call ',this.bsprice.EuropeanCallPut(this.option.S0,this.option.r,this.option.K,this.option.volatility,1));
    // this.result.BSPrice = this.bsprice.EuropeanCallPut(this.option.S0,this.option.K,this.option.r,this.option.volatility,1);
  }


  }