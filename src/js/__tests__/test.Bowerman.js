import Bowerman from '../Bowerman';

test('проверка персонажа Bowerman', () => {
  const received = new Bowerman('Alex', 'Bowman');
  const expectedBowerman = {
    name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  expect(received).toEqual(expectedBowerman);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Bowerman(123, 'Bowman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Bowerman('A', 'Bowman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Bowerman('Alexandrovich', 'Bowman')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Bowerman('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка метода levelUp', () => {
  const received = new Bowerman('Alex', 'Bowman');
  const expectedLevelUp = {
    name: 'Alex', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
  };
  received.levelUp();
  expect(received).toEqual(expectedLevelUp);
});

test('проверка метода levelUp на выброс исключения', () => {
  const testObj = new Bowerman('Alex', 'Bowman');
  testObj.health = -1;
  expect(() => testObj.levelUp()).toThrow('Нельзя повысить level умершего игрока!');
});

test('проверка метода damage(points)', () => {
  const received = new Bowerman('Alex', 'Bowman');
  const expectedDamage = {
    name: 'Alex', type: 'Bowman', health: 62.5, level: 1, attack: 25, defence: 25,
  };
  received.damage(50);
  expect(received).toEqual(expectedDamage);
});

test('проверка метода damage(points) когда health <= 0', () => {
  const testDamageThrow = new Bowerman('Alex', 'Bowman');
  testDamageThrow.health = -1;
  testDamageThrow.damage(50);
  expect(testDamageThrow.health).toBe(-1);
});
