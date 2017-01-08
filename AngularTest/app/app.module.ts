import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { AppComponent } from './app.component';
//import { ChildComponent } from './child.component';
//import { Greeter } from './greeter.service';

import { MainComponent } from './main.component';
import { UserInfoComponent } from './user.info.component';
import { WishService } from './service/wish.service';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    //declarations: [AppComponent, ChildComponent],
    declarations: [MainComponent, UserInfoComponent],
    //bootstrap: [AppComponent],
    bootstrap: [MainComponent],
    //providers: [Greeter],
    providers: [WishService]
})
export class AppModule {
}
