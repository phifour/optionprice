import { Component, OnInit, ViewChild, ElementRef, Input, SimpleChange, KeyValueDiffers } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Option } from "../models/option";
import { Parameters } from "../models/parameters";
import { BSPrice } from "../models/bsprice";
import { MonteCarlo } from "../models/montecarlo";
import { BinominalmodelComponent } from "../binominalmodel/binominalmodel.component";

declare var math:any; // Magic
declare var MathJax:any;
declare var d3:any;

@Component({
  selector: 'app-binpricing',
  template: `

  <div class="container">

  <h2>Binominal Pricing Model for N = {{para.N}}</h2>
   
    <div class="form-group row">
      <label for="example-text-input" class="col-xs-2 col-form-label">Steps</label>
        <div class="col-xs-10">
        <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.N" placeholder="Decimal" step="1" />
        </div>
    </div>

    <div class="form-group row">
      <label for="example-text-input" class="col-xs-2 col-form-label">Option Type</label>
        <div class="col-xs-10">
        <select class="form-control" [(ngModel)]="para.view" id="frmtype">
        <option value="P101">Price Evolution</option>
        <option value="P102">Payoffs Evolution</option>
        <option value="P103">Option Price Evolution</option>
        </select>    
        </div>
    </div>
 
    <div class="form-group row">
      <label for="example-text-input" class="col-xs-2 col-form-label">Type</label>
        <div class="col-xs-10">
        <select class="form-control" [(ngModel)]="para.view" id="frmtype">
        <option value="P101">Price Evolution</option>
        <option value="P102">Payoffs Evolution</option>
        <option value="P103">Option Price Evolution</option>
        </select>    
        </div>
    </div>

    <div class="form-group row">
      <label for="example-number-input" class="col-xs-2 col-form-label">Years to maturity</label>
      <div class="col-xs-10">
        <input class="form-control" type="number" value="1" id="example-number-input" [(ngModel)]="para.T" >
      </div>
    </div>

    <div class="form-group row">
      <label for="example-text-input" class="col-xs-2 col-form-label">Initial price $S_0$</label>
        <div class="col-xs-10">
        <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.S0" placeholder="Decimal" step="1" />
        </div>
    </div>

  <div class="form-group row">
    <label for="example-text-input" class="col-xs-2 col-form-label">Strike</label>
      <div class="col-xs-10">
      <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.K" placeholder="Decimal" step="1" />
      </div>
  </div>

  <div class="form-group row">
    <label for="example-text-input" class="col-xs-2 col-form-label">Interest rate</label>
      <div class="col-xs-10">
      <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.r" placeholder="Decimal" step="0.01" />
      </div>
  </div>

  <div class="form-group row">
    <label for="example-text-input" class="col-xs-2 col-form-label">Volatility</label>
      <div class="col-xs-10">
      <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.sigma" placeholder="Decimal" step="0.01" />
      </div>
  </div>


  <app-binominaltree [(p)]="para"></app-binominaltree>

  </div>
  
  `
})

// <app-binominaltree [(N)]="N" [(S0)]="S0" [(K)]="K" [(up)]="up" [(down)]="down" [(view)]="view"></app-binominaltree>

export class BinominalPricingComponent {

	constructor(private router: Router, private differs: KeyValueDiffers) {
		this.differ = differs.find({}).create(null);
	}

  para:Parameters;
  // delta_t:number;
	differ: any;


  ngOnInit() {
    this.para = new Parameters();
    this.para.S0 = 100;
    this.para.K = 110;
    this.para.r = 0.01;
    this.para.T = 1;
    this.para.sigma = 0.2;
    this.para.N = 2;
    this.para.view = "P101";
  }

}

