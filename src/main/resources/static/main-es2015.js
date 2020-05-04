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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/menu.ts":
/*!*****************************!*\
  !*** ./src/app/api/menu.ts ***!
  \*****************************/
/*! exports provided: Menu, MenuEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEntry", function() { return MenuEntry; });
class Menu {
}
class MenuEntry {
}


/***/ }),

/***/ "./src/app/api/user.ts":
/*!*****************************!*\
  !*** ./src/app/api/user.ts ***!
  \*****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");





const routes = [
    {
        path: 'admin',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(m => m.AdminModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _shared_abstract_subscription_destroyer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/abstract.subscription.destroyer */ "./src/app/shared/abstract.subscription.destroyer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AppComponent extends _shared_abstract_subscription_destroyer__WEBPACK_IMPORTED_MODULE_3__["AbstractSubscriptionDestroyer"] {
    constructor(settingsService, titleService) {
        super();
        this.settingsService = settingsService;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.markForUnsubscription(this.settingsService.title$.subscribe(title => {
            this.titleService.setTitle(title);
        }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getKeycloakServiceFactory, initKeycloak, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeycloakServiceFactory", function() { return getKeycloakServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initKeycloak", function() { return initKeycloak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_keycloak_keycloak_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/keycloak/keycloak.service */ "./src/app/services/keycloak/keycloak.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/token.interceptor */ "./src/app/http/token.interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/article/abstract.article.service */ "./src/app/services/article/abstract.article.service.ts");
/* harmony import */ var _services_article_article_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/article/article.service */ "./src/app/services/article/article.service.ts");
/* harmony import */ var _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");
/* harmony import */ var _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/file/abstract.file.service */ "./src/app/services/file/abstract.file.service.ts");
/* harmony import */ var _services_file_file_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/file/file.service */ "./src/app/services/file/file.service.ts");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _public_site_public_site_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./public-site/public-site.module */ "./src/app/public-site/public-site.module.ts");
/* harmony import */ var _routing_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routing.service */ "./src/app/routing.service.ts");
/* harmony import */ var _services_page_menu_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/page/menu.service */ "./src/app/services/page/menu.service.ts");
/* harmony import */ var _services_keycloak_keycloak_mock_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/keycloak/keycloak-mock.service */ "./src/app/services/keycloak/keycloak-mock.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");





















function getKeycloakServiceFactory(httpClient) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].mockSecurity) {
        const mockKeycloakTokenParsed = {
            realm_access: { roles: ['user', 'publisher', 'admin'] },
            preferred_username: 'MOCK-ADMIN'
        };
        return new _services_keycloak_keycloak_mock_service__WEBPACK_IMPORTED_MODULE_17__["KeycloakMockService"](true, true, mockKeycloakTokenParsed);
    }
    else {
        return new _services_keycloak_keycloak_service__WEBPACK_IMPORTED_MODULE_3__["KeycloakService"](httpClient, _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].keycloakConfig);
    }
}
function initKeycloak(keycloakService) {
    return () => keycloakService.init();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_8__["AbstractArticleService"], useClass: _services_article_article_service__WEBPACK_IMPORTED_MODULE_9__["ArticleService"] },
        { provide: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_10__["AbstractKeycloakService"], useFactory: getKeycloakServiceFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]] },
        { provide: _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_11__["AbstractFileService"], useClass: _services_file_file_service__WEBPACK_IMPORTED_MODULE_12__["FileService"] },
        _services_message_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
            useFactory: initKeycloak,
            deps: [_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_10__["AbstractKeycloakService"]],
            multi: true
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _http_token_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"], multi: true },
        _routing_service__WEBPACK_IMPORTED_MODULE_15__["RoutingService"],
        _services_page_menu_service__WEBPACK_IMPORTED_MODULE_16__["MenuService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            /* AdminModule, */
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _public_site_public_site_module__WEBPACK_IMPORTED_MODULE_14__["PublicSiteModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        /* AdminModule, */
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _public_site_public_site_module__WEBPACK_IMPORTED_MODULE_14__["PublicSiteModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    /* AdminModule, */
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _public_site_public_site_module__WEBPACK_IMPORTED_MODULE_14__["PublicSiteModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
                ],
                providers: [
                    { provide: _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_8__["AbstractArticleService"], useClass: _services_article_article_service__WEBPACK_IMPORTED_MODULE_9__["ArticleService"] },
                    { provide: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_10__["AbstractKeycloakService"], useFactory: getKeycloakServiceFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]] },
                    { provide: _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_11__["AbstractFileService"], useClass: _services_file_file_service__WEBPACK_IMPORTED_MODULE_12__["FileService"] },
                    _services_message_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                        useFactory: initKeycloak,
                        deps: [_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_10__["AbstractKeycloakService"]],
                        multi: true
                    },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _http_token_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"], multi: true },
                    _routing_service__WEBPACK_IMPORTED_MODULE_15__["RoutingService"],
                    _services_page_menu_service__WEBPACK_IMPORTED_MODULE_16__["MenuService"]
                ],
                exports: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");
/* harmony import */ var _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/article/abstract.article.service */ "./src/app/services/article/abstract.article.service.ts");








class AuthGuard {
    constructor(keycloakService, articleService, router) {
        this.keycloakService = keycloakService;
        this.articleService = articleService;
        this.router = router;
    }
    canActivate(next, state) {
        console.log('AuthGuard initiaited');
        if (!this.keycloakService.canCreateArticles()) {
            this.keycloakService.login();
            return false;
        }
        if (next.url.find(segment => segment.path.includes('admin'))) {
            console.log('Trying to access admin area, checking authentication...');
            //alert(this.keycloakService.canCreateArticles());
            if (false == this.keycloakService.canCreateArticles()) {
                this.keycloakService.login();
                return true;
            }
        }
        if (next.url.find(segment => segment.path.includes('file-manager'))) {
            if (false === this.keycloakService.canCreateArticles()) {
                this.router.navigateByUrl('/');
                return true;
            }
        }
        if (next.url.find(segment => segment.path.includes('edit'))) {
            console.log('Checking if user can edit articles...');
            if (!this.keycloakService.canCreateArticles()) {
                this.router.navigateByUrl('/');
                return false;
            }
        }
        if (next.url.find(segment => segment.path.includes('administer-articles'))) {
            if (!this.keycloakService.canCreateArticles()) {
                this.router.navigateByUrl('/');
                return false;
            }
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__["AbstractKeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_3__["AbstractArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__["AbstractKeycloakService"] }, { type: _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_3__["AbstractArticleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/http/file-upload.ts":
/*!*************************************!*\
  !*** ./src/app/http/file-upload.ts ***!
  \*************************************/
/*! exports provided: FileUploadError, FileUploadProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadError", function() { return FileUploadError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadProgress", function() { return FileUploadProgress; });
class FileUploadError {
}
class FileUploadProgress {
}


/***/ }),

/***/ "./src/app/http/token.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/http/token.interceptor.ts ***!
  \*******************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");




class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        const authToken = this.auth.getCurrentToken() || '';
        if (authToken) {
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + authToken
                }
            });
        }
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__["AbstractKeycloakService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__["AbstractKeycloakService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public-site/article/view/article-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/public-site/article/view/article-view.component.ts ***!
  \********************************************************************/
/*! exports provided: ArticleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleViewComponent", function() { return ArticleViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ArticleViewComponent_article_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", ctx_r71.article.user.username, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r71.article.created, "short"), "");
} }
function ArticleViewComponent_article_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/articles/edit/", ctx_r72.article.id, "");
} }
function ArticleViewComponent_article_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticleViewComponent_article_2_p_3_Template, 3, 5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "5 Comments (to be done)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ArticleViewComponent_article_2_div_12_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r69.article.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.article.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r69.article.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r69.article.htmlContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r69.article.editable);
} }
function ArticleViewComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Article not found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ArticleViewComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.activatedRoute.data.subscribe(data => {
            this.article = data.article;
        });
    }
    ngOnInit() {
    }
}
ArticleViewComponent.ɵfac = function ArticleViewComponent_Factory(t) { return new (t || ArticleViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ArticleViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleViewComponent, selectors: [["app-article-view"]], decls: 4, vars: 2, consts: [[1, "uk-section", "uk-section-default"], [1, "uk-container"], ["class", "uk-article", 4, "ngIf"], ["class", "uk-text-warning", 4, "ngIf"], [1, "uk-article"], [1, "uk-article-title"], ["class", "uk-article-meta", 4, "ngIf"], [1, "uk-text-lead"], [3, "innerHTML"], ["uk-grid", "", 1, "uk-grid-small", "uk-child-width-auto"], ["href", "#", 1, "uk-button", "uk-button-primary"], [4, "ngIf"], [1, "uk-article-meta"], [1, "uk-button", "uk-button-danger", 3, "routerLink"], [1, "uk-text-warning"]], template: function ArticleViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleViewComponent_article_2_Template, 13, 5, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticleViewComponent_h3_3_Template, 2, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.article);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1zaXRlL2FydGljbGUvdmlldy9hcnRpY2xlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article-view',
                templateUrl: './article-view.component.html',
                styleUrls: ['./article-view.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public-site/error404/error404.component.ts":
/*!************************************************************!*\
  !*** ./src/app/public-site/error404/error404.component.ts ***!
  \************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Error404Component {
    constructor() { }
    ngOnInit() {
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 5, vars: 0, consts: [[1, "uk-container", "uk-container-large", "uk-height-medium", "uk-flex", "uk-flex-center"], [1, "uk-flex", "uk-flex-middle", "uk-flex-column", "uk-flex-center"], [1, "uk-text-danger"], ["uk-icon", "icon: ban; ratio: 2"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Resource not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1zaXRlL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error404',
                templateUrl: './error404.component.html',
                styleUrls: ['./error404.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/public-site/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/public-site/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _util_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/string-utils */ "./src/app/util/string-utils.ts");
