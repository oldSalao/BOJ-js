const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [yLen, xLen] = [...input[0].split(" ").map((e) => Number(e))];
  let board = [];
  let chess = ["WBWBWBWB", "BWBWBWBW"];
  let min = 65;
  let cnt = 0;

  for (let i = 0; i < yLen; i++) {
    board.push([]);
    for (let j = 0; j < xLen; j++) {
      board[i].push(input[i + 1][j]);
    }
  }

  for (let y = 0; y + 7 < board.length; y++) {
    for (let x = 0; x + 7 < board[y].length; x++) {
      for (let ch = 0; ch < chess.length; ch++) {
        for (let i = y; i < y + 8; i++) {
          for (let j = x; j < x + 8; j++) {
            if (board[i][j] !== chess[(i + ch) % 2][j - x]) {
              cnt++;
            }
          }
        }
        if (min > cnt) {
          min = cnt;
        }
        cnt = 0;
      }
    }
  }
  console.log(min);
  process.exit();
});
