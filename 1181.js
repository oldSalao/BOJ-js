const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();
  let charSet = input.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = cur.length;
    }
    return acc;
  }, {});
  let charArr = [...Object.keys(charSet)];
  let len = charArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (charArr[i].length > charArr[j].length) {
        temp = charArr[i];
        charArr[i] = charArr[j];
        charArr[j] = temp;
      }
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (charArr[i].length === charArr[j].length) {
        for (let k = 0; k < charArr[i].length; k++) {
          if (charArr[i].charCodeAt(k) > charArr[j].charCodeAt(k)) {
            temp = charArr[i];
            charArr[i] = charArr[j];
            charArr[j] = temp;
            break;
          } else if (charArr[i].charCodeAt(k) < charArr[j].charCodeAt(k)) {
            break;
          }
        }
      }
    }
  }
  for (let temp of charArr) {
    console.log(temp);
  }
  process.exit();
});
