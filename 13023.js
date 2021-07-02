const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, m] = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  let adjArr = [];
  let check = [];
  let flag = 0;

  for (let i = 0; i < m; i++) {
    let [a, b] = input[i].split(" ").map((e) => Number(e));
    if (!adjArr[a]) {
      adjArr[a] = [];
    }
    if (!adjArr[b]) {
      adjArr[b] = [];
    }
    adjArr[a].push(b);
    adjArr[b].push(a);
  }

  let dfs = (L, cnt) => {
    if (flag) {
      return;
    }
    check[L] = 1;
    if (cnt === 4) {
      flag = 1;
      return;
    }
    for (let j = 0; j < adjArr[L].length; j++) {
      let next = adjArr[L][j];
      if (!check[next]) {
        dfs(next, cnt + 1);
      }
    }
    check[L] = 0;
  };

  for (let i = 0; i < n; i++) {
    dfs(i, 0);
  }

  console.log(flag);
  ``;
  process.exit();
});
