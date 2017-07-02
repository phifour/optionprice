//import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Component, OnInit, Input, OnChanges, SimpleChange, DoCheck, KeyValueDiffers, ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Option } from "../models/option";
import { BSPrice } from "../models/bsprice";
import { MonteCarlo } from "../models/montecarlo";
import { PlotfunctionComponent } from "../plotfunction/plotfunction.component";
import { HistogramComponent } from "../histogram/histogram.component";
import { CSVExporter } from "../../tools/csvexporter";

declare var math:any; // Magic
declare var MathJax:any;
declare var d3:any;

// <option value="asiancall">Asian Call</option>
// <option value="asianput">Asian Put</option>

@Component({
  selector: 'app-assignmentlist',
  template: `
  <div class="container">

    <!--<div class="form-group row">
    <label for="optiontype" class="col-xs-2 col-form-label">Option Type</label>
      <div class="col-xs-10">
      <select aria-label="Search by type" class="form-control" [(ngModel)]="option.type" id="optiontype">
        <option value="eurocall">European Call</option>
        <option value="europut">European Put</option>
      </select>
      </div>
  </div>

  <div class="form-group row">
    <label for="optpayoff" class="col-xs-2 col-form-label">Option Payoff</label>
    <div class="col-xs-10">{{option_payoffs[option.type].formular}}</div>
  </div>-->

<div class="form-group row">
  <label for="example-text-input" class="col-xs-2 col-form-label">Annual Volatility</label>
  <div class="col-xs-10">
  <input class="form-control" type="number" name="myDecimal"  [(ngModel)]="option.volatility"  placeholder="Decimal" step="0.01" />
  </div>
</div>

<div class="form-group row">
  <label for="example-text-input" class="col-xs-2 col-form-label">Annual interest rate</label>
  <div class="col-xs-10">
  <input class="form-control" type="number" name="myDecimal" [(ngModel)]="option.r" placeholder="Decimal" step="0.01" />
    <div class="alert alert-danger" *ngIf="option.r <=0">
    <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
  </div>

  </div>


</div>

<div class="form-group row">
  <label for="example-text-input" class="col-xs-2 col-form-label">Initial stock price</label>
  <div class="col-xs-10">
  <input class="form-control" type="number" name="myDecimal" [(ngModel)]="option.S0" placeholder="Decimal" step="0.01" />
  </div>
</div>

<div class="form-group row">
  <label for="example-text-input" class="col-xs-2 col-form-label">Option Strike</label>
  <div class="col-xs-10">
  <input class="form-control" type="number" name="myDecimal" [(ngModel)]="option.K" placeholder="Decimal" step="0.01" />
  </div>
</div>

  <!--<div class="form-group row">
  <label for="steps-number-input" class="col-xs-2 col-form-label">Steps</label>
  <div class="col-xs-10">
    <input class="form-control" type="number" [(ngModel)]="option.N" id="steps-number-input">
  </div>
</div>-->

<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Days to maturity</label>
  <div class="col-xs-10">
    <input class="form-control" type="number" [(ngModel)]="option.T" id="example-number-input">
  </div>
</div>

 <!--<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Number of Monte Carlo simulations</label>
  <div class="col-xs-10">
    <input class="form-control" type="number" [(ngModel)]="Nsteps" id="example-number-input">
  </div>
</div>-->

<div class="well">
<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Call Price</label>
  <div class="col-xs-10">
    {{current_bs_price.call}}
  </div>
</div>
<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Put Price</label>
  <div class="col-xs-10">
    {{current_bs_price.put}}
  </div>
</div>

<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Interest rate</label>
  <div class="col-xs-10">
    {{option.r*100}}%
  </div>
</div>

<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Volatility</label>
  <div class="col-xs-10">
    {{option.volatility*100}}%
  </div>
</div>




<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Erf(d1)</label>
  <div class="col-xs-10">
    {{current_bs_price.erfd1}}
  </div>
</div>

<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Erf(d2)</label>
  <div class="col-xs-10">
    {{current_bs_price.erfd2}}
  </div>
</div>


<button type="button" (click)="downloadresults2()" class="btn btn-primary btn-block">Download Results</button>


</div>

<br>
<button type="button" (click)="rerun()" class="btn btn-primary btn-block">Price Option</button>
<br>
  
</div>
  `
})


  // 


  //

