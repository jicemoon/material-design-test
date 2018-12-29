(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/btns/btns.module": [
		"./src/app/pages/btns/btns.module.ts",
		"pages-btns-btns-module"
	],
	"./pages/data-table/data-table.module": [
		"./src/app/pages/data-table/data-table.module.ts",
		"pages-data-table-data-table-module"
	],
	"./pages/form-controls/form-controls.module": [
		"./src/app/pages/form-controls/form-controls.module.ts",
		"pages-form-controls-form-controls-module"
	],
	"./pages/layout/layout.module": [
		"./src/app/pages/layout/layout.module.ts",
		"pages-layout-layout-module"
	],
	"./pages/navigation/navigation.module": [
		"./src/app/pages/navigation/navigation.module.ts",
		"pages-navigation-navigation-module"
	],
	"./pages/popups/popups.module": [
		"./src/app/pages/popups/popups.module.ts",
		"pages-popups-popups-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        redirectTo: '/formControls/autocomplete',
        pathMatch: 'full'
    },
    {
        path: 'formControls',
        loadChildren: './pages/form-controls/form-controls.module#FormControlsModule'
    },
    {
        path: 'navigation',
        loadChildren: './pages/navigation/navigation.module#NavigationModule'
    },
    {
        path: 'layout',
        loadChildren: './pages/layout/layout.module#LayoutModule'
    },
    {
        path: 'btns',
        loadChildren: './pages/btns/btns.module#BtnsModule'
    },
    {
        path: 'popups',
        loadChildren: './pages/popups/popups.module#PopupsModule'
    },
    {
        path: 'dataTable',
        loadChildren: './pages/data-table/data-table.module#DataTableModule'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-sidenav-container>\r\n  <mat-sidenav mode=\"push\" [(opened)]=\"opened\" (click)=\"navClickHandle($event)\">\r\n    <div>\r\n      <app-header></app-header>\r\n    </div>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <app-breadcrumb></app-breadcrumb>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n<a [@fadeTransAnimation] class=\"open-menu\" *ngIf=\"!opened\" (click)=\"opened = !opened;\">\r\n  <mat-icon >{{opened ? 'arrow_back_ios' : 'arrow_forward_ios'}}</mat-icon>\r\n</a>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container {\n  height: 100vh; }\n\nmat-sidenav {\n  min-width: 280px; }\n\nmat-sidenav-content {\n  overflow-y: auto;\n  overflow-x: hidden; }\n\napp-breadcrumb {\n  display: block;\n  margin-bottom: 10px; }\n\n.open-menu {\n  position: fixed;\n  top: 50%;\n  left: -5px;\n  display: inline-block;\n  z-index: 5;\n  cursor: pointer;\n  border-radius: 0 50% 50% 0;\n  color: rgba(0, 0, 0, 0.5);\n  background-color: rgba(153, 72, 206, 0.1);\n  transition: all 200ms; }\n\n.open-menu:hover {\n    color: #673ab7; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/animations */ "./src/app/shared/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.opened = false;
    }
    AppComponent.prototype.navClickHandle = function (evt) {
        var nodeName = evt.target.nodeName.toLowerCase();
        if (nodeName === 'span' || nodeName === 'a') {
            this.opened = false;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [
                Object(_shared_animations__WEBPACK_IMPORTED_MODULE_1__["getFadeTransAnimaiton"])()
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_cmpts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/cmpts/header/header.component */ "./src/app/shared/cmpts/header/header.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_cmpts_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/cmpts/menu-item/menu-item.component */ "./src/app/shared/cmpts/menu-item/menu-item.component.ts");
/* harmony import */ var _shared_cmpts_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/cmpts/breadcrumb/breadcrumb.component */ "./src/app/shared/cmpts/breadcrumb/breadcrumb.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_cmpts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _shared_cmpts_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_7__["MenuItemComponent"],
                _shared_cmpts_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/animations/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/animations/index.ts ***!
  \********************************************/
/*! exports provided: routerFadeAnimation, getFadeTransAnimaiton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.animations */ "./src/app/shared/animations/router.animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routerFadeAnimation", function() { return _router_animations__WEBPACK_IMPORTED_MODULE_0__["routerFadeAnimation"]; });

/* harmony import */ var _main_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.animations */ "./src/app/shared/animations/main.animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFadeTransAnimaiton", function() { return _main_animations__WEBPACK_IMPORTED_MODULE_1__["getFadeTransAnimaiton"]; });





/***/ }),

