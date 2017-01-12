import { Component } from '@angular/core';
import { CoderService } from '../shared/coder.service';

@Component({
    selector: 'coder-component',
    //moduleId: module.id,
    templateUrl: 'app/coder/coder.component.html'
})
export class CoderComponent {
    encodedText: string;
    decodedText: string;
    decodedPlaceholder: string = "Enter decoded text here";
    encodedPlaceholder: string = "Encoded text will appear here";

    constructor(private coder: CoderService) {
        
    }

    encode(s: string): string {
        return this.coder.encode(s);
    }
}