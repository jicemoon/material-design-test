(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-layout-layout-module"],{

/***/ "./src/app/pages/layout/card/card.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/layout/card/card.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <h4>Basic cards</h4>\r\n  <div>\r\n    <mat-card>Simple card</mat-card>\r\n  </div>\r\n</div>\r\n<div class=\"example-container\">\r\n  <h4>Card with multiple sections</h4>\r\n  <div>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Shiba Inu</mat-card-title>\r\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n      <mat-card-content>\r\n        <p>\r\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n          bred for hunting.\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/layout/card/card.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/layout/card/card.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/pages/layout/card/card.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/layout/card/card.component.ts ***!
  \*****************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/pages/layout/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/pages/layout/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/expansion-panel/expansion-panel.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/layout/expansion-panel/expansion-panel.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container ec1\">\r\n  <h4>Basic expansion panel</h4>\r\n  <div>\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Personal data\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Type your name and age\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"First name\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Age\">\r\n        </mat-form-field>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel\r\n          (opened)=\"panelOpenState = true\"\r\n          (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Self aware panel\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Currently I am {{panelOpenState ? 'open' : 'closed'}}\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <p>I'm visible because I am open</p>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec2\">\r\n  <h4>Expansion panel as accordion</h4>\r\n  <div>\r\n    <mat-accordion class=\"example-headers-align\">\r\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Personal data\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Type your name and age\r\n            <mat-icon>account_circle</mat-icon>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"First name\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\r\n        </mat-form-field>\r\n        <mat-action-row>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n        </mat-action-row>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Destination\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Type the country name\r\n            <mat-icon>map</mat-icon>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Country\">\r\n        </mat-form-field>\r\n        <mat-action-row>\r\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n        </mat-action-row>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Day of the trip\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Inform the date you wish to travel\r\n            <mat-icon>date_range</mat-icon>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\r\n        </mat-form-field>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n        <mat-action-row>\r\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n        </mat-action-row>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/layout/expansion-panel/expansion-panel.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/layout/expansion-panel/expansion-panel.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container.ec2 .example-headers-align .mat-expansion-panel-header-title,\n.example-container.ec2 .example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-container.ec2 .example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/pages/layout/expansion-panel/expansion-panel.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/layout/expansion-panel/expansion-panel.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpansionPanelComponent = /** @class */ (function () {
    function ExpansionPanelComponent() {
        this.panelOpenState = false;
        this.step = 0;
    }
    ExpansionPanelComponent.prototype.setStep = function (idx) {
        this.step = idx;
    };
    ExpansionPanelComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionPanelComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionPanelComponent.prototype.ngOnInit = function () {
    };
    ExpansionPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expansion-panel',
            template: __webpack_require__(/*! ./expansion-panel.component.html */ "./src/app/pages/layout/expansion-panel/expansion-panel.component.html"),
            styles: [__webpack_require__(/*! ./expansion-panel.component.scss */ "./src/app/pages/layout/expansion-panel/expansion-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpansionPanelComponent);
    return ExpansionPanelComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/layout-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/layout/layout-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/pages/layout/layout.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "./src/app/pages/layout/card/card.component.ts");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "./src/app/pages/layout/expansion-panel/expansion-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        data: {
            breadcrumb: 'Layout'
        },
        children: [
            {
                path: '',
                redirectTo: 'card',
                pathMatch: 'full'
            },
            {
                path: 'card',
                component: _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
                data: {
                    breadcrumb: 'Card'
                }
            },
            {
                path: 'expansionPanel',
                component: _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_4__["ExpansionPanelComponent"],
                data: {
                    breadcrumb: 'Expansion Panel'
                }
            },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/layout/layout.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/layout/layout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/layout/layout.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/layout/layout.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/layout/layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/pages/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/pages/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/layout/layout.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/layout/layout.module.ts ***!
  \***********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/pages/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/pages/layout/layout.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/pages/layout/card/card.component.ts");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "./src/app/pages/layout/expansion-panel/expansion-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_7__["ExpansionPanelComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-layout-layout-module.js.map