export class MontecarloComponent {


differ: any;

 constructor(private router: Router, private differs: KeyValueDiffers) {
   		this.differ = differs.find({}).create(null);

  }

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

	ngDoCheck() {
		var changes = this.differ.diff(this.option);

		if(changes) {
			console.log('changes detected');
      this.current_bs_price = this.bsprice.EuropeanCallPut(this.option.S0,this.option.K,this.option.r,this.option.volatility,this.option.T);
			//changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
			//changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
			//changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
      //this.calc_values();
		} else {
			console.log('nothing changed');
		}
	}


setcomma(x) {
  var newx = '' + x;
  return newx.replace(".", ",");
}

downloadresults() {
  this.csvexporter.exportToCsv(this.filename, [
  ['Option type', this.option.type],	
  ['S0', this.setcomma(math.round(this.option.S0 ,3))],	
  ['Strike', this.setcomma(math.round(this.option.K ,3))],	
  ['Interest rate' , (''+math.round(this.option.r ,3)).replace(".", ",")],	
  ['Volatility', (''+math.round(this.option.volatility,3)).replace(".", ",")],	
  ['Eestimated price', (''+math.round(this.result.price,3)).replace(".", ",")],	
  ['Black scholes price', this.setcomma(math.round(this.result.BSPrice ,3))],	
  ['number of simulations', this.result.Nsteps]
  ]);
}

downloadresults2() {
  this.csvexporter.exportToCsv('BlackScholesPrice.csv', [
  ['Option type', this.option.type],	
  ['S0', this.setcomma(math.round(this.option.S0 ,3))],	
  ['Strike', this.setcomma(math.round(this.option.K ,3))],	
  ['Interest rate' , (''+math.round(this.option.r ,3)).replace(".", ",")],	
  ['Volatility', (''+math.round(this.option.volatility,3)).replace(".", ",")],	
  ['Call Price', this.setcomma(math.round(this.current_bs_price.call ,3))],
  ['Put Price', this.setcomma(math.round(this.current_bs_price.put ,3))]	
  ]);
}

  rerun() {
    var d = new Date();
    this.filename = 'result_' + d.toDateString() + ".csv";
    this.showresults = true;
    // this.genseries();this.option.K
    this.mc = new MonteCarlo(this.option);
    this.data = this.mc.geoBrownian_series(1,50);
    console.log('Data for plotting', this.data);
    console.log('option',this.option);
    this.result = this.mc.priceOption(1,50,this.Nsteps,abc);
    console.log('Price European Call ',this.bsprice.EuropeanCallPut(this.option.S0,this.option.r,this.option.K,this.option.volatility,1));
    this.result.BSPrice = this.bsprice.EuropeanCallPut(this.option.S0,this.option.K,this.option.r,this.option.volatility,1);
    
    function abc(x) {
      if(x > 100) {
        return x - 100;
      } else {
        return 0;
      }
    }
    this.satt = this.mc.MonteCarlo(1,50,this.Nsteps,abc);
    //  console.log(satt);
    // console.log(this.data);
    // console.log('functions and constants');
    // console.log(math.round(math.e, 3));           // 2.718
    // console.log('rn',this.gaussian(0,1)());           // 2.718
  }


}

// <div *ngIf="showresults" >
// <div class="well">
//         <h5>Results of Estimation</h5>
//           <table class="table table-inverse">
//             <thead>
//               <tr>
//                 <th>Estimated Option price</th>
//                 <th>Black Scholes price</th>
//                 <th>Number of simulations</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{{result.price}}</td>
//                 <td>{{result.BSPrice}}</td>
//                 <td>{{result.Nsteps}}</td>
//               </tr>
            
//             </tbody>
//           </table>

//     <div *ngIf="data.length > 0">
//       <app-plotfunction [(values)]="data"></app-plotfunction>
//     </div>

//   <app-histogram [(title)]="option.type" [(values)]="satt"></app-histogram>

//   <br>
//         <button type="button" (click)="downloadresults()" class="btn btn-primary btn-block">Download {{filename}}</button>
//   <br>

// </div>
// </div>