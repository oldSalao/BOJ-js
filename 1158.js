const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, k] = input[0].split(" ").map((e) => Number(e));
  let idx = 0;
  let answer = [];
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  while (arr.length > 0) {
    idx += k - 1;
    idx %= arr.length;
    answer.push(arr.splice(idx, 1)[0]);
  }

  console.log("<" + answer.join(", ") + ">");
  process.exit();
});
