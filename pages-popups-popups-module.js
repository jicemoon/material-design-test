(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popups-popups-module"],{

/***/ "./src/app/pages/popups/bottom-sheet/bottom-sheet-overview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/popups/bottom-sheet/bottom-sheet-overview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event, 'Keep')\">\r\n    <span mat-line>Google Keep</span>\r\n    <span mat-line>Add to a note</span>\r\n  </a>\r\n\r\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event, 'Docs')\">\r\n    <span mat-line>Google Docs</span>\r\n    <span mat-line>Embed in a document</span>\r\n  </a>\r\n\r\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event, 'Plus')\">\r\n    <span mat-line>Google Plus</span>\r\n    <span mat-line>Share with your friends</span>\r\n  </a>\r\n\r\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event, 'Hangouts')\">\r\n    <span mat-line>Google Hangouts</span>\r\n    <span mat-line>Show to your coworkers</span>\r\n  </a>\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./src/app/pages/popups/bottom-sheet/bottom-sheet-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/popups/bottom-sheet/bottom-sheet-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: BottomSheetOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewComponent", function() { return BottomSheetOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottomSheetOverviewComponent = /** @class */ (function () {
    function BottomSheetOverviewComponent(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    BottomSheetOverviewComponent.prototype.openLink = function (event, item) {
        this.bottomSheetRef.dismiss(item);
        event.preventDefault();
    };
    BottomSheetOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-sheet-overview',
            template: __webpack_require__(/*! ./bottom-sheet-overview.component.html */ "./src/app/pages/popups/bottom-sheet/bottom-sheet-overview.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], BottomSheetOverviewComponent);
    return BottomSheetOverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/popups/bottom-sheet/bottom-sheet.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/popups/bottom-sheet/bottom-sheet.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <h4>Bottom Sheet Overview</h4>\r\n  <div>\r\n    <p>You have receive a file called \"cat-picture.jpeg\".</p>\r\n    <button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/popups/bottom-sheet/bottom-sheet.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/popups/bottom-sheet/bottom-sheet.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/popups/bottom-sheet/bottom-sheet.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/popups/bottom-sheet/bottom-sheet.component.ts ***!
  \*********************************************************************/
/*! exports provided: BottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-sheet-overview.component */ "./src/app/pages/popups/bottom-sheet/bottom-sheet-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @title Bottom Sheet Overview
 */
var BottomSheetComponent = /** @class */ (function () {
    function BottomSheetComponent(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    BottomSheetComponent.prototype.openBottomSheet = function () {
        var bs = this.bottomSheet.open(_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_2__["BottomSheetOverviewComponent"]);
        bs.afterDismissed().subscribe(function (data) {
            console.log(data);
        });
    };
    BottomSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-sheet',
            template: __webpack_require__(/*! ./bottom-sheet.component.html */ "./src/app/pages/popups/bottom-sheet/bottom-sheet.component.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.component.scss */ "./src/app/pages/popups/bottom-sheet/bottom-sheet.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"]])
    ], BottomSheetComponent);
    return BottomSheetComponent;
}());



/***/ }),

/***/ "./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n<div mat-dialog-content>\r\n  <p>What's your favorite animal?</p>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.animal\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DialogOverviewExampleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialogComponent", function() { return DialogOverviewExampleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogOverviewExampleDialogComponent = /** @class */ (function () {
    function DialogOverviewExampleDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.component.html */ "./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-example-dialog.component.scss */ "./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialogComponent);
    return DialogOverviewExampleDialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/popups/dialog/dialog.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/popups/dialog/dialog.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <h4></h4>\r\n  <div>\r\n    <ol>\r\n      <li>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n        </mat-form-field>\r\n      </li>\r\n      <li>\r\n        <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n      </li>\r\n      <li *ngIf=\"animal\">\r\n        You chose: <i>{{animal}}</i>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/popups/dialog/dialog.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/popups/dialog/dialog.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/popups/dialog/dialog.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/popups/dialog/dialog.component.ts ***!
  \*********************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_overview_example_dialog_dialog_overview_example_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-overview-example-dialog/dialog-overview-example-dialog.component */ "./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_overview_example_dialog_dialog_overview_example_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogOverviewExampleDialogComponent"], {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/pages/popups/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/pages/popups/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/popups/popups-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/popups/popups-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PopupsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupsRoutingModule", function() { return PopupsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _popups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popups.component */ "./src/app/pages/popups/popups.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet.component */ "./src/app/pages/popups/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/pages/popups/dialog/dialog.component.ts");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./src/app/pages/popups/snack-bar/snack-bar.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/pages/popups/tooltip/tooltip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _popups_component__WEBPACK_IMPORTED_MODULE_2__["PopupsComponent"],
        data: {
            breadcrumb: 'Popups'
        },
        children: [
            {
                path: '',
                redirectTo: 'bottomSheet',
                pathMatch: 'full'
            },
            {
                path: 'bottomSheet',
                component: _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_3__["BottomSheetComponent"],
                data: {
                    breadcrumb: 'Bottom Sheet'
                },
            },
            {
                path: 'dialog',
                component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"],
                data: {
                    breadcrumb: 'Dialog'
                },
            },
            {
                path: 'snackBar',
                component: _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_5__["SnackBarComponent"],
                data: {
                    breadcrumb: 'Snack Bar'
                },
            },
            {
                path: 'tooltip',
                component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"],
                data: {
                    breadcrumb: 'Tooltip'
                },
            },
        ]
    }
];
var PopupsRoutingModule = /** @class */ (function () {
    function PopupsRoutingModule() {
    }
    PopupsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PopupsRoutingModule);
    return PopupsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/popups/popups.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/popups/popups.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/popups/popups.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/popups/popups.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/popups/popups.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/popups/popups.component.ts ***!
  \**************************************************/
/*! exports provided: PopupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupsComponent", function() { return PopupsComponent; });
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

var PopupsComponent = /** @class */ (function () {
    function PopupsComponent() {
    }
    PopupsComponent.prototype.ngOnInit = function () {
    };
    PopupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popups',
            template: __webpack_require__(/*! ./popups.component.html */ "./src/app/pages/popups/popups.component.html"),
            styles: [__webpack_require__(/*! ./popups.component.scss */ "./src/app/pages/popups/popups.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupsComponent);
    return PopupsComponent;
}());



/***/ }),

/***/ "./src/app/pages/popups/popups.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/popups/popups.module.ts ***!
  \***********************************************/
/*! exports provided: PopupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupsModule", function() { return PopupsModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _popups_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popups-routing.module */ "./src/app/pages/popups/popups-routing.module.ts");
/* harmony import */ var _popups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popups.component */ "./src/app/pages/popups/popups.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet-overview.component */ "./src/app/pages/popups/bottom-sheet/bottom-sheet-overview.component.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bottom-sheet/bottom-sheet.component */ "./src/app/pages/popups/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/pages/popups/dialog/dialog.component.ts");
/* harmony import */ var _dialog_overview_example_dialog_dialog_overview_example_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog-overview-example-dialog/dialog-overview-example-dialog.component */ "./src/app/pages/popups/dialog-overview-example-dialog/dialog-overview-example-dialog.component.ts");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./src/app/pages/popups/snack-bar/snack-bar.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/pages/popups/tooltip/tooltip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PopupsModule = /** @class */ (function () {
    function PopupsModule() {
    }
    PopupsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _popups_routing_module__WEBPACK_IMPORTED_MODULE_4__["PopupsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            ],
            declarations: [
                _popups_component__WEBPACK_IMPORTED_MODULE_5__["PopupsComponent"],
                _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_7__["BottomSheetComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"],
                _dialog_overview_example_dialog_dialog_overview_example_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogOverviewExampleDialogComponent"],
                _bottom_sheet_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_6__["BottomSheetOverviewComponent"],
                _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_10__["SnackBarComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"],
            ],
            entryComponents: [
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"],
                _dialog_overview_example_dialog_dialog_overview_example_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogOverviewExampleDialogComponent"],
                _bottom_sheet_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_6__["BottomSheetOverviewComponent"],
            ]
        })
    ], PopupsModule);
    return PopupsModule;
}());



