import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CoderService } from '../shared/coder.service';

@Component({
    selector: 'user-info-component',
    //moduleId: module.id,
    templateUrl: 'app/tv/user-info.component.html'
})
export class UserInfoComponent implements OnInit, OnDestroy {
    userName: string;
    headerText: string;
    subscriber: any;

    private changeUserName(userName: string) {
        this.userName = userName ? this.coder.decode(userName) : "User name";
        this.headerText = `Привітульки ${this.userName}`;
    }

    constructor(private route: ActivatedRoute, private coder: CoderService) {
    }

    ngOnInit() {
        this.subscriber = this.route.queryParams.subscribe((params: any) => {
            this.changeUserName(params['u']);
        });
    }

    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
}