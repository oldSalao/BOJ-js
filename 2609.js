const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [firstNum, secondNum] = [...input[0].split(" ").map((e) => Number(e))];
  let r;
  let temp = secondNum;

  while (r !== 0) {
    let _secondNum = secondNum;
    if (!r) {
      r = firstNum % secondNum;
    } else {
      secondNum = r;
      r = _secondNum % r;
    }
  }

  console.log(secondNum);
  console.log(Math.floor((firstNum * temp) / secondNum));

  process.exit();
});
