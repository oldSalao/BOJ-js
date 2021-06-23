const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [k, n] = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  let lans = input.map((e) => Number(e));
  let start = 1;
  let end = Math.max(...input.map((e) => Number(e)));
  let len = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = lans.reduce((acc, cur) => {
      acc += Math.floor(cur / mid);
      return acc;
    }, 0);
    if (sum >= n) {
      if (mid > len) {
        len = mid;
      }
      start = mid + 1;
    } else if (sum < n) {
      end = mid - 1;
    }
  }
  console.log(len);
  process.exit();
});
