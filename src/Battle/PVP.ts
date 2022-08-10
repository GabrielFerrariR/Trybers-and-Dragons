import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter, private _fighter2: Fighter) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints > -1 
      && this._fighter2.lifePoints > -1
    ) {
      this.player.attack(this._fighter2);
      this._fighter2.attack(this.player);
    }
    if (this.player.lifePoints === -1) return -1;
    if (this._fighter2.lifePoints === -1) return 1;
    return 0;
  }
}