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
  let cache = [];
  let zeroCnt = 0;
  let oneCnt = 0;
  let fibo = function (num) {
    if (num === 0) {
      zeroCnt++;
      return;
    } else if (num === 1) {
      oneCnt++;
      return;
    } else {
      if (cache[num]) {
        zeroCnt += cache[num][0];
        oneCnt += cache[num][1];
        return;
      } else {
        fibo(num - 1);
        fibo(num - 2);
        cache[num] = [zeroCnt, oneCnt];
        return;
      }
    }
  };
  for (let i = 0; i < len; i++) {
    if (nums[i] < 2) {
      fibo(nums[i]);
      answer.push(zeroCnt + " " + oneCnt);
    } else {
      fibo(nums[i]);
      answer.push(zeroCnt + " " + oneCnt);
    }
    zeroCnt = 0;
    oneCnt = 0;
  }
  console.log(answer.join("\n"));
  process.exit();
});
