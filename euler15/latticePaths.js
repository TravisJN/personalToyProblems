/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?
*/

[
 [x,x,x,x,x,x,x,x,x,x],
 [x,x,x,x,x,x,x,x,x,x],
 [x,x,x,x,x,x,x,x,x,x],
 [x,x,x,x,x,x,x,x,x,x],
 [x,x,x,x,x,x,x,x,x,x],
 [x,x,x,x,x,x,x,x,x,x],
 [x,x,x,x,x,x,x,x,x,x],
 [x,x,x,x,x,x,x,x,x,x]
]

var latticePaths = function(n) {
  // keep track of a board, array of arrays
  for (var i = 0; i < 2; i++) {
    count = latticePaths(n, i);
  }

};
