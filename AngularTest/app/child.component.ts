import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    //moduleId: module.id,
    templateUrl: 'app/child.component.html'
})
export class ChildComponent {
    @Input() text = 'ASP.NET MVC 5';

    @Input() count = 0;
    @Output() countChange = new EventEmitter<number>();

    constructor() {
    }

    private increment() {
        this.count++;
        this.countChange.emit(this.count);
    }
}