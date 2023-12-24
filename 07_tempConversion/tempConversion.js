const convertToCelsius = function(temp) {
  // f to c is (f - 32) * 5/9
  let converted = (temp-32) * 5 / 9;
  return parseFloat(converted.toFixed(1));
};

const convertToFahrenheit = function(temp) {
    // c to f is (0c x 9/5) + 32)
    let converted = (temp * 9 / 5) + 32;
    return parseFloat(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
