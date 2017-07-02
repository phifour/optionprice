import { Component, OnInit, Input, OnChanges, SimpleChange, DoCheck, KeyValueDiffers, ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Option } from "../models/option";
import { BSPrice } from "../models/bsprice";
import { MonteCarlo } from "../models/montecarlo";
import { OptionPayOff } from "../models/optionpayoff";
import { PlotfunctionComponent } from "../plotfunction/plotfunction.component";
import { HistogramComponent } from "../histogram/histogram.component";
import { CSVExporter } from "../../tools/csvexporter";

declare var functionPlot:any;


@Component({
  selector: 'app-montecarlopricing',
  templateUrl: './montecarlopricing.component.html',
  styleUrls: ['./montecarlopricing.component.css']
})
export class MontecarlopricingComponent implements OnInit {

 differ: any;
 id:number;
 data:any;
 graph:any;
 type:string;
 option:Option;
 bsprice:BSPrice;
 optionpayoff:OptionPayOff;
 bs_price:number;
 Nsteps:number;
 mc:MonteCarlo;
 satt:number[];
 result:any;
 showresults:boolean;
 filename:string;
 csvexporter:CSVExporter;
 current_bs_price:any;
 histtitle:string="My Histogram";
 histvalues:number[] = [1,2,3];
 fcn:string = 'abs(x)';
 est_price:number = 0;
 screenwidth:number = 400;
 screenheight:number = 400;



 constructor(private differs: KeyValueDiffers) { 
    this.differ = differs.find({}).create(null);
 }
 
  ngOnInit() {


      // functionPlot({
      //   target: '#samples',
      //   data: [{
      //     fn: 'sin(x)',
      //     nSamples: 1000
      //   }]
      // })

    this.csvexporter = new CSVExporter();
    this.showresults = false;
    this.Nsteps = 200;
    this.option = new Option('eurocall',0.3,0.1,100,110,180);
    this.optionpayoff = new OptionPayOff();
    this.satt = [1,2,3];
    this.result = {price:100};
    this.data = [];
    this.bs_price = 0;
    this.bsprice = new BSPrice();//this.option



  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      this.screenwidth = w.innerWidth || e.clientWidth || g.clientWidth,
      this.screenheight = w.innerHeight|| e.clientHeight|| g.clientHeight;




    functionPlot({
        title:this.option.type,
        target: '#samples',
        width: 300,
        height: 200,
        disableZoom: true,
        xAxis: {
          label: 'Stock price',
          domain: [this.option.S0-30, this.option.S0+30]
        },
        yAxis: {
          label: 'Option payoff',
          domain: [this.option.K-30, this.option.K+30]
        },
        data: [{fn:this.fcn, color: 'red' }]
      })



  }

	ngDoCheck() {
		var changes = this.differ.diff(this.option);


		if(changes) {
			console.log('changes detected');

      console.log(this.option.type);

      if (this.option.type === 'eurocall') {
        this.fcn = 'max(x - ' + this.option.K + ',0)' ;
      } else {
        this.fcn = 'max(-x + ' + this.option.K + ',0)' ;
      }

    functionPlot({
        title: this.option.type.valueOf(),
        target: '#samples',
        width: 300,
        height: 200,
        disableZoom: true,        
        xAxis: {
          label: 'Stock price',
          domain: [this.option.K-30, this.option.K+30]
        },
        yAxis: {
          label: 'Option payoff',
          domain: [-30, 30]
        },
        data: [{fn:this.fcn, color: 'red' }]
      });

		} else {
			console.log('nothing changed');
		}
	}


  downloadresults() { 
    

  }


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
    this.data = this.mc.geoBrownian_multi_series(1,50,this.Nsteps);
    console.log('Data for plotting', this.mc.geoBrownian_multi_series(1,50,this.Nsteps));
    console.log('MCpriceOption', this.mc.MCpriceOption(1,50,this.Nsteps));

    var lastprice = [];

    for (var i=0;i< this.data.length;i++) {
            var di = this.data[i];
            var val = this.optionpayoff.call(di[di.length-1].close,100);
            this.est_price = this.est_price + val;
            lastprice.push(val);
    }

    this.est_price = this.est_price/this.data.length;

// var call = this.optionpayoff.call;
//     this.data.forEach(function(d) {
//       var val = call(d[d.length-1].close,100);
//       lastprice.push(val);
//     });

//     console.log(lastprice);

    this.histvalues = lastprice;
    // console.log('option',this.option);
    // // this.result = this.mc.priceOption(1,50,this.Nsteps,abc);
    // console.log('Price European Call ',this.bsprice.EuropeanCallPut(this.option.S0,this.option.r,this.option.K,this.option.volatility,1));
    // this.result.BSPrice = this.bsprice.EuropeanCallPut(this.option.S0,this.option.K,this.option.r,this.option.volatility,1);
  }


  }