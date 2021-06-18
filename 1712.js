const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let inputArr = input[0].trim().split(" ");
  let fixedCost = Number(inputArr[0]);
  let prodCost = Number(inputArr[1]);
  let price = Number(inputArr[2]);

  if (prodCost >= price) {
    console.log(-1);
  } else {
    console.log(Math.floor(fixedCost / (price - prodCost)) + 1);
  }

  process.exit();
});