/***/ }),

/***/ "./src/app/pages/popups/snack-bar/snack-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/popups/snack-bar/snack-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <h4>Snack-bar with a custom component</h4>\r\n  <div>\r\n    <mat-form-field>\r\n      <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput value=\"Dance\" placeholder=\"Action\" #action>\r\n    </mat-form-field>\r\n\r\n    <button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/popups/snack-bar/snack-bar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/popups/snack-bar/snack-bar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/popups/snack-bar/snack-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/popups/snack-bar/snack-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackBarComponent = /** @class */ (function () {
    function SnackBarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackBarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
    };
    SnackBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snack-bar',
            template: __webpack_require__(/*! ./snack-bar.component.html */ "./src/app/pages/popups/snack-bar/snack-bar.component.html"),
            styles: [__webpack_require__(/*! ./snack-bar.component.scss */ "./src/app/pages/popups/snack-bar/snack-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarComponent);
    return SnackBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/popups/tooltip/tooltip.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/popups/tooltip/tooltip.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container ec1\">\r\n  <h4>Basic tooltip</h4>\r\n  <div>\r\n    <button\r\n      mat-raised-button\r\n      matTooltip=\"Info about the action\"\r\n      aria-label=\"Button that displays a tooltip when focused or hovered over\">\r\n      Action\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec2\">\r\n  <h4>Tooltip with a custom position</h4>\r\n  <div>\r\n    <mat-form-field class=\"example-user-input\">\r\n      <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\r\n        <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\r\n          {{positionOption}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <button\r\n      mat-raised-button\r\n      matTooltip=\"Info about the action\"\r\n      [matTooltipPosition]=\"position.value\"\r\n      aria-label=\"Button that displays a tooltip in various positions\">\r\n      Action\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec3\">\r\n  <h4>Tooltip that can have a custom class applied.</h4>\r\n  <div>\r\n    <button mat-raised-button\r\n        matTooltip=\"Info about the action\"\r\n        matTooltipClass=\"example-tooltip-red\"\r\n        aria-label=\"Button that shows a red tooltip\"\r\n        class=\"example-button\">\r\n      Red-tooltip Action\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec4\">\r\n  <h4>Tooltip with a show and hide delay</h4>\r\n  <div>\r\n    <mat-form-field class=\"example-user-input\">\r\n      <input matInput placeholder=\"Show delay (milliseconds)\"\r\n          type=\"number\"\r\n          aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\"\r\n          [formControl]=\"showDelay\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-user-input\">\r\n      <input matInput placeholder=\"Hide delay (milliseconds)\"\r\n          type=\"number\"\r\n          aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\"\r\n          [formControl]=\"hideDelay\">\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button\r\n          matTooltip=\"Info about the action\"\r\n          [matTooltipShowDelay]=\"showDelay.value\"\r\n          [matTooltipHideDelay]=\"hideDelay.value\"\r\n          aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\r\n      Action\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec5\">\r\n  <h4>Tooltip that can be disabled</h4>\r\n  <div>\r\n    <button mat-raised-button\r\n        matTooltip=\"Info about the action\"\r\n        [matTooltipDisabled]=\"disabled.value\"\r\n        aria-label=\"Button that displays a tooltip that can be programatically disabled\">\r\n      Action\r\n    </button>\r\n\r\n    <mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\r\n      Tooltip disabled\r\n    </mat-checkbox>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec6\">\r\n  <h4>Tooltip that can be manually shown/hidden</h4>\r\n  <div>\r\n    <div>\r\n      <span> Mouse over to </span>\r\n      <button mat-button\r\n          (mouseenter)=\"tooltip.show()\"\r\n          aria-label=\"Button that progamatically shows a tooltip on another button\"\r\n          class=\"example-action-button\">\r\n        show\r\n      </button>\r\n      <button mat-button\r\n          (mouseenter)=\"tooltip.hide()\"\r\n          aria-label=\"Button that progamatically hides a tooltip on another button\"\r\n          class=\"example-action-button\">\r\n        hide\r\n      </button>\r\n      <button mat-button\r\n          (mouseenter)=\"tooltip.toggle()\"\r\n          aria-label=\"Button that progamatically toggles a tooltip on another button to show/hide\"\r\n          class=\"example-action-button\">\r\n        toggle show/hide\r\n      </button>\r\n    </div>\r\n\r\n    <button mat-raised-button #tooltip=\"matTooltip\"\r\n        matTooltip=\"Info about the action\"\r\n        matTooltipPosition=\"right\"\r\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\r\n      Action\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec7\">\r\n  <h4>Tooltip with a changing message</h4>\r\n  <div>\r\n    <mat-form-field class=\"example-user-input\">\r\n      <input matInput placeholder=\"Tooltip message\" [formControl]=\"message\">\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button\r\n            [matTooltip]=\"message.value\"\r\n            aria-label=\"Button that displays a tooltip with a custom message\">\r\n      Action\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec8\">\r\n  <h4>Tooltip with a show and hide delay</h4>\r\n  <div>\r\n    <button mat-raised-button\r\n        matTooltip=\"By default, I delay\"\r\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\r\n      Button with delay-default tooltip\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"example-container ec9\">\r\n  <h4>Tooltip that demonstrates auto-hiding when it clips out of its scrolling container</h4>\r\n  <div>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\r\n        <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\r\n          {{positionOption}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <div class=\"example-container\" cdk-scrollable>\r\n      <button\r\n          mat-raised-button\r\n          #tooltip=\"matTooltip\"\r\n          matTooltip=\"Info about the action\"\r\n          [matTooltipPosition]=\"position.value\"\r\n          matTooltipHideDelay=\"100000\"\r\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\r\n          class=\"example-button\">\r\n        Action\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/popups/tooltip/tooltip.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/popups/tooltip/tooltip.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container.ec7 .example-user-input {\n  margin-right: 8px; }\n\n.example-container.ec9 {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc; }\n\n.example-container.ec9 .example-button {\n    display: block;\n    width: 48px;\n    margin: 80px auto 400px; }\n\n.example-container .example-button {\n  margin: 16px; }\n\n.example-container .example-tooltip-red {\n  background: #b71c1c; }\n"

/***/ }),

/***/ "./src/app/pages/popups/tooltip/tooltip.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/popups/tooltip/tooltip.component.ts ***!
  \***********************************************************/
/*! exports provided: myCustomTooltipDefaults, TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myCustomTooltipDefaults", function() { return myCustomTooltipDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Custom options the configure the tooltip's default show/hide delays. */
var myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positionOptions[0]);
        this.showDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1000);
        this.hideDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](2000);
        this.disabled = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Info about the action');
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/pages/popups/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/pages/popups/tooltip/tooltip.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-popups-popups-module.js.map