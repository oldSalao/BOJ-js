const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let num = Number(input[0]);
  let cache = [];
  let tile = function (n) {
    if (n === 0) {
      return 1;
    } else if (n === 1) {
      return 1;
    }
    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = (tile(n - 1) + tile(n - 2)) % 10007;
      return cache[n];
    }
  };
  console.log(tile(num));
  process.exit();
});
