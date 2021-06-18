const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let inputStr = input[0];
  let nums = {};
  let cnt = 0;
  let num = 2;
  let alpha = "";
  let answer = 0;

  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0) + 1; i++) {
    alpha += String.fromCharCode(i);
    cnt++;
    if (num !== 9 && num !== 7) {
      if (cnt === 3) {
        nums[num] = alpha.split("");
        cnt = 0;
        alpha = "";
        num++;
      }
    } else {
      if (cnt === 4) {
        nums[num] = alpha.split("");
        cnt = 0;
        alpha = "";
        num++;
      }
    }
  }
  for (let char of inputStr) {
    for (let num in nums) {
      if (nums[num].indexOf(char) !== -1) {
        answer += Number(num) + 1;
        break;
      }
    }
  }
  console.log(answer);
  process.exit();
});
