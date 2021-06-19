const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  inputNum = input[0].split(" ").map((e) => Number(e));
  let len = inputNum.length;

  if (inputNum[0] === 1) {
    for (let i = 0; i < len; i++) {
      let num = inputNum[i];

      if (i < len - 1) {
        if (inputNum[i + 1] !== num + 1) {
          console.log("mixed");
          break;
        }
      } else {
        console.log("ascending");
      }
    }
  } else if (inputNum[0] === 8) {
    for (let i = 0; i < len; i++) {
      let num = inputNum[i];

      if (i < len - 1) {
        if (inputNum[i + 1] !== num - 1) {
          console.log("mixed");
          break;
        }
      } else {
        console.log("descending");
      }
    }
  } else {
    console.log("mixed");
  }

  process.exit();
});
