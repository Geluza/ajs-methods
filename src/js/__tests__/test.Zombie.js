import Zombie from '../Zombie';

test('проверка персонажа Zombie', () => {
  const expectedZombie = {
    name: 'Svyatoslav', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Zombie('Svyatoslav', 'Zombie');
  expect(received).toEqual(expectedZombie);
});