/***/ "./src/app/shared/animations/main.animations.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/animations/main.animations.ts ***!
  \******************************************************/
/*! exports provided: getFadeTransAnimaiton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFadeTransAnimaiton", function() { return getFadeTransAnimaiton; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function getFadeTransAnimaiton(dis) {
    if (dis === void 0) { dis = 280; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeTransAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: "translateX(" + dis + "px)"
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'translateX(0)'
            }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'translateX(0)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: "translateX(" + dis + "px)"
            }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/shared/animations/router.animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/router.animations.ts ***!
  \********************************************************/
/*! exports provided: routerFadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerFadeAnimation", function() { return routerFadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerFadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerFadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/shared/cmpts/breadcrumb/breadcrumb.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/cmpts/breadcrumb/breadcrumb.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\r\n  <a routerLink=\"/\" class=\"active\">HOME</a>\r\n  <a *ngFor=\"let breadcrumb of breadcrumbs\" [routerLink]=\"[breadcrumb.url]\">\r\n    {{ breadcrumb.label }}\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/cmpts/breadcrumb/breadcrumb.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/cmpts/breadcrumb/breadcrumb.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  display: inline-block;\n  box-shadow: 0 0 15px 1px rgba(255, 255, 255, 0.35);\n  overflow: hidden;\n  border-radius: 5px;\n  counter-reset: flag;\n  text-align: center; }\n  .breadcrumb a {\n    text-decoration: none;\n    outline: none;\n    display: block;\n    float: left;\n    font-size: 12px;\n    line-height: 36px;\n    color: #000;\n    padding: 0 10px 0 60px;\n    background: #eee;\n    background: linear-gradient(#fff, #eee);\n    position: relative; }\n  .breadcrumb a:first-child {\n      padding-left: 46px;\n      border-radius: 5px 0 0 5px; }\n  .breadcrumb a:first-child:before {\n      left: 14px; }\n  .breadcrumb a:last-child {\n      border-radius: 0 5px 5px 0;\n      padding-right: 20px; }\n  .breadcrumb a.active, .breadcrumb a:hover {\n      background: linear-gradient(#ccc, #eee); }\n  .breadcrumb a.active:after, .breadcrumb a:hover:after {\n        background: linear-gradient(135deg, #888, #ccc); }\n  .breadcrumb a:after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: -18px;\n      width: 36px;\n      height: 36px;\n      -webkit-transform: scale(0.707) rotate(45deg);\n              transform: scale(0.707) rotate(45deg);\n      z-index: 1;\n      background: linear-gradient(145deg, #ccc, #ddd);\n      box-shadow: 2px -2px 0 2px rgba(255, 255, 255, 0.4), 3px -3px 0 2px rgba(0, 0, 0, 0.1);\n      border-radius: 0 5px 0 50px; }\n  .breadcrumb a:last-child:after {\n      content: none; }\n  .breadcrumb a:before {\n      content: counter(flag);\n      counter-increment: flag;\n      border-radius: 100%;\n      width: 20px;\n      height: 20px;\n      line-height: 20px;\n      margin: 8px 0;\n      position: absolute;\n      top: 0;\n      left: 30px;\n      background: linear-gradient(#ccc, #cff);\n      font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/shared/cmpts/breadcrumb/breadcrumb.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/cmpts/breadcrumb/breadcrumb.component.ts ***!
  \*****************************************************************/
