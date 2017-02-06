import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner.component';

import { LoadingService } from './shared/loading.service';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, LoadingSpinnerComponent],
    bootstrap: [AppComponent],
    providers: [appRoutingProviders, LoadingService]
})
export class AppModule {
}
