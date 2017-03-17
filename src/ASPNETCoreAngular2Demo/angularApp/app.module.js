"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home_module_1 = require("./home/home.module");
var about_module_1 = require("./about/about.module");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core/core.module");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var http_1 = require("@angular/http");
var angular2_toaster_1 = require("angular2-toaster");
var ng2_loading_bar_1 = require("ng2-loading-bar");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.AppRouting,
            http_1.HttpModule,
            angular2_toaster_1.ToasterModule,
            ng2_loading_bar_1.LoadingBarModule,
            shared_module_1.SharedModule,
            about_module_1.AboutModule,
            home_module_1.HomeModule,
            core_module_1.CoreModule
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map