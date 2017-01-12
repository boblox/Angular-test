import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WishService, WishType, WishInput, WishResult } from './wish.service';

@Component({
    selector: 'search-component',
    //moduleId: module.id,
    templateUrl: 'app/tv/search.component.html'
})
export class SearchComponent {
    headerText = `Зазвичай ми [несвідомо] даруємо те, що самі б хотіли подарувати собі.
                  Оскільки цього року Миколай лінивий і не знає чого він і ви хочете, то він розробив сервіс-виконувач бажань.
                  Рекомендую вводити їх на інгліші, бо з солов'їною у нього в школі все було кепсько:(`;
    wishSelect = [
        {
            type: WishType.WantToHave,
            text: "Хочу мати"
        },
        //{
        //    type: WishType.WantToBe,
        //    text: "Хочу бути"
        //},
        {
            type: WishType.WantToLearn,
            text: "Хочу навчитись"
        },
        {
            type: WishType.WantToMakeGift,
            text: "Хочу подарувати"
        }
    ];
    //wishSelectId = 1;
    searchPlaceholder = "Ваше бажання";
    buttonSubmitText = "Давай!";
    wishResult = new WishResult();

    wishInput: WishInput = {
        type: WishType.WantToHave,
        searchText: ""
    };

    constructor(private wishService: WishService) {
    }

    search(form: NgForm) {
        this.wishService.getWish(this.wishInput, (wishResult: WishResult) => {
            this.wishResult = wishResult;
        });
    }
}