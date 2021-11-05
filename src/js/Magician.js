import Character from './Character';

export default class Magician extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.attack = 10;
    this.defence = 40;
  }
}
