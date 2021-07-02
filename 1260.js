const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, m, v] = input
    .shift()
    .trim()
    .split(" ")
    .map((e) => Number(e));
  let adjArr = [];
  let que = [];
  let checkDfs = [];
  let checkBfs = [];
  let answerDfs = [];
  let answerBfs = [];

  for (let i = 0; i < m; i++) {
    let [a, b] = input[i]
      .trim()
      .split(" ")
      .map((e) => Number(e));
    if (!adjArr[a]) {
      adjArr[a] = [];
    }
    if (!adjArr[b]) {
      adjArr[b] = [];
    }
    adjArr[a].push(b);
    adjArr[b].push(a);
    adjArr[a].sort((a, b) => {
      return a - b;
    });
    adjArr[b].sort((a, b) => {
      return a - b;
    });
  }

  let dfs = (x) => {
    checkDfs[x] = true;
    answerDfs.push(x);
    if (!adjArr[x]) {
      return;
    } else {
      for (let i = 0; i < adjArr[x].length; i++) {
        let next = adjArr[x][i];
        if (!checkDfs[next]) {
          dfs(next);
        }
      }
    }
  };

  dfs(v);

  que.push(v);
  checkBfs[v] = true;
  answerBfs.push(v);

  while (que.length > 0) {
    let loc = que[0];
    que.splice(0, 1);
    if (!adjArr[loc]) {
      break;
    } else {
      for (let i = 0; i < adjArr[loc].length; i++) {
        let next = adjArr[loc][i];
        if (!checkBfs[next]) {
          que.push(next);
          checkBfs[next] = true;
          answerBfs.push(next);
        }
      }
    }
  }

  console.log(answerDfs.join(" "));
  console.log(answerBfs.join(" "));

  process.exit();
});
