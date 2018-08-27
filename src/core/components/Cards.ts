import { Card } from './Card';

export class Cards {
    private firstId = 'first'
    private history = [];

    constructor(private deck: any) {}

    public first(): Card {
        return this.deck[this.firstId];
    }

    public next(id: string): Card {
        return this.deck[id];
    }

    public getCards(): any {
        return this.deck;
    }

    public pushHistory(id: string, answer: string): void {
        this.history.push({id: id, answer: answer});
        console.log(this.history);
    }

} 