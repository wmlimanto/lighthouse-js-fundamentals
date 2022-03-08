//When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.
// ie-
// lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	returns 3
// lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	returns 4

function lastIndexOf (array, value) {
  let index;
  let match;
  for (let i = (array.length - 1); i >= 0; i--) {
    if (array[i] == value) {
      index = i;
      match = true;
      break;
    }
  }
  if (match === true) {
    return index;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);