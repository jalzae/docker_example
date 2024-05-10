const index = require('../index')

test('add of 1 + 2 to equal 3', () => {
  expect(index.increment(1, 2)).toBe(3);
});

test('multiply 3*4 to equal 12', () => {
  expect(index.multiply(3, 4)).toBe(12);
})