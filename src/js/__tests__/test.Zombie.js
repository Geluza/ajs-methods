import Zombie from '../Zombie';

test('проверка персонажа Zombie', () => {
  const expectedZombie = {
    name: 'Svyatoslav', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Zombie('Svyatoslav', 'Zombie');
  expect(received).toEqual(expectedZombie);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Zombie(123, 'Zombie')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Zombie('A', 'Zombie')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Zombie('Alexandrovich', 'Zombie')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Zombie('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка метода levelUp', () => {
  const received = new Zombie('Alex', 'Zombie');
  const expectedLevelUp = {
    name: 'Alex', type: 'Zombie', health: 100, level: 2, attack: 48, defence: 12,
  };
  received.levelUp();
  expect(received).toEqual(expectedLevelUp);
});

test('проверка метода levelUp на выброс исключения', () => {
  const testObj = new Zombie('Alex', 'Zombie');
  testObj.health = -1;
  expect(() => testObj.levelUp()).toThrow('Нельзя повысить level умершего игрока!');
});

test('проверка метода damage(points)', () => {
  const received = new Zombie('Alex', 'Zombie');
  const expectedDamage = {
    name: 'Alex', type: 'Zombie', health: 55, level: 1, attack: 40, defence: 10,
  };
  received.damage(50);
  expect(received).toEqual(expectedDamage);
});

test('проверка метода damage(points) когда health <= 0', () => {
  const testDamageThrow = new Zombie('Alex', 'Zombie');
  testDamageThrow.health = -1;
  testDamageThrow.damage(50);
  expect(testDamageThrow.health).toBe(-1);
});
