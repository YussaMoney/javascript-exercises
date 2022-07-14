// F = C * (9/5) + 32
// C = (F - 32) * (5/9)

const ftoc = function(fahValue) {
const celFraction = 5/9;
const result = (fahValue - 32) * celFraction;
const resultTo1DecPlace =  result.toFixed(1);
return Number(resultTo1DecPlace)
};

const ctof = function(celsiusValue) {
const fahFraction = 9/5;
const result = (celsiusValue * fahFraction) + 32;
const resultTo1DecPlace =  result.toFixed(1);
return Number(resultTo1DecPlace)
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};




