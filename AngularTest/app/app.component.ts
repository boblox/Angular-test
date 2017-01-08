import { Component } from '@angular/core';
import { GreeterService as Greeter } from './service/greeter.service';

//==================================================
interface IMyInterface1 {
    a: number;
    b: number;
    d: () => string;
    //d(): string;
}

interface IMyInterface2 {
    (a: number): any;
}

let implementor1: IMyInterface1 =
    {
        a: 20,
        b: 30,
        d: () => "fuck"
    };
type newType = string;

let newTypeVar = "bobob";
let s = "bbb";
newTypeVar = s;

let implementor2: IMyInterface2 =
    () => "fuck";
implementor2(5);

//==========================================================
class Bob {
    a?: number = 5;
    b: string;
    constructor(b: string, a?: number) {
        this.a = a;
        this.b = b;
    }
}

var bobo = new Bob("fuck", 112);
console.log(bobo.a);

//====================================================================
interface IKicker {
    kick(speed: number): number;
}

class Kicker implements IKicker {
    kick(speed: number): number { throw new Error("Not implemented"); }
}

interface IPuncher {
    punch(power: number): number;
}
// assign intersection type definition to alias KickPuncher
type KickPuncher = IKicker | IPuncher;
var zzz: KickPuncher = {
    kick(speed: number): number { return speed * 2; },
    //punch(power: number): number { return power * 3; }
};
console.log(`Kick:${zzz.kick(3)}`);

//Property decorators=============================================
function DefaultValue(defaultValue: string) {
    return (target: any, key: string) => {
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
class Test {
    @DefaultValue('name') // invokes Override, which returns the decorator
    name: string;
    @DefaultValue('fuck')
    value: string;
}

let t = new Test();
t.name = "lol";
console.log(`Property decorator:${t.name}`);
console.log(`Property decorator:${t.value}`);

//Class decorators==============================
function log(prefix?: string) {
    return (target: any) => {
        console.log(`Hello, ${prefix}`);
        return;
    };
}
@log('Alex')
class World {
}
const w = new World(); // outputs "helloWorld"

//Parameter decorators==========================
function logPosition(target: any, propertyKey: string, parameterIndex: number) {
    console.log(parameterIndex);
}
class Cow {
    say( @logPosition b: string, @logPosition c: boolean) {
        console.log(b);
    }
}
new Cow().say('hello', false); // outputs 1 (newline) hello

//=======================================================
@Component({
    selector: 'main-app',
    //moduleId: module.id,
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[1];
    greeting = 'Greeting is loading';
    number1 = 0;
    number2 = 0;
    number3 = 0;

    constructor(private greeter: Greeter) {
        this.greeting = greeter.message;
    }

    countOnChange(val: number) {
        this.number3 = val;
    }
}
