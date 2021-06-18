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
  let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  for (let i = 0; i < croatia.length; i++) {
    if (inputStr.indexOf(croatia[i]) !== -1) {
      inputStr = inputStr.split(croatia[i]).join(".");
    }
  }
  console.log(inputStr.length);
  process.exit();
});
