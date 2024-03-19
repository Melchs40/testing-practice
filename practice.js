export function capital(string) {
  let newString = string.charAt(0).toUpperCase() + string.slice(1);
  return newString;
}

export function reverse(string) {
  let newString = string.split('').reverse().join('');
  return newString;
}

export const calc = new Object();

calc.add = function add(a, b) {
  return a + b;
};

calc.subtract = function subtract(a, b) {
  return a - b;
};

calc.multiply = function multiply(a, b) {
  return a * b;
};

calc.divide = function divide(a, b) {
  return a / b;
};
