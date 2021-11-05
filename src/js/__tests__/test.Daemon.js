import Daemon from '../Daemon';


test('проверка персонажа Daemon', () => {
  const expectedDaemon = {
    name: 'Di', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const received = new Daemon('Di', 'Daemon');
  expect(received).toEqual(expectedDaemon);
});
