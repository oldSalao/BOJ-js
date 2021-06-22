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
  let loc = input
    .map((e) => e.split(" ").map((e) => Number(e)))
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    });
  console.log(loc.map((e) => e.join(" ")).join("\n"));
  process.exit();
});
