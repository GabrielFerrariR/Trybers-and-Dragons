import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private fighter2: SimpleFighter;
  constructor(fighter1: SimpleFighter, fighter2: SimpleFighter) {
    super(fighter1);
    this.fighter2 = fighter2;
  }

  fight(): number {
    while (this.player.lifePoints > -1 
      && this.fighter2.lifePoints > -1
    ) {
      this.player.attack(this.fighter2);
      this.fighter2.attack(this.player);
    }
    if (this.player.lifePoints < 0) return -1;
    if (this.fighter2.lifePoints < 0) return 1;
    return 0;
  }
}