const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let weight = Number(input.shift());
  let cnt = 0;

  while (true) {
    if (weight % 5 === 0) {
      console.log(weight / 5 + cnt);
      break;
    } else if (weight < 0) {
      console.log(-1);
      break;
    }
    weight -= 3;
    cnt++;
  }
  process.exit();
});
