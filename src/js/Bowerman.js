import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    this.attack = 25;
    this.defence = 25;
  }
}
