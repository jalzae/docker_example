const index = require('../index')

test('add of 1 + 2 to equal 3', () => {
  expect(index.increment(1, 2)).toBe(3);
});