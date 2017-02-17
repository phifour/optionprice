import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ButtonsModule } from 'ng2-bootstrap';
import { BinominalmodelComponent } from './calc/binominalmodel/binominalmodel.component';
import { BinominalPricingComponent } from './calc/binominalpricing/binominalpricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BinominalmodelComponent,
    BinominalPricingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { Http, HttpModule } from '@angular/http';
// import { SharedModule } from './shared/shared.module';

// import { AppComponent } from './app.component';
// import { RegisterComponent } from './register/register.component';
// import { ButtonsModule } from 'ng2-bootstrap';
// import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
// import { userReducer } from './states/user.reducer';
// export function createTranslateLoader(http: Http) {
//     return new TranslateStaticLoader(http, './assets/i18n', '.json');
// }


// @NgModule({
//   declarations: [
//     AppComponent,
//     RegisterComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpModule,
//     SharedModule,
//     ButtonsModule.forRoot(),
//     TranslateModule.forRoot({
//             provide: TranslateLoader,
//             useFactory: (createTranslateLoader),
//             deps: [Http]
//         })
//     ],
//   providers: [],//directives, service declared here will be available in all child components
//   bootstrap: [AppComponent]
// })
// export class AppModule { }