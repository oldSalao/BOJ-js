const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let str = input.shift();
  let len = Number(input.shift());
  let command = input;
  let lStack = [...str];
  let rStack = [];

  for (let i = 0; i < len; i++) {
    if (command[i] === "L") {
      if (lStack.length !== 0) {
        rStack.push(lStack.pop());
      }
    } else if (command[i] === "D") {
      if (rStack.length !== 0) {
        lStack.push(rStack.pop());
      }
    } else if (command[i] === "B") {
      lStack.pop();
    } else if (command[i].startsWith("P")) {
      let char = command[i].split(" ")[1];
      lStack.push(char);
    }
  }

  console.log(lStack.join("") + rStack.reverse().join(""));

  process.exit();
});
