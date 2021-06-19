const { executionAsyncResource } = require("async_hooks");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input.length; i++) {
    if (i !== input.length - 1) {
      let inputArr = input[i].split(" ").map((e) => Number(e));
      let bit = Math.max(...inputArr);
      inputArr = inputArr.filter((e) => {
        return e !== bit;
      });
      let hap = Math.sqrt(
        inputArr.reduce((acc, cur) => {
          acc += cur ** 2;
          return acc;
        }, 0)
      );
      if (hap === bit) {
        console.log("right");
      } else {
        console.log("wrong");
      }
    } else {
      break;
    }
  }
  process.exit();
});
