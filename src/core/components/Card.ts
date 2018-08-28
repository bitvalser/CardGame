export class Card {
    id: string;
    description: string;
    title: string;
    yes: string;
    no: string;
    image: string;
    onlyText: boolean;
    answerParam: {
        yes: {
            health: number;
            psyche: number;
            karma: number;
            nextCard: string;
        },
        no: {
            health: number;
            psyche: number;
            karma: number;
            nextCard: string;
        }
    }
}