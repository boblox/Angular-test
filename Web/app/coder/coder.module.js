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
var coder_routes_1 = require('./coder.routes');
var coder_component_1 = require('./coder.component');
var coder_service_1 = require('../shared/coder.service');
var CoderModule = (function () {
    function CoderModule() {
    }
    CoderModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, coder_routes_1.routing, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                coder_component_1.default
            ],
            providers: [coder_service_1.CoderService],
            exports: [coder_component_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], CoderModule);
    return CoderModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CoderModule;
//# sourceMappingURL=coder.module.js.map