//In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

const urlEncode = function(text) {
  // Put your solution here
  let output = '';

  if (text[0] !== ' ') {
    for (let i = 0; i < text.length; i++) {
      text[i] === ' ' ? output += '%20' : output += text[i];
    }
    return output;
  } else {
    for (let i = 1; i < text.length - 1; i++) {
    text[i] === ' ' ? output += '%20' : output += text[i];
  }
  return output;
  }
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));