/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var smallestDivisible = function() {
  var result = 1;

  // Start with the product of all numbers in the range 1 - 20 and work down
  for (var i = 1; i <= 20; i++) {
    result *= i;
  }

  console.log(result);

  for (var j = 20; j < result; j += 20) {
    if(isDivisible(j)) {
      return j;
    }
  }

  return result;
};

var isDivisible = function(num) {

  for (var i = 20; i > 0; i--) {
    if(num % i !== 0) {
      return false;
    }
  }

  return true;
}
