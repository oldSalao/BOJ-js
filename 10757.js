const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [a, b] = input[0].split(" ").map((e) => BigInt(e));
  console.log((a + b).toString());
  process.exit();
});
