import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//Ahead-of-Time (AoT) compilation
//import { platformBrowser } from '@angular/platform-browser';
//import { AppModuleNgFactory } from './aot/app/app.module.ngfactory';

//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
