/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var pythagTriplet = function(nums) {
  nums = nums || [];
  var total = 0;

  if(nums.length < 3) {
    for(var i = 1; i < 1000; i++) {
      nums.push(i);
      if (pythagTriplet(nums) === undefined) {
        nums.pop();
      } else {
        return pythagTriplet(nums);
      }
    }
  } else {
    var pythag = (nums[0] * nums[0]) + (nums[1] * nums[1]);
    if (Math.sqrt(pythag) === nums[2]) {
      if(nums[0] + nums[1] + nums[2] === 1000) {
        return nums;
      }
    }
  }

};
