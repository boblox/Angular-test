export enum WishType { WantToHave, WantToLearn, WantToBe, WantToMakeGift };
export enum WantToHaveChoice { Other, All, Nothing, Couple, Child };
export enum WantToLearnChoice { Other, All, Nothing };
export enum WantToBeChoice { Other, All, Dead, Nothing };
export enum WantToMakeGiftChoice { Other, TimeAndAttention, LoveAndWarmth, Myself, Nothing };
export type WishTypeChoice = WantToHaveChoice | WantToLearnChoice | WantToBeChoice | WantToMakeGiftChoice;

export class WishInput {
    type: WishType;
    typeChoice: WishTypeChoice;
    searchText: string;
}

export class WishResult {
    constructor(private imageUrl?: string, private text?: string) {
    }
}

export type WishCallback = (data: WishResult) => void;

export abstract class WishTextResolverBase {
    protected getRandomItem(items: string[]): string {
        let index = Math.floor(Math.random() * items.length);
        return items[index];
    }

    public abstract getSuccessText(input: WishInput): string;

    public abstract getFailureText(input: WishInput): string;
}

export class WantToHaveTextResolver extends WishTextResolverBase {
    getSuccessText(input: WishInput): string {
        let otherTemplates = [
            `Тримай козаче свій ${input.searchText}! 
            Тепер ти маєш бути задоволений!). Ну як мінімум наступні пів години. 
            Ну хоча би 10 хвилин. Принаймні поки вона не набридне.`,
            `Єєй! Ти так довго про неї мріяв. І ось ${input.searchText} в твоїх руцях! Тепер
            ти можеш крутити її досхочу! А ще краще з'їсти) Можна тебе дещо попросити - зроби
            глибокий-глибокий вдих і спитай себе на видиху, тільки чесно-чесно - річ зробила тебе щасливішою?)`,
            `Ваш подарунок прибув, сер! Тепер ти можеш починати бажати інший, а потім третій, четвертий...
            І так до нескінченності, поки не станеш Скрутчом МакДаком) Бу-га-га!`,
            `Коли ${input.searchText} прибуде до тебе, коли твоя ласка, проведи експеримент: перевір чи
            змінилась твоя жага до предмета до і опісля його отримання. Змінилась, правда? Парадокс, але:
            "Пристрасть до об'єкта не залежить від самого об'єкта."`
        ];

        switch (<WantToHaveChoice>(+(input.typeChoice))) {
            case WantToHaveChoice.Other:
                if (!input.searchText) return "Но-но-но, не можна не замовити нічого в мене!";
                return this.getRandomItem(otherTemplates);
            case WantToHaveChoice.All:
                return `Опача, та це ж мрія справжнього диктатора)) Нічосі, а не забагато хочеш?`;
            case WantToHaveChoice.Couple:
                return `Ууу, цьомки-притулюськи) Жаль, що будь-яка рамантіка рожевих окулярів 
                    має тенденцію закінчуватись(( Хм, а може...вічна любов?`;
            case WantToHaveChoice.Child:
                return `Комусь пора стати татусьом - мамусьом і поринути у світ любові і 
                    невідкладних обов'язків!)`;
            case WantToHaveChoice.Nothing:
                return `"Коли ти не маєш нічого - ти маєш все"(c)`;
            default:
                return null;
        }
    }

    getFailureText(input: WishInput): string {
        return "Звиняйте, Миколайко нічого для вас не знайшов:(";
    }
}

