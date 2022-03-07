const calculateRectangleArea = function(length, width) {
  const rectangle = length * width;
  let error;
  if (length > 0 && width > 0) {
    return rectangle;
  } else {
    return error;
  }
}

const calculateTriangleArea = function(base, height) {
  const triangle = (base * height) / 2;
  let error;
  if (base > 0 && height > 0) {
    return triangle;
  } else {
    return error;
  }
}

const calculateCircleArea = function(radius) {
  const circle = Math.PI * (radius * radius);
  let error;
  if (radius > 0) {
    return circle;
  } else {
    return error;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); //should print undefined