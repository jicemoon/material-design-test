(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-data-table-data-table-module"],{

/***/ "./src/app/pages/data-table/data-table-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/data-table/data-table-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DataTableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRoutingModule", function() { return DataTableRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-table.component */ "./src/app/pages/data-table/data-table.component.ts");
/* harmony import */ var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginator/paginator.component */ "./src/app/pages/data-table/paginator/paginator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _data_table_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"],
        children: [
            {
                path: '',
                redirectTo: 'paginator',
                pathMatch: 'full'
            },
            {
                path: 'paginator',
                component: _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__["PaginatorComponent"]
            }
        ]
    }
];
var DataTableRoutingModule = /** @class */ (function () {
    function DataTableRoutingModule() {
    }
    DataTableRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DataTableRoutingModule);
    return DataTableRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/data-table/data-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/data-table/data-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  data-table works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/data-table/data-table.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/data-table/data-table.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/data-table/data-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/data-table/data-table.component.ts ***!
  \**********************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
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

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
    }
    DataTableComponent.prototype.ngOnInit = function () {
    };
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/pages/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/pages/data-table/data-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/pages/data-table/data-table.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/data-table/data-table.module.ts ***!
  \*******************************************************/
/*! exports provided: DataTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableModule", function() { return DataTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_table_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-table-routing.module */ "./src/app/pages/data-table/data-table-routing.module.ts");
/* harmony import */ var _data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-table.component */ "./src/app/pages/data-table/data-table.component.ts");
/* harmony import */ var _data_table_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-table/paginator/paginator.component */ "./src/app/pages/data-table/paginator/paginator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DataTableModule = /** @class */ (function () {
    function DataTableModule() {
    }
    DataTableModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _data_table_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataTableRoutingModule"]
            ],
            declarations: [_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"], _data_table_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__["PaginatorComponent"]]
        })
    ], DataTableModule);
    return DataTableModule;
}());



/***/ }),

/***/ "./src/app/pages/data-table/paginator/paginator.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/data-table/paginator/paginator.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  paginator works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/data-table/paginator/paginator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/data-table/paginator/paginator.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/data-table/paginator/paginator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/data-table/paginator/paginator.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
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

var PaginatorComponent = /** @class */ (function () {
    function PaginatorComponent() {
    }
    PaginatorComponent.prototype.ngOnInit = function () {
    };
    PaginatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paginator',
            template: __webpack_require__(/*! ./paginator.component.html */ "./src/app/pages/data-table/paginator/paginator.component.html"),
            styles: [__webpack_require__(/*! ./paginator.component.scss */ "./src/app/pages/data-table/paginator/paginator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-data-table-data-table-module.js.map