/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var largestPrimeFactor = function(n) {

  var result = [];


  var findPrimeFactor = function(num) {
    // Check if number is prime
    if (isPrime(num)) {
      result.push(num);
      return;
    }
  // if not
    for(var i = 2; i < num / 2; i++) {
      if(isPrime(i)){
        if(num % i === 0) {
          result.push(i);
          findPrimeFactor(num / i);
          return;
        }
      }
    }
    // Find the smallest prime factor first (divide by 2)
    // If result is a whole number
      // start over
    // If result is not whole
      // Divide by next greatest prime number
      // start over
  }

  findPrimeFactor(n);

  return result;
};

var isPrime = function(number) {
  if (number % 1 || number < 2) {
    return false;
  }

  if (number % 2 === 0) {
    return number === 2;
  }
  if (number % 3 === 0) {
    return number === 3;
  }

  var m = Math.sqrt(number);

  for (var i = 5; i <= m; i += 6) {
    if (number % i === 0) {
      return false;
    }
    if (number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};
