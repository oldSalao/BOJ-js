const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [numLen, target] = [...input[0].split(" ").map((e) => Number(e))];
  let numArr = [];
  let answer = [];
  let str = "";
  let cnt = 1;
  let idx = 0;

  for (let i = 0; i < numLen; i++) {
    numArr.push(i + 1);
  }

  while (numArr.length > 0) {
    if (idx >= numArr.length) {
      idx = 0;
    }
    if (cnt === target) {
      answer.push(numArr[idx]);
      numArr.splice(idx, 1);
      idx--;
      cnt = 0;
    }
    cnt++;
    idx++;
  }

  str = answer.join(", ");

  console.log("<" + str + ">");

  process.exit();
});
