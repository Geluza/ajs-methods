import Magician from '../Magician';

test('проверка персонажа Magician', () => {
  const expectedMagician = {
    name: 'Irina', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const received = new Magician('Irina', 'Magician');
  expect(received).toEqual(expectedMagician);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Magician(123, 'Magician')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Magician('A', 'Magician')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Magician('Alexandrovich', 'Magician')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Magician('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка метода levelUp', () => {
  const received = new Magician('Alex', 'Magician');
  const expectedLevelUp = {
    name: 'Alex', type: 'Magician', health: 100, level: 2, attack: 12, defence: 48,
  };
  received.levelUp();
  expect(received).toEqual(expectedLevelUp);
});

test('проверка метода levelUp на выброс исключения', () => {
  const testObj = new Magician('Alex', 'Magician');
  testObj.health = -1;
  expect(() => testObj.levelUp()).toThrow('Нельзя повысить level умершего игрока!');
});

test('проверка метода damage(points)', () => {
  const received = new Magician('Alex', 'Magician');
  const expectedDamage = {
    name: 'Alex', type: 'Magician', health: 70, level: 1, attack: 10, defence: 40,
  };
  received.damage(50);
  expect(received).toEqual(expectedDamage);
});

test('проверка метода damage(points) когда health <= 0', () => {
  const testDamageThrow = new Magician('Alex', 'Magician');
  testDamageThrow.health = -1;
  testDamageThrow.damage(50);
  expect(testDamageThrow.health).toBe(-1);
});