/* harmony import */ var _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/article/abstract.article.service */ "./src/app/services/article/abstract.article.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/article-pagination/pagination.component */ "./src/app/shared/article-pagination/pagination.component.ts");









function HomeComponent_section_0_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/articles/edit/", ctx_r201.featuredArticle.id, "");
} }
function HomeComponent_section_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "UNPUBLISHED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FEATURED ARTICLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "GO TO ARTICLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_section_0_a_15_Template, 2, 1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_section_0_div_16_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/api/v1/files/", ctx_r199.featuredArticle.imageId, "?size=1200", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r199.featuredArticle.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r199.featuredArticle.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/article/", ctx_r199.featuredArticle.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r199.featuredArticle.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r199.featuredArticle.published);
} }
function HomeComponent_div_4_article_6_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/articles/edit/", article_r205.id, "");
} }
function HomeComponent_div_4_article_6_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UNPUBLISHED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_4_article_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_4_article_6_span_10_Template, 4, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "canvas", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_4_article_6_div_14_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "READ MORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r205 = ctx.$implicit;
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/article/", article_r205.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r205.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Written on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 9, article_r205.created, "short"), " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Takes ", ctx_r204.calculateArticleReadTime(article_r205), " min reading. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", article_r205.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/api/v1/files/", article_r205.imageId, "?size=800", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !article_r205.published);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r205.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/article/", article_r205.id, "");
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Articles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageRequested", function HomeComponent_div_4_Template_app_pagination_pageRequested_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r210); const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r209.loadPage($event); return ctx_r209.scroll(_r203); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_4_article_6_Template, 20, 12, "article", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageRequested", function HomeComponent_div_4_Template_app_pagination_pageRequested_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r210); const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r211.loadPage($event); return ctx_r211.scroll(_r203); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalPages", ctx_r200.articlePage.totalPages)("currentPage", ctx_r200.articlePage.pageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r200.articlePage.articles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalPages", ctx_r200.articlePage.totalPages)("currentPage", ctx_r200.articlePage.pageNumber);
} }
class HomeComponent {
    constructor(activatedRoute, articleService) {
        this.activatedRoute = activatedRoute;
        this.articleService = articleService;
        this.subscriptions = [];
    }
    ngOnInit() {
        console.log('HOME Component created!');
        this.activatedRoute.data.subscribe(data => {
            this.articlePage = data.articlePage;
        });
        this.subscriptions.push(this.articleService.getRandomFeaturedArticle().subscribe(article => {
            this.featuredArticle = article;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    calculateArticleReadTime(article) {
        return _util_string_utils__WEBPACK_IMPORTED_MODULE_2__["StringUtils"].countMinutesToRead(article.content);
    }
    loadPage(page) {
        this.articleService.getArticlePage(page).subscribe(articlePage => {
            this.articlePage = articlePage;
        });
    }
    scroll(el) {
        UIkit.scroll(el).scrollTo(el);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_3__["AbstractArticleService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 2, consts: [["class", "uk-section uk-section-small", 4, "ngIf"], [1, "uk-section", "uk-section-default"], [1, "uk-container"], ["data-ukgrid", "", 1, "uk-grid"], ["class", "uk-width-2-3@m", 4, "ngIf"], [1, "uk-width-1-3@m"], [1, "uk-heading-line", "uk-text-bold"], [1, "uk-tile", "uk-tile-small", "uk-tile-muted", "uk-border-rounded"], [1, "uk-section", "uk-section-small"], [1, "uk-height-large", "uk-cover-container", "uk-border-rounded"], ["alt", "Alt img", "data-uk-cover", "", 3, "src"], [1, "uk-overlay", "uk-overlay-primary", "uk-position-cover", "uk-flex", "uk-flex-center", "uk-flex-middle", "uk-light", "uk-text-center"], ["data-uk-scrollspy", "cls: uk-animation-slide-bottom-small"], [2, "letter-spacing", "0.2em", "font-size", "0.725rem"], [1, "uk-margin-top", "uk-margin-small-bottom", "uk-margin-remove-adjacent"], [1, "uk-button", "uk-button-default", "uk-margin-top", 3, "routerLink"], ["class", "uk-button uk-button-danger uk-margin-top", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], [1, "uk-button", "uk-button-danger", "uk-margin-top", 3, "routerLink"], [1, "uk-text-danger"], [1, "uk-width-2-3@m"], ["id", "article-start", 1, "uk-heading-line", "uk-text-bold"], ["articleStart", ""], [3, "totalPages", "currentPage", "pageRequested"], ["class", "uk-section uk-section-small uk-padding-remove-top", 4, "ngFor", "ngForOf"], [1, "uk-section", "uk-section-small", "uk-padding-remove-top"], [1, "uk-margin-remove-adjacent", "uk-text-bold", "uk-margin-small-bottom"], ["title", "Fusce facilisis tempus magna ac dignissim.", 1, "uk-link-reset", 3, "routerLink"], [1, "uk-article-meta"], ["data-uk-icon", "icon: future"], [1, "uk-cover-container"], ["width", "800", "height", "200"], ["alt", "", "uk-cover", "", 3, "src"], ["class", "uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center", 4, "ngIf"], ["title", "Read More", 1, "uk-button", "uk-button-default", "uk-button-small", 3, "routerLink"], [1, "uk-text-danger", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_section_0_Template, 17, 6, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 8, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " As the youngest member of the Swiss Holding \u00ABNoser Group\u00BB, we have made it our task in our day-to-day work to live by Swiss values, such as quality, reliability and innovative pioneer spirit. We offer high quality nearshoring services directly within the \u00ABNoser Group\u00BB. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featuredArticle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.articlePage == null ? null : ctx.articlePage.articles == null ? null : ctx.articlePage.articles.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1zaXRlL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_3__["AbstractArticleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public-site/logout/logout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/public-site/logout/logout.component.ts ***!
  \********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class LogoutComponent {
    constructor(keycloakService, router) {
        this.keycloakService = keycloakService;
        this.router = router;
    }
    ngOnInit() {
        this.keycloakService.getKeycloakTokenParsed$().subscribe(token => {
            if (token) {
                this.keycloakService.logout(window.location.href.replace('logout', ''));
            }
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__["AbstractKeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have successfully logged out!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1zaXRlL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__["AbstractKeycloakService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public-site/main/main.component.ts":
/*!****************************************************!*\
  !*** ./src/app/public-site/main/main.component.ts ***!
  \****************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/article/abstract.article.service */ "./src/app/services/article/abstract.article.service.ts");
/* harmony import */ var _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/message/message.service */ "./src/app/services/message/message.service.ts");
/* harmony import */ var _routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../routing.service */ "./src/app/routing.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















const _c0 = function (a0) { return { "uk-active": a0 }; };
function MainComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuEntry_r217 = ctx.$implicit;
    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r212.currentUrl === "/" + menuEntry_r217.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", menuEntry_r217.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuEntry_r217.name);
} }
function MainComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r214.profile.preferred_username);
} }
function MainComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuEntry_r218 = ctx.$implicit;
    const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r215.currentUrl === menuEntry_r218.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", menuEntry_r218.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuEntry_r218.name);
} }
function MainComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r216.profile.preferred_username);
} }
class MainComponent {
    constructor(articleService, keycloakService, routingService, activatedRoute, messageService, settingsService) {
        this.articleService = articleService;
        this.keycloakService = keycloakService;
        this.routingService = routingService;
        this.activatedRoute = activatedRoute;
        this.messageService = messageService;
        this.settingsService = settingsService;
        this.username = null;
        this.profile = null;
        this.canUserCreateArticles = false;
        this.showOwnArticles = false;
        this.canUserPublishArticles = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        console.log('MAIN COMPONENT CREATED!');
        this.subscriptions.push(this.routingService.currentUrl$.subscribe(url => { this.currentUrl = url; }));
        this.subscriptions.push(this.keycloakService.getKeycloakTokenParsed$().subscribe((profile) => {
            this.profile = profile;
            console.log('USER PROFILE', this.profile);
        }));
        this.subscriptions.push(this.activatedRoute.data.subscribe(data => {
            console.log('Menu is: ', data.menu);
            this.menu = data.menu;
        }));
        this.subscriptions.push(this.messageService.messages$.subscribe(msg => {
            window.alert(msg);
        }));
        this.logoUrl$ = this.settingsService.logoImageUrl$;
        this.canUserCreateArticles = this.keycloakService.canCreateArticles();
        this.showOwnArticles = this.canUserCreateArticles;
        this.canUserPublishArticles = this.keycloakService.canPublishArticles();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    login() {
        this.keycloakService.login();
    }
    logout() {
        this.keycloakService.logout();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_1__["AbstractArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__["AbstractKeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 49, vars: 14, consts: [[1, "uk-container"], ["uk-navbar", "", 1, "uk-navbar-container"], [1, "uk-navbar-left", "uk-visible@s"], [1, "uk-navbar-nav"], ["href", "#", "title", "Logo", 1, "uk-logo"], ["height", "30px", "alt", "Logo", 3, "src"], [3, "ngClass"], ["routerLink", "/", "routerLinkActive", "uk-active"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "uk-navbar-right", "uk-visible@s"], [4, "ngIf"], [1, "uk-navbar-left", "uk-hidden@s"], ["src", "assets/img/noser-logo.png", "alt", "Logo"], [1, "uk-navbar-right", "uk-hidden@s"], ["uk-navbar-toggle-icon", "", "uk-toggle", "target: #my-id", 1, "uk-navbar-toggle"], ["id", "my-id", "uk-offcanvas", ""], [1, "uk-offcanvas-bar"], [1, "uk-nav", "uk-nav-default"], ["src", "assets/img/noser-logo.png", "height", "30px", "alt", "Logo"], [1, "uk-section", "uk-section-small", "uk-section-muted"], [1, "uk-text-small", "uk-text-center"], ["href", "https://github.com/martindobrev"], ["href", "http://getuikit.com", "title", "Visit UIkit 3 site", "target", "_blank", "data-uk-tooltip", ""], ["data-uk-icon", "uikit"], ["href", "https://github.com/zzseba78/Kick-Off", "target", "_blank"], [3, "routerLink"], ["routerLink", "/admin"], [1, "uk-navbar-dropdown"], [1, "uk-nav", "uk-navbar-dropdown-nav"], ["routerLink", "/logout"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainComponent_li_11_Template, 3, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainComponent_li_14_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MainComponent_li_15_Template, 11, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainComponent_li_34_Template, 3, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MainComponent_li_35_Template, 11, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Copyright 2019 - Created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "maddob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " | Built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " | based on the templates of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Kick-Off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, ctx.logoUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.currentUrl === "/" || ctx.currentUrl === "/home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu.menuEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.currentUrl === "/" || ctx.currentUrl === "/home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu.menuEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1zaXRlL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_1__["AbstractArticleService"] }, { type: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__["AbstractKeycloakService"] }, { type: _routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public-site/page-view/page-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/public-site/page-view/page-view.component.ts ***!
  \**************************************************************/
/*! exports provided: PageViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageViewComponent", function() { return PageViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class PageViewComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.page = data.page;
        });
    }
}
PageViewComponent.ɵfac = function PageViewComponent_Factory(t) { return new (t || PageViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PageViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageViewComponent, selectors: [["app-page-view"]], decls: 1, vars: 1, consts: [[1, "uk-container", 3, "innerHTML"]], template: function PageViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.page.htmlContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1zaXRlL3BhZ2Utdmlldy9wYWdlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-view',
                templateUrl: './page-view.component.html',
                styleUrls: ['./page-view.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public-site/public-site-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/public-site/public-site-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PublicSiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicSiteRoutingModule", function() { return PublicSiteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/public-site/home/home.component.ts");
/* harmony import */ var _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/view/article-view.component */ "./src/app/public-site/article/view/article-view.component.ts");
/* harmony import */ var _services_article_article_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/article/article-resolve.service */ "./src/app/services/article/article-resolve.service.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error404/error404.component */ "./src/app/public-site/error404/error404.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/public-site/main/main.component.ts");
/* harmony import */ var _services_page_menu_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/page/menu-resolve.service */ "./src/app/services/page/menu-resolve.service.ts");
/* harmony import */ var _page_view_page_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-view/page-view.component */ "./src/app/public-site/page-view/page-view.component.ts");
/* harmony import */ var _services_page_page_resolve_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/page/page-resolve.service */ "./src/app/services/page/page-resolve.service.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/public-site/server-error/server-error.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/public-site/logout/logout.component.ts");
/* harmony import */ var _services_article_article_page_resolve_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/article/article-page-resolve.service */ "./src/app/services/article/article-page-resolve.service.ts");















const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], resolve: { menu: _services_page_menu_resolve_service__WEBPACK_IMPORTED_MODULE_7__["MenuResolveService"] }, children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], resolve: { articlePage: _services_article_article_page_resolve_service__WEBPACK_IMPORTED_MODULE_12__["ArticlePageResolveService"] } },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'article/:id', component: _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_3__["ArticleViewComponent"], resolve: { article: _services_article_article_resolve_service__WEBPACK_IMPORTED_MODULE_4__["ArticleResolveService"] } },
            { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"] },
            { path: 'error404', component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"] },
            { path: 'error5xx', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__["ServerErrorComponent"] },
            { path: ':slug', component: _page_view_page_view_component__WEBPACK_IMPORTED_MODULE_8__["PageViewComponent"], resolve: { page: _services_page_page_resolve_service__WEBPACK_IMPORTED_MODULE_9__["PageResolveService"] } },
            { path: '**', component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"] }
        ] }
];
class PublicSiteRoutingModule {
}
PublicSiteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublicSiteRoutingModule });
PublicSiteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublicSiteRoutingModule_Factory(t) { return new (t || PublicSiteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublicSiteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicSiteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/public-site/public-site.module.ts":
/*!***************************************************!*\
  !*** ./src/app/public-site/public-site.module.ts ***!
  \***************************************************/
/*! exports provided: PublicSiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicSiteModule", function() { return PublicSiteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _public_site_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-site-routing.module */ "./src/app/public-site/public-site-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/public-site/home/home.component.ts");
/* harmony import */ var _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/view/article-view.component */ "./src/app/public-site/article/view/article-view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/public-site/main/main.component.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error404/error404.component */ "./src/app/public-site/error404/error404.component.ts");
/* harmony import */ var _page_view_page_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-view/page-view.component */ "./src/app/public-site/page-view/page-view.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/public-site/server-error/server-error.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/public-site/logout/logout.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");













