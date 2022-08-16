const capitalize = require('./capitalize');

test('First string capital', () => {
  expect(capitalize('gordon')).toBe('Gordon');
});