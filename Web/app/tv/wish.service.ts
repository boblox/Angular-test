import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import {
    WishTextResolverBase,
    WantToHaveTextResolver, WantToLearnTextResolver, WantToBeTextResolver, WantToMakeGiftTextResolver,
    WishResult, WishInput, WishType, WishCallback,
    WishTypeChoice, WantToHaveChoice, WantToLearnChoice, WantToBeChoice, WantToMakeGiftChoice
} from './wish.service.model';

export {
    WishResult, WishInput, WishType, WishCallback,
    WishTypeChoice, WantToHaveChoice, WantToLearnChoice, WantToBeChoice, WantToMakeGiftChoice
};

type WishTextResolversMap = { [key: number]: WishTextResolverBase };
interface IImageSearchFunc {
    (input: WishInput, resolve: any, otherSearchProviders: IImageSearchFunc[]): void;
}

@Injectable()
export class WishService {
    private readonly textResolvers: WishTextResolversMap;
    private readonly notFoundUrl = 'css/img/not-found.jpg';
    private readonly imageSearchProviders: IImageSearchFunc[];

    constructor(private http: Http) {
        this.textResolvers = this.getTextResolvers();
        //If u don't specify like that then 'this' function will be undefined inside function call:
        this.imageSearchProviders = [
            (input: WishInput, resolve: any, searchProviders: IImageSearchFunc[]) =>
                this.getImageByPixabay(input, resolve, searchProviders),
            (input: WishInput, resolve: any, searchProviders: IImageSearchFunc[]) =>
                this.getImageByGettyImages(input, resolve, searchProviders)];
    }

    private getTextResolvers(): WishTextResolversMap {
        return {
            [WishType.WantToHave]: new WantToHaveTextResolver(),
            [WishType.WantToBe]: new WantToBeTextResolver(),
            [WishType.WantToLearn]: new WantToLearnTextResolver(),
            [WishType.WantToMakeGift]: new WantToMakeGiftTextResolver(),
        }
    }

    private getNotFoundResult(input: WishInput): WishResult {
        return new WishResult(this.notFoundUrl, this.getFailureText(input));
    }

    private getSuccessText(input: WishInput): string {
        return this.textResolvers[input.type].getSuccessText(input);
    }

    private getFailureText(input: WishInput): string {
        return this.textResolvers[input.type].getFailureText(input);
    }

    private raiseResult(resolve: any, result: WishResult) {
        setTimeout(() => resolve(result), 2000);
    }

    private startImageSearch(input: WishInput, resolve: any, searchProviders: IImageSearchFunc[]) {
        if (searchProviders.length > 0) {
            searchProviders[0](input, resolve, searchProviders.slice(1, searchProviders.length));
        } else {
            this.raiseResult(resolve, this.getNotFoundResult(input));
        }
    }

    private getImageByPixabay(input: WishInput, resolve: any, otherSearchProviders: IImageSearchFunc[]) {
        let searchText = encodeURIComponent(input.searchText);
        //let url =
        //    `https://www.googleapis.com/customsearch/v1?key=AIzaSyC1n9wpvVqUDUCyN4G9zwmUeZhmSHR0Oaw` +
        //    `&cx=007634069652725397483:o1ur-qeu6tc&searchType=image&q=${searchText}`;
        let url = `https://pixabay.com/api/?key=4077546-5b7acad1ea019ee9cec49f73f&q=${searchText}`;

        this.http.get(url)
            .map((data: any) => data.json())
            .subscribe((data: any) => {
                if (data.hits && data.hits.length > 0) {
                    let index = Math.floor(Math.random() * Math.min(20, data.totalHits));
                    let resultItem = new WishResult(data.hits[index].webformatURL, this.getSuccessText(input));
                    this.raiseResult(resolve, resultItem);
                } else {
                    this.startImageSearch(input, resolve, otherSearchProviders);
                }
            },
            () => {
                this.startImageSearch(input, resolve, otherSearchProviders);
            },
            () => { });
    }

    private getImageByGettyImages(input: WishInput, resolve: any, searchProviders: IImageSearchFunc[]) {
        let searchText = encodeURIComponent(input.searchText);
        let url = `https://api.gettyimages.com:443/v3/search/images?fields=display_set&phrase=${searchText}`;
        var headers = new Headers();
        headers.append("Api-Key", "ppc87vznaxfxn4q762mxcd9k");

        this.http.get(url, { headers: headers })
            .map((data: any) => data.json())
            .subscribe((data: any) => {
                if (data.images && data.images.length > 0) {
                    let index = Math.floor(Math.random() * Math.min(20, data.images.length));
                    let resultItem = new WishResult(
                        data.images[index].display_sizes.find((v: any) => v.name == "comp").uri,
                        this.getSuccessText(input));
                    this.raiseResult(resolve, resultItem);
                } else {
                    this.startImageSearch(input, resolve, searchProviders);
                }
            },
            () => {
                this.startImageSearch(input, resolve, searchProviders);
            },
            () => { });
    }

    getWish(input: WishInput, testMode: boolean = false): Promise<WishResult> {
        return new Promise<WishResult>((resolve: any, reject: any) => {
            if (testMode) {
                this.raiseResult(resolve, new WishResult(this.notFoundUrl, this.getSuccessText(input)));
            }
            else if (!input.searchText) {
                this.raiseResult(resolve, new WishResult(this.notFoundUrl, this.getSuccessText(input)));
            }
            else {
                this.startImageSearch(input, resolve, this.imageSearchProviders);
            }
        });
    }
}