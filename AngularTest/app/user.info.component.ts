import { Component } from '@angular/core';

@Component({
    selector: 'user-info',
    //moduleId: module.id,
    templateUrl: 'app/user.info.component.html'
})
export class UserInfoComponent {
    userName: string = "User name";
    headerText: string = this.userName;

    constructor() {
        this.headerText = `Привітульки ${this.userName}`;
    }
}