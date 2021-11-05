import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.attack = 40;
    this.defence = 10;
  }
}
