import { Injectable } from '@angular/core';
import { Player } from '../components/Player';

@Injectable()
export class PlayerService {
  private pl: Player;

  constructor() {
    this.pl = new Player(100, 100, 100, 0);
  }

  update(data: { health: number, psyche: number, karma: number, nextCard: string }): void {
      this.pl.health += data.health;
      this.pl.psyche += data.psyche;
      this.pl.karma += data.karma;
      console.log(this.pl);
  }

}
