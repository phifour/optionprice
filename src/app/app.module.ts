import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ButtonsModule } from 'ng2-bootstrap';
import { OptionpricingmoduleModule } from './calc/optionpricingmodule.module';
import { routing, appRoutingProviders } from './app.routing';
import { StateService } from './state.service';

// import { BinominalmodelComponent } from './calc/binominalmodel/binominalmodel.component';
// import { BinominalPricingComponent } from './calc/binominalpricing/binominalpricing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OptionpricingmoduleModule,
    routing,
    ButtonsModule.forRoot(),

  ],
  providers: [appRoutingProviders, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
