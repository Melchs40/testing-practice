import { capital, reverse, calc } from './practice';

test('capitalizes hello to Hello', () => {
  expect(capital('hello')).toBe('Hello');
});

test('reverses string to gnirts', () => {
  expect(reverse('string')).toBe('gnirts');
});

test('calculates various things', () => {
  expect(calc.add(6, 2)).toBe(8);
  expect(calc.subtract(6, 2)).toBe(4);
  expect(calc.multiply(6, 2)).toBe(12);
  expect(calc.divide(6, 2)).toBe(3);
});
