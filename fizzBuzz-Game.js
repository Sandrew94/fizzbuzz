"use strict";

//Step 1
const fizzBuzz = function (num) {
  const numberTo = Array.from(Array(num).keys());
  numberTo.map((val, idx, arr) => {
    if (val % 3 === 0 && val % 5 === 0) return (arr[idx] = "FizzBuzz");
    if (val % 3 === 0) return (arr[idx] = "Fizz");
    if (val % 5 === 0) return (arr[idx] = "Buzz");
  });
  return numberTo;
};

module.exports = fizzBuzz;
