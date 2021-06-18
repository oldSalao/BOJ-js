const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let inputNum = Number(input[0]);
  let maximum = 1;
  let count = 1;

  while (maximum < inputNum) {
    maximum += count * 6;
    count++;
  }

  console.log(count);

  process.exit();
});
