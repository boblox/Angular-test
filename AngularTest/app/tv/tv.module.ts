import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { TVComponent } from './tv.component';
import { SearchComponent } from './search.component';
import { UserInfoComponent } from './user-info.component';
import { DateComponent } from './date.component';

import { WishService } from './wish.service';
import { CoderService } from '../shared/coder.service';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule],
    declarations: [
        TVComponent,
        SearchComponent,
        UserInfoComponent,
        DateComponent
    ],
    providers: [WishService, CoderService],
    exports: [TVComponent]
})
export class TVModule { }