export enum WishType { WantToHave, WantToLearn, WantToBe, WantToMakeGift };
export enum WantToHaveChoice { Other, All, Nothing, Couple, Child };
export enum WantToLearnChoice { Other, All, Nothing };
export enum WantToBeChoice { Other, Everything, Dead, Nothing };
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
        let templates = [
            `Тримай козаче свій ${input.searchText}! 
            Тепер ти маєш бути давольний!). А якщо глибоко задуматись,
            (тільки так глибоко-глибоко) - а вот тобі потрібні ці всі бєздєлушки?`,
            `А ось і твій ${input.searchText}. Ну-с, покрути його(її, йо-йо) в руках, 
            побався ним з годинку(або ще краще з'їш;). Зроби глибокий вдох і спитай себе на видиху,
            тільки чесно - вона зробила тебе щасливішою?`,
            `Ваш подарунок прибув, сер. Давай, щоб нє мєлочіцца, я дам тобі всі-всі-всі речі, які ти бажаєш!
             Що тоді буде?`
        ];

        switch (<WantToHaveChoice>(Number(input.typeChoice))) {
            case WantToHaveChoice.Other:
                return this.getRandomItem(templates);
            case WantToHaveChoice.All:
                return `Нічо сє, а не забагато хочеш?`;
            case WantToHaveChoice.Couple:
                return `Ууу, цьомки-притулюськи`;
            case WantToHaveChoice.Child:
                return `Комусь пора стати татком - мамуською)`;
            case WantToHaveChoice.Nothing:
                return `Пустота вона і в Африці пустота - тримай і використовуй responsibly`;
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
            `Тепер ти ${input.searchText}. Що далі? Депутат, президент, Бог?`
        ];

        switch (<WantToBeChoice>(Number(input.typeChoice))) {
            case WantToBeChoice.Other:
                return this.getRandomItem(templates);
            case WantToBeChoice.Everything:
                return `Хочеш стати всесвітом? Будьласочка)`;
            case WantToBeChoice.Dead:
                return `Тепер ти - мертвий. *Удар палкою по голові*. А хіба мерці розмовляють?`;
            case WantToBeChoice.Nothing:
                return `Ти - ніщо. *Удар палкою по голові*. Ой, а хто це кричить?`;
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
            `Здобувати знання - це похвально. Тепер до твоїх здібностей додалась ще одна. 
            Якщо будеш дуже довго клацати, то ти оволодієш усіма скілами цього світу.
            Ти ж майже Бог! Чи все-таки ні?`
        ];

        switch (<WantToLearnChoice>(Number(input.typeChoice))) {
            case WantToLearnChoice.Other:
                return this.getRandomItem(templates);
            case WantToLearnChoice.All:
                return `Огогошечки, прям отак хочеш знати все?`;
            case WantToLearnChoice.Nothing:
                return `Якби ти не знав нічого мабуть ти б був нічим`;
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
            `Ти ж моя молодчинка! Я вже передав ${input.searchText} тим, кому це насправді потрібно!`,
        ];

        switch (<WantToMakeGiftChoice>(Number(input.typeChoice))) {
            case WantToMakeGiftChoice.Other:
                return this.getRandomItem(templates);
            case WantToMakeGiftChoice.LoveAndWarmth:
                return `Любов І тепло, мімімі`;
            case WantToMakeGiftChoice.TimeAndAttention:
                return `Увага і час, а що ще треба?:)`;
            case WantToMakeGiftChoice.Myself:
                return `Лев Толстой сказав: "Щасливі періоди в моєму житті були ті, коли я повністю віддавав себе служінню людям"`;
            case WantToMakeGiftChoice.Nothing:
                return `Оце жлобяра! Гони свій бакс)`;
            default:
                return null;
        }
    }

    getFailureText(input: WishInput): string {
        return "Звиняйте, Миколайко не може знайти те, що ви хочете подарувати:(";
    }
}