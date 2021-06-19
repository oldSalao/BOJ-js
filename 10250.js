const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let caseLen = Number(input[0]);
  let answer = "";
  let cnt = 0;
  let wCnt = 0;
  for (let i = 1; i < caseLen + 1; i++) {
    let [h, w, n] = [...input[i].split(" ").map((e) => Number(e))];
    cnt = 0;
    wCnt = 0;
    for (let i = 0; i < n; i++) {
      if (i % h === 0) {
        cnt = 0;
        wCnt++;
      }
      cnt++;
    }
    if (wCnt / 10 < 1) {
      answer = cnt + "0" + wCnt;
    } else {
      answer = "" + cnt + wCnt;
    }
    console.log(answer);
  }
  process.exit();
});