export class WantToBeTextResolver extends WishTextResolverBase {
    getSuccessText(input: WishInput): string {
        let templates = [
            `Тепер ти ${input.searchText}. Але ти ж на цьому не зупинишся, правда? 
             Хто далі? Депутат, президент, Бог?`,
            `У всі часи найбажанішим було бажання влади. Влади над жінками, країнами, долями людей...собою.
             Чому б і тобі не спробувати?;)`
        ];

        switch (<WantToBeChoice>(+(input.typeChoice))) {
            case WantToBeChoice.Other:
                if (!input.searchText) return "Но-но-но, не можна не замовити в мене нічого!";
                return this.getRandomItem(templates);
            case WantToBeChoice.All:
                return `Хочеш бути одночасно найменшою піщинкою і безмежним, як всесвіт? Будь_ласо_чка)`;
            case WantToBeChoice.Dead:
                return `Юний падаван прийшов до майстра і сказав йому: "Я - мертвий.". 
                        Майстер вдарив його палицею по голові. 
                        "ААААаа" - закричав падаван. - "Хіба мерці розмовляють?"`;
            case WantToBeChoice.Nothing:
                return `Одного разу учень прийшов до майстра і сказав йому: "Я - ніщо". 
                        Майстер як дасть йому палицею по потилиці. Учень застогнав від болю."
                        "Ой, а хто це кричить!?"`;
            default:
                return null;
        }
    }

    getFailureText(input: WishInput): string {
        return `Звиняйте, Миколайко не може зробити вас ${input.searchText}:(`;
    }
}

export class WantToLearnTextResolver extends WishTextResolverBase {
    getSuccessText(input: WishInput): string {
        let templates = [
            `Здобувати знання - це похвально. Тепер ти маєш в арсеналі ще одну здібність.
            Якщо будеш тут дуже довго клацати, то оволодієш усіма скілами цього світу.
            Та ти ж майже Всесильний! Чи все-таки ні?`,
            `До твоїх скілів додався ще один - ${input.searchText}.
            Цікаво, що станеться зі всіма знаннями, коли вітер розсіє твій прах?...`
        ];

        switch (<WantToLearnChoice>(+(input.typeChoice))) {
            case WantToLearnChoice.Other:
                if (!input.searchText) return "Но-но-но, не можна в мене нічого не замовити!";
                return this.getRandomItem(templates);
            case WantToLearnChoice.All:
                return `Що ж ти будеш тут робити, в цьому Світі, коли все тобі буде відомо?`;
            case WantToLearnChoice.Nothing:
                return `Ну і кому ти після того потрібний?)`;
            default:
                return null;
        }
    }

    getFailureText(input: WishInput): string {
        return "Звиняйте, Миколайко не може знайти потрібні для вас знання:(";
    }
}

export class WantToMakeGiftTextResolver extends WishTextResolverBase {
    getSuccessText(input: WishInput): string {
        let templates = [
            `Ти ж моя молодчинка! Я вже передав ${input.searchText} тим, кому це насправді потрібно!
            Жеби я знав чи воно їм справді треба...`,
        ];

        switch (<WantToMakeGiftChoice>(+(input.typeChoice))) {
            case WantToMakeGiftChoice.Other:
                if (!input.searchText) return "Но-но-но, нічого в мене не можна не замовити!";
                return this.getRandomItem(templates);
            case WantToMakeGiftChoice.LoveAndWarmth:
                return `Любов, тепло і притулюськи. Мімімі) Тіко не відходь від об'єкту, 
                а то йому знову стане холодно і безлюбв'яно:(`;
            case WantToMakeGiftChoice.TimeAndAttention:
                return `Це, мабуть, те, з чим ми розлучаємось з найбільшим жалем.
                Тепер уяви, якщо ти роздаш всю свою увагу і час. Це ж на тебе нічого не лишиться!`;
            case WantToMakeGiftChoice.Myself:
                return `Лев Толстой сказав: "Щасливі періоди в моєму житті були ті, 
                коли я повністю віддавав себе служінню людям". Пфф, старий романтик - маразматик.
                Не вір йому!`;
            case WantToMakeGiftChoice.Nothing:
                return `Оце жлобяра! Гони свій бакс і гуляй з миром!)`;
            default:
                return null;
        }
    }

    getFailureText(input: WishInput): string {
        return "Звиняйте, Миколайко не може знайти те, що ви хочете подарувати:(";
    }
}