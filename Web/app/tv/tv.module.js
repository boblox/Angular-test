"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var tv_routes_1 = require('./tv.routes');
var tv_component_1 = require('./tv.component');
var search_component_1 = require('./search.component');
var user_info_component_1 = require('./user-info.component');
var date_component_1 = require('./date.component');
var wish_service_1 = require('./wish.service');
var coder_service_1 = require('../shared/coder.service');
var TVModule = (function () {
    function TVModule() {
    }
    TVModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, tv_routes_1.routing, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule],
            declarations: [
                tv_component_1.default,
                search_component_1.SearchComponent,
                user_info_component_1.UserInfoComponent,
                date_component_1.DateComponent
            ],
            providers: [wish_service_1.WishService, coder_service_1.CoderService],
            exports: [tv_component_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], TVModule);
    return TVModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TVModule;
//# sourceMappingURL=tv.module.js.map