/*! exports provided: ROUTE_DATA_BREADCRUMB, BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_DATA_BREADCRUMB", function() { return ROUTE_DATA_BREADCRUMB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(activatedRoute, router, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.breadcrumbs = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to the NavigationEnd event
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            // set breadcrumbs
            var root = _this.activatedRoute.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
            _this.titleService.setTitle(_this.breadcrumbs[_this.breadcrumbs.length - 1].label);
        });
    };
    /**
     * Returns array of IBreadcrumb objects that represent the breadcrumb
     *
     * @class DetailComponent
     * @method getBreadcrumbs
     * @param {ActivateRoute} route
     * @param {string} url
     * @param {IBreadcrumb[]} breadcrumbs
     */
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        // get the child routes
        var children = route.children;
        // return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        // iterate over each children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            // verify primary route
            if (child.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"]) {
                continue;
            }
            // verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            // get the route's URL segment
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
            // append route URL to URL
            url += "/" + routeURL;
            // add breadcrumb
            var breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            // recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/cmpts/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/shared/cmpts/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/cmpts/header/header.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/cmpts/header/header.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-menu-item *ngFor=\"let item of menuList\" [menuItem]=\"item\"></app-menu-item>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/cmpts/header/header.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/cmpts/header/header.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/cmpts/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/cmpts/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _staticDatas_menuListData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../staticDatas/menuListData */ "./src/app/shared/staticDatas/menuListData/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.menuList = _staticDatas_menuListData__WEBPACK_IMPORTED_MODULE_1__["MenuListData"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/cmpts/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/cmpts/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/cmpts/menu-item/menu-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/cmpts/menu-item/menu-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel [(expanded)]=\"menuItem.isOpen\">\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>{{ menuItem.label }}</mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n  <ul class=\"menu-list\">\r\n    <li *ngFor=\"let item of menuItem.children\">\r\n      <a [routerLink]=\"item.link\" routerLinkActive=\"active\">\r\n        <span>{{ item.label }}</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</mat-expansion-panel>\r\n"

/***/ }),

/***/ "./src/app/shared/cmpts/menu-item/menu-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/cmpts/menu-item/menu-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/cmpts/menu-item/menu-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/cmpts/menu-item/menu-item.component.ts ***!
  \***************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
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

var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "menuItem", void 0);
    MenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-item',
            template: __webpack_require__(/*! ./menu-item.component.html */ "./src/app/shared/cmpts/menu-item/menu-item.component.html"),
            styles: [__webpack_require__(/*! ./menu-item.component.scss */ "./src/app/shared/cmpts/menu-item/menu-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/app/shared/staticDatas/menuListData/datas/btns.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/staticDatas/menuListData/datas/btns.ts ***!
  \***************************************************************/
/*! exports provided: btns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btns", function() { return btns; });
var btns = {
    label: 'Buttons & Indicators',
    link: '/btns',
    isOpen: true,
    children: [
        {
            label: 'Button',
            link: '/btns/button'
        }
    ]
};


/***/ }),

/***/ "./src/app/shared/staticDatas/menuListData/datas/dataTable.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/staticDatas/menuListData/datas/dataTable.ts ***!
  \********************************************************************/
/*! exports provided: dataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTable", function() { return dataTable; });
var dataTable = {
    label: 'Data Table',
    link: '/dataTable',
    isOpen: true,
    children: [
        {
            label: 'Paginator',
            link: '/dataTable/paginator'
        }
    ]
};


/***/ }),

/***/ "./src/app/shared/staticDatas/menuListData/datas/formControls.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/staticDatas/menuListData/datas/formControls.ts ***!
  \***********************************************************************/
