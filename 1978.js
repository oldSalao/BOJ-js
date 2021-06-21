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
  let numArr = input[0].split(" ").map((e) => Number(e));
  let flag = true;
  let cnt = 0;
  for (let i = 0; i < len; i++) {
    if (numArr[i] !== 1) {
      for (let j = 2; j <= Math.sqrt(numArr[i]); j++) {
        if (numArr[i] % j === 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        cnt++;
      } else {
        flag = true;
      }
    }
  }
  console.log(cnt);
  process.exit();
});
