import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WishService, WishType, WishInput, WishResult } from './service/wish.service';

@Component({
    selector: 'main-app',
    //moduleId: module.id,
    templateUrl: 'app/main.component.html'
})
export class MainComponent {
    headerText = `Зазвичай ми [несвідомо] даруємо те, що самі б хотіли подарувати собі.
                  Оскільки цього року Миколай лінивий і не знає чого він і ви хочете, то він розробив сервіс-виконувач бажань.
                  Рекомендую їх вводити англійською, бо з солов'їною у нього в школі все було погано:(`;
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
    searchPlaceholder = "...";
    buttonSubmitText = "Давай!";
    wishResult = new WishResult();

    wishInput: WishInput = {
        type: WishType.WantToHave,
        searchText: ""
    };

    constructor(private wishService: WishService) {
        //this.wishResult = wishService.notFoundResult;
        //this.wishResult = new WishResult(null, "Звиняйте, Миколайко нічого для вас не має");
    }

    search(form: NgForm) {
        //alert(this.wishSelectId);
        //alert(form.value.wishSelect);
        //alert(`${this.wishInput.type} ${this.wishInput.searchText}`);
        //alert(`${form.value.wishSelect} ${form.value.searchText}`);

        this.wishService.getWish(this.wishInput, (wishResult: WishResult) => {
            this.wishResult = wishResult;
        });
    }
}