/*! exports provided: FormControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControls", function() { return FormControls; });
var FormControls = {
    label: 'Form Controls',
    link: '/formControls',
    isOpen: true,
    children: [
        {
            label: 'AutoComplete',
            link: '/formControls/autocomplete'
        },
        {
            label: 'Checkbox',
            link: '/formControls/checkbox'
        },
        {
            label: 'Datepicker',
            link: '/formControls/datepicker'
        },
        {
            label: 'Input',
            link: '/formControls/input'
        },
        {
            label: 'Radio Button',
            link: '/formControls/radioButton'
        },
        {
            label: 'Select',
            link: '/formControls/select'
        },
        {
            label: 'Slider',
            link: '/formControls/slider'
        },
        {
            label: 'Slide Toggle',
            link: '/formControls/slideToggle'
        },
    ],
};


/***/ }),

/***/ "./src/app/shared/staticDatas/menuListData/datas/layout.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/staticDatas/menuListData/datas/layout.ts ***!
  \*****************************************************************/
/*! exports provided: layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
var layout = {
    label: 'Layout',
    link: '/layout',
    isOpen: true,
    children: [
        {
            label: 'Card',
            link: '/layout/card'
        },
        {
            label: 'Expansion Panel',
            link: '/layout/expansionPanel'
        },
    ]
};


/***/ }),

/***/ "./src/app/shared/staticDatas/menuListData/datas/navigation.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/staticDatas/menuListData/datas/navigation.ts ***!
  \*********************************************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
var navigation = {
    label: 'Navigation',
    link: '/navigation',
    isOpen: true,
    children: [
        {
            label: 'Menu',
            link: '/navigation/menu'
        },
        {
            label: 'Sidenav',
            link: '/navigation/sidenav'
        },
        {
            label: 'Toolbar',
            link: '/navigation/toolbar'
        },
    ]
};


/***/ }),

/***/ "./src/app/shared/staticDatas/menuListData/datas/popups.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/staticDatas/menuListData/datas/popups.ts ***!
  \*****************************************************************/
/*! exports provided: popups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popups", function() { return popups; });
var popups = {
    label: 'popups',
    link: '/popups',
    isOpen: true,
    children: [
        {
            label: 'Bottom Sheet',
            link: '/popups/bottomSheet'
        },
        {
            label: 'Dialog',
            link: '/popups/dialog'
        },
        {
            label: 'Snack Bar',
            link: '/popups/snackBar'
        },
        {
            label: 'Tooltip',
            link: '/popups/tooltip'
        },
    ]
};


/***/ }),

/***/ "./src/app/shared/staticDatas/menuListData/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/staticDatas/menuListData/index.ts ***!
  \**********************************************************/
/*! exports provided: MenuListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListData", function() { return MenuListData; });
/* harmony import */ var _datas_formControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datas/formControls */ "./src/app/shared/staticDatas/menuListData/datas/formControls.ts");
/* harmony import */ var _datas_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datas/navigation */ "./src/app/shared/staticDatas/menuListData/datas/navigation.ts");
/* harmony import */ var _datas_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datas/layout */ "./src/app/shared/staticDatas/menuListData/datas/layout.ts");
/* harmony import */ var _datas_btns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datas/btns */ "./src/app/shared/staticDatas/menuListData/datas/btns.ts");
/* harmony import */ var _datas_popups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datas/popups */ "./src/app/shared/staticDatas/menuListData/datas/popups.ts");
/* harmony import */ var _datas_dataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datas/dataTable */ "./src/app/shared/staticDatas/menuListData/datas/dataTable.ts");






var MenuListData = [
    _datas_formControls__WEBPACK_IMPORTED_MODULE_0__["FormControls"],
    _datas_navigation__WEBPACK_IMPORTED_MODULE_1__["navigation"],
    _datas_layout__WEBPACK_IMPORTED_MODULE_2__["layout"],
    _datas_btns__WEBPACK_IMPORTED_MODULE_3__["btns"],
    _datas_popups__WEBPACK_IMPORTED_MODULE_4__["popups"],
    _datas_dataTable__WEBPACK_IMPORTED_MODULE_5__["dataTable"]
];



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Reese\test\Typescript\material-design-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map