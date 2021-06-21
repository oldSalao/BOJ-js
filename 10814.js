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
  let map = new Map();
  for (let i = 0; i < len; i++) {
    let temp = input[i].split(" ");
    map.set(i, temp);
  }

  let mapArr = [...map.entries()].sort((a, b) => {
    return a[1][0] - b[1][0];
  });

  mapArr.sort((a, b) => {
    if (a[1][0] === b[1][0]) {
      return a[0] - b[0];
    }
  });
  console.log(mapArr.map((e) => e[1][0] + " " + e[1][1]).join("\n"));

  process.exit();
});
