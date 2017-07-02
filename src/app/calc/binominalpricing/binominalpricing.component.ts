import { Component, OnInit, ViewChild, ElementRef, Input, SimpleChange, KeyValueDiffers } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Option } from "../models/option";
import { Parameters } from "../models/parameters";
import { BSPrice } from "../models/bsprice";
import { MonteCarlo } from "../models/montecarlo";
import { BinominalmodelComponent } from "../binominalmodel/binominalmodel.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BinModelBounds } from "../models/binmodelbounds";

declare var math:any; // Magic
declare var MathJax:any;
declare var d3:any;

// <form [formGroup]="form">
//   <input type="text" formControlName="name">
//   <button type="submit" [disabled]="!isFormValid" id="save-button">Submit</button>
// </form>


@Component({
  selector: 'app-binpricing',
  template: `


  <div class="container">


  <h2>Binominal Pricing Model for N = {{para.N}}</h2>

  <app-binominaltree [(p)]="para"></app-binominaltree>

  
  <div class="form-group row">
    <label for="example-text-input" class="col-xs-2 col-form-label">Steps</label>
    <div class="col-xs-10">
      <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.N" placeholder="Decimal" step="1" min="1" max="10"/>
      <div *ngIf="para.N>4" class="alert alert-danger">Falue too high</div>
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
        <select class="form-control" [(ngModel)]="para.type" id="frmtype">
        <option value="put">Put</option>
        <option value="call">Call</option>
        </select>    
        </div>
    </div>


    <div class="form-group row">
      <label for="example-text-input" class="col-xs-2 col-form-label">Time Measure</label>
        <div class="col-xs-10">
        <select class="form-control" [(ngModel)]="para.UOM" id="frmtype">
        <option value="day">Days</option>
        <option value="moth">Months</option>
        <option value="year">Years</option>
        </select>    
        </div>
    </div>


    <div class="form-group row">
      <label for="example-number-input" class="col-xs-2 col-form-label">{{para.UOM}} to maturity</label>
      <div class="col-xs-10">
        <input class="form-control" type="number" value="1" id="example-number-input" [(ngModel)]="para.T" >
      </div>
    </div>

    <div class="form-group row">
      <label for="example-text-input" class="col-xs-2 col-form-label">Initial price $S_0$</label>
        <div class="col-xs-10">
        <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.S0" placeholder="Decimal" step="1" min="0"/>
        </div>
    </div>

  <div class="form-group row">
    <label for="example-text-input" class="col-xs-2 col-form-label">Strike</label>
      <div class="col-xs-10">
      <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.K" placeholder="Decimal" step="1" min="0" />
      </div>
  </div>

  <div class="form-group row">
    <label for="example-text-input" class="col-xs-2 col-form-label">Interest rate</label>
      <div class="col-xs-10">
      <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.r" placeholder="Decimal" step="0.01" min="0.01" max="0.6" />
      </div>
  </div>

  <div class="form-group row">
    <label for="example-text-input" class="col-xs-2 col-form-label">Volatility</label>
      <div class="col-xs-10">
      <input class="form-control" type="number" name="myDecimal" [(ngModel)]="para.sigma" placeholder="Decimal" step="0.01" min="0.01" max="0.6"/>
      </div>
  </div>



  <button type="button" (click)="priceoption()" class="btn btn-primary btn-block">Price Option</button>



  </div>
  
  `
})

// <app-binominaltree [(N)]="N" [(S0)]="S0" [(K)]="K" [(up)]="up" [(down)]="down" [(view)]="view"></app-binominaltree>

export class BinominalPricingComponent {

  form : FormGroup;
  para:Parameters;
  differ: any;
  bsprice:BSPrice;

	// constructor(private router: Router, private differs: KeyValueDiffers) {
	// 	this.differ = differs.find({}).create(null);
	// }



  // form = new FormGroup({
  //   first: new FormControl('Nancy', Validators.minLength(2)),
  //   last: new FormControl('Drew'),
  // });


  constructor(private router: Router, private differs: KeyValueDiffers) {
    // this.complexForm = fb.group({
    //   'firstName' : [null, Validators.required],
    //   'lastName': [null,  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    //   'degree' : [null, Validators.required],
    //   'feedback' : [null, Validators.required]
    // });

    // console.log(this.complexForm);
    // this.complexForm.valueChanges.subscribe( (form: any) => {
    //   console.log('form changed to2:', form);
    // });
    this.bsprice = new BSPrice();
    this.differ = differs.find({}).create(null);
  }

  submitForm(value: any) {
    console.log(value);
    // this.router.navigate(['/listofassignments']);
  }


  ngOnInit() {
    // MathJax.Hub.Typeset();
    console.log("calling ngOnInit");
    this.para = new Parameters();
    this.para.S0 = 100;
    this.para.K = 110;
    this.para.r = 0.01;
    this.para.T = 1;
    this.para.sigma = 0.2;
    this.para.N = 2;
    this.para.type = "call";
    this.para.UOM = "year";
    this.para.view = "P101";
  }

  priceoption() {
    console.log('Price Option!', this.bsprice.EuropeanCallPut(this.para.S0, this.para.K, this.para.r, this.para.sigma, this.para.T));
  }



}

