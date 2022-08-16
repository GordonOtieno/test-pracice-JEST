const length = require('./length');

test('The length of a string is', () => {
  expect(length('gordoteyetyteren')).toBe('invalid string');
});