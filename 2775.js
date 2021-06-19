const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let caseLen = Number(input.shift());
  for (let i = 0; i < caseLen; i++) {
    let row = Number(input.shift());
    let col = Number(input.shift());
    let aptArr = [];

    for (let j = 0; j < row + 1; j++) {
      aptArr.push([]);
      for (let k = 0; k < col; k++) {
        if (j === 0) {
          aptArr[j].push(k + 1);
        } else {
          if (k === 0) {
            aptArr[j].push(1);
          } else {
            aptArr[j].push(aptArr[j - 1][k] + aptArr[j][k - 1]);
          }
        }
      }
    }
    console.log(aptArr[row][col - 1]);
  }
  process.exit();
});
