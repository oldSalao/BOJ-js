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
  let stack = [];
  let answer = [];
  let cnt = 0;
  let num = 0;

  while (cnt < len) {
    if (num < nums[cnt]) {
      while (num < nums[cnt]) {
        stack.push(++num);
        answer.push("+");
      }
      stack.pop();
      answer.push("-");
      cnt++;
    } else if (num === nums[cnt]) {
      stack.pop();
      cnt++;
    } else {
      if (stack[stack.length - 1] !== nums[cnt]) {
        answer = [];
        answer.push("NO");
        break;
      } else {
        stack.pop();
        answer.push("-");
        cnt++;
      }
    }
  }

  console.log(answer.join("\n"));
  process.exit();
});
