const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrayOfNums) {
  return arrayOfNums.reduce((total, currentNumber) => currentNumber + total, 0);
};

const multiply = function (arrayOfNums) {
  return arrayOfNums.reduce((total, currentNumber) => total * currentNumber, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
