const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce( (a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce( (a, b) => a * b, 1);
};

const power = function(x, p) {
  let result = 1
  for (let i = 0; i < p; i++) {
    result *= x;
  }
	return result;
};

const factorial = function(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
