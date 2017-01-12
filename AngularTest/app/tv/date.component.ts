import { Component, Attribute, Input } from '@angular/core';

@Component({
    selector: 'date-component',
    //moduleId: module.id,
    templateUrl: 'app/tv/date.component.html'
})
export class DateComponent {
    @Input() format: string;
    date: Date;
    text: string = "День Святого Миколая";

    constructor() {
        this.date = new Date();

        setInterval(() => {
            this.date = new Date();
        }, 1000);
    }
}