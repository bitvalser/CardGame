import { Card } from './Card';

export class Cards {

    private currentId = 0;

    constructor(private deck: Card[]) {}

    public first(): Card {
        this.currentId = 0;
        return this.deck[0];
    }

    public next(): Card {
        this.currentId += 1;
        if (this.deck.length > this.currentId) {
            return this.deck[this.currentId];
        } else {
            return null;
        }
    }

    public getCards(): Card[] {
        return this.deck;
    }

} 