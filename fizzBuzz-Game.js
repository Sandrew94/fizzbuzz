"use strict";

///////////////////////////////////
//////////////////////////////////

//Utils

const rangeMinMax = function (min, max) {
  return Array.from(Array(max - min + 1), (_, idx) => min + idx);
};

///////////////////////////////////
//////////////////////////////////

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

///////////////////////////////////
//////////////////////////////////

//Step 2

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

///////////////////////////////////
//////////////////////////////////

//Step 3

const fizzBuzz3 = function (min, max) {
  const numberTo = rangeMinMax(min, max); //Add a range
  numberTo.map((val, idx, arr) => {
    if (val % 3 === 0 && val % 5 === 0) return (arr[idx] = "FizzBuzz");
    if (val % 3 === 0) return (arr[idx] = "Fizz");
    if (val % 5 === 0) return (arr[idx] = "Buzz");
    if (val % 7 === 0 && val % 11 === 0) return (arr[idx] = "FooBoo");
    if (val % 7 === 0) return (arr[idx] = "Foo");
    if (val % 11 === 0) return (arr[idx] = "Boo");
  });
  return numberTo;
};

///////////////////////////////////
//////////////////////////////////

// Step4

const fizzBuzz4 = function (min, max) {
  const numberTo = rangeMinMax(min, max); //Add a range
  numberTo.map((val, idx, arr) => {
    if (val % 3 === 0 && val % 5 === 0) return (arr[idx] = "FizzBuzz");
    if (val % 3 === 0) return (arr[idx] = "Fizz");
    if (val % 5 === 0) return (arr[idx] = "Buzz");
    if (val % 7 === 0 && val % 11 === 0) return (arr[idx] = "FooBoo");
    if (val % 7 === 0) return (arr[idx] = "Foo");
    if (val % 11 === 0) return (arr[idx] = "Boo");
    if (val < 16) return (arr[idx] = "Small");
    if (val > 95) return (arr[idx] = "Big");
  });
  return numberTo;
};

///////////////////////////////////
//////////////////////////////////

// Step5

const fizzBuzz5 = function (min, max, reverseValue = true) {
  const numberTo = rangeMinMax(min, max);
  numberTo.map((val, idx, arr) => {
    if (val % 3 === 0 && val % 5 === 0) return (arr[idx] = "FizzBuzz");
    //if (false) reverse value
    if (val % 3 === 0) return (arr[idx] = `${reverseValue ? "Buzz" : "Fizz"}`);
    if (val % 5 === 0) return (arr[idx] = `${reverseValue ? "Fizz" : "Buzz"}`);
    if (val % 7 === 0 && val % 11 === 0) return (arr[idx] = "FooBoo");
    if (val % 7 === 0) return (arr[idx] = "Foo");
    if (val % 11 === 0) return (arr[idx] = "Boo");
    if (val < 16) return (arr[idx] = "Small");
    if (val > 95) return (arr[idx] = "Big");
  });
  return numberTo;
};

console.log(fizzBuzz5(1, 30, false));
///////////////////////////////////
//////////////////////////////////

// Step6

//console.log(fizzBuzz6(1, 100));
///////////////////////////////////
//////////////////////////////////

//ALL STEPS
const functions = {
  step1: fizzBuzz1,
  step2: fizzBuzz2,
  step3: fizzBuzz3,
  step4: fizzBuzz4,
  step5: fizzBuzz5,
  //  step6: fizzBuzz6,
};

module.exports = functions;
