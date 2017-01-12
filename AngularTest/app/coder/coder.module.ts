import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoderComponent } from './coder.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [
        CoderComponent
    ],
    //providers: [WishService],
    exports: [CoderComponent]
})
export class CoderModule { }