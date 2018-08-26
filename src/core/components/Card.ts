export class Card {
    id: string;
    description: string;
    yes: string;
    no: string;
    image: string;
    onlyText: boolean;
    answerParam: {
        yes: {
            health: number;
        },
        no: {
            health: number;
        }
    }
}