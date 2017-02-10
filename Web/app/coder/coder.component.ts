import { Component } from '@angular/core';
import { CoderService } from '../shared/coder.service';

@Component({
    selector: 'coder-component',
    //moduleId: module.id,
    templateUrl: './coder.component.html'
})
export default class CoderComponent {
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