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

export function cipher(code) {
  const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'.split(
    ''
  );
  let input = code.split('');
  let cipher = '';
  for (let i = 0; i < input.length; i++) {
    let position = alphabet.indexOf(input[i]);
    if (!alphabet.includes(input[i])) {
      cipher = cipher.concat(input[i]);
    } else if (position >= alphabet.length - 6) {
      let newPosition = position - 46;
      cipher = cipher.concat(alphabet[newPosition]);
    } else {
      let newPosition = position + 6;
      cipher = cipher.concat(alphabet[newPosition]);
    }
  }
  return cipher;
}

export function analyzeArray(array) {
  let result = new Object();

  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  result.average = total / array.length;

  let minimum = '';
  for (let i = 0; i < array.length; i++) {
    if (minimum == '') {
      minimum = array[i];
    }
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  result.min = minimum;

  let maximum = '';
  for (let i = 0; i < array.length; i++) {
    if (maximum == '') {
      maximum = array[i];
    }
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  result.max = maximum;

  result.length = array.length;

  return result;
}
