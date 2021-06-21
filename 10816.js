const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let cardLen = Number(input.shift());
  let card = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  let numLen = Number(input.shift());
  let numArr = input
    .shift()
    .split(" ")
    .map((e) => Number(e));

  let map = new Map();
  let answer = [];

  for (let i = 0; i < cardLen; i++) {
    if (!map.get(card[i])) {
      map.set(card[i], 1);
    } else {
      map.set(card[i], map.get(card[i]) + 1);
    }
  }

  for (let i = 0; i < numLen; i++) {
    if (map.get(numArr[i])) {
      answer.push(map.get(numArr[i]));
    } else {
      answer.push(0);
    }
  }

  console.log(answer.join(" "));

  process.exit();
});
