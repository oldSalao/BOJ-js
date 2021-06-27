const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let len = Number(input[0]);
  let nums = input[1].split(" ").map((e) => Number(e));
  let stack = [];
  let answer = [];

  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      answer[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    answer[stack.pop()] = -1;
  }

  console.log(answer.join(" "));
  process.exit();
});
