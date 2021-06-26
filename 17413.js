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
  let stack = [];
  let par = [];
  let tag = "";
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== " " &&
      str[i] !== "<" &&
      str[i] !== ">" &&
      par.length === 0
    ) {
      stack.push(str[i]);
    } else if (str[i] === " " && par.length === 0) {
      while (stack.length > 0) {
        answer += stack.pop();
      }
      answer += " ";
    } else if (str[i] === "<") {
      par.push("<");
      tag += "<";
      while (stack.length > 0) {
        answer += stack.pop();
      }
    } else if (str[i] === ">") {
      par.pop();
      tag += ">";
      answer += tag;
      tag = "";
    } else if (par.length !== 0) {
      tag += str[i];
    }
  }
  while (stack.length > 0) {
    answer += stack.pop();
  }
  console.log(answer);
  process.exit();
});
