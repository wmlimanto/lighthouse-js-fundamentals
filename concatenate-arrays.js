//The function should, when given two arrays, concatenate the arrays together.
// ie-
// concat([ 1, 2, 3 ], [ 4, 5, 6 ]); returns [ 1, 2, 3, 4, 5, 6 ]
// concat([], [ 9, 7, 2 ]); returns [ 9, 7, 2 ]

let concat = function(array1, array2) {
  let arrayCombined = [];
  for (let i = 0; i < (array1.length); i++) {
    arrayCombined.push(array1[i]);
  }
  for (let j = 0; j < (array2.length); j++) {
    arrayCombined.push(array2[j]);
  }
  return arrayCombined;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);