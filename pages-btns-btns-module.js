(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-btns-btns-module"],{

/***/ "./src/app/pages/btns/btns-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/btns/btns-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BtnsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnsRoutingModule", function() { return BtnsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _btns_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btns.component */ "./src/app/pages/btns/btns.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/button.component */ "./src/app/pages/btns/button/button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _btns_component__WEBPACK_IMPORTED_MODULE_2__["BtnsComponent"],
        children: [
            {
                path: '',
                redirectTo: 'button',
                pathMatch: 'full'
            },
            {
                path: 'button',
                component: _button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]
            }
        ]
    }
];
var BtnsRoutingModule = /** @class */ (function () {
    function BtnsRoutingModule() {
    }
    BtnsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BtnsRoutingModule);
    return BtnsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/btns/btns.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/btns/btns.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/btns/btns.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/btns/btns.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/btns/btns.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/btns/btns.component.ts ***!
  \**********************************************/
/*! exports provided: BtnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnsComponent", function() { return BtnsComponent; });
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

var BtnsComponent = /** @class */ (function () {
    function BtnsComponent() {
    }
    BtnsComponent.prototype.ngOnInit = function () {
    };
    BtnsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-btns',
            template: __webpack_require__(/*! ./btns.component.html */ "./src/app/pages/btns/btns.component.html"),
            styles: [__webpack_require__(/*! ./btns.component.scss */ "./src/app/pages/btns/btns.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BtnsComponent);
    return BtnsComponent;
}());



/***/ }),

/***/ "./src/app/pages/btns/btns.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/btns/btns.module.ts ***!
  \*******************************************/
/*! exports provided: BtnsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnsModule", function() { return BtnsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _btns_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btns-routing.module */ "./src/app/pages/btns/btns-routing.module.ts");
/* harmony import */ var _btns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btns.component */ "./src/app/pages/btns/btns.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/button.component */ "./src/app/pages/btns/button/button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BtnsModule = /** @class */ (function () {
    function BtnsModule() {
    }
    BtnsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _btns_routing_module__WEBPACK_IMPORTED_MODULE_2__["BtnsRoutingModule"]
            ],
            declarations: [_btns_component__WEBPACK_IMPORTED_MODULE_3__["BtnsComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]]
        })
    ], BtnsModule);
    return BtnsModule;
}());



/***/ }),

/***/ "./src/app/pages/btns/button/button.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/btns/button/button.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  button works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/btns/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/btns/button/button.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/btns/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/btns/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
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

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/pages/btns/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/pages/btns/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-btns-btns-module.js.map