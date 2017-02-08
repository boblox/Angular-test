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
//import 'rxjs/Rx';
var wish_service_model_1 = require('./wish.service.model');
exports.WishResult = wish_service_model_1.WishResult;
exports.WishInput = wish_service_model_1.WishInput;
exports.WishType = wish_service_model_1.WishType;
exports.WantToHaveChoice = wish_service_model_1.WantToHaveChoice;
exports.WantToLearnChoice = wish_service_model_1.WantToLearnChoice;
exports.WantToBeChoice = wish_service_model_1.WantToBeChoice;
exports.WantToMakeGiftChoice = wish_service_model_1.WantToMakeGiftChoice;
var WishService = (function () {
    function WishService(http) {
        var _this = this;
        this.http = http;
        this.notFoundUrl = 'css/img/not-found.jpg';
        this.textResolvers = this.getTextResolvers();
        //If u don't specify like that then 'this' function will be undefined inside function call:
        this.imageSearchProviders = [
            function (input, resolve, searchProviders) {
                return _this.getImageByPixabay(input, resolve, searchProviders);
            },
            function (input, resolve, searchProviders) {
                return _this.getImageByGettyImages(input, resolve, searchProviders);
            }];
    }
    WishService.prototype.getTextResolvers = function () {
        return (_a = {},
            _a[wish_service_model_1.WishType.WantToHave] = new wish_service_model_1.WantToHaveTextResolver(),
            _a[wish_service_model_1.WishType.WantToBe] = new wish_service_model_1.WantToBeTextResolver(),
            _a[wish_service_model_1.WishType.WantToLearn] = new wish_service_model_1.WantToLearnTextResolver(),
            _a[wish_service_model_1.WishType.WantToMakeGift] = new wish_service_model_1.WantToMakeGiftTextResolver(),
            _a
        );
        var _a;
    };
    WishService.prototype.getNotFoundResult = function (input) {
        return new wish_service_model_1.WishResult(this.notFoundUrl, this.getFailureText(input));
    };
    WishService.prototype.getSuccessText = function (input) {
        return this.textResolvers[input.type].getSuccessText(input);
    };
    WishService.prototype.getFailureText = function (input) {
        return this.textResolvers[input.type].getFailureText(input);
    };
    WishService.prototype.raiseResult = function (resolve, result) {
        setTimeout(function () { return resolve(result); }, 2000);
    };
    WishService.prototype.startImageSearch = function (input, resolve, searchProviders) {
        if (searchProviders.length > 0) {
            searchProviders[0](input, resolve, searchProviders.slice(1, searchProviders.length));
        }
        else {
            this.raiseResult(resolve, this.getNotFoundResult(input));
        }
    };
    WishService.prototype.getImageByPixabay = function (input, resolve, otherSearchProviders) {
        var _this = this;
        var searchText = encodeURIComponent(input.searchText);
        //let url =
        //    `https://www.googleapis.com/customsearch/v1?key=AIzaSyC1n9wpvVqUDUCyN4G9zwmUeZhmSHR0Oaw` +
        //    `&cx=007634069652725397483:o1ur-qeu6tc&searchType=image&q=${searchText}`;
        var url = "https://pixabay.com/api/?key=4077546-5b7acad1ea019ee9cec49f73f&q=" + searchText;
        this.http.get(url)
            .map(function (data) { return data.json(); })
            .subscribe(function (data) {
            if (data.hits && data.hits.length > 0) {
                var index = Math.floor(Math.random() * Math.min(20, data.totalHits));
                var resultItem = new wish_service_model_1.WishResult(data.hits[index].webformatURL, _this.getSuccessText(input));
                _this.raiseResult(resolve, resultItem);
            }
            else {
                _this.startImageSearch(input, resolve, otherSearchProviders);
            }
        }, function () {
            _this.startImageSearch(input, resolve, otherSearchProviders);
        }, function () { });
    };
    WishService.prototype.getImageByGettyImages = function (input, resolve, searchProviders) {
        var _this = this;
        var searchText = encodeURIComponent(input.searchText);
        var url = "https://api.gettyimages.com:443/v3/search/images?fields=display_set&phrase=" + searchText;
        var headers = new http_1.Headers();
        headers.append("Api-Key", "ppc87vznaxfxn4q762mxcd9k");
        this.http.get(url, { headers: headers })
            .map(function (data) { return data.json(); })
            .subscribe(function (data) {
            if (data.images && data.images.length > 0) {
                var index = Math.floor(Math.random() * Math.min(20, data.images.length));
                var resultItem = new wish_service_model_1.WishResult(data.images[index].display_sizes.find(function (v) { return v.name == "comp"; }).uri, _this.getSuccessText(input));
                _this.raiseResult(resolve, resultItem);
            }
            else {
                _this.startImageSearch(input, resolve, searchProviders);
            }
        }, function () {
            _this.startImageSearch(input, resolve, searchProviders);
        }, function () { });
    };
    WishService.prototype.getWish = function (input, testMode) {
        var _this = this;
        if (testMode === void 0) { testMode = false; }
        return new Promise(function (resolve, reject) {
            if (testMode) {
                _this.raiseResult(resolve, new wish_service_model_1.WishResult(_this.notFoundUrl, _this.getSuccessText(input)));
            }
            else if (!input.searchText) {
                _this.raiseResult(resolve, new wish_service_model_1.WishResult(_this.notFoundUrl, _this.getSuccessText(input)));
            }
            else {
                _this.startImageSearch(input, resolve, _this.imageSearchProviders);
            }
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