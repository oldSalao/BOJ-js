const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();
  let numArr = input.map((e) => Number(e));

  numArr.sort((a, b) => {
    return a - b;
  });

  console.log(numArr.join("\n"));

  process.exit();
});
