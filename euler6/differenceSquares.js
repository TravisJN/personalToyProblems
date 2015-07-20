/*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var differenceSquares = function(num) {
  return (squareOfSums(num) - sumOfSquares(num));
};

var sumOfSquares = function(n) {
  var total = 0;

  for (var i = 1; i <= n; i++) {
    total += i * i;
  }

  return total;
};

var squareOfSums = function(n) {
  var total = 0;

  for (var i = 1; i <= n; i++) {
    total += i;
  }

  return total * total;
};
