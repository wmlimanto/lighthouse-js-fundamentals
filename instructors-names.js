//In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longName = instructors[0];

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longName.name.length) {
      longName = instructors[i];
    }
  }
  return longName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));