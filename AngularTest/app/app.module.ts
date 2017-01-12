import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { TVModule } from './tv/tv.module';
import { CoderModule } from './coder/coder.module';

@NgModule({
    imports: [BrowserModule, routing, TVModule, CoderModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [appRoutingProviders]
})
export class AppModule {
}