class PublicSiteModule {
}
PublicSiteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublicSiteModule });
PublicSiteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublicSiteModule_Factory(t) { return new (t || PublicSiteModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _public_site_routing_module__WEBPACK_IMPORTED_MODULE_2__["PublicSiteRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublicSiteModule, { declarations: [_error404_error404_component__WEBPACK_IMPORTED_MODULE_7__["Error404Component"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_4__["ArticleViewComponent"],
        _page_view_page_view_component__WEBPACK_IMPORTED_MODULE_8__["PageViewComponent"],
        _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__["ServerErrorComponent"],
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _public_site_routing_module__WEBPACK_IMPORTED_MODULE_2__["PublicSiteRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicSiteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _public_site_routing_module__WEBPACK_IMPORTED_MODULE_2__["PublicSiteRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
                ],
                declarations: [
                    _error404_error404_component__WEBPACK_IMPORTED_MODULE_7__["Error404Component"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _article_view_article_view_component__WEBPACK_IMPORTED_MODULE_4__["ArticleViewComponent"],
                    _page_view_page_view_component__WEBPACK_IMPORTED_MODULE_8__["PageViewComponent"],
                    _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__["ServerErrorComponent"],
                    _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/public-site/server-error/server-error.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/public-site/server-error/server-error.component.ts ***!
  \********************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServerErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(); };
ServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 3, vars: 0, consts: [[1, "error-message"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ooops, there seems to be a problem with our servers. Please try again later");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".error-message[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljLXNpdGUvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy1zaXRlL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-error',
                templateUrl: './server-error.component.html',
                styleUrls: ['./server-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routing.service.ts":
/*!************************************!*\
  !*** ./src/app/routing.service.ts ***!
  \************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class RoutingService {
    constructor(router) {
        this.router = router;
        this.currentUrl = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('/');
        this.currentUrl$ = this.currentUrl.asObservable();
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.currentUrl.next(event.url);
            }
        });
    }
    showSnippetSelect() {
        this.router.navigate([{ outlets: { popup: ['snippet-select'] } }]);
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/article/abstract.article.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/article/abstract.article.service.ts ***!
  \**************************************************************/
/*! exports provided: AbstractArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractArticleService", function() { return AbstractArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Abstract class for article services
 *
 * Defines the necessary functions all article services shall adhere to
 */
class AbstractArticleService {
}
AbstractArticleService.ɵfac = function AbstractArticleService_Factory(t) { return new (t || AbstractArticleService)(); };
AbstractArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AbstractArticleService, factory: AbstractArticleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/article/article-page-resolve.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/article/article-page-resolve.service.ts ***!
  \******************************************************************/
/*! exports provided: ArticlePageResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageResolveService", function() { return ArticlePageResolveService; });
/* harmony import */ var _abstract_article_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.article.service */ "./src/app/services/article/abstract.article.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class ArticlePageResolveService {
    constructor(articleService) {
        this.articleService = articleService;
    }
    resolve() {
        return this.articleService.getArticlePage(0);
    }
}
ArticlePageResolveService.ɵfac = function ArticlePageResolveService_Factory(t) { return new (t || ArticlePageResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_abstract_article_service__WEBPACK_IMPORTED_MODULE_0__["AbstractArticleService"])); };
ArticlePageResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArticlePageResolveService, factory: ArticlePageResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticlePageResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _abstract_article_service__WEBPACK_IMPORTED_MODULE_0__["AbstractArticleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/article/article-resolve.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/article/article-resolve.service.ts ***!
  \*************************************************************/
/*! exports provided: ArticleResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleResolveService", function() { return ArticleResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _abstract_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.article.service */ "./src/app/services/article/abstract.article.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/user.service */ "./src/app/services/user/user.service.ts");










class ArticleResolveService {
    constructor(articleService, userService, router) {
        this.articleService = articleService;
        this.userService = userService;
        this.router = router;
    }
    resolve(route) {
        return this.articleService.getArticle(route.paramMap.get('id')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err, caught) => {
            this.router.navigateByUrl('/error404');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
        }));
    }
}
ArticleResolveService.ɵfac = function ArticleResolveService_Factory(t) { return new (t || ArticleResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_abstract_article_service__WEBPACK_IMPORTED_MODULE_2__["AbstractArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ArticleResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleResolveService, factory: ArticleResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _abstract_article_service__WEBPACK_IMPORTED_MODULE_2__["AbstractArticleService"] }, { type: _user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/article/article.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/article/article.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _abstract_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.article.service */ "./src/app/services/article/abstract.article.service.ts");





class ArticleService extends _abstract_article_service__WEBPACK_IMPORTED_MODULE_2__["AbstractArticleService"] {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
    }
    getArticles() {
        return this.httpClient.get('/api/v1/articles');
    }
    getCompleteArticles() {
        return this.httpClient.get('/api/v1/complete-articles');
    }
    getArticle(id) {
        return this.httpClient.get(`/api/v1/articles/${id}`);
    }
    createArticle(article) {
        return this.httpClient.post(`/api/v1/articles`, article);
    }
    editArticle(article) {
        return this.httpClient.put(`/api/v1/articles/${article.id}`, article);
    }
    getArticleInfo() {
        return this.httpClient.get(`/api/v1/info/articles`);
    }
    deleteArticle(article) {
        return this.httpClient.delete(`/api/v1/articles/${article.id}`);
    }
    getArticlePage(pageNumber) {
        return this.httpClient.get(`/api/v1/articles/page/${pageNumber}`);
    }
    getRandomFeaturedArticle() {
        return this.httpClient.get('/api/v1/random-featured-article');
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/file/abstract.file.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/file/abstract.file.service.ts ***!
  \********************************************************/
/*! exports provided: AbstractFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFileService", function() { return AbstractFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AbstractFileService {
}
AbstractFileService.ɵfac = function AbstractFileService_Factory(t) { return new (t || AbstractFileService)(); };
AbstractFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AbstractFileService, factory: AbstractFileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/file/file.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/file/file.service.ts ***!
  \***********************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.file.service */ "./src/app/services/file/abstract.file.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/file-upload */ "./src/app/http/file-upload.ts");








class FileService extends _abstract_file_service__WEBPACK_IMPORTED_MODULE_1__["AbstractFileService"] {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
        this.fileUploaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fileUploaded$ = this.fileUploaded.asObservable();
        this.fileUploadProgress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fileUploadProgress$ = this.fileUploadProgress.asObservable();
        this.fileUploadError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fileUploadError$ = this.fileUploadError.asObservable();
        this.fileSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fileSelected$ = this.fileSelected.asObservable();
        this.fileManagerVisibility = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fileManagerVisibility$ = this.fileManagerVisibility.asObservable();
    }
    getFileUploadError$() {
        return this.fileUploadError$;
    }
    getFileUploaded$() {
        return this.fileUploaded$;
    }
    getFileUploadProgress$() {
        return this.fileUploadProgress$;
    }
    getFileSelected$() {
        return this.fileSelected$;
    }
    getShowHideFileManager$() {
        return this.fileManagerVisibility$;
    }
    getFiles() {
        return this.httpClient.get('/api/v1/files');
    }
    getFile(id) {
        throw this.httpClient.get(`/api/v1/files/${id}`);
    }
    uploadFile(file) {
        const fd = new FormData();
        fd.append('file', file, file.name);
        this.httpClient.post('/api/v1/files', fd, { reportProgress: true, observe: 'events' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return this.handleFileUploadError(err, file);
        }))
            .subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                    console.log('Upload started!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                    const blogFile = event.body;
                    this.fileUploaded.next(blogFile);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress: {
                    const fileUploadProgress = new _http_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadProgress"]();
                    fileUploadProgress.file = file;
                    fileUploadProgress.percentLoaded = event['loaded'] / event['total'];
                    this.fileUploadProgress.next(fileUploadProgress);
                    break;
                }
            }
        });
    }
    selectFile(id, blogFile) {
        console.log('SELECTING FILE: ', blogFile);
        this.fileSelected.next({ id: id, file: blogFile });
    }
    deleteFile(blogFile) {
        return this.httpClient.delete(`/api/v1/files/${blogFile.id}`);
    }
    showFileManager(id) {
        console.log('SHOWING FILE MANAGER with id: ', id);
        this.fileManagerVisibility.next({ id: id, status: true });
    }
    hideFileManager(id) {
        console.log('HIDING FILE MANAGER with id: ', id);
        this.fileManagerVisibility.next({ id: id, status: false });
    }
    handleFileUploadError(error, file) {
        const uploadError = new _http_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadError"]();
        uploadError.file = file;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            uploadError.message = 'An error occured: ' + error.error.message;
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            uploadError.status = error.status;
            uploadError.message = error.message;
        }
        this.fileUploadError.next(uploadError);
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
    getEventMessage(event, file) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Sent:
                return `Uploading file "${file.name}" of size ${file.size}.`;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress:
                // Compute and show the % done:
                const percentDone = Math.round(100 * event.loaded / event.total);
                return `File "${file.name}" is ${percentDone}% uploaded.`;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response:
                return `File "${file.name}" was completely uploaded!`;
            default:
                return `File "${file.name}" surprising upload event: ${event.type}.`;
        }
    }
    getFilePage(pageNumber, searchQuery) {
        let url = '/api/v1/filepage/' + pageNumber;
        if (searchQuery) {
            url += '?name=' + searchQuery;
        }
        console.log('Getting file page ' + pageNumber + ' with query: ' + searchQuery);
        return this.httpClient.get(url);
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/keycloak/abstract.keycloak.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/keycloak/abstract.keycloak.service.ts ***!
  \****************************************************************/
/*! exports provided: AbstractKeycloakService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractKeycloakService", function() { return AbstractKeycloakService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AbstractKeycloakService {
}
AbstractKeycloakService.ɵfac = function AbstractKeycloakService_Factory(t) { return new (t || AbstractKeycloakService)(); };
AbstractKeycloakService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AbstractKeycloakService, factory: AbstractKeycloakService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractKeycloakService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/keycloak/keycloak-mock.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/keycloak/keycloak-mock.service.ts ***!
  \************************************************************/
/*! exports provided: KeycloakMockService, createMockServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeycloakMockService", function() { return KeycloakMockService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMockServiceFactory", function() { return createMockServiceFactory; });
/* harmony import */ var _abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../api/user */ "./src/app/api/user.ts");





class KeycloakMockService extends _abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_0__["AbstractKeycloakService"] {
    constructor(publishArticles, createArticles, tokenParsed) {
        super();
        this.publishArticles = publishArticles;
        this.createArticles = createArticles;
        this.tokenParsed = tokenParsed;
    }
    init() {
        console.log(`Initiating Keycloak Mock Service`);
        return new Promise((resolve, reject) => {
            console.log(`Resolving promise...`);
            resolve();
        });
    }
    login() { }
    logout() { }
    canPublishArticles() {
        return this.publishArticles;
    }
    canCreateArticles() {
        return this.createArticles;
    }
    getKeycloakTokenParsed$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.tokenParsed);
    }
    getCurrentToken() {
        return '';
    }
    getUserInfo() {
        const user = new _api_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        user.firstname = 'Tim';
        user.lastname = 'Test';
        user.roles = this.tokenParsed.realm_access.roles;
        user.id = 'TEST_USER';
        user.username = 'MOCK-ADMIN';
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
    }
    isAdmin() {
        if (!this.tokenParsed) {
            return false;
        }
        if (!this.tokenParsed.realm_access) {
            return false;
        }
        if (!this.tokenParsed.realm_access.roles) {
            return false;
        }
        return this.tokenParsed.realm_access.roles.includes('admin');
    }
}
KeycloakMockService.ɵfac = function KeycloakMockService_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
KeycloakMockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: KeycloakMockService, factory: KeycloakMockService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeycloakMockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined }, { type: undefined }, { type: undefined }]; }, null); })();
function createMockServiceFactory(roles) {
    const tokenParsed = {
        realm_access: { roles: roles },
        resource_access: {},
    };
    const isUser = tokenParsed.realm_access.roles.includes('user');
    const isPublisher = tokenParsed.realm_access.roles.includes('publisher');
    const isAdmin = tokenParsed.realm_access.roles.includes('admin');
    return new KeycloakMockService(isPublisher, isUser, tokenParsed);
}


