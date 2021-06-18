const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let inputCnt = Number(input[0]);
  let check = "";
  let isGroup;
  let cnt = 0;

  for (let i = 1; i < inputCnt + 1; i++) {
    isGroup = true;
    for (let j = 0; j < input[i].length; j++) {
      if (!(input[i][j] === input[i][j + 1])) {
        check = input[i].slice(j + 1);
        if (check.includes(input[i][j])) {
          isGroup = false;
          break;
        }
      }
    }
    if (isGroup) {
      cnt++;
    }
  }

  console.log(cnt);
  process.exit();
});
