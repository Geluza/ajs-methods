import Swordsman from '../Swordsman';

test('проверка персонажа Swordsman', () => {
  const expectedSwordsman = {
    name: 'Oleg', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const received = new Swordsman('Oleg', 'Swordsman');
  expect(received).toEqual(expectedSwordsman);
});
