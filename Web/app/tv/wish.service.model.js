"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (WishType) {
    WishType[WishType["WantToHave"] = 0] = "WantToHave";
    WishType[WishType["WantToLearn"] = 1] = "WantToLearn";
    WishType[WishType["WantToBe"] = 2] = "WantToBe";
    WishType[WishType["WantToMakeGift"] = 3] = "WantToMakeGift";
})(exports.WishType || (exports.WishType = {}));
var WishType = exports.WishType;
;
(function (WantToHaveChoice) {
    WantToHaveChoice[WantToHaveChoice["Other"] = 0] = "Other";
    WantToHaveChoice[WantToHaveChoice["All"] = 1] = "All";
    WantToHaveChoice[WantToHaveChoice["Nothing"] = 2] = "Nothing";
    WantToHaveChoice[WantToHaveChoice["Couple"] = 3] = "Couple";
    WantToHaveChoice[WantToHaveChoice["Child"] = 4] = "Child";
})(exports.WantToHaveChoice || (exports.WantToHaveChoice = {}));
var WantToHaveChoice = exports.WantToHaveChoice;
;
(function (WantToLearnChoice) {
    WantToLearnChoice[WantToLearnChoice["Other"] = 0] = "Other";
    WantToLearnChoice[WantToLearnChoice["All"] = 1] = "All";
    WantToLearnChoice[WantToLearnChoice["Nothing"] = 2] = "Nothing";
})(exports.WantToLearnChoice || (exports.WantToLearnChoice = {}));
var WantToLearnChoice = exports.WantToLearnChoice;
;
(function (WantToBeChoice) {
    WantToBeChoice[WantToBeChoice["Other"] = 0] = "Other";
    WantToBeChoice[WantToBeChoice["All"] = 1] = "All";
    WantToBeChoice[WantToBeChoice["Dead"] = 2] = "Dead";
    WantToBeChoice[WantToBeChoice["Nothing"] = 3] = "Nothing";
})(exports.WantToBeChoice || (exports.WantToBeChoice = {}));
var WantToBeChoice = exports.WantToBeChoice;
;
(function (WantToMakeGiftChoice) {
    WantToMakeGiftChoice[WantToMakeGiftChoice["Other"] = 0] = "Other";
    WantToMakeGiftChoice[WantToMakeGiftChoice["TimeAndAttention"] = 1] = "TimeAndAttention";
    WantToMakeGiftChoice[WantToMakeGiftChoice["LoveAndWarmth"] = 2] = "LoveAndWarmth";
    WantToMakeGiftChoice[WantToMakeGiftChoice["Myself"] = 3] = "Myself";
    WantToMakeGiftChoice[WantToMakeGiftChoice["Nothing"] = 4] = "Nothing";
})(exports.WantToMakeGiftChoice || (exports.WantToMakeGiftChoice = {}));
var WantToMakeGiftChoice = exports.WantToMakeGiftChoice;
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
var WishTextResolverBase = (function () {
    function WishTextResolverBase() {
    }
    WishTextResolverBase.prototype.getRandomItem = function (items) {
        var index = Math.floor(Math.random() * items.length);
        return items[index];
    };
    return WishTextResolverBase;
}());
exports.WishTextResolverBase = WishTextResolverBase;
var WantToHaveTextResolver = (function (_super) {
    __extends(WantToHaveTextResolver, _super);
    function WantToHaveTextResolver() {
        _super.apply(this, arguments);
    }
    WantToHaveTextResolver.prototype.getSuccessText = function (input) {
        var otherTemplates = [
            ("\u0422\u0440\u0438\u043C\u0430\u0439 \u043A\u043E\u0437\u0430\u0447\u0435 \u0441\u0432\u0456\u0439 " + input.searchText + "! \n            \u0422\u0435\u043F\u0435\u0440 \u0442\u0438 \u043C\u0430\u0454\u0448 \u0431\u0443\u0442\u0438 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0438\u0439!). \u041D\u0443 \u044F\u043A \u043C\u0456\u043D\u0456\u043C\u0443\u043C \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0456 \u043F\u0456\u0432 \u0433\u043E\u0434\u0438\u043D\u0438. \n            \u041D\u0443 \u0445\u043E\u0447\u0430 \u0431\u0438 10 \u0445\u0432\u0438\u043B\u0438\u043D. \u041F\u0440\u0438\u043D\u0430\u0439\u043C\u043D\u0456 \u043F\u043E\u043A\u0438 \u0432\u043E\u043D\u0430 \u043D\u0435 \u043D\u0430\u0431\u0440\u0438\u0434\u043D\u0435."),
            ("\u0404\u0454\u0439! \u0422\u0438 \u0442\u0430\u043A \u0434\u043E\u0432\u0433\u043E \u043F\u0440\u043E \u043D\u0435\u0457 \u043C\u0440\u0456\u044F\u0432. \u0406 \u043E\u0441\u044C " + input.searchText + " \u0432 \u0442\u0432\u043E\u0457\u0445 \u0440\u0443\u0446\u044F\u0445! \u0422\u0435\u043F\u0435\u0440\n            \u0442\u0438 \u043C\u043E\u0436\u0435\u0448 \u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u0457\u0457 \u0434\u043E\u0441\u0445\u043E\u0447\u0443! \u0410 \u0449\u0435 \u043A\u0440\u0430\u0449\u0435 \u0437'\u0457\u0441\u0442\u0438) \u041C\u043E\u0436\u043D\u0430 \u0442\u0435\u0431\u0435 \u0434\u0435\u0449\u043E \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0438 - \u0437\u0440\u043E\u0431\u0438\n            \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439-\u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 \u0432\u0434\u0438\u0445 \u0456 \u0441\u043F\u0438\u0442\u0430\u0439 \u0441\u0435\u0431\u0435 \u043D\u0430 \u0432\u0438\u0434\u0438\u0445\u0443, \u0442\u0456\u043B\u044C\u043A\u0438 \u0447\u0435\u0441\u043D\u043E-\u0447\u0435\u0441\u043D\u043E - \u0440\u0456\u0447 \u0437\u0440\u043E\u0431\u0438\u043B\u0430 \u0442\u0435\u0431\u0435 \u0449\u0430\u0441\u043B\u0438\u0432\u0456\u0448\u043E\u044E?)"),
            "\u0412\u0430\u0448 \u043F\u043E\u0434\u0430\u0440\u0443\u043D\u043E\u043A \u043F\u0440\u0438\u0431\u0443\u0432, \u0441\u0435\u0440! \u0422\u0435\u043F\u0435\u0440 \u0442\u0438 \u043C\u043E\u0436\u0435\u0448 \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438 \u0431\u0430\u0436\u0430\u0442\u0438 \u0456\u043D\u0448\u0438\u0439, \u0430 \u043F\u043E\u0442\u0456\u043C \u0442\u0440\u0435\u0442\u0456\u0439, \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0438\u0439...\n            \u0406 \u0442\u0430\u043A \u0434\u043E \u043D\u0435\u0441\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u0456, \u043F\u043E\u043A\u0438 \u043D\u0435 \u0441\u0442\u0430\u043D\u0435\u0448 \u0421\u043A\u0440\u0443\u0442\u0447\u043E\u043C \u041C\u0430\u043A\u0414\u0430\u043A\u043E\u043C) \u0411\u0443-\u0433\u0430-\u0433\u0430!",
            ("\u041A\u043E\u043B\u0438 " + input.searchText + " \u043F\u0440\u0438\u0431\u0443\u0434\u0435 \u0434\u043E \u0442\u0435\u0431\u0435, \u043A\u043E\u043B\u0438 \u0442\u0432\u043E\u044F \u043B\u0430\u0441\u043A\u0430, \u043F\u0440\u043E\u0432\u0435\u0434\u0438 \u0435\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442: \u043F\u0435\u0440\u0435\u0432\u0456\u0440 \u0447\u0438\n            \u0437\u043C\u0456\u043D\u0438\u043B\u0430\u0441\u044C \u0442\u0432\u043E\u044F \u0436\u0430\u0433\u0430 \u0434\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u0434\u043E \u0456 \u043E\u043F\u0456\u0441\u043B\u044F \u0439\u043E\u0433\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F. \u0417\u043C\u0456\u043D\u0438\u043B\u0430\u0441\u044C, \u043F\u0440\u0430\u0432\u0434\u0430? \u041F\u0430\u0440\u0430\u0434\u043E\u043A\u0441, \u0430\u043B\u0435:\n            \"\u041F\u0440\u0438\u0441\u0442\u0440\u0430\u0441\u0442\u044C \u0434\u043E \u043E\u0431'\u0454\u043A\u0442\u0430 \u043D\u0435 \u0437\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u0432\u0456\u0434 \u0441\u0430\u043C\u043E\u0433\u043E \u043E\u0431'\u0454\u043A\u0442\u0430.\"")
        ];
        switch ((+(input.typeChoice))) {
            case WantToHaveChoice.Other:
                if (!input.searchText)
                    return "Но-но-но, не можна не замовити нічого в мене!";
                return this.getRandomItem(otherTemplates);
            case WantToHaveChoice.All:
                return "\u041E\u043F\u0430\u0447\u0430, \u0442\u0430 \u0446\u0435 \u0436 \u043C\u0440\u0456\u044F \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u044C\u043E\u0433\u043E \u0434\u0438\u043A\u0442\u0430\u0442\u043E\u0440\u0430)) \u041D\u0456\u0447\u043E\u0441\u0456, \u0430 \u043D\u0435 \u0437\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u0445\u043E\u0447\u0435\u0448?";
            case WantToHaveChoice.Couple:
                return "\u0423\u0443\u0443, \u0446\u044C\u043E\u043C\u043A\u0438-\u043F\u0440\u0438\u0442\u0443\u043B\u044E\u0441\u044C\u043A\u0438) \u0416\u0430\u043B\u044C, \u0449\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0430 \u0440\u0430\u043C\u0430\u043D\u0442\u0456\u043A\u0430 \u0440\u043E\u0436\u0435\u0432\u0438\u0445 \u043E\u043A\u0443\u043B\u044F\u0440\u0456\u0432 \n                    \u043C\u0430\u0454 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0456\u044E \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044C(( \u0425\u043C, \u0430 \u043C\u043E\u0436\u0435...\u0432\u0456\u0447\u043D\u0430 \u043B\u044E\u0431\u043E\u0432?";
            case WantToHaveChoice.Child:
                return "\u041A\u043E\u043C\u0443\u0441\u044C \u043F\u043E\u0440\u0430 \u0441\u0442\u0430\u0442\u0438 \u0442\u0430\u0442\u0443\u0441\u044C\u043E\u043C - \u043C\u0430\u043C\u0443\u0441\u044C\u043E\u043C \u0456 \u043F\u043E\u0440\u0438\u043D\u0443\u0442\u0438 \u0443 \u0441\u0432\u0456\u0442 \u043B\u044E\u0431\u043E\u0432\u0456 \u0456 \n                    \u043D\u0435\u0432\u0456\u0434\u043A\u043B\u0430\u0434\u043D\u0438\u0445 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u0456\u0432!)";
            case WantToHaveChoice.Nothing:
                return "\"\u041A\u043E\u043B\u0438 \u0442\u0438 \u043D\u0435 \u043C\u0430\u0454\u0448 \u043D\u0456\u0447\u043E\u0433\u043E - \u0442\u0438 \u043C\u0430\u0454\u0448 \u0432\u0441\u0435\"(c)";
            default:
                return null;
        }
    };
    WantToHaveTextResolver.prototype.getFailureText = function (input) {
        return "Звиняйте, Миколайко нічого для вас не знайшов:(";
    };
    return WantToHaveTextResolver;
}(WishTextResolverBase));
exports.WantToHaveTextResolver = WantToHaveTextResolver;
var WantToBeTextResolver = (function (_super) {
    __extends(WantToBeTextResolver, _super);
    function WantToBeTextResolver() {
        _super.apply(this, arguments);
    }
    WantToBeTextResolver.prototype.getSuccessText = function (input) {
        var templates = [
            ("\u0422\u0435\u043F\u0435\u0440 \u0442\u0438 " + input.searchText + ". \u0410\u043B\u0435 \u0442\u0438 \u0436 \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043D\u0435 \u0437\u0443\u043F\u0438\u043D\u0438\u0448\u0441\u044F, \u043F\u0440\u0430\u0432\u0434\u0430? \n             \u0425\u0442\u043E \u0434\u0430\u043B\u0456? \u0414\u0435\u043F\u0443\u0442\u0430\u0442, \u043F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442, \u0411\u043E\u0433?"),
            "\u0423 \u0432\u0441\u0456 \u0447\u0430\u0441\u0438 \u043D\u0430\u0439\u0431\u0430\u0436\u0430\u043D\u0456\u0448\u0438\u043C \u0431\u0443\u043B\u043E \u0431\u0430\u0436\u0430\u043D\u043D\u044F \u0432\u043B\u0430\u0434\u0438. \u0412\u043B\u0430\u0434\u0438 \u043D\u0430\u0434 \u0436\u0456\u043D\u043A\u0430\u043C\u0438, \u043A\u0440\u0430\u0457\u043D\u0430\u043C\u0438, \u0434\u043E\u043B\u044F\u043C\u0438 \u043B\u044E\u0434\u0435\u0439...\u0441\u043E\u0431\u043E\u044E.\n             \u0427\u043E\u043C\u0443 \u0431 \u0456 \u0442\u043E\u0431\u0456 \u043D\u0435 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438?;)"
        ];
        switch ((+(input.typeChoice))) {
            case WantToBeChoice.Other:
                if (!input.searchText)
                    return "Но-но-но, не можна не замовити в мене нічого!";
                return this.getRandomItem(templates);
            case WantToBeChoice.All:
                return "\u0425\u043E\u0447\u0435\u0448 \u0431\u0443\u0442\u0438 \u043E\u0434\u043D\u043E\u0447\u0430\u0441\u043D\u043E \u043D\u0430\u0439\u043C\u0435\u043D\u0448\u043E\u044E \u043F\u0456\u0449\u0438\u043D\u043A\u043E\u044E \u0456 \u0431\u0435\u0437\u043C\u0435\u0436\u043D\u0438\u043C, \u044F\u043A \u0432\u0441\u0435\u0441\u0432\u0456\u0442? \u0411\u0443\u0434\u044C_\u043B\u0430\u0441\u043E_\u0447\u043A\u0430)";
            case WantToBeChoice.Dead:
                return "\u042E\u043D\u0438\u0439 \u043F\u0430\u0434\u0430\u0432\u0430\u043D \u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u0434\u043E \u043C\u0430\u0439\u0441\u0442\u0440\u0430 \u0456 \u0441\u043A\u0430\u0437\u0430\u0432 \u0439\u043E\u043C\u0443: \"\u042F - \u043C\u0435\u0440\u0442\u0432\u0438\u0439.\". \n                        \u041C\u0430\u0439\u0441\u0442\u0435\u0440 \u0432\u0434\u0430\u0440\u0438\u0432 \u0439\u043E\u0433\u043E \u043F\u0430\u043B\u0438\u0446\u0435\u044E \u043F\u043E \u0433\u043E\u043B\u043E\u0432\u0456. \n                        \"\u0410\u0410\u0410\u0410\u0430\u0430\" - \u0437\u0430\u043A\u0440\u0438\u0447\u0430\u0432 \u043F\u0430\u0434\u0430\u0432\u0430\u043D. - \"\u0425\u0456\u0431\u0430 \u043C\u0435\u0440\u0446\u0456 \u0440\u043E\u0437\u043C\u043E\u0432\u043B\u044F\u044E\u0442\u044C?\"";
            case WantToBeChoice.Nothing:
                return "\u041E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443 \u0443\u0447\u0435\u043D\u044C \u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u0434\u043E \u043C\u0430\u0439\u0441\u0442\u0440\u0430 \u0456 \u0441\u043A\u0430\u0437\u0430\u0432 \u0439\u043E\u043C\u0443: \"\u042F - \u043D\u0456\u0449\u043E\". \n                        \u041C\u0430\u0439\u0441\u0442\u0435\u0440 \u044F\u043A \u0434\u0430\u0441\u0442\u044C \u0439\u043E\u043C\u0443 \u043F\u0430\u043B\u0438\u0446\u0435\u044E \u043F\u043E \u043F\u043E\u0442\u0438\u043B\u0438\u0446\u0456. \u0423\u0447\u0435\u043D\u044C \u0437\u0430\u0441\u0442\u043E\u0433\u043D\u0430\u0432 \u0432\u0456\u0434 \u0431\u043E\u043B\u044E.\"\n                        \"\u041E\u0439, \u0430 \u0445\u0442\u043E \u0446\u0435 \u043A\u0440\u0438\u0447\u0438\u0442\u044C!?\"";
            default:
                return null;
        }
    };
    WantToBeTextResolver.prototype.getFailureText = function (input) {
        return "\u0417\u0432\u0438\u043D\u044F\u0439\u0442\u0435, \u041C\u0438\u043A\u043E\u043B\u0430\u0439\u043A\u043E \u043D\u0435 \u043C\u043E\u0436\u0435 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0430\u0441 " + input.searchText + ":(";
    };
    return WantToBeTextResolver;
}(WishTextResolverBase));
exports.WantToBeTextResolver = WantToBeTextResolver;
var WantToLearnTextResolver = (function (_super) {
    __extends(WantToLearnTextResolver, _super);
    function WantToLearnTextResolver() {
        _super.apply(this, arguments);
    }
    WantToLearnTextResolver.prototype.getSuccessText = function (input) {
        var templates = [
            "\u0417\u0434\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u043D\u0430\u043D\u043D\u044F - \u0446\u0435 \u043F\u043E\u0445\u0432\u0430\u043B\u044C\u043D\u043E. \u0422\u0435\u043F\u0435\u0440 \u0442\u0438 \u043C\u0430\u0454\u0448 \u0432 \u0430\u0440\u0441\u0435\u043D\u0430\u043B\u0456 \u0449\u0435 \u043E\u0434\u043D\u0443 \u0437\u0434\u0456\u0431\u043D\u0456\u0441\u0442\u044C.\n            \u042F\u043A\u0449\u043E \u0431\u0443\u0434\u0435\u0448 \u0442\u0443\u0442 \u0434\u0443\u0436\u0435 \u0434\u043E\u0432\u0433\u043E \u043A\u043B\u0430\u0446\u0430\u0442\u0438, \u0442\u043E \u043E\u0432\u043E\u043B\u043E\u0434\u0456\u0454\u0448 \u0443\u0441\u0456\u043C\u0430 \u0441\u043A\u0456\u043B\u0430\u043C\u0438 \u0446\u044C\u043E\u0433\u043E \u0441\u0432\u0456\u0442\u0443.\n            \u0422\u0430 \u0442\u0438 \u0436 \u043C\u0430\u0439\u0436\u0435 \u0412\u0441\u0435\u0441\u0438\u043B\u044C\u043D\u0438\u0439! \u0427\u0438 \u0432\u0441\u0435-\u0442\u0430\u043A\u0438 \u043D\u0456?",
            ("\u0414\u043E \u0442\u0432\u043E\u0457\u0445 \u0441\u043A\u0456\u043B\u0456\u0432 \u0434\u043E\u0434\u0430\u0432\u0441\u044F \u0449\u0435 \u043E\u0434\u0438\u043D - " + input.searchText + ".\n            \u0426\u0456\u043A\u0430\u0432\u043E, \u0449\u043E \u0441\u0442\u0430\u043D\u0435\u0442\u044C\u0441\u044F \u0437\u0456 \u0432\u0441\u0456\u043C\u0430 \u0437\u043D\u0430\u043D\u043D\u044F\u043C\u0438, \u043A\u043E\u043B\u0438 \u0432\u0456\u0442\u0435\u0440 \u0440\u043E\u0437\u0441\u0456\u0454 \u0442\u0432\u0456\u0439 \u043F\u0440\u0430\u0445?...")
        ];
        switch ((+(input.typeChoice))) {
            case WantToLearnChoice.Other:
                if (!input.searchText)
                    return "Но-но-но, не можна в мене нічого не замовити!";
                return this.getRandomItem(templates);
            case WantToLearnChoice.All:
                return "\u0429\u043E \u0436 \u0442\u0438 \u0431\u0443\u0434\u0435\u0448 \u0442\u0443\u0442 \u0440\u043E\u0431\u0438\u0442\u0438, \u0432 \u0446\u044C\u043E\u043C\u0443 \u0421\u0432\u0456\u0442\u0456, \u043A\u043E\u043B\u0438 \u0432\u0441\u0435 \u0442\u043E\u0431\u0456 \u0431\u0443\u0434\u0435 \u0432\u0456\u0434\u043E\u043C\u043E?";
            case WantToLearnChoice.Nothing:
                return "\u041D\u0443 \u0456 \u043A\u043E\u043C\u0443 \u0442\u0438 \u043F\u0456\u0441\u043B\u044F \u0442\u043E\u0433\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0438\u0439?)";
            default:
                return null;
        }
    };
    WantToLearnTextResolver.prototype.getFailureText = function (input) {
        return "Звиняйте, Миколайко не може знайти потрібні для вас знання:(";
    };
    return WantToLearnTextResolver;
}(WishTextResolverBase));
exports.WantToLearnTextResolver = WantToLearnTextResolver;
var WantToMakeGiftTextResolver = (function (_super) {
    __extends(WantToMakeGiftTextResolver, _super);
    function WantToMakeGiftTextResolver() {
        _super.apply(this, arguments);
    }
    WantToMakeGiftTextResolver.prototype.getSuccessText = function (input) {
        var templates = [
            ("\u0422\u0438 \u0436 \u043C\u043E\u044F \u043C\u043E\u043B\u043E\u0434\u0447\u0438\u043D\u043A\u0430! \u042F \u0432\u0436\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432 " + input.searchText + " \u0442\u0438\u043C, \u043A\u043E\u043C\u0443 \u0446\u0435 \u043D\u0430\u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E!\n            \u0416\u0435\u0431\u0438 \u044F \u0437\u043D\u0430\u0432 \u0447\u0438 \u0432\u043E\u043D\u043E \u0457\u043C \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0442\u0440\u0435\u0431\u0430..."),
        ];
        switch ((+(input.typeChoice))) {
            case WantToMakeGiftChoice.Other:
                if (!input.searchText)
                    return "Но-но-но, нічого в мене не можна не замовити!";
                return this.getRandomItem(templates);
            case WantToMakeGiftChoice.LoveAndWarmth:
                return "\u041B\u044E\u0431\u043E\u0432, \u0442\u0435\u043F\u043B\u043E \u0456 \u043F\u0440\u0438\u0442\u0443\u043B\u044E\u0441\u044C\u043A\u0438. \u041C\u0456\u043C\u0456\u043C\u0456) \u0422\u0456\u043A\u043E \u043D\u0435 \u0432\u0456\u0434\u0445\u043E\u0434\u044C \u0432\u0456\u0434 \u043E\u0431'\u0454\u043A\u0442\u0443, \n                \u0430 \u0442\u043E \u0439\u043E\u043C\u0443 \u0437\u043D\u043E\u0432\u0443 \u0441\u0442\u0430\u043D\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u043E \u0456 \u0431\u0435\u0437\u043B\u044E\u0431\u0432'\u044F\u043D\u043E:(";
            case WantToMakeGiftChoice.TimeAndAttention:
                return "\u0426\u0435, \u043C\u0430\u0431\u0443\u0442\u044C, \u0442\u0435, \u0437 \u0447\u0438\u043C \u043C\u0438 \u0440\u043E\u0437\u043B\u0443\u0447\u0430\u0454\u043C\u043E\u0441\u044C \u0437 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u043C \u0436\u0430\u043B\u0435\u043C.\n                \u0422\u0435\u043F\u0435\u0440 \u0443\u044F\u0432\u0438, \u044F\u043A\u0449\u043E \u0442\u0438 \u0440\u043E\u0437\u0434\u0430\u0448 \u0432\u0441\u044E \u0441\u0432\u043E\u044E \u0443\u0432\u0430\u0433\u0443 \u0456 \u0447\u0430\u0441. \u0426\u0435 \u0436 \u043D\u0430 \u0442\u0435\u0431\u0435 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F!";
            case WantToMakeGiftChoice.Myself:
                return "\u041B\u0435\u0432 \u0422\u043E\u043B\u0441\u0442\u043E\u0439 \u0441\u043A\u0430\u0437\u0430\u0432: \"\u0429\u0430\u0441\u043B\u0438\u0432\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438 \u0432 \u043C\u043E\u0454\u043C\u0443 \u0436\u0438\u0442\u0442\u0456 \u0431\u0443\u043B\u0438 \u0442\u0456, \n                \u043A\u043E\u043B\u0438 \u044F \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0432\u0456\u0434\u0434\u0430\u0432\u0430\u0432 \u0441\u0435\u0431\u0435 \u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044E \u043B\u044E\u0434\u044F\u043C\". \u041F\u0444\u0444, \u0441\u0442\u0430\u0440\u0438\u0439 \u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A - \u043C\u0430\u0440\u0430\u0437\u043C\u0430\u0442\u0438\u043A.\n                \u041D\u0435 \u0432\u0456\u0440 \u0439\u043E\u043C\u0443!";
            case WantToMakeGiftChoice.Nothing:
                return "\u041E\u0446\u0435 \u0436\u043B\u043E\u0431\u044F\u0440\u0430! \u0413\u043E\u043D\u0438 \u0441\u0432\u0456\u0439 \u0431\u0430\u043A\u0441 \u0456 \u0433\u0443\u043B\u044F\u0439 \u0437 \u043C\u0438\u0440\u043E\u043C!)";
            default:
                return null;
        }
    };
    WantToMakeGiftTextResolver.prototype.getFailureText = function (input) {
        return "Звиняйте, Миколайко не може знайти те, що ви хочете подарувати:(";
    };
    return WantToMakeGiftTextResolver;
}(WishTextResolverBase));
exports.WantToMakeGiftTextResolver = WantToMakeGiftTextResolver;
//# sourceMappingURL=wish.service.model.js.map