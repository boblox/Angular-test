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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
var wish_service_model_1 = require('./wish.service.model');
(function (WishType) {
    WishType[WishType["WantToHave"] = 0] = "WantToHave";
    WishType[WishType["WantToLearn"] = 1] = "WantToLearn";
    WishType[WishType["WantToBe"] = 2] = "WantToBe";
    WishType[WishType["WantToMakeGift"] = 3] = "WantToMakeGift";
})(exports.WishType || (exports.WishType = {}));
var WishType = exports.WishType;
;
var WishInput = (function () {
    function WishInput() {
    }
    return WishInput;
}());
exports.WishInput = WishInput;
var WishResult = (function () {
    function WishResult(imageUrl, text) {
        this.imageUrl = imageUrl;
        this.text = text;
    }
    return WishResult;
}());
exports.WishResult = WishResult;
var WishService = (function () {
    function WishService(http) {
        this.http = http;
        this.notFoundUrl = 'css/img/not-found.jpg';
        var text = "Звиняйте, Миколайко нічого для вас не знайшов:(";
        this.notFoundResult = new WishResult(this.notFoundUrl, text);
    }
    WishService.prototype.getRandomItem = function (items) {
        var index = Math.floor(Math.random() * items.length);
        return items[index];
    };
    WishService.prototype.getSuccessResultText = function (input) {
        var resultText;
        var wantToHaveTemplates = new wish_service_model_1.WantToHaveTemplates(input).templates;
        var wantToLearnTemplates = new wish_service_model_1.WantToLearnTemplates(input).templates;
        var wantToMakeGift = new wish_service_model_1.WantToMakeGift(input).templates;
        switch (Number(input.type)) {
            case WishType.WantToHave:
                resultText = this.getRandomItem(wantToHaveTemplates);
                break;
            case WishType.WantToLearn:
                resultText = this.getRandomItem(wantToLearnTemplates);
                break;
            case WishType.WantToMakeGift:
                resultText = this.getRandomItem(wantToMakeGift);
            default:
        }
        return resultText;
    };
    WishService.prototype.raiseResult = function (callback, result) {
        setTimeout(callback(result), 4000);
    };
    WishService.prototype.getWish = function (input, callback) {
        var _this = this;
        var searchText = encodeURIComponent(input.searchText);
        //let url =
        //    `https://www.googleapis.com/customsearch/v1?key=AIzaSyC1n9wpvVqUDUCyN4G9zwmUeZhmSHR0Oaw` +
        //    `&cx=007634069652725397483:o1ur-qeu6tc&searchType=image&q=${searchText}`;
        var url = "https://pixabay.com/api/?key=4077546-5b7acad1ea019ee9cec49f73f&q=" + searchText;
        var resultItem;
        //alert(url);
        this.http.get(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (data) {
            if (data.hits && data.hits.length > 0) {
                var index = Math.floor(Math.random() * Math.min(20, data.totalHits));
                var text = _this.getSuccessResultText(input);
                resultItem = new WishResult(data.hits[index].webformatURL, text);
            }
            else {
                resultItem = _this.notFoundResult;
            }
        }, function (error) {
            _this.raiseResult(callback, _this.notFoundResult);
        }, function () {
            _this.raiseResult(callback, resultItem);
        });
    };
    WishService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WishService);
    return WishService;
}());
exports.WishService = WishService;
//# sourceMappingURL=wish.service.js.map