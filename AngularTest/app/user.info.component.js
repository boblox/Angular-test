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
var UserInfoComponent = (function () {
    function UserInfoComponent() {
        this.userName = "User name";
        this.headerText = this.userName;
        this.headerText = "\u041F\u0440\u0438\u0432\u0456\u0442\u0443\u043B\u044C\u043A\u0438 " + this.userName;
    }
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'user-info',
            //moduleId: module.id,
            templateUrl: 'app/user.info.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=user.info.component.js.map