/***/ }),

/***/ "./src/app/services/keycloak/keycloak.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/keycloak/keycloak.service.ts ***!
  \*******************************************************/
/*! exports provided: KeycloakService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeycloakService", function() { return KeycloakService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../api/user */ "./src/app/api/user.ts");







class KeycloakService extends _abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__["AbstractKeycloakService"] {
    constructor(httpClient, config) {
        super();
        this.httpClient = httpClient;
        this.config = config;
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.profile$ = this.profile.asObservable();
    }
    getKeycloakTokenParsed$() {
        return this.profile$;
    }
    init() {
        return new Promise((resolve, reject) => {
            this.keycloakAuth = new Keycloak(this.config);
            this.keycloakAuth.onTokenExpired = () => {
                this.keycloakAuth.updateToken(30).success(refreshed => {
                    console.log('TOKEN SUCCESSFULLY UPDATED');
                }).error(() => {
                    window.location.href = '/';
                });
            };
            this.keycloakAuth.init({ onLoad: 'check-sso', promiseType: 'legacy' })
                .success(() => {
                console.log('KEYCLOAK-AUTH IS:', this.keycloakAuth);
                this.profile.next(this.keycloakAuth.tokenParsed);
                console.log('PROFILE IS:', this.keycloakAuth.tokenParsed);
                resolve();
            })
                .error(() => {
                // resolve();
            });
        });
    }
    getCurrentToken() {
        if (!this.keycloakAuth) {
            return null;
        }
        return this.keycloakAuth.token;
    }
    login() {
        this.keycloakAuth.login();
    }
    logout(redirectUri) {
        if (this.keycloakAuth) {
            if (redirectUri) {
                this.keycloakAuth.logout({ redirectUri: redirectUri });
            }
            else {
                this.keycloakAuth.logout();
            }
        }
    }
    canPublishArticles() {
        if (!this.profile.value) {
            return false;
        }
        const isPublisher = this.keycloakAuth.hasRealmRole('publisher');
        const isAdmin = this.keycloakAuth.hasRealmRole('admin');
        return isAdmin || isPublisher;
    }
    canCreateArticles() {
        if (!this.profile.value) {
            return false;
        }
        const isPublisher = this.keycloakAuth.hasRealmRole('publisher');
        const isAdmin = this.keycloakAuth.hasRealmRole('admin');
        const isUser = this.keycloakAuth.hasRealmRole('user');
        return isPublisher || isAdmin || isUser;
    }
    getUserInfo(id) {
        console.log('Retrieving user with id: ', id);
        const user = new _api_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        if (!id) {
            user.username = 'ANONYMOUS';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user);
        }
        if (this.profile) {
            user.roles = this.profile.value.realm_access.roles;
        }
        else {
            user.username = 'ANONYMOUS';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user);
    }
    isAdmin() {
        if (!this.profile.value) {
            return false;
        }
        const roles = this.profile.value.realm_access.roles;
        return roles.includes('admin');
    }
}
KeycloakService.ɵfac = function KeycloakService_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
KeycloakService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KeycloakService, factory: KeycloakService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeycloakService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: undefined }]; }, null); })();


