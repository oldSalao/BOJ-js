const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let num = Number(input.shift());
  let cnt = 0;
  let sum = 0;
  let za = 1;
  let mo;
  while (sum < num) {
    cnt++;
    sum += cnt;
  }
  mo = cnt;
  for (let i = sum; i > num; i--) {
    mo--;
    za++;
  }
  if (cnt % 2 !== 1) {
    [mo, za] = [za, mo];
  }
  console.log(za + "/" + mo);
  process.exit();
});
