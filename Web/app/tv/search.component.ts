import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WishService, WishType, WishInput, WishResult } from './wish.service';
import { WishTypeChoice, WantToHaveChoice, WantToLearnChoice, WantToBeChoice, WantToMakeGiftChoice } from './wish.service';
import { LoadingService } from '../shared/loading.service';

type WishTypeSelect = { type: WishType, displayText: string };
type WishChoiceSelect = { type: WishTypeChoice, displayText: string, searchText: string };

@Component({
    selector: 'search-component',
    //moduleId: module.id,
    templateUrl: 'app/tv/search.component.html'
})
export class SearchComponent {
    headerText: string;
    wishTypes: WishTypeSelect[] = [
        { type: WishType.WantToHave, displayText: "Хочу мати" },
        { type: WishType.WantToBe, displayText: "Хочу бути" },
        { type: WishType.WantToLearn, displayText: "Хочу навчитись" },
        { type: WishType.WantToMakeGift, displayText: "Хочу подарувати" }
    ];
    readonly defaultWishType = WishType.WantToHave;
    
    readonly  wantToHaveChoices: WishChoiceSelect[] = [
        { type: WantToHaveChoice.Other, displayText: "Інше", searchText: "" },
        { type: WantToHaveChoice.All, displayText: "Все", searchText: "Everything" },
        { type: WantToHaveChoice.Nothing, displayText: "Нічого", searchText: "Nothing" },
        { type: WantToHaveChoice.Couple, displayText: "Хлопця або дівчину", searchText: "Couple" },
        { type: WantToHaveChoice.Child, displayText: "Хлопчика або дівчинку", searchText: "Child" }
    ];
    readonly wantToLearnChoices: WishChoiceSelect[] = [
        { type: WantToLearnChoice.Other, displayText: "Інше", searchText: "" },
        { type: WantToLearnChoice.All, displayText: "Всьому", searchText: "Everything" },
        { type: WantToLearnChoice.Nothing, displayText: "Нічого не вміти", searchText: "Nothing" }
    ];
    readonly wantToBeChoices: WishChoiceSelect[] = [
        { type: WantToBeChoice.Other, displayText: "Інше", searchText: "" },
        { type: WantToBeChoice.All, displayText: "Всім", searchText: "Everything" },
        { type: WantToBeChoice.Dead, displayText: "Мертвим", searchText: "Dead" },
        { type: WantToBeChoice.Nothing, displayText: "Нічим", searchText: "Nothing" }
    ];
    readonly wantToMakeGiftChoices: WishChoiceSelect[] = [
        { type: WantToMakeGiftChoice.Other, displayText: "Інше", searchText: "" },
        { type: WantToMakeGiftChoice.TimeAndAttention, displayText: "Час та увагу", searchText: "Together" },
        { type: WantToMakeGiftChoice.LoveAndWarmth, displayText: "Любов та тепло", searchText: "Love warmth" },
        { type: WantToMakeGiftChoice.Myself, displayText: "Себе", searchText: "Give people" },
        { type: WantToMakeGiftChoice.Nothing, displayText: "Нічого", searchText: "Nothing" }
    ];
    wishTypeChoices: { [id: number]: WishChoiceSelect[] } = {
        [WishType.WantToHave]: this.wantToHaveChoices,
        [WishType.WantToLearn]: this.wantToLearnChoices,
        [WishType.WantToBe]: this.wantToBeChoices,
        [WishType.WantToMakeGift]: this.wantToMakeGiftChoices
    };

    searchPlaceholder: string;
    buttonSubmitText: string;

    wishInput: WishInput;
    wishResult = new WishResult();

    constructor(private wishService: WishService, private loadingService: LoadingService) {
        this.headerText = `Зазвичай ми [несвідомо] даруємо те, що самі б хотіли подарувати собі.
                  Оскільки цього року Миколай лінивий і не знає чого він і ви хочете, то він розробив сервіс виконання бажань.
                  А та як з солов'їною у нього в школі дуже не склалось пишіт лібше на англіцькій:)`;
        this.searchPlaceholder = "Ваше бажання";
        this.buttonSubmitText = "Давай!";
        let wishTypeChoice = this.wishTypeChoices[this.defaultWishType][0];
        this.wishInput = {
            type: this.defaultWishType,
            typeChoice: wishTypeChoice.type,
            searchText: wishTypeChoice.searchText
        };
    }

    isSearchTextVisible(choice: WishTypeChoice): boolean {
        return choice == WantToHaveChoice.Other ||
            choice == WantToLearnChoice.Other ||
            choice == WantToBeChoice.Other ||
            choice == WantToMakeGiftChoice.Other;
    }

    onWishTypeChange(value: WishType) {
        let choice = this.wishTypeChoices[value][0];
        this.wishInput.typeChoice = choice.type;
        this.wishInput.searchText = choice.searchText;
    }

    onWishTypeChoiceChange(value: WishTypeChoice) {
        this.wishInput.searchText = this.wishTypeChoices[this.wishInput.type]
            .filter(i => i.type == value)[0]
            .searchText;
    }
    
    search(form: NgForm) {
        this.loadingService.showLoadingIndicator();
        this.wishService.getWish(this.wishInput)
            .then((result) => {
                this.loadingService.hideLoadingIndicator();
                this.wishResult = result;
            });
    }
}