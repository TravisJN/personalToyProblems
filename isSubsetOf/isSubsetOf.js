/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array){
  // Your code here

  // Create an object using the elements found in this
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[array[i]] = true;
  }
  // Loop through the array argument
  for (var i = 0; i < this.length; i++) {
    // Check each element against this array
    if (!obj[this[i]]) {
      return false;
    }
  }

  return true;

};
