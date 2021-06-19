const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [x, y, w, h] = input[0].split(" ").map((e) => Number(e));
  xLen = w - x;
  yLen = h - y;
  let numArr = [xLen, yLen, x, y];
  let answer = Math.min(...numArr);

  console.log(answer);
  process.exit();
});
