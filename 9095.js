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
  let nums = input.map((e) => Number(e));
  let max = Math.max(...nums);
  let cache = [];
  let answer = [];
  cache[1] = 1;
  cache[2] = 2;
  cache[3] = 4;
  for (let i = 4; i < max + 1; i++) {
    cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3];
  }
  for (let i = 0; i < len; i++) {
    answer.push(cache[nums[i]]);
  }

  console.log(answer.join("\n"));
  process.exit();
});
