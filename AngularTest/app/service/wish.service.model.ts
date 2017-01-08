import {WishInput} from './wish.service';

export class WantToHaveTemplates {
    templates: string[];
    constructor(input: WishInput) {
        this.templates = [
            `Тримай козаче свій ${input.searchText}! 
            Тепер ти маєш бути давольний!). А якщо глибоко задуматись,
            (тільки так глибоко-глибоко) - а вот тобі потрібні ці всі бєздєлушки?`,

            `А ось і твій ${input.searchText}. Ну-с, покрути його(її, йо-йо) в руках, 
            побався ним з годинку(або ще краще з'їш;). Зроби глибокий вдох і спитай себе на видиху,
            тільки чесно - вона зробила тебе щасливішою?`,

            `Ваш подарунок прибув, сер. Давай, щоб нє мєлочіцца, я дам тобі всі-всі-всі речі, які ти бажаєш!
             Що тоді буде?`
        ];
    }
}

export class WantToLearnTemplates {
    templates: string[];
    constructor(input: WishInput) {
        this.templates = [
            `Здобувати знання - це похвально. Тепер до твоїх здібностей додалась ще одна. 
            Якщо будеш дуже довго клацати, то ти оволодієш усіма скілами цього світу.
            Ти ж майже Бог! Чи все-таки ні?`,
        ];
    }
}

export class WantToMakeGift {
    templates: string[];
    constructor(input: WishInput) {
        this.templates = [
            `Ти ж моя молодчинка! Я вже передав ${input.searchText} тим, кому це насправді потрібно!`,
        ];
    }
}