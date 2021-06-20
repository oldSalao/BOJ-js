const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [day, night, height] = [...input[0].split(" ").map((e) => Number(e))];

  console.log(Math.ceil((height - night) / (day - night)));

  process.exit();
});
