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
var DateComponent = (function () {
    function DateComponent() {
        var _this = this;
        this.text = "День Святого Миколая";
        this.date = new Date();
        setInterval(function () {
            _this.date = new Date();
        }, 1000);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateComponent.prototype, "format", void 0);
    DateComponent = __decorate([
        core_1.Component({
            selector: 'date-component',
            //moduleId: module.id,
            templateUrl: 'app/tv/date.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DateComponent);
    return DateComponent;
}());
exports.DateComponent = DateComponent;
//# sourceMappingURL=date.component.js.map