(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-navigation-module"],{

/***/ "./src/app/pages/navigation/menu/menu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/navigation/menu/menu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <h4>Basic menu</h4>\r\n  <div>\r\n    <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item>Item 1</button>\r\n      <button mat-menu-item>Item 2</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n<div class=\"example-container\">\r\n  <h4>Menu with icons</h4>\r\n  <div>\r\n    <button mat-button [matMenuTriggerFor]=\"menu\" style=\"display: flex; align-items: center; \">\r\n      <mat-icon>menu</mat-icon>\r\n      <span>Menu</span>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item>\r\n        <mat-icon>create</mat-icon>\r\n        <span>Create</span>\r\n      </button>\r\n      <button mat-menu-item>\r\n        <mat-icon>access_alarm</mat-icon>\r\n        <span>Alarm</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n<div class=\"example-container\">\r\n  <h4>Nested menu</h4>\r\n  <div>\r\n    <button mat-button [matMenuTriggerFor]=\"animals\"\r\n      (menuOpened)=\"openOrClosedHandle(true)\"\r\n      (menuClosed)=\"openOrClosedHandle(false)\">Animal index</button>\r\n\r\n    <mat-menu #animals=\"matMenu\" >\r\n      <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n      <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #vertebrates=\"matMenu\">\r\n      <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n      <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n      <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n      <button mat-menu-item>Birds</button>\r\n      <button mat-menu-item>Mammals</button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #invertebrates=\"matMenu\">\r\n      <button mat-menu-item>Insects</button>\r\n      <button mat-menu-item>Molluscs</button>\r\n      <button mat-menu-item>Crustaceans</button>\r\n      <button mat-menu-item>Corals</button>\r\n      <button mat-menu-item>Arachnids</button>\r\n      <button mat-menu-item>Velvet worms</button>\r\n      <button mat-menu-item>Horseshoe crabs</button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #fish=\"matMenu\">\r\n      <button mat-menu-item>Baikal oilfish</button>\r\n      <button mat-menu-item>Bala shark</button>\r\n      <button mat-menu-item>Ballan wrasse</button>\r\n      <button mat-menu-item>Bamboo shark</button>\r\n      <button mat-menu-item>Banded killifish</button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #amphibians=\"matMenu\">\r\n      <button mat-menu-item>Sonoran desert toad</button>\r\n      <button mat-menu-item>Western toad</button>\r\n      <button mat-menu-item>Arroyo toad</button>\r\n      <button mat-menu-item>Yosemite toad</button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #reptiles=\"matMenu\">\r\n      <button mat-menu-item>Banded Day Gecko</button>\r\n      <button mat-menu-item>Banded Gila Monster</button>\r\n      <button mat-menu-item>Black Tree Monitor</button>\r\n      <button mat-menu-item>Blue Spiny Lizard</button>\r\n      <button mat-menu-item disabled>Velociraptor</button>\r\n    </mat-menu>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/navigation/menu/menu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/navigation/menu/menu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/navigation/menu/menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/navigation/menu/menu.component.ts ***!
  \*********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.openOrClosedHandle = function (evt) {
        console.log(evt);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/pages/navigation/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/pages/navigation/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/navigation/navigation-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/navigation/navigation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NavigationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationRoutingModule", function() { return NavigationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.component */ "./src/app/pages/navigation/navigation.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/pages/navigation/menu/menu.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/pages/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/pages/navigation/toolbar/toolbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"],
        data: {
            breadcrumb: 'Navigation'
        },
        children: [
            {
                path: '',
                redirectTo: 'menu',
                pathMatch: 'full'
            },
            {
                path: 'menu',
                component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                data: {
                    breadcrumb: 'Menu'
                },
            },
            {
                path: 'sidenav',
                component: _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"],
                data: {
                    breadcrumb: 'Sidenav'
                },
            },
            {
                path: 'toolbar',
                component: _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
                data: {
                    breadcrumb: 'Toolbar'
                },
            }
        ]
    }
];
var NavigationRoutingModule = /** @class */ (function () {
    function NavigationRoutingModule() {
    }
    NavigationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NavigationRoutingModule);
    return NavigationRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/pages/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/pages/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pages/navigation/navigation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/navigation/navigation.module.ts ***!
  \*******************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navigation_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-routing.module */ "./src/app/pages/navigation/navigation-routing.module.ts");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation.component */ "./src/app/pages/navigation/navigation.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/pages/navigation/menu/menu.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/pages/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/pages/navigation/toolbar/toolbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _navigation_routing_module__WEBPACK_IMPORTED_MODULE_4__["NavigationRoutingModule"]
            ],
            declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"]]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "./src/app/pages/navigation/sidenav/sidenav.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/navigation/sidenav/sidenav.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container ec1\">\r\n  <h4>Basic sidenav</h4>\r\n  <div>\r\n    <mat-sidenav-container class=\"example-container\">\r\n      <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\r\n      <mat-sidenav-content>Main content</mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec2\">\r\n  <h4>Basic Drawer</h4>\r\n  <div>\r\n    <mat-drawer-container class=\"example-container\">\r\n      <mat-drawer mode=\"side\" opened=\"true\">Drawer content</mat-drawer>\r\n      <mat-drawer-content>Main content</mat-drawer-content>\r\n    </mat-drawer-container>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec3\">\r\n  <h4>Implicit main content with two sidenavs</h4>\r\n  <div>\r\n    <mat-sidenav-container class=\"example-container\">\r\n      <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\r\n      <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\r\n      Implicit main content\r\n    </mat-sidenav-container>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec4\">\r\n  <h4>Sidenav open & close behavior</h4>\r\n  <div>\r\n    <mat-sidenav-container class=\"example-container\">\r\n      <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\" (closed)=\"events.push('close!')\">\r\n        Sidenav content\r\n      </mat-sidenav>\r\n\r\n      <mat-sidenav-content>\r\n        <p>\r\n          <mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox>\r\n        </p>\r\n        <p>\r\n          <button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button>\r\n        </p>\r\n        <p>Events:</p>\r\n        <div class=\"example-events\">\r\n          <div *ngFor=\"let e of events\">{{e}}</div>\r\n        </div>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec5\">\r\n  <h4></h4>\r\n  <div></div>\r\n</div>\r\n<div class=\"example-container ec6\">\r\n  <h4></h4>\r\n  <div></div>\r\n</div>\r\n<div class=\"example-container ec7\">\r\n  <h4></h4>\r\n  <div></div>\r\n</div>\r\n<div class=\"example-container ec8\">\r\n  <h4></h4>\r\n  <div></div>\r\n</div>\r\n<div class=\"example-container ec9\">\r\n  <h4></h4>\r\n  <div></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/navigation/sidenav/sidenav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/navigation/sidenav/sidenav.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container > div > * {\n  min-height: 200px; }\n"

/***/ }),

/***/ "./src/app/pages/navigation/sidenav/sidenav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/navigation/sidenav/sidenav.component.ts ***!
  \***************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
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

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.events = [];
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/pages/navigation/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/pages/navigation/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/pages/navigation/toolbar/toolbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/navigation/toolbar/toolbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <h4>Multi-row toolbar</h4>\r\n  <div>\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row>\r\n        <span>Custom Toolbar</span>\r\n      </mat-toolbar-row>\r\n\r\n      <mat-toolbar-row>\r\n        <span>Second Line</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <mat-icon class=\"example-icon\">verified_user</mat-icon>\r\n      </mat-toolbar-row>\r\n\r\n      <mat-toolbar-row>\r\n        <span>Third Line</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <mat-icon class=\"example-icon\">favorite</mat-icon>\r\n        <mat-icon class=\"example-icon\">delete</mat-icon>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/navigation/toolbar/toolbar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/navigation/toolbar/toolbar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/navigation/toolbar/toolbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/navigation/toolbar/toolbar.component.ts ***!
  \***************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
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

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/pages/navigation/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/pages/navigation/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-navigation-navigation-module.js.map