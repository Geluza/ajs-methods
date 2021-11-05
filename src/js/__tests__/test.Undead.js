import Undead from '../Undead';

test('проверка персонажа Undead', () => {
  const expectedUndead = {
    name: 'Vasya', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const received = new Undead('Vasya', 'Undead');
  expect(received).toEqual(expectedUndead);
});
