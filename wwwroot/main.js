(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar>\n  <span>Contact Application</span>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Contact Application';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
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
                _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_9__["ContactformComponent"],
                _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_10__["ContactlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["Routing"]
            ],
            providers: [_services_contact_service__WEBPACK_IMPORTED_MODULE_11__["ContactService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactlist/contactlist.component */ "./src/app/contactlist/contactlist.component.ts");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");



var appRoutes = [
    { path: '', pathMatch: 'full', component: _contactlist_contactlist_component__WEBPACK_IMPORTED_MODULE_1__["ContactlistComponent"] },
    { path: 'contactform', component: _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_2__["ContactformComponent"] }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/contactform/contactform.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactform/contactform.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactform/contactform.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactform/contactform.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  (ngSubmit)=\"onSubmit(contactFrm)\"  [formGroup]=\"contactFrm\">\n  <h2>{{data.modalTitle}}</h2>\n  \n  <div>\n      <mat-form-field appearance=\"outline\">\n      <mat-label>Name</mat-label>\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->\n      <!-- <mat-hint>Hint</mat-hint> -->\n      <mat-error *ngIf=\"formErrors.name\">\n        {{ formErrors.name }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input type=\"email\" matInput placeholder=\"email\" formControlName=\"email\">\n      <mat-error *ngIf=\"formErrors.email\">\n        {{ formErrors.email }}\n      </mat-error>\n    </mat-form-field>\n  \n  </div>\n  <p>\n      <mat-radio-group class=\"contact-radio-group\" formControlName=\"gender\" >\n        <mat-radio-button class=\"contact-radio-button\" *ngFor=\"let gndr of genders\" [value]=\"gndr.id\">\n          {{ gndr.name }}\n        </mat-radio-button>\n      </mat-radio-group>\n      <mat-error *ngIf=\"formErrors.gender\">\n        {{ formErrors.gender }}\n      </mat-error>\n  </p>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a birthday\" formControlName=\"birth\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    \n    <mat-error *ngIf=\"formErrors.birth \">\n      {{ formErrors.birth }}\n    </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <mat-select placeholder=\"Select a Technology\" formControlName=\"techno\">\n        <mat-option>-- None --</mat-option>\n        <mat-option *ngFor=\"let techno  of technologies\" [value]=\"techno\">\n          {{ techno }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"formErrors.techno \">\n        {{ formErrors.techno }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field appearance=\"outline\">\n      <textarea matInput placeholder=\"Message...\" formControlName=\"message\"></textarea>\n      <mat-error *ngIf=\"formErrors.message \">\n        {{ formErrors.message }}\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n  \n    <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>&nbsp;\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"contactFrm.invalid\">{{data.modalBtnTitle}}</button>\n  </div>\n  \n  </form>"

/***/ }),

/***/ "./src/app/contactform/contactform.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactform/contactform.component.ts ***!
  \******************************************************/
/*! exports provided: ContactformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactformComponent", function() { return ContactformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
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






var ContactformComponent = /** @class */ (function () {
    function ContactformComponent(data, fb, _contactService, dialogRef) {
        this.data = data;
        this.fb = fb;
        this._contactService = _contactService;
        this.dialogRef = dialogRef;
        this.indLoading = false;
        // contact: IContact;
        this.genders = [];
        this.technologies = [];
        // form errors model
        // tslint:disable-next-line:member-ordering
        this.formErrors = {
            'name': '',
            'email': '',
            'gender': '',
            'birth': '',
            'techno': '',
            'message': ''
        };
        // custom valdiation messages
        // tslint:disable-next-line:member-ordering
        this.validationMessages = {
            'name': {
                'maxlength': 'Name cannot be more than 50 characters long.',
                'required': 'Name is required.'
            },
            'email': {
                'email': 'Invalid email format.',
                'required': 'Email is required.'
            },
            'gender': {
                'required': 'Gender is required.'
            },
            'techno': {
                'required': 'Technology is required.'
            },
            'birth': {
                'required': 'Birthday is required.'
            },
            'message': {
                'required': 'message is required.'
            }
        };
    }
    ContactformComponent.prototype.ngOnInit = function () {
        var _this = this;
        // built contact form
        this.contactFrm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            birth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            techno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.genders = _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders;
        this.technologies = _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].technologies;
        // subscribe on value changed event of form to show validation message
        this.contactFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        if (this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create) {
            this.contactFrm.reset();
        }
        else {
            this.contactFrm.setValue(this.data.contact);
        }
        this.SetControlsState(this.data.dbops === _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete ? false : true);
    };
    // form value change event
    ContactformComponent.prototype.onValueChanged = function (data) {
        if (!this.contactFrm) {
            return;
        }
        var form = this.contactFrm;
        // tslint:disable-next-line:forin
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ContactformComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        var contactData = this.mapDateData(formData.value);
        switch (this.data.dbops) {
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                this._contactService.addContact(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'addContact', contactData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                this._contactService.updateContact(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'updateContact', contactData.id, contactData).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
            case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                this._contactService.deleteContact(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'deleteContact', contactData.id).subscribe(function (data) {
                    // Success
                    if (data.message) {
                        _this.dialogRef.close('success');
                    }
                    else {
                        _this.dialogRef.close('error');
                    }
                }, function (error) {
                    _this.dialogRef.close('error');
                });
                break;
        }
    };
    ContactformComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.contactFrm.enable() : this.contactFrm.disable();
    };
    ContactformComponent.prototype.mapDateData = function (contact) {
        contact.birth = new Date(contact.birth).toISOString();
        return contact;
    };
    ContactformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactform',
            template: __webpack_require__(/*! ./contactform.component.html */ "./src/app/contactform/contactform.component.html"),
            styles: [__webpack_require__(/*! ./contactform.component.css */ "./src/app/contactform/contactform.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ContactformComponent);
    return ContactformComponent;
}());



/***/ }),

