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
var wish_service_1 = require('./wish.service');
var wish_service_2 = require('./wish.service');
var loading_service_1 = require('../shared/loading.service');
var SearchComponent = (function () {
    function SearchComponent(wishService, loadingService) {
        this.wishService = wishService;
        this.loadingService = loadingService;
        this.wishTypes = [
            { type: wish_service_1.WishType.WantToHave, displayText: "Хочу мати" },
            { type: wish_service_1.WishType.WantToBe, displayText: "Хочу бути" },
            { type: wish_service_1.WishType.WantToLearn, displayText: "Хочу навчитись" },
            { type: wish_service_1.WishType.WantToMakeGift, displayText: "Хочу подарувати" }
        ];
        this.defaultWishType = wish_service_1.WishType.WantToHave;
        this.wantToHaveChoices = [
            { type: wish_service_2.WantToHaveChoice.Other, displayText: "Інше", searchText: "" },
            { type: wish_service_2.WantToHaveChoice.All, displayText: "Все", searchText: "Everything" },
            { type: wish_service_2.WantToHaveChoice.Nothing, displayText: "Нічого", searchText: "Nothing" },
            { type: wish_service_2.WantToHaveChoice.Couple, displayText: "Хлопця або дівчину", searchText: "Couple" },
            { type: wish_service_2.WantToHaveChoice.Child, displayText: "Хлопчика або дівчинку", searchText: "Child" }
        ];
        this.wantToLearnChoices = [
            { type: wish_service_2.WantToLearnChoice.Other, displayText: "Інше", searchText: "" },
            { type: wish_service_2.WantToLearnChoice.All, displayText: "Всьому", searchText: "Everything" },
            { type: wish_service_2.WantToLearnChoice.Nothing, displayText: "Нічого не вміти", searchText: "Nothing" }
        ];
        this.wantToBeChoices = [
            { type: wish_service_2.WantToBeChoice.Other, displayText: "Інше", searchText: "" },
            { type: wish_service_2.WantToBeChoice.All, displayText: "Всім", searchText: "Everything" },
            { type: wish_service_2.WantToBeChoice.Dead, displayText: "Мертвим", searchText: "Dead" },
            { type: wish_service_2.WantToBeChoice.Nothing, displayText: "Нічим", searchText: "Nothing" }
        ];
        this.wantToMakeGiftChoices = [
            { type: wish_service_2.WantToMakeGiftChoice.Other, displayText: "Інше", searchText: "" },
            { type: wish_service_2.WantToMakeGiftChoice.TimeAndAttention, displayText: "Час та увагу", searchText: "Together" },
            { type: wish_service_2.WantToMakeGiftChoice.LoveAndWarmth, displayText: "Любов та тепло", searchText: "Love warmth" },
            { type: wish_service_2.WantToMakeGiftChoice.Myself, displayText: "Себе", searchText: "Give people" },
            { type: wish_service_2.WantToMakeGiftChoice.Nothing, displayText: "Нічого", searchText: "Nothing" }
        ];
        this.wishTypeChoices = (_a = {},
            _a[wish_service_1.WishType.WantToHave] = this.wantToHaveChoices,
            _a[wish_service_1.WishType.WantToLearn] = this.wantToLearnChoices,
            _a[wish_service_1.WishType.WantToBe] = this.wantToBeChoices,
            _a[wish_service_1.WishType.WantToMakeGift] = this.wantToMakeGiftChoices,
            _a
        );
        this.wishResult = new wish_service_1.WishResult();
        this.headerText = "\u0417\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043C\u0438 [\u043D\u0435\u0441\u0432\u0456\u0434\u043E\u043C\u043E] \u0434\u0430\u0440\u0443\u0454\u043C\u043E \u0442\u0435, \u0449\u043E \u0441\u0430\u043C\u0456 \u0431 \u0445\u043E\u0442\u0456\u043B\u0438 \u043F\u043E\u0434\u0430\u0440\u0443\u0432\u0430\u0442\u0438 \u0441\u043E\u0431\u0456.\n                  \u041E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0446\u044C\u043E\u0433\u043E \u0440\u043E\u043A\u0443 \u041C\u0438\u043A\u043E\u043B\u0430\u0439 \u043B\u0456\u043D\u0438\u0432\u0438\u0439 \u0456 \u043D\u0435 \u0437\u043D\u0430\u0454 \u0447\u043E\u0433\u043E \u0432\u0456\u043D \u0456 \u0432\u0438 \u0445\u043E\u0447\u0435\u0442\u0435, \u0442\u043E \u0432\u0456\u043D \u0440\u043E\u0437\u0440\u043E\u0431\u0438\u0432 \u0441\u0435\u0440\u0432\u0456\u0441 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0431\u0430\u0436\u0430\u043D\u044C.\n                  \u0410 \u0442\u0430 \u044F\u043A \u0437 \u0441\u043E\u043B\u043E\u0432'\u0457\u043D\u043E\u044E \u0443 \u043D\u044C\u043E\u0433\u043E \u0432 \u0448\u043A\u043E\u043B\u0456 \u0434\u0443\u0436\u0435 \u043D\u0435 \u0441\u043A\u043B\u0430\u043B\u043E\u0441\u044C \u043F\u0438\u0448\u0456\u0442 \u043B\u0456\u0431\u0448\u0435 \u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0446\u044C\u043A\u0456\u0439:)";
        this.searchPlaceholder = "Ваше бажання";
        this.buttonSubmitText = "Давай!";
        var wishTypeChoice = this.wishTypeChoices[this.defaultWishType][0];
        this.wishInput = {
            type: this.defaultWishType,
            typeChoice: wishTypeChoice.type,
            searchText: wishTypeChoice.searchText
        };
        var _a;
    }
    SearchComponent.prototype.isSearchTextVisible = function (choice) {
        return choice == wish_service_2.WantToHaveChoice.Other ||
            choice == wish_service_2.WantToLearnChoice.Other ||
            choice == wish_service_2.WantToBeChoice.Other ||
            choice == wish_service_2.WantToMakeGiftChoice.Other;
    };
    SearchComponent.prototype.onWishTypeChange = function (value) {
        var choice = this.wishTypeChoices[value][0];
        this.wishInput.typeChoice = choice.type;
        this.wishInput.searchText = choice.searchText;
    };
    SearchComponent.prototype.onWishTypeChoiceChange = function (value) {
        this.wishInput.searchText = this.wishTypeChoices[this.wishInput.type]
            .filter(function (i) { return i.type == value; })[0]
            .searchText;
    };
    SearchComponent.prototype.search = function (form) {
        var _this = this;
        this.loadingService.showLoadingIndicator();
        this.wishService.getWish(this.wishInput)
            .then(function (result) {
            _this.loadingService.hideLoadingIndicator();
            _this.wishResult = result;
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-component',
            //moduleId: module.id,
            templateUrl: 'app/tv/search.component.html'
        }), 
        __metadata('design:paramtypes', [wish_service_1.WishService, loading_service_1.LoadingService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map