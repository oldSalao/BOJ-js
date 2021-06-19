const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  inputArr = input[0].split(" ").map((e) => Number(e));
  let result = inputArr.reduce((acc, cur) => {
    acc += cur ** 2;
    return acc;
  }, 0);
  console.log(result % 10);
  process.exit();
});
