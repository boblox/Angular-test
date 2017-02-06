import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './coder.routes';

import CoderComponent from './coder.component';

import { CoderService } from '../shared/coder.service';

@NgModule({
    imports: [CommonModule, routing, FormsModule, ReactiveFormsModule ],
    declarations: [
        CoderComponent
    ],
    providers: [CoderService],
    exports: [CoderComponent]
})
export default class CoderModule { }