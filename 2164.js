const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let len = Number(input.shift());
  let numArr = [];
  let cnt = 1;

  for (let i = 0; i < len; i++) {
    numArr.push(i + 1);
  }

  while (numArr.length > 1) {
    let nextCard = [];
    for (let i = 0; i < numArr.length; i++) {
      if (cnt % 2 === 0) {
        nextCard.push(numArr[i]);
      }
      cnt++;
    }
    numArr = nextCard;
  }

  console.log(numArr[0]);

  process.exit();
});
