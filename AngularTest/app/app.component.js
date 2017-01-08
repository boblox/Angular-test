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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var greeter_service_1 = require('./service/greeter.service');
var implementor1 = {
    a: 20,
    b: 30,
    d: function () { return "fuck"; }
};
var newTypeVar = "bobob";
var s = "bbb";
newTypeVar = s;
var implementor2 = function () { return "fuck"; };
implementor2(5);
//==========================================================
var Bob = (function () {
    function Bob(b, a) {
        this.a = 5;
        this.a = a;
        this.b = b;
    }
    return Bob;
}());
var bobo = new Bob("fuck", 112);
console.log(bobo.a);
var Kicker = (function () {
    function Kicker() {
    }
    Kicker.prototype.kick = function (speed) { throw new Error("Not implemented"); };
    return Kicker;
}());
var zzz = {
    kick: function (speed) { return speed * 2; },
};
console.log("Kick:" + zzz.kick(3));
//Property decorators=============================================
function DefaultValue(defaultValue) {
    return function (target, key) {
        target[key] = defaultValue;
        //var valueObj = label;
        //Object.defineProperty(target, key,
        //    {
        //        //configurable: false,
        //        //writable: true,
        //        //value: key,
        //        //get: () => valueObj,
        //        //set: (value: any) => {
        //        //    valueObj = value;
        //        //}
        //    });
    };
}
var Test = (function () {
    function Test() {
    }
    __decorate([
        DefaultValue('name'), 
        __metadata('design:type', String)
    ], Test.prototype, "name", void 0);
    __decorate([
        DefaultValue('fuck'), 
        __metadata('design:type', String)
    ], Test.prototype, "value", void 0);
    return Test;
}());
var t = new Test();
t.name = "lol";
console.log("Property decorator:" + t.name);
console.log("Property decorator:" + t.value);
//Class decorators==============================
function log(prefix) {
    return function (target) {
        console.log("Hello, " + prefix);
        return;
    };
}
var World = (function () {
    function World() {
    }
    World = __decorate([
        log('Alex'), 
        __metadata('design:paramtypes', [])
    ], World);
    return World;
}());
var w = new World(); // outputs "helloWorld"
//Parameter decorators==========================
function logPosition(target, propertyKey, parameterIndex) {
    console.log(parameterIndex);
}
var Cow = (function () {
    function Cow() {
    }
    Cow.prototype.say = function (b, c) {
        console.log(b);
    };
    __decorate([
        __param(0, logPosition),
        __param(1, logPosition), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, Boolean]), 
        __metadata('design:returntype', void 0)
    ], Cow.prototype, "say", null);
    return Cow;
}());
new Cow().say('hello', false); // outputs 1 (newline) hello
//=======================================================
var AppComponent = (function () {
    function AppComponent(greeter) {
        this.greeter = greeter;
        this.title = 'ASP.NET MVC 5 with Angular 2';
        this.skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
        this.myskills = this.skills[1];
        this.greeting = 'Greeting is loading';
        this.number1 = 0;
        this.number2 = 0;
        this.number3 = 0;
        this.greeting = greeter.message;
    }
    AppComponent.prototype.countOnChange = function (val) {
        this.number3 = val;
    };
    AppComponent = __decorate([
        // outputs 1 (newline) hello
        core_1.Component({
            selector: 'main-app',
            //moduleId: module.id,
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [greeter_service_1.GreeterService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map