/***/ "./src/app/contactlist/contactlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .contactlist{\r\n  text-align: center;\r\n} */\r\n\r\n.spinner{\r\n  top: 45%;\r\n  left: 47%;\r\n  position: fixed;\r\n}\r\n\r\n.contactlist-container, #paginator {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n  max-width: 1200px;\r\n  max-height: 700px;\r\n  overflow: auto;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loadingState; else contactlist\">\n<mat-spinner></mat-spinner>\n</div>\n<ng-template class=\"contactlist\" #contactlist>\n  <h2 style=\"text-align: center;\">Contact List</h2>\n  <div class=\"contactlist-container mat-elevation-z8\">\n    <div><button title=\"Create\" mat-raised-button color=\"accent\" (click)=\"addContact()\">Create</button></div>\n    <table mat-table #table [dataSource]=\"dataSource\">\n\n      <!-- Id Column -->\n      <!-- <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> Id </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container> -->\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <!-- Email Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container>\n\n      <!-- Gender Column -->\n      <ng-container matColumnDef=\"gender\">\n        <th mat-header-cell *matHeaderCellDef> Gender </th>\n        <td mat-cell *matCellDef=\"let element\"> {{getGender(element.gender)}} </td>\n      </ng-container>\n\n      <!-- Birth Column -->\n      <ng-container matColumnDef=\"birth\">\n        <th mat-header-cell *matHeaderCellDef> Birthday </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.birth | date: 'MM-dd-yyyy' }} </td>\n      </ng-container>\n\n      <!-- Technology Column -->\n      <ng-container matColumnDef=\"techno\">\n        <th mat-header-cell *matHeaderCellDef> Technology </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.techno}} </td>\n      </ng-container>\n\n      <!-- Message Column -->\n      <ng-container matColumnDef=\"message\">\n        <th mat-header-cell *matHeaderCellDef> Message </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> Action </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button title=\"Edit\" mat-raised-button color=\"primary\" (click)=\"editContact(element.id)\">Edit</button>\n          <button title=\"Delete\" mat-raised-button color=\"warn\" (click)=\"deleteContact(element.id)\">Delete</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/contactlist/contactlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactlist/contactlist.component.ts ***!
  \******************************************************/
