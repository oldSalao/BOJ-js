const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let strArr = input;
  let open = ["(", "["];
  let close = [")", "]"];
  let par = [];
  let answer = [];
  let flag = true;

  for (let i = 0; i < strArr.length - 1; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (open.includes(strArr[i][j])) {
        par.push(strArr[i][j]);
      } else if (close.includes(strArr[i][j])) {
        if (par.pop() !== open[close.indexOf(strArr[i][j])]) {
          flag = false;
          par = [];
          break;
        }
      }
    }
    if (flag) {
      if (par.length === 0) {
        answer.push("yes");
      } else {
        answer.push("no");
        par = [];
      }
    } else {
      answer.push("no");
      flag = true;
    }
  }

  console.log(answer.join("\n"));

  process.exit();
});
