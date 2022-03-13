//For this kata, we'll be adding only the numbers in the array which match the given condition.

const conditionalSum = function(values, condition) {
  // Your code here
  let num = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0 && condition === "even") {
      num += values[i];
    } else if (values[i] % 2 !== 0 && condition === "odd") {
      num += values[i];
    }
  }
  return num;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([13, 87, 12, 35, 1001], "odd"));