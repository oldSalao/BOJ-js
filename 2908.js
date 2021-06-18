const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let inputNum = input[0].split(" ");
  let resultNum = [];
  let max = 0;
  for (let i = 0; i < inputNum.length; i++) {
    resultNum[i] = "";
    for (let j = inputNum[i].length - 1; j >= 0; j--) {
      resultNum[i] += inputNum[i][j];
    }
  }
  max = Math.max(...resultNum);
  console.log(max);
  process.exit();
});
