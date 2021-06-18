"use strict";

let input = "Mississipi";
let charMap = {};
input = input.toLowerCase();

for (let i = 0; i < input.length; i++) {
  charMap[input[i]] = charMap[input[i]] ? charMap[input[i]] + 1 : 1;
}

let max = Math.max(...Object.values(charMap));
let charArr = Object.keys(charMap);
let resultArr = [];

for (let i = 0; i < charArr.length; i++) {
  if (charMap[charArr[i]] === max) {
    resultArr.push(charArr[i]);
  }
}

if (resultArr.length === 1) {
  console.log(resultArr[0].toUpperCase);
} else {
  console.log("?");
}
