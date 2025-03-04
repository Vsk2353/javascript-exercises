const convertToCelsius = function(temp) {
  let ans1 = 0;
  ans1 = (temp-32)*(5/9);
  return Math.round((ans1*10))/10;
};

const convertToFahrenheit = function(temp) {
  let ans2 = 0;
  ans2 = temp*(9/5) + 32;
  return Math.round((ans2*10))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
