const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let num = Number(input.shift());
  let endNum = 666;
  let count = 1;
  while (count !== num) {
    endNum++;
    if (String(endNum).includes("666")) count++;
  }
  console.log(endNum);
});
