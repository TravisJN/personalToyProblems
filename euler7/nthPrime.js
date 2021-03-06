/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

/*
  Keep an array of already found prime numbers
  Only check if those numbers can divide evenly into the current number
  If not, the number is prime
*/

//

var nthPrime = function(n) {
  var primes = [2, 3, 5, 7, 11, 13];
  var num = 15;
  var isPrime = false;

  while (primes.length !== n) {
    isPrime = true;
    for (var i = 0; i < primes.length; i++) {
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
    num += 2;  //Only check odds
  }

  return primes[primes.length - 1];
};

