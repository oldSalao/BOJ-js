const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  const adjArr = [];
  const check = [];
  let cnt = 0;

  for (let i = 0; i < m; i++) {
    const [a, b] = input[i].split(" ").map((e) => Number(e));
    if (!adjArr[a]) {
      adjArr[a] = [];
    }
    if (!adjArr[b]) {
      adjArr[b] = [];
    }
    adjArr[a].push(b);
    adjArr[b].push(a);
  }

  const dfs = (x) => {
    check[x] = true;
    if (!adjArr[x]) {
      return;
    }
    for (let i = 0; i < adjArr[x].length; i++) {
      const next = adjArr[x][i];
      if (!check[next]) {
        dfs(next);
      }
    }
  };

  for (let i = 1; i < n + 1; i++) {
    if (!check[i]) {
      dfs(i);
      cnt++;
    }
  }
  console.log(cnt);
  process.exit();
});
