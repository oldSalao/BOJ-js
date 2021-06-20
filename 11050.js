const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, k] = [...input[0].split(" ").map((e) => Number(e))];

  if (k >= 0 && k <= n) {
    console.log(factorial(n) / (factorial(k) * factorial(n - k)));
  } else {
    console.log("0");
  }

  process.exit();
});
