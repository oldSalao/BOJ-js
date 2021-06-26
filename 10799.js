const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let str = input[0];
  let par = [];
  let answer = 0;
  let pre = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      par.push("(");
      answer += 1;
      pre = "(";
    } else if (str[i] === ")") {
      if (pre === "(") {
        par.pop();
        answer += par.length - 1;
      } else {
        par.pop();
      }
      pre = ")";
    }
  }
  console.log(answer);
  process.exit();
});
