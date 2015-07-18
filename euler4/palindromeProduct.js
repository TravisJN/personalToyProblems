/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// Ineffiecient solution but it works =/
var palindromeProduct = function() {
  var result = 0;

  var recurse = function(n) {
    if(n === 0) {
      return;
    }

    for (var i = 999; i > 0; i--){
      if(isPalindrome(n * i)) {
        if ((n * i) > result) {
          result = n * i;
          recurse(n - 1);
          return;
        }
      }
    }

    recurse(n - 1);
  };

  recurse(999);

  return result;
};

var isPalindrome = function(num) {
  num = num.toString();

  for (var i = 0, j = num.length - 1; i < j; i++, j--) {
    if(num[i] !== num[j]) {
      return false;
    }
  }

  return true;
};
