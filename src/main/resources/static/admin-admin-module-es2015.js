(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/access.guard.ts":
/*!***************************************!*\
  !*** ./src/app/admin/access.guard.ts ***!
  \***************************************/
/*! exports provided: AccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGuard", function() { return AccessGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");




class AccessGuard {
    constructor(keycloakService) {
        this.keycloakService = keycloakService;
    }
    canActivate(next, state) {
        return true;
    }
    canLoad(route, segments) {
        if (false === this.keycloakService.canCreateArticles()) {
            this.keycloakService.login();
            return false;
        }
        if (route.path.includes('pages') || route.path.includes('users')) {
            return this.keycloakService.isAdmin();
        }
        return true;
    }
}
AccessGuard.ɵfac = function AccessGuard_Factory(t) { return new (t || AccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__["AbstractKeycloakService"])); };
AccessGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccessGuard, factory: AccessGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__["AbstractKeycloakService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/actuator/actuator.service.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/actuator/actuator.service.ts ***!
  \****************************************************/
/*! exports provided: ActuatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActuatorService", function() { return ActuatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ActuatorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTotalApiRequests() {
        return this.httpClient.get('/actuator/metrics/http.server.requests');
    }
    getMemoryUsed() {
        return this.httpClient.get('/actuator/metrics/jvm.memory.used');
    }
    getTotalMemory() {
        return this.httpClient.get('/actuator/metrics/jvm.memory.max');
    }
    getUptime() {
        return this.httpClient.get('/actuator/metrics/process.uptime');
    }
}
ActuatorService.ɵfac = function ActuatorService_Factory(t) { return new (t || ActuatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ActuatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActuatorService, factory: ActuatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActuatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _global_stats_global_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global-stats/global-stats.component */ "./src/app/admin/global-stats/global-stats.component.ts");
/* harmony import */ var _file_file_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file/file-manager.component */ "./src/app/admin/file/file-manager.component.ts");
/* harmony import */ var _services_file_blog_file_collection_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/file/blog-file-collection-resolve.service */ "./src/app/services/file/blog-file-collection-resolve.service.ts");
/* harmony import */ var _services_user_user_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user/user-resolve.service */ "./src/app/services/user/user-resolve.service.ts");
/* harmony import */ var _access_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./access.guard */ "./src/app/admin/access.guard.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _services_settings_settings_resolve_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/settings/settings-resolve.service */ "./src/app/services/settings/settings-resolve.service.ts");













const routes = [
    {
        path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canLoad: [_access_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuard"]], resolve: { userData: _services_user_user_resolve_service__WEBPACK_IMPORTED_MODULE_7__["UserResolveService"] },
        children: [
            {
                path: '', canLoad: [_access_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuard"]], component: _global_stats_global_stats_component__WEBPACK_IMPORTED_MODULE_4__["GlobalStatsComponent"]
            },
            {
                path: 'users', canLoad: [_access_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuard"]], component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
            },
            {
                path: 'articles', canLoad: [_access_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | article-management-article-management-module */ "article-management-article-management-module").then(__webpack_require__.bind(null, /*! ./../article-management/article-management.module */ "./src/app/article-management/article-management.module.ts")).then(m => m.ArticleManagementModule),
            },
            {
                path: 'pages', canLoad: [_access_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | page-management-page-management-module */ "default~page-management-page-management-module~snippet-management-snippet-management-module").then(__webpack_require__.bind(null, /*! ./../page-management/page-management.module */ "./src/app/page-management/page-management.module.ts")).then(m => m.PageManagementModule),
            },
            {
                path: 'file-manager', canLoad: [_access_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuard"]], component: _file_file_manager_component__WEBPACK_IMPORTED_MODULE_5__["FileManagerComponent"], resolve: { blogPage: _services_file_blog_file_collection_resolve_service__WEBPACK_IMPORTED_MODULE_6__["BlogFileCollectionResolveService"] }
            },
            {
                path: 'snippets', loadChildren: () => Promise.all(/*! import() | snippet-management-snippet-management-module */[__webpack_require__.e("default~page-management-page-management-module~snippet-management-snippet-management-module"), __webpack_require__.e("snippet-management-snippet-management-module")]).then(__webpack_require__.bind(null, /*! ./../snippet-management/snippet-management.module */ "./src/app/snippet-management/snippet-management.module.ts")).then(m => m.SnippetManagementModule)
            },
            {
                path: 'settings', canLoad: [_access_guard__WEBPACK_IMPORTED_MODULE_8__["AccessGuard"]], component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"], resolve: { websiteProperties: _services_settings_settings_resolve_service__WEBPACK_IMPORTED_MODULE_10__["SettingsResolveService"] }
            }
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _global_stats_global_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-stats/global-stats.component */ "./src/app/admin/global-stats/global-stats.component.ts");
/* harmony import */ var _file_file_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file/file-manager.component */ "./src/app/admin/file/file-manager.component.ts");
/* harmony import */ var _file_file_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file/file-upload.component */ "./src/app/admin/file/file-upload.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/admin/modal/modal.component.ts");
/* harmony import */ var _modal_modal_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.directive */ "./src/app/admin/modal/modal.directive.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var maddob_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! maddob-lib */ "./node_modules/maddob-lib/__ivy_ngcc__/fesm2015/maddob-lib.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            maddob_lib__WEBPACK_IMPORTED_MODULE_11__["MaddobLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
        _modal_modal_directive__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        _global_stats_global_stats_component__WEBPACK_IMPORTED_MODULE_5__["GlobalStatsComponent"],
        _file_file_manager_component__WEBPACK_IMPORTED_MODULE_6__["FileManagerComponent"],
        _file_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["FileUploadComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        maddob_lib__WEBPACK_IMPORTED_MODULE_11__["MaddobLibModule"]], exports: [_file_file_manager_component__WEBPACK_IMPORTED_MODULE_6__["FileManagerComponent"],
        _file_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["FileUploadComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    maddob_lib__WEBPACK_IMPORTED_MODULE_11__["MaddobLibModule"]
                ],
                declarations: [
                    _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
                    _modal_modal_directive__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                    _global_stats_global_stats_component__WEBPACK_IMPORTED_MODULE_5__["GlobalStatsComponent"],
                    _file_file_manager_component__WEBPACK_IMPORTED_MODULE_6__["FileManagerComponent"],
                    _file_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["FileUploadComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"]
                ],
                exports: [
                    _file_file_manager_component__WEBPACK_IMPORTED_MODULE_6__["FileManagerComponent"],
                    _file_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["FileUploadComponent"],
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]
                ],
                entryComponents: [_file_file_manager_component__WEBPACK_IMPORTED_MODULE_6__["FileManagerComponent"], _file_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["FileUploadComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/dashboard-menu.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/dashboard-menu.service.ts ***!
  \*************************************************/
/*! exports provided: DashboardMenuService, DashboardMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMenuService", function() { return DashboardMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMenuItem", function() { return DashboardMenuItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routing.service */ "./src/app/routing.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class DashboardMenuService {
    constructor(routingService) {
        this.routingService = routingService;
        this.dashboardMenuItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dashboadMenuItem$ = this.dashboardMenuItems.asObservable();
        this.urlOptions = {
            '/admin/articles': [
                { label: 'create new article', url: '/admin/articles/create' },
            ],
            '/admin/pages': [
                { label: 'create new page', url: '/admin/pages/create' }
            ],
            '/admin/snippets': [
                { label: 'create new snippet', url: '/admin/snippets/create' }
            ],
            '/admin/settings': [
                { label: 'Settings', url: null }
            ]
        };
        routingService.currentUrl$.subscribe(url => {
            const menuItems = this.urlOptions[url];
            if (!menuItems) {
                this.dashboardMenuItems.next([]);
            }
            else {
                this.dashboardMenuItems.next(menuItems);
            }
        });
    }
}
DashboardMenuService.ɵfac = function DashboardMenuService_Factory(t) { return new (t || DashboardMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"])); };
DashboardMenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardMenuService, factory: DashboardMenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardMenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }]; }, null); })();
class DashboardMenuItem {
}


/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../routing.service */ "./src/app/routing.service.ts");
/* harmony import */ var _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-menu.service */ "./src/app/admin/dashboard-menu.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/admin/modal/modal.component.ts");














