import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinominalmodelComponent } from './binominalmodel/binominalmodel.component';
import { BinominalPricingComponent } from './binominalpricing/binominalpricing.component';
import { FormsModule } from '@angular/forms';
import { MontecarloComponent } from './montecarlo/montecarlo.component';
import { HistogramComponent } from './histogram/histogram.component';
import { PlotfunctionComponent } from './plotfunction/plotfunction.component';
import { InputparametersComponent } from './inputparameters/inputparameters.component';
import { MontecarlopricingComponent } from './montecarlopricing/montecarlopricing.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
    ],
  declarations: [
    BinominalmodelComponent,
    BinominalPricingComponent,
    MontecarloComponent,
    HistogramComponent,
    PlotfunctionComponent,
    InputparametersComponent,
    MontecarlopricingComponent
    ],
  exports: [
    BinominalmodelComponent,
    BinominalPricingComponent,
    MontecarloComponent,
    HistogramComponent,
    PlotfunctionComponent,
    InputparametersComponent
  ]//components can be used on the outside

})
export class OptionpricingmoduleModule { }
