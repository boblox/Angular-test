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
var CoderService = (function () {
    function CoderService() {
        var _this = this;
        this.shift = 20;
        this.encodeFunc = function (s) { return s.charCodeAt(0) + _this.shift; };
        this.decodeFunc = function (s) { return s.charCodeAt(0) - _this.shift; };
    }
    CoderService.prototype.code = function (s, func) {
        if (s) {
            return s.split('')
                .map(function (char) { return String.fromCharCode(func(char)); })
                .join('');
        }
        return null;
    };
    CoderService.prototype.encode = function (s) {
        return encodeURI(this.code(s, this.encodeFunc));
    };
    CoderService.prototype.decode = function (s) {
        return decodeURI(this.code(s, this.decodeFunc));
    };
    CoderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CoderService);
    return CoderService;
}());
exports.CoderService = CoderService;
//# sourceMappingURL=coder.service.js.map