function DashboardComponent_li_6_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r7.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r7.label);
} }
function DashboardComponent_li_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r7.label);
} }
function DashboardComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_li_6_button_1_Template, 2, 2, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_li_6_span_2_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r7.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuItem_r7.url);
} }
const _c0 = function (a0) { return { "uk-active": a0 }; };
function DashboardComponent_li_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.currentUrl === "/admin/pages"));
} }
function DashboardComponent_li_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.currentUrl === "/admin/users"));
} }
function DashboardComponent_li_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HTML Snippets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.currentUrl === "/admin/snippets"));
} }
function DashboardComponent_li_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.currentUrl === "/admin/pages"));
} }
function DashboardComponent_li_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r5.currentUrl === "/admin/users"));
} }
function DashboardComponent_li_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HTML Snippets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r6.currentUrl === "/admin/snippets"));
} }
class DashboardComponent {
    constructor(routingService, keycloakService, activatedRoute, 
    //private router: Router,
    dashboardMenuService, settingsService) {
        this.routingService = routingService;
        this.keycloakService = keycloakService;
        this.activatedRoute = activatedRoute;
        this.dashboardMenuService = dashboardMenuService;
        this.settingsService = settingsService;
        this.subscriptions = [];
        this.menuItems = this.dashboardMenuService.dashboadMenuItem$;
    }
    ngOnInit() {
        this.isAdmin = this.keycloakService.isAdmin();
        this.subscriptions.push(this.routingService.currentUrl$.subscribe(url => this.currentUrl = url));
        this.subscriptions.push(this.keycloakService.getKeycloakTokenParsed$().subscribe((parsedToken) => {
            this.userId = parsedToken.sub;
        }));
        this.subscriptions.push(this.activatedRoute.data.subscribe(data => {
            console.log('data is:', data);
            this.user = data.userData;
            this.role = 'user';
            if (this.user.roles.includes('publisher')) {
                this.role = 'publisher';
            }
            if (this.user.roles.includes('admin')) {
                this.role = 'admin';
            }
        }));
        this.logoUrl$ = this.settingsService.logoImageUrl$;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__["AbstractKeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_menu_service__WEBPACK_IMPORTED_MODULE_4__["DashboardMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 95, vars: 38, consts: [[1, "uk-offcanvas-content"], ["id", "top-head", 1, "uk-position-fixed"], [1, "uk-container", "uk-container-expand", "uk-background-primary"], ["data-uk-navbar", "mode:click; duration: 250", 1, "uk-navbar", "uk-light"], [1, "uk-navbar-left"], [1, "uk-navbar-nav"], [4, "ngFor", "ngForOf"], [1, "uk-navbar-right"], ["uk-icon", "sign-out"], [1, "uk-hidden@m"], ["data-uk-toggle", "", "data-uk-navbar-toggle-icon", "", "href", "#offcanvas-nav", "title", "show menu", "data-uk-tooltip", "", "aria-expanded", "false", 1, "uk-navbar-toggle", "uk-icon", "uk-navbar-toggle-icon"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", "data-svg", "navbar-toggle-icon"], ["y", "9", "width", "20", "height", "2"], ["y", "3", "width", "20", "height", "2"], ["y", "15", "width", "20", "height", "2"], ["id", "left-col", 1, "uk-light", "uk-visible@m"], [1, "left-logo", "uk-flex", "uk-flex-middle"], ["alt", "logo", 1, "custom-logo", 3, "src"], [1, "left-content-box", "content-box-dark"], ["src", "img/avatar.svg", "alt", "", 1, "uk-border-circle", "profile-img"], [1, "uk-text-center", "uk-margin-remove-vertical", "text-light"], [1, "uk-position-relative", "uk-text-center", "uk-display-block"], ["href", "#", "data-uk-icon", "icon: triangle-down; ratio: 0.7", 1, "uk-text-small", "uk-text-muted", "uk-display-block", "uk-text-center", "uk-icon"], [1, "left-nav-wrap"], ["data-uk-nav", "", 1, "uk-nav", "uk-nav-default", "uk-nav-parent-icon"], [1, "uk-nav-header"], [3, "ngClass"], ["routerLink", "./"], ["data-uk-icon", "icon: info", 1, "uk-margin-small-right", "uk-icon"], ["routerLink", "./settings"], ["data-uk-icon", "icon: settings", 1, "uk-margin-small-right", "uk-icon"], ["routerLink", "./articles"], ["data-uk-icon", "icon: list", 1, "uk-margin-small-right", "uk-icon"], ["routerLink", "./file-manager"], ["data-uk-icon", "icon: thumbnails", 1, "uk-margin-small-right", "uk-icon"], [3, "ngClass", 4, "ngIf"], [1, "left-content-box", "uk-margin-top"], [1, "bar-bottom"], ["data-uk-grid", "", 1, "uk-subnav", "uk-flex", "uk-flex-center", "uk-child-width-1-5", "uk-grid"], [1, "uk-first-column"], ["routerLink", "/", "data-uk-icon", "icon: home", "title", "", "data-uk-tooltip", "Go to homepage", "aria-expanded", "false", 1, "uk-icon-link", "uk-icon"], ["routerLink", "/logout", "data-uk-tooltip", "Sign out", "data-uk-icon", "icon: sign-out", "title", "logout", "aria-expanded", "false", 1, "uk-icon-link", "uk-icon"], ["id", "content", "data-uk-height-viewport", "expand: true", 2, "min-height", "555px"], [1, "uk-container", "uk-container-expand"], ["id", "offcanvas-nav", "data-uk-offcanvas", "flip: true; overlay: true", 1, "uk-offcanvas"], [1, "uk-offcanvas-bar"], ["type", "button", "data-uk-close", "", 1, "uk-offcanvas-close", "uk-close", "uk-icon"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "xmlns", "http://www.w3.org/2000/svg", "data-svg", "close-icon"], ["fill", "none", "stroke", "#000", "stroke-width", "1.1", "x1", "1", "y1", "1", "x2", "13", "y2", "13"], ["fill", "none", "stroke", "#000", "stroke-width", "1.1", "x1", "13", "y1", "1", "x2", "1", "y2", "13"], [1, "uk-nav", "uk-nav-default"], ["class", "uk-button uk-button-small uk-button-default", 3, "routerLink", 4, "ngIf"], ["class", "uk-logo", 4, "ngIf"], [1, "uk-button", "uk-button-small", "uk-button-default", 3, "routerLink"], [1, "uk-logo"], ["routerLink", "./pages"], ["data-uk-icon", "icon: album", 1, "uk-margin-small-right", "uk-icon"], ["routerLink", "./users"], ["data-uk-icon", "icon: users", 1, "uk-margin-small-right", "uk-icon"], ["routerLink", "./snippets"], ["data-uk-icon", "icon: code", 1, "uk-margin-small-right", "uk-icon"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_li_6_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "rect", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "aside", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "File Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DashboardComponent_li_49_Template, 4, 3, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DashboardComponent_li_50_Template, 4, 3, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, DashboardComponent_li_51_Template, 4, 3, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "svg", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "line", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "line", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "ACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "File Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, DashboardComponent_li_87_Template, 4, 3, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, DashboardComponent_li_88_Template, 4, 3, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, DashboardComponent_li_89_Template, 4, 3, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, ctx.menuItems));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, ctx.logoUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.currentUrl === "/admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.currentUrl === "/admin/settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.currentUrl === "/admin/articles"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.currentUrl === "/admin/file-manager"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.currentUrl === "/admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.currentUrl === "/admin/settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.currentUrl === "/admin/articles"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.currentUrl === "/admin/file-manager"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["#top-head[_ngcontent-%COMP%] {\n\tz-index: 9;\n\ttop: 0;\n\tleft:0;\n\tright:0;\n}\n\n.uk-navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .uk-navbar-item[_ngcontent-%COMP%], .uk-navbar-toggle[_ngcontent-%COMP%] {\n\t\n  min-height: 52px;\n  padding: 0 8px;\n  font-size: 0.85rem;\n}\n.navbar-logo[_ngcontent-%COMP%] {\n\tbackground-color: #222A30;\n\tmargin-left: -12px;\n}\n\n#left-col[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top:0;\n  bottom:0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: #222A30;\n  width: 240px;\n  z-index:2;\n  transition: height 0.3s ease-out;\n}\n\n#left-col[_ngcontent-%COMP%]   ul.uk-nav-default[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n\tpadding: 8px 20px;\n\tborder-left: 2px solid transparent;\n\ttransition: all 0.15s ease-out;\n}\n#left-col[_ngcontent-%COMP%]   ul.uk-nav-default[_ngcontent-%COMP%]   li.uk-nav-header[_ngcontent-%COMP%] {\n\tpadding:  20px 20px 8px 20px;\n}\n#left-col[_ngcontent-%COMP%]   ul.uk-nav-default[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, #left-col[_ngcontent-%COMP%]   ul.uk-nav-default[_ngcontent-%COMP%]    > li.uk-open[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n\tborder-left: 2px solid #39f;\n\tpadding-left: 30px;\n\tcolor: white;\n\tbackground-color: rgba(0,0,0,0.1);\n}\n#left-col[_ngcontent-%COMP%]   ul.uk-nav-default[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .uk-nav-sub[_ngcontent-%COMP%] {\n\tpadding-left: 34px;\n}\n#left-col[_ngcontent-%COMP%]   .uk-dropdown.user-drop[_ngcontent-%COMP%] {\n\tmin-width: 160px;\n\tmax-width: 160px;\n\tpadding: 0.75rem;\n}\n\n#left-col[_ngcontent-%COMP%]   .uk-dropdown.user-drop[_ngcontent-%COMP%]:after {\n\tbottom: 100%;\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: \" \";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n\tborder-color: rgba(255, 255, 255, 0);\n\tborder-bottom-color: #fff;\n\tborder-width: 4px;\n\tmargin-left: -4px;\n}\n.left-content-box[_ngcontent-%COMP%] {\n\tpadding: 0.75rem 20px;\n\tborder-top: 1px solid rgba(255,255,255,0.06);\n\tmargin-bottom: -1px;\n}\n.left-nav-wrap[_ngcontent-%COMP%] {\n\tpadding-bottom: 60px;\n}\n.content-box-dark[_ngcontent-%COMP%] {\n\tbackground-color: rgba(0,0,0,0.09);\n}\n.text-light[_ngcontent-%COMP%] {\n\tfont-weight: 200;\n\tfont-size: 1.25rem;\n}\n.bar-bottom[_ngcontent-%COMP%] {\n\tborder-top: 1px solid rgba(255,255,255,0.07);\n\tpadding: 15px 0;\n   background-color: #222A30;\n   position: fixed;\n   left: 0;\n   right: 0;\n   z-index: 3;\n   bottom: 0;\n   width: 240px;\n}\n.left-logo[_ngcontent-%COMP%] {\n\t\n\theight: 52px;\n\tline-height: 52px;\n\tpadding: 0 20px;\n}\n.custom-logo[_ngcontent-%COMP%] {\n\theight: 32px;\n}\n.profile-img[_ngcontent-%COMP%] {\n\twidth: 60px;\n\tmargin: 0 auto 10px auto;\n\tdisplay: block;\n}\n.panel-icons[_ngcontent-%COMP%] {\n\tmargin: 0 4px;\n}\n.uk-tooltip[_ngcontent-%COMP%] {\n\tbackground-color: white;\n\tcolor: #242C33;\n\tbox-shadow: 0 2px 12px rgba(50,50,50,0.1);\n}\n#content[_ngcontent-%COMP%] {\n\tmargin-top: 30px;\n\tpadding: 30px 0 0 0;\n\n\tmargin-left: 0;\n\ttransition: margin 0.2s cubic-bezier(.4,0,.2,1);\n}\n@media screen and (min-width: 960px){\n\t#content[_ngcontent-%COMP%] {\n\t\t\n\t\tmargin-left: 240px;\n\t}\n\t#top-head[_ngcontent-%COMP%] {\n\t\t\n\t\tleft:240px;\n\t}\n}\n#top-head[_ngcontent-%COMP%]   [class*=\"uk-navbar-dropdown-bottom\"][_ngcontent-%COMP%] {\n\tmargin-top: 0;\n}\n\n.search-field[_ngcontent-%COMP%] {\n\twidth: 140px;\n\ttransition: all 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.275);\n}\n.search-field[_ngcontent-%COMP%]:focus {\n\twidth: 200px;\n\tborder-color: #fff !important;\n}\n.uk-card[_ngcontent-%COMP%] {\n\tbox-shadow: none;\n}\n.uk-heading-primary[_ngcontent-%COMP%] {\n  letter-spacing: -0.032em;\n  font-weight: 300;\n}\n\n.uk-card[_ngcontent-%COMP%] {\n\ttransition: box-shadow 0.55s cubic-bezier(.4,0,.2,1);\n}\n\n.uk-progress[_ngcontent-%COMP%] {\n\theight: 3px;\n\tmargin-bottom: 0.5rem;\n\tbackground-color: rgba(0,0,0,0.23);\n\n}\n*[_ngcontent-%COMP%]    + .uk-progress[_ngcontent-%COMP%] {\n    margin-top: 0.25rem;\n}\n.uk-progress.warning[_ngcontent-%COMP%]::-webkit-progress-value {\n  background-color: #faa05a;\n}\n.uk-progress.warning[_ngcontent-%COMP%]::-moz-progress-bar {\n  background-color: #faa05a;\n}\n.uk-progress.warning[_ngcontent-%COMP%]::-ms-fill {\n  background-color: #faa05a;\n}\n.uk-progress.success[_ngcontent-%COMP%]::-webkit-progress-value {\n  background-color: #32d296;\n}\n.uk-progress.success[_ngcontent-%COMP%]::-moz-progress-bar {\n  background-color: #32d296;\n}\n.uk-progress.success[_ngcontent-%COMP%]::-ms-fill {\n  background-color: #32d296;\n}\n\n.chart-container[_ngcontent-%COMP%] {\n\tposition: relative;\n\theight: 300px;\n\tmargin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUF5QjtBQUN6QjtDQUNDLFVBQVU7Q0FDVixNQUFNO0NBQ04sTUFBTTtDQUNOLE9BQU87QUFDUjtBQUNBLG1CQUFtQjtBQUNuQjs7O0NBR0Msa0JBQWtCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxLQUFLO0VBQ0wsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDO0FBQ0EsbUJBQW1CO0FBQ25CO0NBQ0MsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyw4QkFBOEI7QUFDL0I7QUFDQTtDQUNDLDRCQUE0QjtBQUM3QjtBQUVBO0NBQ0MsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osaUNBQWlDO0FBQ2xDO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCO0FBQ0EsZUFBZTtBQUNmO0NBQ0MsWUFBWTtDQUNaLFNBQVM7Q0FDVCx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFNBQVM7Q0FDVCxRQUFRO0NBQ1Isa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixvQ0FBb0M7Q0FDcEMseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQiw0Q0FBNEM7Q0FDNUMsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGtDQUFrQztBQUNuQztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsNENBQTRDO0NBQzVDLGVBQWU7R0FDYix5QkFBeUI7R0FDekIsZUFBZTtHQUNmLE9BQU87R0FDUCxRQUFRO0dBQ1IsVUFBVTtHQUNWLFNBQVM7R0FDVCxZQUFZO0FBQ2Y7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztDQUNYLHdCQUF3QjtDQUN4QixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGNBQWM7Q0FDZCx5Q0FBeUM7QUFDMUM7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEIsK0JBQStCO0NBQzlCLGNBQWM7Q0FDZCwrQ0FBK0M7QUFDaEQ7QUFDQTtDQUNDO0VBQ0MsNEJBQTRCO0VBQzVCLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsNEJBQTRCO0VBQzVCLFVBQVU7Q0FDWDtBQUNEO0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7QUFFQSxlQUFlO0FBQ2Y7Q0FDQyxZQUFZO0NBRVosOERBQThEO0FBQy9EO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7QUFDQSw2QkFBNkI7QUFDN0I7Q0FFQyxvREFBb0Q7QUFDckQ7QUFDQSxhQUFhO0FBQ2I7Q0FDQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGtDQUFrQzs7QUFFbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLFdBQVc7QUFDWDtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0gVG9wIG5hdmlnYXRpb24gLS0gKi9cbiN0b3AtaGVhZCB7XG5cdHotaW5kZXg6IDk7XG5cdHRvcDogMDtcblx0bGVmdDowO1xuXHRyaWdodDowO1xufVxuLyogU21hbGxlciBIZWFkZXIgKi9cbi51ay1uYXZiYXItbmF2ID4gbGkgPiBhLFxuLnVrLW5hdmJhci1pdGVtLFxuLnVrLW5hdmJhci10b2dnbGUge1xuXHQvKiBuYXZiYXIgaGVpZ2h0ICovXG4gIG1pbi1oZWlnaHQ6IDUycHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG4ubmF2YmFyLWxvZ28ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyQTMwO1xuXHRtYXJnaW4tbGVmdDogLTEycHg7XG59XG4vKiBMZWZ0IGJhciAqL1xuI2xlZnQtY29sIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6MDtcbiAgYm90dG9tOjA7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMkEzMDtcbiAgd2lkdGg6IDI0MHB4O1xuICB6LWluZGV4OjI7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2Utb3V0O1xufVxuLyogTGVmdCBiYXIgbGlua3MgKi9cbiNsZWZ0LWNvbCB1bC51ay1uYXYtZGVmYXVsdCA+IGxpID4gYSB7XG5cdHBhZGRpbmc6IDhweCAyMHB4O1xuXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XG59XG4jbGVmdC1jb2wgdWwudWstbmF2LWRlZmF1bHQgbGkudWstbmF2LWhlYWRlciB7XG5cdHBhZGRpbmc6ICAyMHB4IDIwcHggOHB4IDIwcHg7XG59XG5cbiNsZWZ0LWNvbCB1bC51ay1uYXYtZGVmYXVsdCA+IGxpID4gYTpob3ZlciwgI2xlZnQtY29sIHVsLnVrLW5hdi1kZWZhdWx0ID4gbGkudWstb3BlbiA+IGEge1xuXHRib3JkZXItbGVmdDogMnB4IHNvbGlkICMzOWY7XG5cdHBhZGRpbmctbGVmdDogMzBweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG59XG4jbGVmdC1jb2wgdWwudWstbmF2LWRlZmF1bHQgbGkgLnVrLW5hdi1zdWIge1xuXHRwYWRkaW5nLWxlZnQ6IDM0cHg7XG59XG4jbGVmdC1jb2wgLnVrLWRyb3Bkb3duLnVzZXItZHJvcCB7XG5cdG1pbi13aWR0aDogMTYwcHg7XG5cdG1heC13aWR0aDogMTYwcHg7XG5cdHBhZGRpbmc6IDAuNzVyZW07XG59XG4vKiBEcm9wIGFycm93ICovXG4jbGVmdC1jb2wgLnVrLWRyb3Bkb3duLnVzZXItZHJvcDphZnRlciB7XG5cdGJvdHRvbTogMTAwJTtcblx0bGVmdDogNTAlO1xuXHRib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRjb250ZW50OiBcIiBcIjtcblx0aGVpZ2h0OiAwO1xuXHR3aWR0aDogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItd2lkdGg6IDRweDtcblx0bWFyZ2luLWxlZnQ6IC00cHg7XG59XG4ubGVmdC1jb250ZW50LWJveCB7XG5cdHBhZGRpbmc6IDAuNzVyZW0gMjBweDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG5cdG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG4ubGVmdC1uYXYtd3JhcCB7XG5cdHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuLmNvbnRlbnQtYm94LWRhcmsge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDkpO1xufVxuLnRleHQtbGlnaHQge1xuXHRmb250LXdlaWdodDogMjAwO1xuXHRmb250LXNpemU6IDEuMjVyZW07XG59XG4uYmFyLWJvdHRvbSB7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuXHRwYWRkaW5nOiAxNXB4IDA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyQTMwO1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgbGVmdDogMDtcbiAgIHJpZ2h0OiAwO1xuICAgei1pbmRleDogMztcbiAgIGJvdHRvbTogMDtcbiAgIHdpZHRoOiAyNDBweDtcbn1cbi5sZWZ0LWxvZ28ge1xuXHQvKiBuYXZiYXIgaGVpZ2h0ICovXG5cdGhlaWdodDogNTJweDtcblx0bGluZS1oZWlnaHQ6IDUycHg7XG5cdHBhZGRpbmc6IDAgMjBweDtcbn1cbi5jdXN0b20tbG9nbyB7XG5cdGhlaWdodDogMzJweDtcbn1cbi5wcm9maWxlLWltZyB7XG5cdHdpZHRoOiA2MHB4O1xuXHRtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuLnBhbmVsLWljb25zIHtcblx0bWFyZ2luOiAwIDRweDtcbn1cbi51ay10b29sdGlwIHtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGNvbG9yOiAjMjQyQzMzO1xuXHRib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoNTAsNTAsNTAsMC4xKTtcbn1cbiNjb250ZW50IHtcblx0bWFyZ2luLXRvcDogMzBweDtcblx0cGFkZGluZzogMzBweCAwIDAgMDtcbi8qXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3OyAqL1xuXHRtYXJnaW4tbGVmdDogMDtcblx0dHJhbnNpdGlvbjogbWFyZ2luIDAuMnMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCl7XG5cdCNjb250ZW50IHtcblx0XHQvKiBlcXVhbCB0byBsZWZ0LWNvbCB3aWR0aCAqL1xuXHRcdG1hcmdpbi1sZWZ0OiAyNDBweDtcblx0fVxuXHQjdG9wLWhlYWQge1xuXHRcdC8qIGVxdWFsIHRvIGxlZnQtY29sIHdpZHRoICovXG5cdFx0bGVmdDoyNDBweDtcblx0fVxufVxuXG4jdG9wLWhlYWQgW2NsYXNzKj1cInVrLW5hdmJhci1kcm9wZG93bi1ib3R0b21cIl0ge1xuXHRtYXJnaW4tdG9wOiAwO1xufVxuXG4vKiBTZWFyY2ggbmF2ICovXG4uc2VhcmNoLWZpZWxkIHtcblx0d2lkdGg6IDE0MHB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4yNzUpO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMjc1KTtcbn1cbi5zZWFyY2gtZmllbGQ6Zm9jdXMge1xuXHR3aWR0aDogMjAwcHg7XG5cdGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnVrLWNhcmQge1xuXHRib3gtc2hhZG93OiBub25lO1xufVxuLnVrLWhlYWRpbmctcHJpbWFyeSB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMzJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi8qIFNtb290aCBzaGFkb3cgdHJhbnNpdGlvbiAqL1xuLnVrLWNhcmQge1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41NXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG5cdHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41NXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG59XG4vKiBQcm9ncmVzcyAqL1xuLnVrLXByb2dyZXNzIHtcblx0aGVpZ2h0OiAzcHg7XG5cdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIzKTtcblxufVxuKiArIC51ay1wcm9ncmVzcyB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbi51ay1wcm9ncmVzcy53YXJuaW5nOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYTA1YTtcbn1cbi51ay1wcm9ncmVzcy53YXJuaW5nOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWEwNWE7XG59XG4udWstcHJvZ3Jlc3Mud2FybmluZzo6LW1zLWZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhMDVhO1xufVxuLnVrLXByb2dyZXNzLnN1Y2Nlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJkMjk2O1xufVxuLnVrLXByb2dyZXNzLnN1Y2Nlc3M6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyZDI5Njtcbn1cbi51ay1wcm9ncmVzcy5zdWNjZXNzOjotbXMtZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMmQyOTY7XG59XG4vKiBDaGFydHMgKi9cbi5jaGFydC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGhlaWdodDogMzAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }, { type: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_2__["AbstractKeycloakService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _dashboard_menu_service__WEBPACK_IMPORTED_MODULE_4__["DashboardMenuService"] }, { type: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/file/file-manager.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/file/file-manager.component.ts ***!
  \******************************************************/
/*! exports provided: FileManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerComponent", function() { return FileManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/file/abstract.file.service */ "./src/app/services/file/abstract.file.service.ts");
/* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-upload.component */ "./src/app/admin/file/file-upload.component.ts");
/* harmony import */ var _shared_article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/article-pagination/pagination.component */ "./src/app/shared/article-pagination/pagination.component.ts");
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/search/search.component */ "./src/app/shared/search/search.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function FileManagerComponent_div_9_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_div_9_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const file_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.selectItem(file_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileManagerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileManagerComponent_div_9_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const file_r16 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.deleteFile(file_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FileManagerComponent_div_9_button_13_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/api/v1/files/", file_r16.id, "?size=200", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.selectable);
} }
class FileManagerComponent {
    constructor(activatedRoute, fileService) {
        this.activatedRoute = activatedRoute;
        this.fileService = fileService;
        this.selectable = false;
        this.subscriptions = [];
        this.currentPage = 0;
        this.totalPages = 0;
        this.searchedName = '';
    }
    ngOnInit() {
        this.subscriptions.push(this.activatedRoute.data.subscribe(data => {
            if (data.blogPage) {
                this.blogFiles = data.blogPage.blogFiles;
                this.currentPage = data.blogPage.pageNumber;
                this.totalPages = data.blogPage.totalPages;
            }
        }));
        if (this.blogFiles === null || this.blogFiles === undefined) {
            this.subscriptions.push(this.fileService.getFiles().subscribe((blogFilesCollection) => {
                this.blogFiles = blogFilesCollection.blogFiles;
            }));
        }
        this.fileService.getFileUploaded$().subscribe(newFile => {
            this.blogFiles.unshift(newFile);
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    selectItem(file) {
        this.fileService.selectFile(this.id, file);
    }
    deleteFile(file) {
        this.fileService.deleteFile(file).subscribe(status => {
            if (status) {
                console.log('FILE DELETED', file);
                let indexToDelete = -1;
                this.blogFiles.find((value, index) => {
                    if (value.id === file.id) {
                        indexToDelete = index;
                        return true;
                    }
                    return false;
                });
                if (indexToDelete > -1) {
                    console.log('BEFORE DELETE', this.blogFiles);
                    this.blogFiles.splice(indexToDelete, 1);
                    console.log('AFTER DELETE', this.blogFiles);
                }
            }
        });
    }
    loadPage(pageNumber) {
        const s = this.fileService.getFilePage(pageNumber, this.searchedName).subscribe((blogFilePage) => {
            if (blogFilePage) {
                this.blogFiles = blogFilePage.blogFiles;
                this.currentPage = blogFilePage.pageNumber;
                this.totalPages = blogFilePage.totalPages;
            }
            s.unsubscribe();
        });
    }
    searchNameChanged(name) {
        this.searchedName = name;
        this.loadPage(this.currentPage);
    }
}
FileManagerComponent.ɵfac = function FileManagerComponent_Factory(t) { return new (t || FileManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_2__["AbstractFileService"])); };
FileManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileManagerComponent, selectors: [["app-file-manager"]], inputs: { selectable: "selectable" }, decls: 10, vars: 3, consts: [[1, "uk-container"], [1, "uk-flex", "uk-flex-between", "uk-flex-middle", "uk-margin-bottom"], [1, "uk-flex-left", "uk-flex-middle"], [3, "currentPage", "totalPages", "pageRequested"], [1, "uk-flex-right"], [3, "searchNameChanged"], [1, "uk-grid", "uk-grid-small"], ["class", "file-manager-card uk-card uk-card-small uk-margin-left uk-margin-bottom", 4, "ngFor", "ngForOf"], [1, "file-manager-card", "uk-card", "uk-card-small", "uk-margin-left", "uk-margin-bottom"], [1, "uk-card-header"], [1, "uk-inline"], [1, "uk-cover-container"], ["width", "200", "height", "120"], ["alt", "", "uk-cover", "", 3, "src"], [1, "uk-card-body", "nb-card-body"], [1, "uk-text-small"], [1, "uk-card-footer"], [1, "uk-float-right"], ["uk-icon", "trash", 1, "uk-icon-link", 3, "click"], [1, "uk-float-left"], ["class", "uk-button uk-button-small uk-button-primary", 3, "click", 4, "ngIf"], [1, "uk-button", "uk-button-small", "uk-button-primary", 3, "click"]], template: function FileManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-file-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-pagination", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageRequested", function FileManagerComponent_Template_app_pagination_pageRequested_5_listener($event) { return ctx.loadPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchNameChanged", function FileManagerComponent_Template_app_search_searchNameChanged_7_listener($event) { return ctx.searchNameChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FileManagerComponent_div_9_Template, 14, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPage", ctx.currentPage)("totalPages", ctx.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogFiles);
    } }, directives: [_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"], _shared_article_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"], _shared_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".file-manager-card[_ngcontent-%COMP%] {\n    width: 200px;\n    border: 1px solid #ccc;\n}\n\n.nb-card-body[_ngcontent-%COMP%] {\n    max-height: 100px;\n    overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmlsZS9maWxlLW1hbmFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZmlsZS9maWxlLW1hbmFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLW1hbmFnZXItY2FyZCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5uYi1jYXJkLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file-manager',
                templateUrl: './file-manager.component.html',
                styleUrls: ['./file-manager.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_2__["AbstractFileService"] }]; }, { selectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/file/file-upload.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/file/file-upload.component.ts ***!
  \*****************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../app/services/file/abstract.file.service */ "./src/app/services/file/abstract.file.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["file"];
function FileUploadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function FileUploadComponent_div_1_Template_div_drop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r179.onDrop($event); })("dragover", function FileUploadComponent_div_1_Template_div_dragover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r181.onDragOver($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To upload files just drop them here or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_div_1_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r180); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r182.fileAdded($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "selecting one");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploadComponent_table_5_tr_11_td_5_div_1_progress_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "progress", 19);
} if (rf & 2) {
    const file_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r187.filesBeingUploaded[file_r184.name].progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r187.filesBeingUploaded[file_r184.name].size);
} }
function FileUploadComponent_table_5_tr_11_td_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploadComponent_table_5_tr_11_td_5_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "upload failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploadComponent_table_5_tr_11_td_5_div_1_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r193); const file_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r191.uploadFile(file_r184); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FileUploadComponent_table_5_tr_11_td_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploadComponent_table_5_tr_11_td_5_div_1_progress_1_Template, 1, 2, "progress", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploadComponent_table_5_tr_11_td_5_div_1_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploadComponent_table_5_tr_11_td_5_div_1_div_3_Template, 5, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r186.filesBeingUploaded[file_r184.name].completed && !ctx_r186.filesBeingUploaded[file_r184.name].error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r186.filesBeingUploaded[file_r184.name].completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r186.filesBeingUploaded[file_r184.name].error);
} }
function FileUploadComponent_table_5_tr_11_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploadComponent_table_5_tr_11_td_5_div_1_Template, 4, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r185.filesBeingUploaded[file_r184.name]);
} }
function FileUploadComponent_table_5_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUploadComponent_table_5_tr_11_td_5_Template, 2, 1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r184 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r184.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r184.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", file_r184.name);
} }
function FileUploadComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filename");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploadComponent_table_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r197); const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r196.clearAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FileUploadComponent_table_5_tr_11_Template, 6, 3, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r177.selectedFiles);
} }
class FileUploadComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.filesBeingUploaded = {};
    }
    ngOnInit() {
        //this.addSubscriptions();
    }
    ngOnDestroy() {
        this.removeSubscriptions();
    }
    uploadFile(file) {
        this.filesBeingUploaded[file.name] = {
            size: 100,
            progress: 0,
            completed: false,
            error: null
        };
        this.fileService.uploadFile(file);
    }
    clearAll() {
        console.log('CLEAR ALL');
        this.selectedFiles = null;
        this.filesBeingUploaded = {};
        this.removeSubscriptions();
    }
    uploadAll() {
        this.addSubscriptions();
        this.selectedFiles.forEach(file => {
            console.log('UPLOADING FILE: ', file);
            if (!this.fileIsBeingUploaded(file)) {
                this.uploadFile(file);
            }
        });
    }
    onDrop(event) {
        this.selectedFiles = this.fileListToArray(event.dataTransfer.files);
        console.log('ON DROP');
        this.uploadAll();
        event.preventDefault();
    }
    fileListToArray(fileList) {
        const fileArray = new Array();
        for (let i = 0; i < fileList.length; i++) {
            fileArray.push(fileList.item(i));
        }
        console.log('TO RETURN: ', fileArray);
        return fileArray;
    }
    fileIsBeingUploaded(file) {
        return !!this.filesBeingUploaded[file.name];
    }
    onDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }
    fileAdded(event) {
        alert('FILE ADDED');
        // console.log('EVENT IS: ', event);
        if (event.target.files) {
            //this.file.nativeElement.value = '';
            this.selectedFiles = this.fileListToArray(event.target.files);
            this.uploadAll();
        }
    }
    addSubscriptions() {
        this.progressSubscription = this.fileService.getFileUploadProgress$().subscribe((fileProgress) => {
            this.filesBeingUploaded[fileProgress.file.name].progress = Math.round(fileProgress.percentLoaded * 100);
        });
        this.successSubscription = this.fileService.getFileUploaded$().subscribe((file) => {
            this.filesBeingUploaded[file.name].completed = true;
        });
        this.errorSubscription = this.fileService.getFileUploadError$().subscribe((error) => {
            this.filesBeingUploaded[error.file.name].error = error;
        });
    }
    removeSubscriptions() {
        if (this.progressSubscription) {
            this.progressSubscription.unsubscribe();
        }
        if (this.successSubscription) {
            this.progressSubscription.unsubscribe();
        }
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_1__["AbstractFileService"])); };
FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], viewQuery: function FileUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    } }, decls: 6, vars: 2, consts: [["class", "uk-placeholder uk-text-center", 3, "drop", "dragover", 4, "ngIf"], [1, "uk-heading-line"], ["class", "uk-table uk-table-small uk-table-justify uk-table-divider", 4, "ngIf"], [1, "uk-placeholder", "uk-text-center", 3, "drop", "dragover"], ["uk-icon", "icon: cloud-upload"], [1, "uk-text-middle"], ["uk-form-custom", ""], ["type", "file", "multiple", "", 3, "change"], ["file", ""], [1, "uk-link"], [1, "uk-table", "uk-table-small", "uk-table-justify", "uk-table-divider"], [1, "uk-table-expand"], ["type", "button", 1, "uk-button", "uk-button-danger", "uk-button-small", 3, "click"], [4, "ngFor", "ngForOf"], [1, "uk-text-break"], ["class", "uk-table-expand", 4, "ngIf"], [4, "ngIf"], ["class", "uk-progress", 3, "value", "max", 4, "ngIf"], ["class", "uk-text-small", 4, "ngIf"], [1, "uk-progress", 3, "value", "max"], [1, "uk-text-small"], [1, "uk-text-danger"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploadComponent_div_1_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Available images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUploadComponent_table_5_Template, 12, 1, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFiles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".hidden[_ngcontent-%COMP%] {\n    visibility: hidden;\n}\n\n.Upload[_ngcontent-%COMP%] {\n    width: 1150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmlsZS9maWxlLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ZpbGUvZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRkZW4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLlVwbG9hZCB7XG4gICAgd2lkdGg6IDExNTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file-upload',
                templateUrl: './file-upload.component.html',
                styleUrls: ['./file-upload.component.css']
            }]
    }], function () { return [{ type: _app_services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_1__["AbstractFileService"] }]; }, { file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['file', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/global-stats/global-stats.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/global-stats/global-stats.component.ts ***!
  \**************************************************************/
/*! exports provided: GlobalStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStatsComponent", function() { return GlobalStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actuator_actuator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actuator/actuator.service */ "./src/app/admin/actuator/actuator.service.ts");
/* harmony import */ var _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/article/abstract.article.service */ "./src/app/services/article/abstract.article.service.ts");
/* harmony import */ var _services_page_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/page/menu.service */ "./src/app/services/page/menu.service.ts");
/* harmony import */ var _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var maddob_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! maddob-lib */ "./node_modules/maddob-lib/__ivy_ngcc__/fesm2015/maddob-lib.js");












function GlobalStatsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total CPU Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "readableTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total Server uptime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "readableTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total Memory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Memory used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_2_0 = null;
    var tmp_3_0 = null;
    var tmp_4_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.totalRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, ctx_r12.totalTimeSeconds, "1.0-0")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 10, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 12, ctx_r12.uptime)) == null ? null : tmp_2_0.measurements[0] == null ? null : tmp_2_0.measurements[0].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 14, ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 17, ctx_r12.totalMemory)) == null ? null : tmp_3_0.measurements[0] == null ? null : tmp_3_0.measurements[0].value) / (1024 * 1024), "1.1-1"), " MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 19, ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 22, ctx_r12.memoryUsed)) == null ? null : tmp_4_0.measurements[0] == null ? null : tmp_4_0.measurements[0].value) / 1024 / 1024, "1.1-1"), " MB");
} }
function GlobalStatsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Article Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", ctx_r13.articleInfo.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Own: ", ctx_r13.articleInfo.own, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unpublished: ", ctx_r13.articleInfo.unpublished, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Featured: ", ctx_r13.articleInfo.featured, "");
} }
function GlobalStatsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Page Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", ctx_r14.pageInfo.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Own: ", ctx_r14.pageInfo.own, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Unpublished: ", ctx_r14.pageInfo.unpublished, "");
} }
class GlobalStatsComponent {
    constructor(actuatorService, articleService, menuService, keycloakService) {
        this.actuatorService = actuatorService;
        this.articleService = articleService;
        this.menuService = menuService;
        this.keycloakService = keycloakService;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.articleService.getArticleInfo().subscribe(articleInfo => {
            this.articleInfo = articleInfo;
        }));
        this.subscriptions.push(this.menuService.getPageInfo().subscribe(pageInfo => {
            this.pageInfo = pageInfo;
        }));
        this.isAdmin = this.keycloakService.isAdmin();
        if (this.isAdmin) {
            this.subscriptions.push(this.actuatorService.getTotalApiRequests().subscribe(jsonData => {
                this.totalRequests = jsonData.measurements[0].value;
                this.totalTimeSeconds = jsonData.measurements[1].value;
            }));
            this.memoryUsed = this.actuatorService.getMemoryUsed();
            this.totalMemory = this.actuatorService.getTotalMemory();
            this.uptime = this.actuatorService.getUptime();
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
GlobalStatsComponent.ɵfac = function GlobalStatsComponent_Factory(t) { return new (t || GlobalStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_actuator_actuator_service__WEBPACK_IMPORTED_MODULE_1__["ActuatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_2__["AbstractArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_4__["AbstractKeycloakService"])); };
GlobalStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalStatsComponent, selectors: [["app-global-stats"]], decls: 4, vars: 3, consts: [["class", "uk-grid uk-grid-divider uk-grid-medium uk-child-width-1-2 uk-child-width-1-3@l uk-child-width-1-3@xl", "data-uk-grid", "", 4, "ngIf"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-medium"], ["class", "uk-width-1-2@l uk-first-column", 4, "ngIf"], ["data-uk-grid", "", 1, "uk-grid", "uk-grid-divider", "uk-grid-medium", "uk-child-width-1-2", "uk-child-width-1-3@l", "uk-child-width-1-3@xl"], [1, "uk-first-column"], [1, "uk-text-small"], ["data-uk-icon", "icon:download", 1, "uk-margin-small-right", "uk-text-primary", "uk-icon"], [1, "uk-heading-primary", "uk-margin-remove", "uk-text-primary"], ["data-uk-icon", "icon:clock", 1, "uk-margin-small-right", "uk-text-primary", "uk-icon"], ["data-uk-icon", "icon:server", 1, "uk-margin-small-right", "uk-text-primary", "uk-icon"], [1, "uk-width-1-2@l", "uk-first-column"], [1, "uk-card", "uk-card-primary", "uk-card-small", "uk-card-hover"], [1, "uk-card-header"], [1, "uk-grid", "uk-grid-small"], [1, "uk-width-auto"], [1, "uk-card-body"], [1, "uk-card", "uk-card-secondary", "uk-card-small", "uk-card-hover"]], template: function GlobalStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GlobalStatsComponent_div_0_Template, 39, 24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalStatsComponent_div_2_Template, 16, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GlobalStatsComponent_div_3_Template, 14, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articleInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [maddob_lib__WEBPACK_IMPORTED_MODULE_6__["ReadableTimePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2dsb2JhbC1zdGF0cy9nbG9iYWwtc3RhdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-global-stats',
                templateUrl: './global-stats.component.html',
                styleUrls: ['./global-stats.component.css']
            }]
    }], function () { return [{ type: _actuator_actuator_service__WEBPACK_IMPORTED_MODULE_1__["ActuatorService"] }, { type: _services_article_abstract_article_service__WEBPACK_IMPORTED_MODULE_2__["AbstractArticleService"] }, { type: _services_page_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }, { type: _services_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_4__["AbstractKeycloakService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modal_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.directive */ "./src/app/admin/modal/modal.directive.ts");
/* harmony import */ var _admin_file_file_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/file/file-manager.component */ "./src/app/admin/file/file-manager.component.ts");
/* harmony import */ var _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/file/abstract.file.service */ "./src/app/services/file/abstract.file.service.ts");
/* harmony import */ var _shared_snippet_snippet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/snippet/snippet.service */ "./src/app/shared/snippet/snippet.service.ts");









function ModalComponent_ng_template_3_Template(rf, ctx) { }
class ModalComponent {
    constructor(componentFactoryResolver, fileService, snippetService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.fileService = fileService;
        this.snippetService = snippetService;
        this.on = false;
    }
    ngOnInit() {
        this.fileService.getShowHideFileManager$().subscribe((data) => {
            console.log('INFO NEW STATUS ARRIVED - ', data);
            this.id = data.id;
            this.on = data.status;
            if (data.status) {
                this.loadComponent('FileManagerComponent');
            }
            else {
                this.deleteComponent();
            }
        });
    }
    loadComponent(component) {
        let factory = this.componentFactoryResolver.resolveComponentFactory(_admin_file_file_manager_component__WEBPACK_IMPORTED_MODULE_2__["FileManagerComponent"]);
        let viewComponentRef = this.modalHost.viewContainerRef;
        viewComponentRef.clear();
        let componentRef = viewComponentRef.createComponent(factory);
        componentRef.instance.id = this.id;
        componentRef.instance.selectable = true;
    }
    closeModal() {
        this.fileService.hideFileManager(this.id);
    }
    deleteComponent() {
        this.on = false;
        this.modalHost.viewContainerRef.clear();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_3__["AbstractFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_snippet_snippet_service__WEBPACK_IMPORTED_MODULE_4__["SnippetService"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_modal_directive__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalHost = _t.first);
    } }, decls: 4, vars: 1, consts: [["id", "modal-container", 1, "uk-modal-container", "uk-modal", "uk-open", 2, "display", "block", 3, "hidden"], [1, "uk-modal-dialog", "uk-modal-body"], ["type", "button", "uk-close", "", 1, "uk-modal-close-default", 3, "click"], ["modal-host", ""]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_2_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_ng_template_3_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.on);
    } }, directives: [_modal_directive__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_3__["AbstractFileService"] }, { type: _shared_snippet_snippet_service__WEBPACK_IMPORTED_MODULE_4__["SnippetService"] }]; }, { modalHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_modal_directive__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/modal/modal.directive.ts":
/*!************************************************!*\
  !*** ./src/app/admin/modal/modal.directive.ts ***!
  \************************************************/
/*! exports provided: ModalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ModalDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ModalDirective.ɵfac = function ModalDirective_Factory(t) { return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ModalDirective, selectors: [["", "modal-host", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[modal-host]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/file/abstract.file.service */ "./src/app/services/file/abstract.file.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _shared_abstract_subscription_destroyer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/abstract.subscription.destroyer */ "./src/app/shared/abstract.subscription.destroyer.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function SettingsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_14_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.deleteCurrentLogo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/api/v1/files/", ctx_r24.websiteProperties.logoUrl, "?size=200", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SettingsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SettingsComponent extends _shared_abstract_subscription_destroyer__WEBPACK_IMPORTED_MODULE_5__["AbstractSubscriptionDestroyer"] {
    constructor(activatedRoute, fileService, settingsService) {
        super();
        this.activatedRoute = activatedRoute;
        this.fileService = fileService;
        this.settingsService = settingsService;
        this.WEBSITE_LOGO_ID = 'WEBSITE_LOGO';
        this.isLoading = false;
    }
    ngOnInit() {
        this.markForUnsubscription(this.activatedRoute.data.subscribe(data => {
            this.websiteProperties = data.websiteProperties;
        }));
        this.titleFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.websiteProperties.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.websiteProperties.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.markForUnsubscription(this.fileService.getFileSelected$().subscribe(data => {
            if (data.id === this.WEBSITE_LOGO_ID) {
                this.websiteProperties.logoUrl = data.file.id.toString();
                this.fileService.hideFileManager(this.WEBSITE_LOGO_ID);
            }
        }));
        this.markForUnsubscription(this.titleFormControl.valueChanges.subscribe((newTitle) => {
            this.websiteProperties.title = newTitle;
        }));
        this.markForUnsubscription(this.nameFormControl.valueChanges.subscribe((newName) => {
            this.websiteProperties.name = newName;
        }));
    }
    selectFile() {
        this.fileService.showFileManager(this.WEBSITE_LOGO_ID);
    }
    saveSettings() {
        this.isLoading = true;
        this.settingsService.saveProperties(this.websiteProperties).subscribe(result => {
            this.isLoading = false;
        });
    }
    deleteCurrentLogo() {
        this.websiteProperties.logoUrl = null;
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_3__["AbstractFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 5, consts: [[1, "uk-form-stacked"], [1, "uk-margin"], ["for", "website_title", 1, "uk-form-label"], [1, "uk-form-controls"], ["id", "website_title", "type", "text", "placeholder", "Enter website title here", 1, "uk-input", 3, "formControl"], ["for", "website_name", 1, "uk-form-label"], ["id", "website_name", "type", "text", "placeholder", "Enter website name here", 1, "uk-input", 3, "formControl"], [1, "uk-form-label"], ["class", "uk-inline-clip uk-transition-toggle", 4, "ngIf"], [1, "uk-margin-top"], [1, "uk-button", "uk-button-primary", "uk-button-small", 3, "click"], [1, "uk-button", "uk-button-danger", "uk-button-small", 3, "disabled", "click"], [4, "ngIf"], [1, "uk-inline-clip", "uk-transition-toggle"], [3, "src"], [1, "uk-transition-slide-top", "uk-position-top"], [1, "icon_delete_overlay_container"], ["uk-icon", "trash", 1, "uk-icon-link", 3, "click"], ["uk-spinner", ""]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Website title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Website name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SettingsComponent_div_14_Template, 5, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_16_listener() { return ctx.selectFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "select logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_18_listener() { return ctx.saveSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SettingsComponent_div_20_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.nameFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.websiteProperties == null ? null : ctx.websiteProperties.logoUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".icon_delete_overlay_container[_ngcontent-%COMP%] {\n    background-color: #333;\n    opacity: 0.9;\n    height: 30px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uX2RlbGV0ZV9vdmVybGF5X2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_file_abstract_file_service__WEBPACK_IMPORTED_MODULE_3__["AbstractFileService"] }, { type: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UsersComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 2, vars: 0, template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Users are currently being administered from the Keycloak Server\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/file/blog-file-collection-resolve.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/file/blog-file-collection-resolve.service.ts ***!
  \***********************************************************************/
/*! exports provided: BlogFileCollectionResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogFileCollectionResolveService", function() { return BlogFileCollectionResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.file.service */ "./src/app/services/file/abstract.file.service.ts");




class BlogFileCollectionResolveService {
    constructor(fileService) {
        this.fileService = fileService;
    }
    resolve() {
        return this.fileService.getFilePage(0, '');
    }
}
BlogFileCollectionResolveService.ɵfac = function BlogFileCollectionResolveService_Factory(t) { return new (t || BlogFileCollectionResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_abstract_file_service__WEBPACK_IMPORTED_MODULE_1__["AbstractFileService"])); };
BlogFileCollectionResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogFileCollectionResolveService, factory: BlogFileCollectionResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogFileCollectionResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _abstract_file_service__WEBPACK_IMPORTED_MODULE_1__["AbstractFileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/settings/settings-resolve.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/settings/settings-resolve.service.ts ***!
  \***************************************************************/
/*! exports provided: SettingsResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsResolveService", function() { return SettingsResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SettingsResolveService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    resolve(route, state) {
        return this.httpClient.get('/api/v1/settings');
    }
}
SettingsResolveService.ɵfac = function SettingsResolveService_Factory(t) { return new (t || SettingsResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SettingsResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsResolveService, factory: SettingsResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user/user-resolve.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/user/user-resolve.service.ts ***!
  \*******************************************************/
/*! exports provided: UserResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolveService", function() { return UserResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keycloak/abstract.keycloak.service */ "./src/app/services/keycloak/abstract.keycloak.service.ts");




class UserResolveService {
    constructor(keycloakService) {
        this.keycloakService = keycloakService;
    }
    resolve() {
        this.keycloakService.getKeycloakTokenParsed$().subscribe(parsedKeycloakToken => {
            parsedKeycloakToken.realm_access;
            parsedKeycloakToken.resource_access;
            this.userId = parsedKeycloakToken.sub;
        });
        return this.keycloakService.getUserInfo(this.userId);
    }
}
UserResolveService.ɵfac = function UserResolveService_Factory(t) { return new (t || UserResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__["AbstractKeycloakService"])); };
UserResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserResolveService, factory: UserResolveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _keycloak_abstract_keycloak_service__WEBPACK_IMPORTED_MODULE_1__["AbstractKeycloakService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map