/***/ }),

/***/ "./src/app/services/message/message.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/message/message.service.ts ***!
  \*****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class MessageService {
    constructor() {
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.messages$ = this.messages.asObservable();
        /*
        //DISABLED FOR NOW
        let source = new EventSource('/messages/sse');
        source.onmessage = (message: any) => {
          console.log('Message received: ', message.data);
          this.messages.next(message.data);
        };
        
      
        source.addEventListener('message', (message: any) => {
          console.log('Message received: ', message.data);
          this.messages.next(message.data);
        });
    
        source.addEventListener('error', (error: any) => {
          console.log('Something went wrong: ', error);
        });
        */
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/page/menu-resolve.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/page/menu-resolve.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuResolveService", function() { return MenuResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/menu */ "./src/app/api/menu.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.service */ "./src/app/services/page/menu.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







class MenuResolveService {
    constructor(menuService) {
        this.menuService = menuService;
    }
    resolve(route) {
        return this.menuService.getMenuEntries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('MENU is: ', data);
            return data;
        }), 
        // in case of error, return en empty menu object
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            console.log('TEST');
            const menu = new _api_menu__WEBPACK_IMPORTED_MODULE_1__["Menu"]();
            menu.menuEntries = [];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(menu);
        }));
    }
}
MenuResolveService.ɵfac = function MenuResolveService_Factory(t) { return new (t || MenuResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"])); };
MenuResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuResolveService, factory: MenuResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/page/menu.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/page/menu.service.ts ***!
  \***********************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class MenuService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Returns the available public site menu entries (available public pages)
     */
    getMenuEntries() {
        return this.httpClient.get('/api/v1/menu');
    }
    getPage(slug) {
        return this.httpClient.get(`/api/v1/pages/${slug}`);
    }
    getPageById(id) {
        return this.httpClient.get(`/api/v1/pages/single?id=${id}`);
    }
    editPage(page) {
        return this.httpClient.put(`/api/v1/pages/${page.id}`, page);
    }
    getPages() {
        return this.httpClient.get(`/api/v1/pages`);
    }
    createPage(page) {
        return this.httpClient.post(`/api/v1/pages`, page);
    }
    reorderPages(pageCollection) {
        return this.httpClient.post(`/api/v1/pages/reorder`, pageCollection);
    }
    deletePage(page) {
        if (page) {
            return this.httpClient.delete(`/api/v1/pages/${page.id}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    getPageInfo() {
        return this.httpClient.get('/api/v1/info/pages');
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/page/page-resolve.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/page/page-resolve.service.ts ***!
  \*******************************************************/
/*! exports provided: PageResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResolveService", function() { return PageResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ "./src/app/services/page/menu.service.ts");




class PageResolveService {
    constructor(menuService) {
        this.menuService = menuService;
    }
    resolve(route) {
        if (route.url[0].path === 'edit') {
            return this.menuService.getPageById(parseInt(route.paramMap.get('id')));
        }
        return this.menuService.getPage(route.paramMap.get('slug'));
    }
}
PageResolveService.ɵfac = function PageResolveService_Factory(t) { return new (t || PageResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"])); };
PageResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageResolveService, factory: PageResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/settings/settings.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class SettingsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.FILES_PREFIX = '/api/v1/files/';
        this.logoImageUrl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.logoImageUrl$ = this.logoImageUrl.asObservable();
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.title$ = this.title.asObservable();
        this.httpClient.get('/api/v1/settings').subscribe((webProperties) => {
            this.logoImageUrl.next(this.getFileUrl(webProperties ? webProperties.logoUrl : null));
            this.title.next(webProperties.title);
        });
    }
    getFileUrl(imageId) {
        if (!imageId) {
            return null;
        }
        return `${this.FILES_PREFIX}${imageId}`;
    }
    saveProperties(webProperties) {
        this.logoImageUrl.next(this.getFileUrl(webProperties.logoUrl));
        this.title.next(webProperties.title);
        return this.httpClient.post('/api/v1/settings', webProperties);
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _article_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article/article.service */ "./src/app/services/article/article.service.ts");






class UserService {
    constructor(httpClient, articleService) {
        this.httpClient = httpClient;
        this.articleService = articleService;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _article_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/abstract.subscription.destroyer.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/abstract.subscription.destroyer.ts ***!
  \***********************************************************/
/*! exports provided: AbstractSubscriptionDestroyer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSubscriptionDestroyer", function() { return AbstractSubscriptionDestroyer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

class AbstractSubscriptionDestroyer {
    constructor() {
        this.subscriptions = [];
    }
    markForUnsubscription(subscription) {
        this.subscriptions.push(subscription);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
AbstractSubscriptionDestroyer.ɵfac = function AbstractSubscriptionDestroyer_Factory(t) { return new (t || AbstractSubscriptionDestroyer)(); };
AbstractSubscriptionDestroyer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractSubscriptionDestroyer });


/***/ }),

/***/ "./src/app/shared/article-pagination/pagination.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/article-pagination/pagination.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "uk-active": a0 }; };
function PaginationComponent_div_0_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_li_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const idx_r113 = ctx.index; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r114.loadPage(idx_r113); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r112 = ctx.$implicit;
    const idx_r113 = ctx.index;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r111.currentPage === idx_r113));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r112 + idx_r113);
} }
const _c1 = function (a0) { return { "uk-disabled": a0 }; };
function PaginationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.loadPage(ctx_r116.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_div_0_li_5_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.loadPage(ctx_r118.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r110.currentPage === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r110.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r110.currentPage === ctx_r110.totalPages - 1));
} }
class PaginationComponent {
    constructor() {
        this.pageRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.pages = Array(this.totalPages).fill(1);
    }
    loadPage(pageNumber) {
        this.pageRequested.emit(pageNumber);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { currentPage: "currentPage", totalPages: "totalPages" }, outputs: { pageRequested: "pageRequested" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "uk-pagination", "uk-flex-center"], [3, "ngClass"], [3, "click"], ["uk-pagination-previous", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["uk-pagination-next", ""]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_div_0_Template, 9, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hcnRpY2xlLXBhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.css']
            }]
    }], function () { return []; }, { currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageRequested: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/html-editor/html-editor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/html-editor/html-editor.component.ts ***!
  \*************************************************************/
/*! exports provided: HtmlEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlEditorComponent", function() { return HtmlEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/file/abstract.file.service */ "./src/app/services/file/abstract.file.service.ts");
/* harmony import */ var maddob_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! maddob-lib */ "./node_modules/maddob-lib/__ivy_ngcc__/fesm2015/maddob-lib.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function HtmlEditorComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r102.previewEnabled = false; return ctx_r102.resizeCodeMirror(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HtmlEditorComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r104.previewEnabled = true; return ctx_r104.resizeCodeMirror(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HtmlEditorComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.toggleFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HtmlEditorComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.toggleFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "uk-width-1-2": a0, "hidden": a1 }; };
function HtmlEditorComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 27);
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r101.previewEnabled, !ctx_r101.previewEnabled))("innerHTML", ctx_r101.parsedHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0) { return { "fullscreen": a0 }; };
const _c2 = function (a0, a1) { return { "max-height": a0, "full-height": a1 }; };
const _c3 = function (a0, a1, a2) { return { "uk-width-1-2": a0, "uk-width-expand": a1, "max-height": a2 }; };
class HtmlEditorComponent extends maddob_lib__WEBPACK_IMPORTED_MODULE_3__["UikitMarkdownEditorComponent"] {
    constructor(required = false, maxlength = -1, fileService) {
        super(required, maxlength);
        this.fileService = fileService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.fileService.getFileSelected$().subscribe((value) => {
            if (value.id === 'pageEditor') {
                this.insertContent('image', `/api/v1/files/${value.file.id}`);
                this.fileService.hideFileManager('pageEditor');
            }
        });
    }
    chooseImage() {
        this.fileService.showFileManager('pageEditor');
    }
}
HtmlEditorComponent.ɵfac = function HtmlEditorComponent_Factory(t) { return new (t || HtmlEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('required'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('maxlength'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_2__["AbstractFileService"])); };
HtmlEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HtmlEditorComponent, selectors: [["app-html-editor"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => HtmlEditorComponent),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => HtmlEditorComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 17, consts: [[1, "full-border", 3, "ngClass"], [1, "CodeMirror-Editor-Tab", "uk-background-muted", "uk-flex"], [1, "uk-flex", "uk-flex-left"], ["uk-icon", "icon: bold", "uk-tooltip", "title: Bold; delay: 800", 3, "click"], ["uk-icon", "icon: italic", "uk-tooltip", "title: Italic; delay: 800", 3, "click"], ["uk-icon", "icon: quote-right", "uk-tooltip", "title: Blockquote; delay: 800", 3, "click"], [1, "uk-flex", "uk-flex-left", "uk-margin-left", "separator"], [1, "uk-flex", "uk-flex-left", "uk-margin-left"], ["uk-icon", "icon: list", "uk-tooltip", "title: List; delay: 800", 3, "click"], ["uk-icon", "icon: code", "uk-tooltip", "title: Code; delay: 800", 3, "click"], ["uk-icon", "icon: link", "uk-tooltip", "title: Link; delay: 800", 3, "click"], ["uk-icon", "icon: image", "uk-tooltip", "title: image; delay: 800", 3, "click"], ["uk-icon", "icon: chevron-right", 3, "click", 4, "ngIf"], ["uk-icon", "icon: chevron-left", 3, "click", 4, "ngIf"], [1, "uk-flex", "uk-flex-right", 2, "flex-grow", "1"], ["uk-icon", "icon: expand", 3, "click", 4, "ngIf"], ["uk-icon", "icon: shrink", 3, "click", 4, "ngIf"], ["uk-grid", "", 1, "uk-grid", 3, "ngClass"], [1, "code-mirror-container", 3, "ngClass", "resize"], ["codeMirrorContainer", ""], ["name", "content"], ["editor", ""], ["class", "preview", 3, "ngClass", "innerHTML", 4, "ngIf"], ["uk-icon", "icon: chevron-right", 3, "click"], ["uk-icon", "icon: chevron-left", 3, "click"], ["uk-icon", "icon: expand", 3, "click"], ["uk-icon", "icon: shrink", 3, "click"], [1, "preview", 3, "ngClass", "innerHTML"]], template: function HtmlEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_Template_a_click_3_listener() { return ctx.insertContent("bold"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_Template_a_click_4_listener() { return ctx.insertContent("italic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_Template_a_click_5_listener() { return ctx.insertContent("quote"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_Template_a_click_8_listener() { return ctx.insertContent("list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_Template_a_click_9_listener() { return ctx.insertContent("code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_Template_a_click_12_listener() { return ctx.insertContent("link"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HtmlEditorComponent_Template_a_click_13_listener() { return ctx.chooseImage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HtmlEditorComponent_a_16_Template, 1, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HtmlEditorComponent_a_17_Template, 1, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HtmlEditorComponent_a_19_Template, 1, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HtmlEditorComponent_a_20_Template, 1, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HtmlEditorComponent_Template_div_resize_22_listener() { return ctx.resizeCodeMirror(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "textarea", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "<p>just a test content here</p>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HtmlEditorComponent_div_27_Template, 1, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.fullscreenEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.previewEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fullscreenEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullscreenEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c2, !ctx.fullscreenEnabled, ctx.fullscreenEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c3, ctx.previewEnabled, !ctx.previewEnabled, !ctx.fullscreenEnabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewEnabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".html-editor-container[_ngcontent-%COMP%] {\n    border: 1px solid #e5e5e5;\n}\n.full-border[_ngcontent-%COMP%] {\n    border: 1px solid #e5e5e5;\n}\n.CodeMirror-Editor-Tab[_ngcontent-%COMP%] {\n    padding: 10px;\n    border-bottom: 1px solid #e5e5e5;\n}\n.editor-content[_ngcontent-%COMP%] {\n    border: 1px solid #e5e5e5;\n}\n.fullscreen[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n    position: fixed;\n    z-index: 1000;\n}\n.preview[_ngcontent-%COMP%] {\n    overflow: scroll;\n    overflow-wrap: break-word;\n    border-left: 1px solid #e5e5e5;\n    height: 300px;\n    padding: 5px;\n}\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n.max-height[_ngcontent-%COMP%] {\n    height: 300px;\n    overflow: scroll;\n}\n.full-height[_ngcontent-%COMP%] {\n    height: 100%;\n}\n.full-height[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: 100%;\n}\n.full-height[_ngcontent-%COMP%]    > .uk-width-1-2[_ngcontent-%COMP%]    > .CodeMirror[_ngcontent-%COMP%] {\n    height: 100%;\n}\n.full-height[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    height: 100%;\n    background-color: white;\n    display: block;\n}\n#preview-content[_ngcontent-%COMP%] {\n    background: white;\n    padding: 5px;\n}\n.uk-icon[_ngcontent-%COMP%] {\n    padding: 0 5px;\n}\n.separator[_ngcontent-%COMP%] {\n    width: 1px;\n    background-color: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2h0bWwtZWRpdG9yL2h0bWwtZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxPQUFPO0lBQ1AsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaHRtbC1lZGl0b3IvaHRtbC1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvZGVNaXJyb3IgKi9cbi5odG1sLWVkaXRvci1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG5cbi5mdWxsLWJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbn1cblxuLkNvZGVNaXJyb3ItRWRpdG9yLVRhYiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcbn1cblxuLmVkaXRvci1jb250ZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuXG5cbi5mdWxsc2NyZWVuIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLnByZXZpZXcge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXgtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5mdWxsLWhlaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZnVsbC1oZWlnaHQgdGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmZ1bGwtaGVpZ2h0ID4gLnVrLXdpZHRoLTEtMiA+IC5Db2RlTWlycm9yIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mdWxsLWhlaWdodCBkaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3ByZXZpZXctY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4udWstaWNvbiB7XG4gICAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5zZXBhcmF0b3Ige1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HtmlEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-html-editor',
                templateUrl: './html-editor.component.html',
                styleUrls: ['./html-editor.component.css'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => HtmlEditorComponent),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => HtmlEditorComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['required']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['maxlength']
            }] }, { type: _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_2__["AbstractFileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class SearchComponent {
    constructor() {
        this.searchNameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriptions = [];
    }
    ngOnInit() {
        const element = document.getElementById('searchInput');
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => e.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(value => {
            console.log('SEARCHED VALUE CHANGED TO: ' + value);
            this.searchNameChanged.emit(value);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], outputs: { searchNameChanged: "searchNameChanged" }, decls: 3, vars: 0, consts: [[1, "uk-search", "uk-search-default"], ["uk-search-icon", ""], ["id", "searchInput", "type", "search", "placeholder", "Enter name...", 1, "uk-search-input"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css']
            }]
    }], function () { return []; }, { searchNameChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _snippet_snippet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snippet/snippet.service */ "./src/app/shared/snippet/snippet.service.ts");
/* harmony import */ var _snippet_snippet_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snippet/snippet-resolve.service */ "./src/app/shared/snippet/snippet-resolve.service.ts");
/* harmony import */ var _snippet_snippet_collection_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snippet/snippet-collection-resolve.service */ "./src/app/shared/snippet/snippet-collection-resolve.service.ts");
/* harmony import */ var _html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-editor/html-editor.component */ "./src/app/shared/html-editor/html-editor.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var maddob_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! maddob-lib */ "./node_modules/maddob-lib/__ivy_ngcc__/fesm2015/maddob-lib.js");
/* harmony import */ var _article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-pagination/pagination.component */ "./src/app/shared/article-pagination/pagination.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/shared/search/search.component.ts");











class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _snippet_snippet_service__WEBPACK_IMPORTED_MODULE_2__["SnippetService"],
        _snippet_snippet_resolve_service__WEBPACK_IMPORTED_MODULE_3__["SnippetResolveService"],
        _snippet_snippet_collection_resolve_service__WEBPACK_IMPORTED_MODULE_4__["SnippetCollectionResolveService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            maddob_lib__WEBPACK_IMPORTED_MODULE_7__["MaddobLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_5__["HtmlEditorComponent"], _article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        maddob_lib__WEBPACK_IMPORTED_MODULE_7__["MaddobLibModule"]], exports: [_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_5__["HtmlEditorComponent"], _article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_5__["HtmlEditorComponent"], _article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    maddob_lib__WEBPACK_IMPORTED_MODULE_7__["MaddobLibModule"]
                ],
                providers: [
                    _snippet_snippet_service__WEBPACK_IMPORTED_MODULE_2__["SnippetService"],
                    _snippet_snippet_resolve_service__WEBPACK_IMPORTED_MODULE_3__["SnippetResolveService"],
                    _snippet_snippet_collection_resolve_service__WEBPACK_IMPORTED_MODULE_4__["SnippetCollectionResolveService"]
                ],
                exports: [_html_editor_html_editor_component__WEBPACK_IMPORTED_MODULE_5__["HtmlEditorComponent"], _article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/snippet/snippet-collection-resolve.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/snippet/snippet-collection-resolve.service.ts ***!
  \**********************************************************************/
/*! exports provided: SnippetCollectionResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnippetCollectionResolveService", function() { return SnippetCollectionResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _snippet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snippet.service */ "./src/app/shared/snippet/snippet.service.ts");




class SnippetCollectionResolveService {
    constructor(snippetService) {
        this.snippetService = snippetService;
    }
    resolve(route, state) {
        return this.snippetService.getSnippets();
    }
}
SnippetCollectionResolveService.ɵfac = function SnippetCollectionResolveService_Factory(t) { return new (t || SnippetCollectionResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_snippet_service__WEBPACK_IMPORTED_MODULE_1__["SnippetService"])); };
SnippetCollectionResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnippetCollectionResolveService, factory: SnippetCollectionResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnippetCollectionResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _snippet_service__WEBPACK_IMPORTED_MODULE_1__["SnippetService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/snippet/snippet-resolve.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/snippet/snippet-resolve.service.ts ***!
  \***********************************************************/
/*! exports provided: SnippetResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnippetResolveService", function() { return SnippetResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _snippet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snippet.service */ "./src/app/shared/snippet/snippet.service.ts");




class SnippetResolveService {
    constructor(snippetService) {
        this.snippetService = snippetService;
    }
    resolve(activatedRouteSnapshot) {
        return this.snippetService.getSnippetByName(activatedRouteSnapshot.paramMap.get('name'));
    }
}
SnippetResolveService.ɵfac = function SnippetResolveService_Factory(t) { return new (t || SnippetResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_snippet_service__WEBPACK_IMPORTED_MODULE_1__["SnippetService"])); };
SnippetResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnippetResolveService, factory: SnippetResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnippetResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _snippet_service__WEBPACK_IMPORTED_MODULE_1__["SnippetService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/snippet/snippet.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/snippet/snippet.service.ts ***!
  \***************************************************/
/*! exports provided: SnippetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnippetService", function() { return SnippetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class SnippetService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getSnippets() {
        return this.httpClient.get('/api/v1/snippets');
    }
    getSnippetByName(name) {
        return this.httpClient.get(`/api/v1/snippets/${name}`);
    }
    saveSnippet(snippet) {
        if (!snippet) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        // Edit snippet
        if (snippet.id) {
            return this.httpClient.put(`/api/v1/snippets/${snippet.id}`, snippet);
        }
        // create
        return this.httpClient.post('/api/v1/snippets', snippet);
    }
}
SnippetService.ɵfac = function SnippetService_Factory(t) { return new (t || SnippetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SnippetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnippetService, factory: SnippetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnippetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/util/string-utils.ts":
/*!**************************************!*\
  !*** ./src/app/util/string-utils.ts ***!
  \**************************************/
/*! exports provided: StringUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtils", function() { return StringUtils; });
class StringUtils {
    static countWords(str) {
        return str.trim().split(/\s+/).length;
    }
    static countMinutesToRead(str) {
        return Math.ceil(this.countWords(str) / 200);
    }
}


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
const environment = {
    production: false,
    mockSecurity: true,
    keycloakConfig: {}
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/martin/Projects/madblog-frontend-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map