import { Routes, RouterModule } from '@angular/router';
import TVComponent from './tv.component';

const routes: Routes = [
    { path: '', component: TVComponent }
];

export const routing = RouterModule.forChild(routes);