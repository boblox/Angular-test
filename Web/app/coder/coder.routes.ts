import { Routes, RouterModule } from '@angular/router';
import CoderComponent from './coder.component';

const routes: Routes = [
    { path: '', component: CoderComponent }
];

export const routing = RouterModule.forChild(routes);