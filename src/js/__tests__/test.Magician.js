import Magician from '../Magician';

test('проверка персонажа Magician', () => {
  const expectedMagician = {
    name: 'Irina', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const received = new Magician('Irina', 'Magician');
  expect(received).toEqual(expectedMagician);
});
