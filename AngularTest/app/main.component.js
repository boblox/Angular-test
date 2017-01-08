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
var wish_service_1 = require('./service/wish.service');
var MainComponent = (function () {
    function MainComponent(wishService) {
        this.wishService = wishService;
        this.headerText = "\u0417\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043C\u0438 [\u043D\u0435\u0441\u0432\u0456\u0434\u043E\u043C\u043E] \u0434\u0430\u0440\u0443\u0454\u043C\u043E \u0442\u0435, \u0449\u043E \u0441\u0430\u043C\u0456 \u0431 \u0445\u043E\u0442\u0456\u043B\u0438 \u043F\u043E\u0434\u0430\u0440\u0443\u0432\u0430\u0442\u0438 \u0441\u043E\u0431\u0456.\n                  \u041E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0446\u044C\u043E\u0433\u043E \u0440\u043E\u043A\u0443 \u041C\u0438\u043A\u043E\u043B\u0430\u0439 \u043B\u0456\u043D\u0438\u0432\u0438\u0439 \u0456 \u043D\u0435 \u0437\u043D\u0430\u0454 \u0447\u043E\u0433\u043E \u0432\u0456\u043D \u0456 \u0432\u0438 \u0445\u043E\u0447\u0435\u0442\u0435, \u0442\u043E \u0432\u0456\u043D \u0440\u043E\u0437\u0440\u043E\u0431\u0438\u0432 \u0441\u0435\u0440\u0432\u0456\u0441-\u0432\u0438\u043A\u043E\u043D\u0443\u0432\u0430\u0447 \u0431\u0430\u0436\u0430\u043D\u044C.\n                  \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E \u0457\u0445 \u0432\u0432\u043E\u0434\u0438\u0442\u0438 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E, \u0431\u043E \u0437 \u0441\u043E\u043B\u043E\u0432'\u0457\u043D\u043E\u044E \u0443 \u043D\u044C\u043E\u0433\u043E \u0432 \u0448\u043A\u043E\u043B\u0456 \u0432\u0441\u0435 \u0431\u0443\u043B\u043E \u043F\u043E\u0433\u0430\u043D\u043E:(";
        this.wishSelect = [
            {
                type: wish_service_1.WishType.WantToHave,
                text: "Хочу мати"
            },
            //{
            //    type: WishType.WantToBe,
            //    text: "Хочу бути"
            //},
            {
                type: wish_service_1.WishType.WantToLearn,
                text: "Хочу навчитись"
            },
            {
                type: wish_service_1.WishType.WantToMakeGift,
                text: "Хочу подарувати"
            }
        ];
        //wishSelectId = 1;
        this.searchPlaceholder = "...";
        this.buttonSubmitText = "Давай!";
        this.wishResult = new wish_service_1.WishResult();
        this.wishInput = {
            type: wish_service_1.WishType.WantToHave,
            searchText: ""
        };
        //this.wishResult = wishService.notFoundResult;
        //this.wishResult = new WishResult(null, "Звиняйте, Миколайко нічого для вас не має");
    }
    MainComponent.prototype.search = function (form) {
        //alert(this.wishSelectId);
        //alert(form.value.wishSelect);
        //alert(`${this.wishInput.type} ${this.wishInput.searchText}`);
        //alert(`${form.value.wishSelect} ${form.value.searchText}`);
        var _this = this;
        this.wishService.getWish(this.wishInput, function (wishResult) {
            _this.wishResult = wishResult;
        });
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            //moduleId: module.id,
            templateUrl: 'app/main.component.html'
        }), 
        __metadata('design:paramtypes', [wish_service_1.WishService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map