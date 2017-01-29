import { Component, Injectable, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../shared/loading.service';

@Component({
    selector: 'loading-spinner',
    //moduleId: module.id,
    templateUrl: 'app/shared/loading-spinner.component.html'
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
    private loading = false;
    private subscription: any;

    constructor(private loadingService: LoadingService) {
    }

    ngOnInit(): void {
        this.subscription = this.loadingService.loading
            .subscribe((value: boolean) => { this.loading = value; });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}