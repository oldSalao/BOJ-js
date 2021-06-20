const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input.length - 1; i++) {
    let numArr = input[i].split("");
    let numArrRev = input[i].split("").reverse();
    if (numArrRev.join("") === numArr.join("")) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
  process.exit();
});
