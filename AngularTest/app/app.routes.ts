import { Routes, RouterModule } from '@angular/router';
import { TVComponent } from './tv/tv.component';
import { CoderComponent } from './coder/coder.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tv', pathMatch: 'full' },
    { path: 'tv', component: TVComponent },
    { path: 'coder', component: CoderComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);