import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Option } from "../models/option";
import { BSPrice } from "../models/bsprice";
import { MonteCarlo } from "../models/montecarlo";
import { PlotfunctionComponent } from "../plotfunction/plotfunction.component";
import { HistogramComponent } from "../histogram/histogram.component";

declare var math:any; // Magic
declare var MathJax:any;
declare var d3:any;

@Component({
  selector: 'app-assignmentlist',
  template: `
  <div class="container">

  <div class="form-group row">
    <label for="optiontype" class="col-xs-2 col-form-label">Option Type</label>
      <div class="col-xs-10">
      <select aria-label="Search by type" class="form-control" [(ngModel)]="option.type" id="optiontype">
        <option value="eurocall">European Call</option>
        <option value="europut">European Put</option>
        <option value="asiancall">Asian Call</option>
        <option value="asianput">Asian Put</option>
      </select>
      </div>
  </div>

<div class="well">  
  <div class="form-group row">
    <label for="optpayoff" class="col-xs-2 col-form-label"><h5>Option Payoff</h5></label>
  <div class="col-xs-10">
    <h5>{{option_payoffs[option.type].formular}}</h5>
  </div>
  </div>
</div>

<div class="form-group row">
  <label for="example-text-input" class="col-xs-2 col-form-label">Volatility</label>
  <div class="col-xs-10">
  <input class="form-control" type="number" name="myDecimal"  [(ngModel)]="option.volatility"  placeholder="Decimal" step="0.01" />
  </div>
</div>

<div class="form-group row">
  <label for="example-text-input" class="col-xs-2 col-form-label">Annual interest rate</label>
  <div class="col-xs-10">
  <input class="form-control" type="number" name="myDecimal" [(ngModel)]="option.r" placeholder="Decimal" step="0.01" />
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

<div class="form-group row">
  <label for="steps-number-input" class="col-xs-2 col-form-label">Steps</label>
  <div class="col-xs-10">
    <input class="form-control" type="number" [(ngModel)]="option.N" id="steps-number-input">
  </div>
</div>

<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Days to maturity</label>
  <div class="col-xs-10">
    <input class="form-control" type="number" value="180" id="example-number-input">
  </div>
</div>

<div class="form-group row">
  <label for="example-number-input" class="col-xs-2 col-form-label">Number of Monte Carlo simulations</label>
  <div class="col-xs-10">
    <input class="form-control" type="number" [(ngModel)]="Nsteps" id="example-number-input">
  </div>
</div>
<br>
<button type="button" (click)="rerun()" class="btn btn-primary btn-block">Price Option</button>
<br>
<div *ngIf="showresults" >
<div class="well">
<h5>Results of Estimation</h5>
<table class="table table-inverse">
  <thead>
    <tr>
      <th>Estimated Option price</th>
      <th>Black Scholes price</th>
      <th>Number of simulations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{result.price}}</td>
      <td>{{result.BSPrice}}</td>
      <td>{{result.Nsteps}}</td>
    </tr>
  
  </tbody>
</table>

<br>
<button type="button" (click)="downloadresults()" class="btn btn-primary btn-block">Download {{filename}}</button>
<br>
</div>
</div>


  
  </div>
  `
})


  // <app-histogram [(title)]="option.type" [(values)]="satt"></app-histogram>


  // <app-plotfunction [(values)]="data"></app-plotfunction>


export class MontecarloComponent {

 constructor(private router: Router) {
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
 option_payoffs:any;
 showresults:boolean;
 filename:string;

  ngOnInit() {
    this.showresults = false;
    this.Nsteps = 200;
    this.option = new Option('eurocall',0.3,0.1,100,110);
    this.satt = [1,2,3];
    this.result = {price:100};
    this.data = [];
    this.bs_price = 0;
    this.bsprice = new BSPrice(this.option);
    this.option_payoffs = {
      eurocall:{formular:'max(0,S-K)',
      fcn:
      function abc(S,K) {
      if(S > K) {
        return S - K;
      } else {
        return 0;
      }
      }},
      europut:{formular:'max(0,K-S)',
      fcn:
      function abc(S,K) {
      if(S < K) {
        return K - S;
      } else {
        return 0;
      }
      }}
    };
  }



 exportToCsv(filename, rows) {
        var processRow = function (row) {
            var finalVal = '';
            for (var j = 0; j < row.length; j++) {
                console.log('row',row[j]);
                // var innerValue = row[j] === null ? '' : row[j].toString();
                // if (row[j] instanceof Date) {
                //     innerValue = row[j].toLocaleString();
                // };
                // var result = innerValue.replace(/"/g, '""');
                // if (result.search(/("|,|\n)/g) >= 0) {
                //     result = '"' + result + '"';}
                // if (j > 0) {
                //     finalVal += ',';
                // finalVal += result;}
                // var innerValue = row[j] === null ? '' : row[j].toString();
                // if (row[j] instanceof Date) {
                //     innerValue = row[j].toLocaleString();
                // };
                if (j > 0) {
                  finalVal = finalVal + ';' + row[j];
                } else {
                  finalVal = row[j];
                }

            }
            return finalVal + '\n';
        };

        var csvFile = '';
        for (var i = 0; i < rows.length; i++) {
            csvFile = csvFile + processRow(rows[i]);
        }

        var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }

setcomma(x) {
  var newx = '' + x;
  return newx.replace(".", ",");
}

downloadresults() {
  this.exportToCsv(this.filename, [
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
    console.log('Price European Call ',this.bsprice.EuropeanCall(this.option.S0,this.option.r,this.option.K,this.option.volatility,1));
    this.result.BSPrice = this.bsprice.EuropeanCall(this.option.S0,this.option.K,this.option.r,this.option.volatility,1);
    
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
