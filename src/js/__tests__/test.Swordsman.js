import Swordsman from '../Swordsman';

test('проверка персонажа Swordsman', () => {
  const expectedSwordsman = {
    name: 'Oleg', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Swordsman('Oleg', 'Swordsman');
  expect(received).toEqual(expectedSwordsman);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Swordsman(123, 'Swordsman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Swordsman('A', 'Swordsman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Swordsman('Alexandrovich', 'Swordsman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Swordsman('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка метода levelUp', () => {
  const received = new Swordsman('Alex', 'Swordsman');
  const expectedLevelUp = {
    name: 'Alex', type: 'Swordsman', health: 100, level: 2, attack: 48, defence: 12,
  };
  received.levelUp();
  expect(received).toEqual(expectedLevelUp);
});

test('проверка метода levelUp на выброс исключения', () => {
  const testObj = new Swordsman('Alex', 'Swordsman');
  testObj.health = -1;
  expect(() => testObj.levelUp()).toThrow('Нельзя повысить level умершего игрока!');
});

test('проверка метода damage(points)', () => {
  const received = new Swordsman('Alex', 'Swordsman');
  const expectedDamage = {
    name: 'Alex', type: 'Swordsman', health: 55, level: 1, attack: 40, defence: 10,
  };
  received.damage(50);
  expect(received).toEqual(expectedDamage);
});

test('проверка метода damage(points) когда health <= 0', () => {
  const testDamageThrow = new Swordsman('Alex', 'Swordsman');
  testDamageThrow.health = -1;
  testDamageThrow.damage(50);
  expect(testDamageThrow.health).toBe(-1);
});
