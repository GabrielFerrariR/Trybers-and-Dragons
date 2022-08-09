import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = this.generateAttribute();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = this.generateAttribute();
    this._defense = this.generateAttribute();
    this._energy = { 
      type_: this._archetype.energyType,
      amount: this.generateAttribute(),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { 
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }
  
  private generateAttribute = ():number => getRandomInt(1, 10);

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) return -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  private checkLifePoints(): number {
    const upgradedHP: number = this._maxLifePoints + this.generateAttribute();
    const plateau: boolean = (this._race.maxLifePoints - upgradedHP < 0);
    if (plateau) return this._race.maxLifePoints;
    return upgradedHP;
  }

  levelUp(): void {
    this._strength += this.generateAttribute();
    this._dexterity += this.generateAttribute();
    this._defense += this.generateAttribute();
    this._energy.amount = 10;
    this._maxLifePoints = this.checkLifePoints();
    this._lifePoints = this._maxLifePoints;
  }

  special(): void {
    console.log('Mage Armor !!');
    this._defense += 3;
  }
}