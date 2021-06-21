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
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(input[i].split(" "));
  }
  arr
    .sort((a, b) => {
      return a[0] - b[0];
    })
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return 0;
    });

  console.log(
    arr
      .map((e) => {
        return e[0] + " " + e[1];
      })
      .join("\n")
  );
  process.exit();
});
