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
  let answer = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      answer.pop();
    } else {
      answer.push(nums[i]);
    }
  }
  console.log(
    answer.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0)
  );
  process.exit();
});
