import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class LoadingService {
    loading: Observable<boolean>;
    private observer: Observer<boolean>;

    constructor() {
        this.loading = new Observable((observer: any) => this.observer = observer);
    }

    showLoadingIndicator():void {
        this.observer.next(true);
    }

    hideLoadingIndicator(): void {
        this.observer.next(false);
    }
}