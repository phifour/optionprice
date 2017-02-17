webpackJsonp([1,5],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parameters; });
var Parameters = (function () {
    function Parameters() {
    }
    return Parameters;
}());
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/parameters.js.map

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 493;


/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(606);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/main.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(697),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/app.component.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_header_header_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calc_binominalmodel_binominalmodel_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calc_binominalpricing_binominalpricing_component__ = __webpack_require__(608);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__calc_binominalmodel_binominalmodel_component__["a" /* BinominalmodelComponent */],
                __WEBPACK_IMPORTED_MODULE_8__calc_binominalpricing_binominalpricing_component__["a" /* BinominalPricingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["a" /* ButtonsModule */].forRoot(),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
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
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/app.module.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_bintree__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_parameters__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinominalmodelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BinominalmodelComponent = (function () {
    function BinominalmodelComponent(differs) {
        this.differs = differs;
        this.myeqn = "$q = \\frac{e^{r t}-u}{u-d}$";
        this.callprice = "$c=e^{-rt}(q P_u+(1-q)P_d)$";
        this.differ = differs.find({}).create(null);
        this.bintree = new __WEBPACK_IMPORTED_MODULE_1__models_bintree__["a" /* BinTree */]();
    }
    BinominalmodelComponent.prototype.ngOnInit = function () {
        var delta_t = 0.1;
        this.q = math.round(this.bintree.q_prob(this.p.r, delta_t, this.p.sigma), 2);
        this.update();
        MathJax.Hub.Typeset();
        setTimeout(function () {
            console.log('finished loading');
            MathJax.Hub.Typeset();
            // run jQuery stuff here
        }, 0);
        // ngOnInit() {
        //   setTimeout(() => {
        //       console.log('finished loading');
        //       MathJax.Hub.Typeset();
        //         // run jQuery stuff here
        //     }, 0);
        // }
    };
    BinominalmodelComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.p);
        if (changes) {
            console.log('changes detected');
            changes.forEachChangedItem(function (r) { return console.log('changed ', r.currentValue); });
            changes.forEachAddedItem(function (r) { return console.log('added ' + r.currentValue); });
            changes.forEachRemovedItem(function (r) { return console.log('removed ' + r.currentValue); });
        }
        else {
            this.update();
            console.log('nothing changed');
        }
    };
    BinominalmodelComponent.prototype.ngOnChanges = function (changes) {
        this.update();
        console.log('CHECK Parameters', this.p);
        // this.data = [];
        // for (var j = 0; j < this.values.length; j++) {
        //     this.data.push(this.values[j].close);
        // }
        // this.datalength = this.values.length;
        console.log('changes', changes);
        // for (let propName in changes) {
        //     console.log('changes',changes);
        // // let changedProp = changes[propName];
        // // let from = JSON.stringify(changedProp.previousValue);
        // // let to =   JSON.stringify(changedProp.currentValue);
        // // log.push( `${propName} changed from ${from} to ${to}`);
        // }
    };
    BinominalmodelComponent.prototype.update = function () {
        d3.select("#binominaltree").selectAll("*").remove();
        var N = this.p.N;
        var S0 = this.p.S0;
        var vOffset = 50;
        var hOffset = 100;
        var rootXoffset = 30;
        var rootYoffset = 50 * N;
        var width = rootXoffset + hOffset * N;
        var height = rootYoffset + vOffset * N + 30;
        var rectWidth = 60;
        var rectHeight = 30;
        var svg = d3.select("#binominaltree")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        var i, j;
        var textbox;
        var startX;
        var startY;
        var targetX;
        var targetY;
        var tree = math.zeros(this.p.N + 1, this.p.N + 1);
        var option_tree = math.zeros(this.p.N + 1, this.p.N + 1);
        // first draw lines
        for (i = 0; i < N; i++) {
            for (j = 0; j < i + 1; j++) {
                if (j === 0) {
                    startX = rootXoffset + hOffset * i + rectWidth / 2;
                    startY = rootYoffset - vOffset * i + rectHeight / 2;
                    svg.append("line")
                        .attr("x1", startX)
                        .attr("y1", startY)
                        .attr("x2", startX + hOffset * (N - i - 1))
                        .attr("y2", startY + vOffset * (N - i - 1))
                        .attr("stroke-width", 1)
                        .attr("stroke", "black");
                }
                if (j === i) {
                    startX = rootXoffset + hOffset * i + rectWidth / 2;
                    startY = rootYoffset + vOffset * i + rectHeight / 2;
                    svg.append("line")
                        .attr("x1", startX)
                        .attr("y1", startY)
                        .attr("x2", startX + hOffset * (N - i - 1))
                        .attr("y2", startY - vOffset * (N - i - 1))
                        .attr("stroke-width", 1)
                        .attr("stroke", "black");
                }
                ;
            }
        }
        // ...than arrows and link labels...
        for (i = 0; i < N - 1; i++) {
            for (j = 0; j < i + 1; j++) {
                targetX = rootXoffset + hOffset * i + hOffset;
                targetY = rootYoffset - vOffset * i + (2 * vOffset) * j - vOffset + rectHeight;
                svg.append("line")
                    .attr("x1", targetX)
                    .attr("y1", targetY)
                    .attr("x2", targetX - 9)
                    .attr("y2", targetY + 3)
                    .attr("stroke-width", 2)
                    .attr("stroke", "black");
                svg.append("line")
                    .attr("x1", targetX)
                    .attr("y1", targetY)
                    .attr("x2", targetX - 8)
                    .attr("y2", targetY + 6)
                    .attr("stroke-width", 1)
                    .attr("stroke", "black");
                textbox = svg.append("text")
                    .attr("x", targetX - 20)
                    .attr("y", targetY + 4)
                    .style("text-anchor", "end")
                    .style("font-size", "12px")
                    .text("p");
                targetY = rootYoffset - vOffset * i + (2 * vOffset) * j + vOffset;
                svg.append("line")
                    .attr("x1", targetX)
                    .attr("y1", targetY)
                    .attr("x2", targetX - 9)
                    .attr("y2", targetY - 3)
                    .attr("stroke-width", 2)
                    .attr("stroke", "black");
                svg.append("line")
                    .attr("x1", targetX)
                    .attr("y1", targetY)
                    .attr("x2", targetX - 8)
                    .attr("y2", targetY - 6)
                    .attr("stroke-width", 1)
                    .attr("stroke", "black");
                textbox = svg.append("text")
                    .attr("x", targetX - 20)
                    .attr("y", targetY + 2)
                    .style("text-anchor", "end")
                    .style("font-size", "12px")
                    .text("1-p");
            }
        }
        ;
        var prices;
        if (this.p.view === "P101") {
            prices = this.bintree.getBackPropTree(this.p.N, this.p.S0, this.p.K, 0.1, 0.1, 1);
        }
        else {
            prices = this.bintree.getPriceTree(this.p.N, this.p.S0, this.p.K, 0.1, 0.1, 1);
        }
        // ... and rectangles and their labels
        for (i = 0; i < N; i++) {
            for (j = 0; j < i + 1; j++) {
                var strike = this.p.K;
                var price = prices.subset(math.index(i, j));
                var color = "blue";
                if (price - strike <= 0) {
                    color = "red";
                }
                else {
                    color = "green";
                }
                svg.append("rect")
                    .attr("x", rootXoffset + hOffset * i)
                    .attr("y", rootYoffset - vOffset * i + (2 * vOffset) * j)
                    .attr("width", 60)
                    .attr("height", 30)
                    .attr("ry", 5)
                    .style("stroke", "#787878")
                    .style("fill", color);
                textbox = svg.append("text")
                    .attr("x", rootXoffset + hOffset * i)
                    .attr("y", rootYoffset - vOffset * i + (2 * vOffset) * j)
                    .attr("dx", 30)
                    .attr("dy", 20)
                    .style("text-anchor", "middle")
                    .style("font-size", "15px");
                textbox.append("tspan")
                    .text(price);
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_parameters__["a" /* Parameters */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_parameters__["a" /* Parameters */]) === 'function' && _a) || Object)
    ], BinominalmodelComponent.prototype, "p", void 0);
    BinominalmodelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-binominaltree',
            template: "\n    <h2>Price Evolution</h2>\n    <div id=\"binominaltree\"></div>\n    <h2>$q=\\alpha$</h2>\n    <h2>{{myeqn}}</h2>\n    <h2>{{callprice}}</h2>\n    <h2>Risk neutral probability q = {{q}}</h2>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* KeyValueDiffers */]) === 'function' && _b) || Object])
    ], BinominalmodelComponent);
    return BinominalmodelComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/binominalmodel.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_parameters__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinominalPricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BinominalPricingComponent = (function () {
    function BinominalPricingComponent() {
    }
    BinominalPricingComponent.prototype.ngOnInit = function () {
        this.para = new __WEBPACK_IMPORTED_MODULE_1__models_parameters__["a" /* Parameters */]();
        this.para.S0 = 100;
        this.para.K = 110;
        this.para.r = 0.1;
        this.para.sigma = 0.2;
        this.para.N = 2;
        this.para.view = "P101";
    };
    BinominalPricingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-binpricing',
            template: "\n\n  <div class=\"container\">\n  <h2>Binominal Pricing Model (N={{para.N}})</h2>\n    <div class=\"form-group row\">\n      <label for=\"example-text-input\" class=\"col-xs-1 col-form-label\">Steps</label>\n        <div class=\"col-xs-11\">\n        <input class=\"form-control\" type=\"number\" name=\"myDecimal\" [(ngModel)]=\"para.N\" placeholder=\"Decimal\" step=\"1\" />\n        </div>\n    </div>\n\n \n    <div class=\"form-group row\">\n      <label for=\"example-text-input\" class=\"col-xs-2 col-form-label\">Type</label>\n        <div class=\"col-xs-10\">\n        <select class=\"form-control\"  [(ngModel)]=\"para.view\" id=\"frmtype\">\n        <option value=\"P101\">Price Evolution</option>\n        <option value=\"P102\">Payoffs Evolution</option>\n        <option value=\"P103\">Option Price Evolution</option>\n        </select>    \n        </div>\n    </div>\n\n  <div class=\"form-group row\">\n    <label for=\"example-text-input\" class=\"col-xs-2 col-form-label\">Initial price</label>\n    <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"number\" name=\"myDecimal\" [(ngModel)]=\"para.S0\" placeholder=\"Decimal\" step=\"1\" />\n    </div>\n  </div>\n\n\n  <div class=\"form-group row\">\n    <label for=\"example-text-input\" class=\"col-xs-2 col-form-label\">Strike</label>\n    <div class=\"col-xs-10\">\n    <input class=\"form-control\" type=\"number\" name=\"myDecimal\" [(ngModel)]=\"para.K\" placeholder=\"Decimal\" step=\"1\" />\n    </div>\n  </div>\n\n\n\n\n    <app-binominaltree [(p)]=\"para\"></app-binominaltree>\n\n\n\n  </div>\n\n  \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BinominalPricingComponent);
    return BinominalPricingComponent;
}());
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/binominalpricing.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinTree; });
var BinTree = (function () {
    function BinTree() {
    }
    BinTree.prototype.max = function (x) {
        if (x <= 0) {
            return 0;
        }
        else {
            return x;
        }
    };
    BinTree.prototype.q_prob = function (r, delta_t, sigma) {
        var u = Math.exp(sigma * Math.sqrt(delta_t));
        var d = Math.exp(-sigma * Math.sqrt(delta_t));
        return ((Math.exp(r * delta_t) - d) / (u - d));
    };
    BinTree.prototype.getPriceTree = function (N, S0, K, r, sigma, T) {
        var tree = math.zeros(N + 1, N + 1);
        // var option_tree = math.zeros(N+1, N+1);
        //u = exp(sigma*sqrt(delta_t))
        //d = exp(-sigma*sqrt(delta_t))
        var up = 1.1;
        var down = 0.9;
        // first draw lines
        for (var i = 0; i < N; i++) {
            for (var j = 0; j < i + 1; j++) {
                var price = Math.round(Math.pow(up, i - j) * Math.pow(down, j) * S0);
                tree.subset(math.index(i, j), price);
            }
        }
        return tree;
    };
    BinTree.prototype.calculatePayoffs = function (N, S0, K, r, sigma, T) {
        var price_tree = this.getPriceTree(N, S0, K, r, sigma, T);
        for (var i = 0; i < N + 1; i++) {
            for (var j = 0; j < i + 1; j++) {
                var cur_val = price_tree.subset(math.index(i, j));
                cur_val = this.max(cur_val - K);
                price_tree.subset(math.index(i, j), cur_val);
            }
        }
        return price_tree;
    };
    // value_binomial_option = function(tree, sigma, delta_t, r, X, type) {
    //   q = q_prob(r, delta_t, sigma)
    //   option_tree = matrix(0, nrow=nrow(tree), ncol=ncol(tree))
    //   if(type == 'put') {
    //     option_tree[nrow(option_tree),] = pmax(X - tree[nrow(tree),], 0)
    //   } else {
    //     option_tree[nrow(option_tree),] = pmax(tree[nrow(tree),] - X, 0)
    //   }
    //   for (i in (nrow(tree)-1):1) {
    //     for(j in 1:i) {
    //       option_tree[i, j] = ((1-q)*option_tree[i+1,j] + q*option_tree[i+1,j+1])/exp(r*delta_t)
    //     }
    //   }
    //   return(option_tree)
    // }
    BinTree.prototype.getBackPropTree = function (N, S0, K, r, sigma, T) {
        var option_tree = this.calculatePayoffs(N, S0, K, r, sigma, T);
        var q = 0.3;
        var delta_t = 0.1;
        //var q = this.q_prob(r, delta_t, sigma);
        for (var i = 0; i < N; i++) {
            for (var j = 0; j < i + 1; j++) {
                var cur_val = option_tree.subset(math.index(i, j));
                var nxt_u = (1 - q) * option_tree.subset(math.index(i + 1, j));
                var nxt_d = q * option_tree.subset(math.index(i + 1, j + 1));
                var tmp = math.round((nxt_u + nxt_d) / Math.exp(r * delta_t), 2);
                option_tree.subset(math.index(i, j), tmp);
            }
        }
        // var i = N - 1;
        // for (var j = 0; j < i + 1; j++) {
        //         option_tree.subset(math.index(i, j), 999);
        // }
        return option_tree;
    };
    return BinTree;
}());
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/bintree.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/environment.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(698),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/wfrisch/Documents/projects/optionprice/src/header.component.js.map

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 324,
	"./af.js": 324,
	"./ar": 330,
	"./ar-dz": 325,
	"./ar-dz.js": 325,
	"./ar-ly": 326,
	"./ar-ly.js": 326,
	"./ar-ma": 327,
	"./ar-ma.js": 327,
	"./ar-sa": 328,
	"./ar-sa.js": 328,
	"./ar-tn": 329,
	"./ar-tn.js": 329,
	"./ar.js": 330,
	"./az": 331,
	"./az.js": 331,
	"./be": 332,
	"./be.js": 332,
	"./bg": 333,
	"./bg.js": 333,
	"./bn": 334,
	"./bn.js": 334,
	"./bo": 335,
	"./bo.js": 335,
	"./br": 336,
	"./br.js": 336,
	"./bs": 337,
	"./bs.js": 337,
	"./ca": 338,
	"./ca.js": 338,
	"./cs": 339,
	"./cs.js": 339,
	"./cv": 340,
	"./cv.js": 340,
	"./cy": 341,
	"./cy.js": 341,
	"./da": 342,
	"./da.js": 342,
	"./de": 344,
	"./de-at": 343,
	"./de-at.js": 343,
	"./de.js": 344,
	"./dv": 345,
	"./dv.js": 345,
	"./el": 346,
	"./el.js": 346,
	"./en-au": 347,
	"./en-au.js": 347,
	"./en-ca": 348,
	"./en-ca.js": 348,
	"./en-gb": 349,
	"./en-gb.js": 349,
	"./en-ie": 350,
	"./en-ie.js": 350,
	"./en-nz": 351,
	"./en-nz.js": 351,
	"./eo": 352,
	"./eo.js": 352,
	"./es": 354,
	"./es-do": 353,
	"./es-do.js": 353,
	"./es.js": 354,
	"./et": 355,
	"./et.js": 355,
	"./eu": 356,
	"./eu.js": 356,
	"./fa": 357,
	"./fa.js": 357,
	"./fi": 358,
	"./fi.js": 358,
	"./fo": 359,
	"./fo.js": 359,
	"./fr": 362,
	"./fr-ca": 360,
	"./fr-ca.js": 360,
	"./fr-ch": 361,
	"./fr-ch.js": 361,
	"./fr.js": 362,
	"./fy": 363,
	"./fy.js": 363,
	"./gd": 364,
	"./gd.js": 364,
	"./gl": 365,
	"./gl.js": 365,
	"./he": 366,
	"./he.js": 366,
	"./hi": 367,
	"./hi.js": 367,
	"./hr": 368,
	"./hr.js": 368,
	"./hu": 369,
	"./hu.js": 369,
	"./hy-am": 370,
	"./hy-am.js": 370,
	"./id": 371,
	"./id.js": 371,
	"./is": 372,
	"./is.js": 372,
	"./it": 373,
	"./it.js": 373,
	"./ja": 374,
	"./ja.js": 374,
	"./jv": 375,
	"./jv.js": 375,
	"./ka": 376,
	"./ka.js": 376,
	"./kk": 377,
	"./kk.js": 377,
	"./km": 378,
	"./km.js": 378,
	"./ko": 379,
	"./ko.js": 379,
	"./ky": 380,
	"./ky.js": 380,
	"./lb": 381,
	"./lb.js": 381,
	"./lo": 382,
	"./lo.js": 382,
	"./lt": 383,
	"./lt.js": 383,
	"./lv": 384,
	"./lv.js": 384,
	"./me": 385,
	"./me.js": 385,
	"./mi": 386,
	"./mi.js": 386,
	"./mk": 387,
	"./mk.js": 387,
	"./ml": 388,
	"./ml.js": 388,
	"./mr": 389,
	"./mr.js": 389,
	"./ms": 391,
	"./ms-my": 390,
	"./ms-my.js": 390,
	"./ms.js": 391,
	"./my": 392,
	"./my.js": 392,
	"./nb": 393,
	"./nb.js": 393,
	"./ne": 394,
	"./ne.js": 394,
	"./nl": 396,
	"./nl-be": 395,
	"./nl-be.js": 395,
	"./nl.js": 396,
	"./nn": 397,
	"./nn.js": 397,
	"./pa-in": 398,
	"./pa-in.js": 398,
	"./pl": 399,
	"./pl.js": 399,
	"./pt": 401,
	"./pt-br": 400,
	"./pt-br.js": 400,
	"./pt.js": 401,
	"./ro": 402,
	"./ro.js": 402,
	"./ru": 403,
	"./ru.js": 403,
	"./se": 404,
	"./se.js": 404,
	"./si": 405,
	"./si.js": 405,
	"./sk": 406,
	"./sk.js": 406,
	"./sl": 407,
	"./sl.js": 407,
	"./sq": 408,
	"./sq.js": 408,
	"./sr": 410,
	"./sr-cyrl": 409,
	"./sr-cyrl.js": 409,
	"./sr.js": 410,
	"./ss": 411,
	"./ss.js": 411,
	"./sv": 412,
	"./sv.js": 412,
	"./sw": 413,
	"./sw.js": 413,
	"./ta": 414,
	"./ta.js": 414,
	"./te": 415,
	"./te.js": 415,
	"./tet": 416,
	"./tet.js": 416,
	"./th": 417,
	"./th.js": 417,
	"./tl-ph": 418,
	"./tl-ph.js": 418,
	"./tlh": 419,
	"./tlh.js": 419,
	"./tr": 420,
	"./tr.js": 420,
	"./tzl": 421,
	"./tzl.js": 421,
	"./tzm": 423,
	"./tzm-latn": 422,
	"./tzm-latn.js": 422,
	"./tzm.js": 423,
	"./uk": 424,
	"./uk.js": 424,
	"./uz": 425,
	"./uz.js": 425,
	"./vi": 426,
	"./vi.js": 426,
	"./x-pseudo": 427,
	"./x-pseudo.js": 427,
	"./yo": 428,
	"./yo.js": 428,
	"./zh-cn": 429,
	"./zh-cn.js": 429,
	"./zh-hk": 430,
	"./zh-hk.js": 430,
	"./zh-tw": 431,
	"./zh-tw.js": 431
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 667;


/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-binpricing></app-binpricing>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Link</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\">Link</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(494);


/***/ })

},[738]);
//# sourceMappingURL=main.bundle.map