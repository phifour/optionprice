import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Option } from "../models/option";
import { Parameters } from "../models/parameters";
import { BSPrice } from "../models/bsprice";
import { MonteCarlo } from "../models/montecarlo";
import { BinominalmodelComponent } from "../binominalmodel/binominalmodel.component";


@Component({
  selector: 'app-inputparameters',
  template: `

  <div class="container">

  <h2>Binominal Pricing Model (N={{para.N}})</h2>
   
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
      <label for="example-text-input" class="col-xs-2 col-form-label">Initial price</label>
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



  </div>
  
  `
})

// <app-binominaltree [(N)]="N" [(S0)]="S0" [(K)]="K" [(up)]="up" [(down)]="down" [(view)]="view"></app-binominaltree>

export class InputparametersComponent {

  constructor(private router: Router) {
  }

  para:Parameters;

  ngOnInit() {
    this.para = new Parameters();
    this.para.S0 = 100;
    this.para.K = 110;
    this.para.r = 0.1;
    this.para.sigma = 0.2;
    this.para.N = 2;
    this.para.view = "P101";
  }

}

