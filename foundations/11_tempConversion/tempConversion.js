const convertToCelsius = function (degInF) {
  let result = (degInF - 32) * (5 / 9);
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function (degInC) {
  let result = degInC * (9 / 5) + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
