const { type } = require("os");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let inputStr = input[0];
  inputStr = inputStr.trim();
  wordArr = inputStr.split(" ");
  let cnt = 0;

  for (let temp of wordArr) {
    if (temp) {
      cnt++;
    }
  }

  console.log(cnt);

  process.exit();
});
