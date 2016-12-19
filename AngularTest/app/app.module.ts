import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { Greeter } from './greeter.service';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ChildComponent],
    bootstrap: [AppComponent],
    providers: [Greeter]
})
export class AppModule {
}
