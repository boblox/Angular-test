import { Injectable } from '@angular/core';

@Injectable()
export class CoderService {
    private readonly shift = 20;
    private readonly encodeFunc = (s: string) => s.charCodeAt(0) + this.shift;
    private readonly decodeFunc = (s: string) => s.charCodeAt(0) - this.shift;

    private code(s: string, func: (s: string) => number): string {
        if (s) {
            return s.split('')
                .map((char: string) => String.fromCharCode(func(char)))
                .join('');
        }
        return null;
    }

    encode(s: string): string {
        return encodeURI(this.code(s, this.encodeFunc));
    }

    decode(s: string): string {
        return decodeURI(this.code(s, this.decodeFunc));
    }
}