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
  let str = input.shift();
  let r = 31;
  let m = 1234567891;
  let sum = 0;
  let temp = 1;

  for (let i = 0; i < len; i++) {
    let code = str.charCodeAt(i) - "a".charCodeAt(0) + 1;
    sum += (code * temp) % m;
    temp *= r;
    temp = temp % m;
  }

  console.log(sum % m);
  process.exit();
});
