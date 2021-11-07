import Undead from '../Undead';

test('проверка персонажа Undead', () => {
  const expectedUndead = {
    name: 'Vasya', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const received = new Undead('Vasya', 'Undead');
  expect(received).toEqual(expectedUndead);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Undead(123, 'Undead')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Undead('A', 'Undead')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Undead('Alexandrovich', 'Undead')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Undead('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка метода levelUp', () => {
  const received = new Undead('Alex', 'Undead');
  const expectedLevelUp = {
    name: 'Alex', type: 'Undead', health: 100, level: 2, attack: 30, defence: 30,
  };
  received.levelUp();
  expect(received).toEqual(expectedLevelUp);
});

test('проверка метода levelUp на выброс исключения', () => {
  const testObj = new Undead('Alex', 'Undead');
  testObj.health = -1;
  expect(() => testObj.levelUp()).toThrow('Нельзя повысить level умершего игрока!');
});

test('проверка метода damage(points)', () => {
  const received = new Undead('Alex', 'Undead');
  const expectedDamage = {
    name: 'Alex', type: 'Undead', health: 62.5, level: 1, attack: 25, defence: 25,
  };
  received.damage(50);
  expect(received).toEqual(expectedDamage);
});

test('проверка метода damage(points) когда health <= 0', () => {
  const testDamageThrow = new Undead('Alex', 'Undead');
  testDamageThrow.health = -1;
  testDamageThrow.damage(50);
  expect(testDamageThrow.health).toBe(-1);
});
