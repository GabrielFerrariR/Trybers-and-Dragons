import Fighter from './Fighter';

export default interface SimpleFighter extends Omit<Fighter,
'energy' 
| 'defense' 
| 'special'
| 'levelUp' > {
  attack(enemy: SimpleFighter):void,
}