import { capital, reverse, calc, cipher, analyzeArray } from './practice';

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

test('changes Hello! to Khoor!', () => {
  expect(cipher('Hello!')).toBe('Khoor!');
});

test('analyze array to show min, max, average, and length of array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe(
    object ==
      {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      }
  );
});
