import { Injectable } from '@angular/core';

@Injectable()
export class Greeter {
    public message = 'Registering Providers while Bootstrapping an Angular 2 application!';
    private bob: string;
}