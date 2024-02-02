import healthStatus from '../app';

test('adventure health status check', () => {
  expect(healthStatus({ name: 'Маг', health: 90 })).toEqual('healthy');
});

test.each([
  [{ name: 'мечник', health: 14 }, 'critical'],
  [{ name: 'маг', health: 90 }, 'healthy'],
  [{ name: 'лучник', health: 49 }, 'wounded'],
  [{ name: 'читер', health: 'immortal' }, 'undefined'],
])('testing healthStatus function', (adventure, expected) => {
  const result = healthStatus(adventure);
  expect(result).toBe(expected);
});
