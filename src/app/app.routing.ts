import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MontecarloComponent} from "./calc/montecarlo/montecarlo.component";
import {BinominalPricingComponent} from "./calc/binominalpricing/binominalpricing.component";
import {MontecarlopricingComponent} from "./calc/montecarlopricing/montecarlopricing.component";

import {AboutComponent} from "../shared/about/about.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'binominal', pathMatch: 'full'},
    {path: 'binominal', component: BinominalPricingComponent, data: {title: 'Option Pricing'}},
    {path: 'montecarlo', component: MontecarloComponent, data: {title: 'Markov Chain MC'}},
    {path: 'mcpricing', component: MontecarlopricingComponent, data: {title: 'Monte Carlo Pricing'}},
    {path: 'about', component: AboutComponent, data: {title: 'About Myself'}},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
