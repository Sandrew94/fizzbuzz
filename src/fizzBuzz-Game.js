"use strict";

///////////////////////////////////
//////////////////////////////////

//Utils

const rangeMinMax = function (min, max) {
  return Array.from(Array(max - min + 1), (_, idx) => min + idx);
};

////////////
////////////

// multiple of one numbers and add word
const multipleOfNumber = (arrNum, multipleOf, replaceWord) => {
  arrNum.map((val, idx, arr) => {
    if (val % multipleOf === 0) return (arr[idx] = replaceWord);
  });
};

////////////
////////////

// multiple of both 2 numbers (for example 3 AND 5)
const multipleOfBoth = (arrNum, multipleNum1, multipleNum2, replaceWord) => {
  arrNum.map((val, idx, arr) => {
    if (val % multipleNum1 === 0 && val % multipleNum2 === 0)
      return (arr[idx] = replaceWord);
  });
};

////////////
////////////

// multiple of one of 2 numbers (for example 3 OR 5)
const multipleOfOne = (arrNum, multipleNum1, multipleNum2, replaceWord) => {
  arrNum.map((val, idx, arr) => {
    if (val % multipleNum1 === 0 || val % multipleNum2 === 0)
      return (arr[idx] = replaceWord);
  });
};

////////////
////////////

//bigger or small then

const smallAndBigNum = (
  arrNum,
  smallNum,
  BigNum,
  replaceWord4,
  replaceWord5
) => {
  arrNum.map((val, idx, arr) => {
    if (val < smallNum) return (arr[idx] = replaceWord4);
    if (val > BigNum) return (arr[idx] = replaceWord5);
  });
  return arrNum;
};

///////////////////////////////////
//////////////////////////////////

//Step 1

const fizzBuzz1 = () => {
  const numberTo = rangeMinMax(1, 100);

  multipleOfBoth(numberTo, 3, 5, "FizzBuzz");
  multipleOfNumber(numberTo, 3, "Fizz");
  multipleOfNumber(numberTo, 5, "Buzz");
  return numberTo;
};

//console.log(fizzBuzz1());

///////////////////////////////////
//////////////////////////////////

//Step 2

const fizzBuzz2 = (min, max) => {
  const numberTo = rangeMinMax(min, max);
  multipleOfBoth(numberTo, 3, 5, "FizzBuzz");
  multipleOfNumber(numberTo, 3, "Fizz");
  multipleOfNumber(numberTo, 5, "Buzz");
  return numberTo;
};

//console.log(fizzBuzz2(15, 30));

///////////////////////////////////
//////////////////////////////////

//Step 3

const fizzBuzz3 = function (min, max) {
  const numberTo = rangeMinMax(min, max);
  multipleOfBoth(numberTo, 3, 5, "FizzBuzz");
  multipleOfNumber(numberTo, 3, "Fizz");
  multipleOfNumber(numberTo, 5, "Buzz");
  multipleOfBoth(numberTo, 7, 11, "FooBoo");
  multipleOfNumber(numberTo, 7, "Foo");
  multipleOfNumber(numberTo, 11, "Boo");

  return numberTo;
};

//console.log(fizzBuzz3(1, 77));

///////////////////////////////////
//////////////////////////////////

// Step4

const fizzBuzz4 = function (min, max) {
  const numberTo = rangeMinMax(min, max);
  multipleOfBoth(numberTo, 3, 5, "FizzBuzz");
  multipleOfNumber(numberTo, 3, "Fizz");
  multipleOfNumber(numberTo, 5, "Buzz");
  multipleOfBoth(numberTo, 7, 11, "FooBoo");
  multipleOfNumber(numberTo, 7, "Foo");
  multipleOfNumber(numberTo, 11, "Boo");
  smallAndBigNum(numberTo, 16, 95, "Small", "Big");

  return numberTo;
};

//console.log(fizzBuzz4(1, 100));
///////////////////////////////////
//////////////////////////////////

// Step5

const fizzBuzz5 = function (min, max, value = true) {
  const numberTo = rangeMinMax(min, max);
  multipleOfBoth(numberTo, 3, 5, "FizzBuzz");
  multipleOfNumber(numberTo, 3, `${value ? "Buzz" : "Fizz"}`);
  multipleOfNumber(numberTo, 5, `${value ? "Fizz" : "Buzz"}`);
  multipleOfBoth(numberTo, 7, 11, "FooBoo");
  multipleOfNumber(numberTo, 7, "Foo");
  multipleOfNumber(numberTo, 11, "Boo");
  smallAndBigNum(numberTo, 16, 95, "Small", "Big");

  return numberTo;
};

//console.log(fizzBuzz5(1, 30, false));
///////////////////////////////////
//////////////////////////////////

// Step6

const fizzBuzz6 = function (min, max) {
  const numberTo = rangeMinMax(min, max);

  multipleOfBoth(numberTo, 3, 5, "FTW");
  multipleOfOne(numberTo, 3, 5, "GG");
  multipleOfBoth(numberTo, 7, 11, "FooBoo");
  multipleOfNumber(numberTo, 7, "Foo");
  multipleOfNumber(numberTo, 11, "Boo");
  smallAndBigNum(numberTo, 16, 95, "Small", "Big");

  return numberTo;
};

//console.log(fizzBuzz6(1, 20));

///////////////////////////////////
//////////////////////////////////

//ALL STEPS
const functions = {
  step1: fizzBuzz1,
  step2: fizzBuzz2,
  step3: fizzBuzz3,
  step4: fizzBuzz4,
  step5: fizzBuzz5,
  step6: fizzBuzz6,
};

module.exports = functions;
