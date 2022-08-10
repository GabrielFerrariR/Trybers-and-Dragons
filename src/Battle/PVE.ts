import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter, 
    private _enemies: (SimpleFighter | Monster)[],
  ) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints > -1 
      && this._enemies.length > 0
    ) {
      this.player.attack(this._enemies[0] as Fighter);
      if (this._enemies[0].lifePoints === -1) this._enemies.shift();
      this._enemies.forEach((e) => {
        e.attack(this.player);
      });
    }
    if (this.player.lifePoints === -1) return -1;
    return 1;
  }
}