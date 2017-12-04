webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_monthly_balance_monthly_balance_component__ = __webpack_require__("../../../../../src/app/components/monthly-balance/monthly-balance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_yearly_balance_yearly_balance_component__ = __webpack_require__("../../../../../src/app/components/yearly-balance/yearly-balance.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'monthly-balance/:year/:month/add-expenses', component: __WEBPACK_IMPORTED_MODULE_4__components_monthly_balance_monthly_balance_component__["a" /* MonthlyBalanceComponent */] },
    { path: 'monthly-balance/:year/:month', component: __WEBPACK_IMPORTED_MODULE_4__components_monthly_balance_monthly_balance_component__["a" /* MonthlyBalanceComponent */] },
    { path: 'monthly-balance/:year', component: __WEBPACK_IMPORTED_MODULE_4__components_monthly_balance_monthly_balance_component__["a" /* MonthlyBalanceComponent */] },
    { path: 'monthly-balance', component: __WEBPACK_IMPORTED_MODULE_4__components_monthly_balance_monthly_balance_component__["a" /* MonthlyBalanceComponent */] },
    { path: 'yearly-balance/:year', component: __WEBPACK_IMPORTED_MODULE_5__components_yearly_balance_yearly_balance_component__["a" /* YearlyBalanceComponent */] },
    { path: 'yearly-balance', component: __WEBPACK_IMPORTED_MODULE_5__components_yearly_balance_yearly_balance_component__["a" /* YearlyBalanceComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n        <app-messages></app-messages>\n    </div>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular Budget Planner';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_monthly_balance_monthly_balance_component__ = __webpack_require__("../../../../../src/app/components/monthly-balance/monthly-balance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_yearly_balance_yearly_balance_component__ = __webpack_require__("../../../../../src/app/components/yearly-balance/yearly-balance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_remote_service__ = __webpack_require__("../../../../../src/app/services/remote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interceptors_auth_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Modules

// Services



// Interceptors





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_monthly_balance_monthly_balance_component__["a" /* MonthlyBalanceComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_yearly_balance_yearly_balance_component__["a" /* YearlyBalanceComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__interceptors_auth_interceptor__["a" /* AuthInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_12__services_remote_service__["a" /* RemoteService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container modal-footer\">\n        <p>Budget Planner © SoftUni 2017 <span *ngIf=\"authService.isAuthed()\">| Logged-in as: {{authService.getUsername()}}</span></p>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(authService) {
        this.authService = authService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class='navbar navbar-dark bg-secondary'>\n        <div class='container'>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <a *ngIf=\"authService.isAuthed()\" class=\"nav-link\" routerLink=\"/monthly-balance/{{year}}/{{month}}\">Monthly Balance</a>\n                    <a *ngIf=\"authService.isAuthed()\" class=\"nav-link\" routerLink=\"/yearly-balance/{{year}}\">Yearly Balance</a>\n                    <a *ngIf=\"authService.isAuthed()\" class=\"nav-link\" href=\"#\"\n                       title=\"Logged-in as: {{authService.getUsername()}}\" (click)=\"logout($event)\">Logout</a>\n                    <a *ngIf=\"!authService.isAuthed()\" class=\"nav-link\" routerLink=\"/login\">Login</a>\n                    <a *ngIf=\"!authService.isAuthed()\" class=\"nav-link\" routerLink=\"/register\">Register</a>\n                </div>\n            </div>\n        </div>\n    </nav>\n</header>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
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
    function HeaderComponent(authService, route, router, messageService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.year = +this.route.snapshot.paramMap.get('year') || +(new Date()).getFullYear();
        this.month = +this.route.snapshot.paramMap.get('month') || +(new Date()).getMonth() + 1;
    };
    HeaderComponent.prototype.logout = function (e) {
        e.preventDefault();
        this.authService.destroySession();
        this.messageService.add('Successfully logged out.');
        this.router.navigateByUrl('/login');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row space-top\">\n    <div class=\"col-md-12\">\n        <h1>Login</h1>\n    </div>\n</div>\n<form (submit)=\"login($event)\">\n    <div class=\"row space-top\">\n        <div class=\"col-md-3\">\n            <div class=\"form-group\">\n                <label for=\"email\" class=\"form-control-label\">E-mail</label>\n                <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" placeholder=\"E-mail\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\" class=\"form-control-label\">Password</label>\n                <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" placeholder=\"Password\" />\n            </div>\n            <input type=\"submit\" class=\"btn btn-secondary\" value=\"Login\" />\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_remote_service__ = __webpack_require__("../../../../../src/app/services/remote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, remoteService, authService, messageService) {
        this.route = route;
        this.remoteService = remoteService;
        this.authService = authService;
        this.messageService = messageService;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_User__["a" /* User */]('', '', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthed()) {
            this.messageService.add('Already logged in! Redirecting...');
            this.redirectToPage();
        }
    };
    LoginComponent.prototype.login = function (e) {
        var _this = this;
        e.preventDefault();
        var email = this.user.email.trim();
        var password = this.user.password.trim();
        this.messageService.add("Trying to login with email \"" + email + "\"...");
        this.remoteService.login(email, password)
            .subscribe(function (res) {
            _this.messageService.add('Login response: ' + JSON.stringify(res));
            if (res.success) {
                _this.authService.saveSession(res);
                _this.redirectToPage();
            }
            else if (res.errors) {
                _this.messageService.add('Failed to login: ' + JSON.stringify(res.errors));
            }
        }, function (error) {
            _this.messageService.add(error.message);
            console.warn(error);
        });
    };
    LoginComponent.prototype.redirectToPage = function () {
        var year = +(new Date()).getFullYear();
        var month = +(new Date()).getMonth() + 1;
        this.route.navigateByUrl("/monthly-balance/" + year + "/" + month);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_remote_service__["a" /* RemoteService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    padding-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n  <h2>Messages</h2>\n  <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/monthly-balance/monthly-balance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/monthly-balance/monthly-balance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row space-top\">\n    <div class=\"col-md-12\">\n        <h1>Welcome to Budget Planner</h1>\n    </div>\n</div>\n<div class=\"row space-top \">\n    <div class=\"col-md-12 \">\n        <div class=\"card bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2 id=\"month\">November 2017</h2>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 space-top\">\n                            <h4>Planner</h4>\n                            <form>\n                                <div class=\"form-group\">\n                                    <label class=\"form-control-label\" for=\"income\">Income:</label>\n                                    <input class=\"form-control\" id=\"income\" name=\"income\" type=\"number\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"form-control-label\" id=\"budget\" for=\"budget\">Budget:</label>\n                                    <input class=\"form-control\" name=\"budget\" type=\"number\">\n                                </div>\n                                <input class=\"btn btn-secondary\" value=\"Save\" type=\"submit\">\n                            </form>\n                        </div>\n                        <div class=\"col-md-8 space-top\">\n                            <div class=\"row\">\n                                <h4 class=\"col-md-9\">Expenses</h4>\n                                <a href=\"expenses.html\" class=\"btn btn-secondary ml-2 mb-2\">Add expenses</a>\n                            </div>\n                            <table class=\"table\">\n                                <thead>\n                                <tr>\n                                    <th>Name</th>\n                                    <th>Category</th>\n                                    <th>Cost</th>\n                                    <th>Payment Date</th>\n                                    <th></th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                    <td>Snacks</td>\n                                    <td>Non-essential</td>\n                                    <td>15.00</td>\n                                    <td>30-11-2017</td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-secondary\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Rent</td>\n                                    <td>Fixed</td>\n                                    <td>330.00</td>\n                                    <td>15-11-2017</td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-secondary\">Delete</a>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Gasoline</td>\n                                    <td>Variable</td>\n                                    <td>50.00</td>\n                                    <td>-</td>\n                                    <td>\n                                        <a href=\"#\" class=\"btn btn-secondary\">Delete</a>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/monthly-balance/monthly-balance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyBalanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MonthlyBalanceComponent = (function () {
    function MonthlyBalanceComponent(route, authService, messageService) {
        this.route = route;
        this.authService = authService;
        this.messageService = messageService;
    }
    MonthlyBalanceComponent.prototype.ngOnInit = function () {
        if (!this.authService.isAuthed()) {
            this.messageService.add('Access denied! Redirecting to login...');
            this.route.navigateByUrl("/login");
        }
    };
    MonthlyBalanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monthly-balance',
            template: __webpack_require__("../../../../../src/app/components/monthly-balance/monthly-balance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/monthly-balance/monthly-balance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], MonthlyBalanceComponent);
    return MonthlyBalanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row space-top\">\n    <div class=\"col-md-12\">\n        <h1>Register</h1>\n    </div>\n</div>\n<form (submit)=\"register($event)\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"form-group\">\n                <label for=\"name\" class=\"form-control-label\">Name</label>\n                <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\" class=\"form-control\" placeholder=\"Name\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\" class=\"form-control-label\">E-mail</label>\n                <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" placeholder=\"E-mail\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\" class=\"form-control-label\">Password</label>\n                <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" placeholder=\"Password\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"confPassword\" class=\"form-control-label\">Repeat password</label>\n                <input type=\"password\" id=\"confPassword\" name=\"confPassword\" [(ngModel)]=\"user.confPassword\" class=\"form-control\" placeholder=\"Password\" />\n            </div>\n            <input type=\"submit\" class=\"btn btn-secondary\" value=\"Register\"/>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_remote_service__ = __webpack_require__("../../../../../src/app/services/remote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(route, remoteService, authService, messageService) {
        this.route = route;
        this.remoteService = remoteService;
        this.authService = authService;
        this.messageService = messageService;
        this.user = new __WEBPACK_IMPORTED_MODULE_5__models_User__["a" /* User */]('', '', '');
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthed()) {
            this.messageService.add('Already logged in! Redirecting...');
            this.redirectToPage();
        }
    };
    RegisterComponent.prototype.register = function (e) {
        var _this = this;
        e.preventDefault();
        var name = this.user.name.trim();
        var email = this.user.email.trim();
        var password = this.user.password.trim();
        this.messageService.add("Trying to register with name \"" + name + "\" and email \"" + email + "\"...");
        this.remoteService.register(name, email, password)
            .subscribe(function (res) {
            _this.messageService.add('Register response: ' + JSON.stringify(res));
            if (res.success) {
                _this.messageService.add("Registered! Trying to login with email \"" + email + "\"...");
                _this.remoteService.login(email, password)
                    .subscribe(function (res) {
                    _this.messageService.add('Login response: ' + JSON.stringify(res));
                    if (res.success) {
                        _this.authService.saveSession(res);
                        _this.redirectToPage();
                    }
                    else if (res.errors) {
                        _this.messageService.add('Failed to login: ' + JSON.stringify(res.errors));
                    }
                }, function (error) { return console.warn(error); });
            }
            else if (res.errors) {
                _this.messageService.add('Failed to register: ' + JSON.stringify(res.errors));
            }
        }, function (error) {
            _this.messageService.add(error.message);
            console.warn(error);
        });
    };
    RegisterComponent.prototype.redirectToPage = function () {
        var year = +(new Date()).getFullYear();
        var month = +(new Date()).getMonth() + 1;
        this.route.navigateByUrl("/monthly-balance/" + year + "/" + month);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_remote_service__["a" /* RemoteService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/yearly-balance/yearly-balance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/yearly-balance/yearly-balance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row space-top\">\n    <div class=\"col-md-12\">\n        <h1>Yearly Balance</h1>\n    </div>\n</div>\n<div class=\"row space-top col-md-12\">\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>November</h2>\n                    <h4>Year 2017</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" id=\"budget\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" id=\"balance\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>December</h2>\n                    <h4>Year 2017</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>January</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>February</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n\n</div>\n<div class=\"row space-top col-md-12\">\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>March</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>April</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>May</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>June</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n\n</div>\n<div class=\"row space-top col-md-12\">\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>July</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>August</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>September</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n        <div class=\"card text-white bg-secondary\">\n            <div class=\"card-body\">\n                <blockquote class=\"card-blockquote\">\n                    <h2>October</h2>\n                    <h4>Year 2018</h4>\n                    <label for=\"budget\">Budget:</label>\n                    <input class=\"col-md-9\" name=\"budget\" disabled=\"\">\n                    <label for=\"balance\">Balance:</label>\n                    <input class=\"col-md-9\" name=\"balance\" disabled=\"\">\n                    <div class=\"space-top\">\n                        <a href=\"monthly.html\" class=\"btn btn-secondary\">Details</a>\n                    </div>\n                </blockquote>\n            </div>\n        </div>\n    </div>\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/components/yearly-balance/yearly-balance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearlyBalanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_remote_service__ = __webpack_require__("../../../../../src/app/services/remote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YearlyBalanceComponent = (function () {
    function YearlyBalanceComponent(route, router, remoteService, authService, messageService) {
        this.route = route;
        this.router = router;
        this.remoteService = remoteService;
        this.authService = authService;
        this.messageService = messageService;
    }
    YearlyBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.isAuthed()) {
            this.messageService.add('Access denied! Redirecting to login...');
            this.router.navigateByUrl("/login");
        }
        var year = +this.route.snapshot.paramMap.get('year') || +(new Date()).getFullYear();
        this.remoteService.getYearlyBalance(year)
            .subscribe(function (res) {
            _this.messageService.add('Yearly balance for ' + year + ': ' + JSON.stringify(res));
            if (res.success) {
            }
            else if (res.errors) {
                _this.messageService.add('Failed to get yearly balance: ' + JSON.stringify(res.errors));
            }
        }, function (error) { return console.warn(error); });
    };
    YearlyBalanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-yearly-balance',
            template: __webpack_require__("../../../../../src/app/components/yearly-balance/yearly-balance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/yearly-balance/yearly-balance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_remote_service__["a" /* RemoteService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]])
    ], YearlyBalanceComponent);
    return YearlyBalanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var headers = {
            'Content-Type': 'application/json'
        };
        if (this.authService.isAuthed()) {
            headers['Authorization'] = 'bearer ' + this.authService.getAuthToken();
        }
        req = req.clone({
            setHeaders: headers
        });
        return next.handle(req);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, email, password, confPassword, authtoken) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.confPassword = confPassword;
        this.authtoken = authtoken;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.saveSession = function (data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.user.name);
    };
    AuthService.prototype.destroySession = function () {
        localStorage.clear();
    };
    AuthService.prototype.isAuthed = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.getUsername = function () {
        if (!this.isAuthed()) {
            return '';
        }
        return localStorage.getItem('username');
    };
    AuthService.prototype.getAuthToken = function () {
        if (!this.isAuthed()) {
            return '';
        }
        return localStorage.getItem('token');
    };
    AuthService.prototype.isAuthor = function (record) {
        return record._acl.creator === localStorage.getItem('username');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/remote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// const baseUrl = 'http://localhost:5000/';
var baseUrl = 'http://138.68.111.47:5000/';
var RemoteService = (function () {
    function RemoteService(http) {
        this.http = http;
    }
    RemoteService.prototype.register = function (name, email, password) {
        return this.http.post(baseUrl + 'auth/signup', { name: name, email: email, password: password });
    };
    RemoteService.prototype.login = function (email, password) {
        return this.http.post(baseUrl + 'auth/login', { email: email, password: password });
    };
    RemoteService.prototype.getYearlyBalance = function (year) {
        return this.http.get(baseUrl + 'plan/' + year);
    };
    RemoteService.prototype.getMonthlyBalance = function (year, month) {
        return this.http.get(baseUrl + 'plan/' + year + '/' + month);
    };
    RemoteService.prototype.updateMonthlyIncomeAndBudget = function (year, month, income, budget) {
        return this.http.post(baseUrl + 'plan/' + year + '/' + month, { income: income, budget: budget });
    };
    RemoteService.prototype.addExpenses = function (year, month, date, name, category, amount) {
        return this.http.post(baseUrl + 'plan/' + year + '/' + month + '/expense', { date: date, name: name, category: category, amount: amount });
    };
    RemoteService.prototype.deleteExpense = function (expenseId) {
        return this.http.delete(baseUrl + 'plan/expense/' + expenseId);
    };
    RemoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RemoteService);
    return RemoteService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map