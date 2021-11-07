import Daemon from '../Daemon';


test('проверка персонажа Daemon', () => {
  const expectedDaemon = {
    name: 'Di', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const received = new Daemon('Di', 'Daemon');
  expect(received).toEqual(expectedDaemon);
});

test('проверка конструктора на выброс исключения по типу данных name', () => {
  expect(() => new Daemon(123, 'Daemon')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(min = 2)', () => {
  expect(() => new Daemon('A', 'Daemon')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по длине name(max = 10)', () => {
  expect(() => new Daemon('Alexandrovich', 'Daemon')).toThrow('В поле name должны быть строчные значение, длина name должна быть больше 2 и не больше 10');
});

test('проверка конструктора на выброс исключения по типу персонажа', () => {
  expect(() => new Daemon('Alex', 'Vampir')).toThrow('Тип персонажа должен соответствовать одному из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('проверка метода levelUp', () => {
  const received = new Daemon('Alex', 'Daemon');
  const expectedLevelUp = {
    name: 'Alex', type: 'Daemon', health: 100, level: 2, attack: 12, defence: 48,
  };
  received.levelUp();
  expect(received).toEqual(expectedLevelUp);
});

test('проверка метода levelUp на выброс исключения', () => {
  const testObj = new Daemon('Alex', 'Daemon');
  testObj.health = -1;
  expect(() => testObj.levelUp()).toThrow('Нельзя повысить level умершего игрока!');
});

test('проверка метода damage(points)', () => {
  const received = new Daemon('Alex', 'Daemon');
  const expectedDamage = {
    name: 'Alex', type: 'Daemon', health: 70, level: 1, attack: 10, defence: 40,
  };
  received.damage(50);
  expect(received).toEqual(expectedDamage);
});

test('проверка метода damage(points) когда health <= 0', () => {
  const testDamageThrow = new Daemon('Alex', 'Daemon');
  testDamageThrow.health = -1;
  testDamageThrow.damage(50);
  expect(testDamageThrow.health).toBe(-1);
});
