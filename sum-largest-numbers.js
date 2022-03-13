//In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = function(data) {
  // Put your solution here
  let numOne = 0;
  let numTwo = 0;

  numOne = Math.max.apply(null, data);

  data.splice(data.indexOf(numOne), 1);
  numTwo = Math.max.apply(null, data);

  return numOne + numTwo;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
