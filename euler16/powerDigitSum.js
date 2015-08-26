/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

var powerDigitSum = function(n) {
  // n is 2^n
  var total = Math.pow(2, n);

  console.log(total.toFixed(20));
}
