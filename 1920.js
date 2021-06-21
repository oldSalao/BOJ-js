const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let len = Number(input.shift());
  let numArr = input
    .shift()
    .split(" ")
    .map((e) => Number(e))
    .sort((a, b) => {
      return a - b;
    });
  let targetLen = Number(input.shift());
  let targetArr = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  let answer = "";

  for (let i = 0; i < targetLen; i++) {
    let high = len;
    let low = 0;
    let mid;
    let flag;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (numArr[mid] === targetArr[i]) {
        flag = true;
        break;
      } else if (numArr[mid] < targetArr[i]) {
        low = mid + 1;
      } else if (numArr[mid] > targetArr[i]) {
        high = mid - 1;
      } else {
        flag = false;
        break;
      }
    }
    if (i < targetLen - 1) {
      flag ? (answer += "1\n") : (answer += "0\n");
    } else {
      flag ? (answer += "1") : (answer += "0");
    }
  }
  console.log(answer);
  process.exit();
});
