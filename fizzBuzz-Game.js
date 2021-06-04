"use strict";

///////////////////////////////////////

//Step 1

const fizzBuzz1 = function (num) {
  const numberTo = Array.from(Array(num), (_, i) => 1 + i);
  numberTo.map((val, idx, arr) => {
    if (val % 3 === 0 && val % 5 === 0) return (arr[idx] = "FizzBuzz");
    if (val % 3 === 0) return (arr[idx] = "Fizz");
    if (val % 5 === 0) return (arr[idx] = "Buzz");
  });
  return numberTo;
};

//console.log(fizzBuzz1(100));

////////////////////////////////////////////////

//Step 2

const rangeMinMax = function (min, max) {
  return Array.from(Array(max - min + 1), (_, idx) => min + idx);
};

const fizzBuzz2 = function (min, max) {
  const numberTo = rangeMinMax(min, max); //Add a range
  numberTo.map((val, idx, arr) => {
    if (val % 3 === 0 && val % 5 === 0) return (arr[idx] = "FizzBuzz"); //multiple of 3 and 5 and replace their value with "FizzBuzz"
    if (val % 3 === 0) return (arr[idx] = "Fizz"); //multiple of 3 and replace his value with "Fizz"
    if (val % 5 === 0) return (arr[idx] = "Buzz"); //multiple of 5 and replace his value with "Buzz"
  });
  return numberTo;
};

//console.log(fizzBuzz2(15, 30));

//////////////////////////////////////////

//Step 3

//ALL STEPS
const functions = {
  step1: fizzBuzz1,
  step2: fizzBuzz2,
};
//console.log(functions.step2);

module.exports = functions;