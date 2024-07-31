const roundToOneDecimal = function(number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;

  return roundToOneDecimal(celsius);
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = 9 * celsius / 5 + 32;

  return roundToOneDecimal(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
