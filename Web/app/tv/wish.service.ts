import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import {
    WantToHaveTemplates, WantToLearnTemplates, WantToMakeGift,
    WishResult, WishInput, WishType, WishCallback
} from './wish.service.model';

export { WishResult, WishInput, WishType, WishCallback };

@Injectable()
export class WishService {
    private readonly notFoundUrl = 'css/img/not-found.jpg';
    //private readonly notFoundUrl = 'css/img/bg5.jpg';
    readonly notFoundResult: WishResult;

    constructor(private http: Http) {
        let text = "Звиняйте, Миколайко нічого для вас не знайшов:(";
        this.notFoundResult = new WishResult(this.notFoundUrl, text);
    }

    private getRandomItem(items: string[]): string {
        let index = Math.floor(Math.random() * items.length);
        return items[index];
    }

    private getSuccessResultText(input: WishInput): string {
        let resultText: string;
        let wantToHaveTemplates = new WantToHaveTemplates(input).templates;
        let wantToLearnTemplates = new WantToLearnTemplates(input).templates;
        let wantToMakeGift = new WantToMakeGift(input).templates;

        switch (Number(input.type)) {
            case WishType.WantToHave:
                resultText = this.getRandomItem(wantToHaveTemplates);
                break;
            case WishType.WantToLearn:
                resultText = this.getRandomItem(wantToLearnTemplates);
                break;
            case WishType.WantToMakeGift:
                resultText = this.getRandomItem(wantToMakeGift);
            default:
        }
        return resultText;
    }

    private raiseResult(callback: WishCallback, result: WishResult) {
        setTimeout(() => callback(result), 2000);
    }

    getWish(input: WishInput, callback: WishCallback): void {
        let searchText = encodeURIComponent(input.searchText);
        //let url =
        //    `https://www.googleapis.com/customsearch/v1?key=AIzaSyC1n9wpvVqUDUCyN4G9zwmUeZhmSHR0Oaw` +
        //    `&cx=007634069652725397483:o1ur-qeu6tc&searchType=image&q=${searchText}`;

        let url = `https://pixabay.com/api/?key=4077546-5b7acad1ea019ee9cec49f73f&q=${searchText}`;
        let resultItem: WishResult;

        //alert(url);
        this.http.get(url)
            .map((data) => data.json())
            .subscribe((data: any) => {
                if (data.hits && data.hits.length > 0) {
                    let index = Math.floor(Math.random() * Math.min(20, data.totalHits));
                    let text = this.getSuccessResultText(input);
                    resultItem = new WishResult(data.hits[index].webformatURL, text);
                } else {
                    resultItem = this.notFoundResult;
                }
            },
            (error) => {
                this.raiseResult(callback, this.notFoundResult);
            },
            () => {
                this.raiseResult(callback, resultItem);
            });
    }
}