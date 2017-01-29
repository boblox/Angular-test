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
var loading_service_1 = require('../shared/loading.service');
var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent(loadingService) {
        this.loadingService = loadingService;
        this.loading = false;
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loadingService.loading
            .subscribe(function (value) { _this.loading = value; });
    };
    LoadingSpinnerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoadingSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'loading-spinner',
            //moduleId: module.id,
            templateUrl: 'app/shared/loading-spinner.component.html'
        }), 
        __metadata('design:paramtypes', [loading_service_1.LoadingService])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());
exports.LoadingSpinnerComponent = LoadingSpinnerComponent;
//# sourceMappingURL=loading-spinner.component.js.map