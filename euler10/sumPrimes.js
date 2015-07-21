/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var sumPrimes = function(n) {
  // Use the sieve of Eratosthenese
  var range = {};
  var primes = [];
  // Sum up all prime numbers
  var sum = 0;

  // Create range
  for (var i = 2; i <= n; i++) {
    range[i] = i;
  }

  console.log(range);

  // Loop through range performing the sieve function
  for (var key in range) {

    if(range[key] !== false) {

      if(isPrime(range[key])) {

        sum += range[key];
        console.log(range[key] + ' is prime. Adding to sum...');
        var increment = range[key];

        for(var j = range[key]; j <= range[n]; j += increment) {
          range[j] = false;
        }
      }
    }
  }

  return sum;
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