/*! exports provided: ContactlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactlistComponent", function() { return ContactlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contactform_contactform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contactform/contactform.component */ "./src/app/contactform/contactform.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DBOperation */ "./src/app/shared/DBOperation.ts");
/* harmony import */ var _shared_Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Global */ "./src/app/shared/Global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactlistComponent = /** @class */ (function () {
    function ContactlistComponent(snackBar, _contactService, dialog) {
        this.snackBar = snackBar;
        this._contactService = _contactService;
        this.dialog = dialog;
        // set columns that will need to show in listing table
        this.displayedColumns = ['name', 'email', 'gender', 'birth', 'techno', 'message', 'action'];
        // setting up datasource for material table
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    ContactlistComponent.prototype.ngOnInit = function () {
        this.loadingState = true;
        this.loadContacts();
    };
    ContactlistComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_contactform_contactform_component__WEBPACK_IMPORTED_MODULE_2__["ContactformComponent"], {
            width: '500px',
            data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, contact: this.contact }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result === 'success') {
                _this.loadingState = true;
                _this.loadContacts();
                switch (_this.dbops) {
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create:
                        _this.showMessage('Data successfully added.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update:
                        _this.showMessage('Data successfully updated.');
                        break;
                    case _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete:
                        _this.showMessage('Data successfully deleted.');
                        break;
                }
            }
            else if (result === 'error') {
                _this.showMessage('There is some issue in saving records, please contact to system administrator!');
            }
            else {
                // this.showMessage('Please try again, something went wrong');
            }
        });
    };
    ContactlistComponent.prototype.loadContacts = function () {
        var _this = this;
        this._contactService.getAllContact(_shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].BASE_USER_ENDPOINT + 'getAllContact')
            .subscribe(function (contacts) {
            _this.loadingState = false;
            _this.dataSource.data = contacts;
        });
    };
    ContactlistComponent.prototype.getGender = function (gender) {
        return _shared_Global__WEBPACK_IMPORTED_MODULE_5__["Global"].genders.filter(function (ele) { return ele.id === gender; }).map(function (ele) { return ele.name; })[0];
    };
    ContactlistComponent.prototype.addContact = function () {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].create;
        this.modalTitle = 'Add New Contact';
        this.modalBtnTitle = 'Add';
        this.openDialog();
    };
    ContactlistComponent.prototype.editContact = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].update;
        this.modalTitle = 'Edit Contact';
        this.modalBtnTitle = 'Update';
        this.contact = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContactlistComponent.prototype.deleteContact = function (id) {
        this.dbops = _shared_DBOperation__WEBPACK_IMPORTED_MODULE_4__["DBOperation"].delete;
        this.modalTitle = 'Confirm to Delete ?';
        this.modalBtnTitle = 'Delete';
        this.contact = this.dataSource.data.filter(function (x) { return x.id === id; })[0];
        this.openDialog();
    };
    ContactlistComponent.prototype.showMessage = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 3000
        });
    };
    ContactlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactlist',
            template: __webpack_require__(/*! ./contactlist.component.html */ "./src/app/contactlist/contactlist.component.html"),
            styles: [__webpack_require__(/*! ./contactlist.component.css */ "./src/app/contactlist/contactlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ContactlistComponent);
    return ContactlistComponent;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    // get all contact data
    ContactService.prototype.getAllContact = function (url) {
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // insert new contact details
    ContactService.prototype.addContact = function (url, contact) {
        return this.http.post(url, JSON.stringify(contact), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // update contact details
    ContactService.prototype.updateContact = function (url, id, contact) {
        var newurl = url + "?id=" + id;
        return this.http.put(newurl, contact, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // delete contact information
    ContactService.prototype.deleteContact = function (url, id) {
        var newurl = url + "?id=" + id; // DELETE api/contact?id=42
        return this.http.delete(newurl, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // custom handler
    ContactService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/shared/DBOperation.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DBOperation.ts ***!
  \***************************************/
/*! exports provided: DBOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBOperation", function() { return DBOperation; });
var DBOperation;
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(DBOperation || (DBOperation = {}));


/***/ }),

/***/ "./src/app/shared/Global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/Global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.BASE_USER_ENDPOINT = 'api/contact/';
    Global.genders = [{
            name: 'Male',
            id: 0,
        }, {
            name: 'Female',
            id: 1
        }];
    Global.technologies = ['JavaScript', 'SharePoint', 'C#'];
    return Global;
}());



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

module.exports = __webpack_require__(/*! C:\Jayesh\contact-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map