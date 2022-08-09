import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _raceInstances = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 99;
    Elf._raceInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances() {
    return this._raceInstances;
  }
}