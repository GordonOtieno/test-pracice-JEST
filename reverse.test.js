const reverse = require('./reverse');

test('The reverse of a string is', () => {
  expect(reverse('gord')).toBe('drog');
});