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
  let nums = input.map((e) => Number(e));
  let max;
  let maxArr = [];
  let answer = [];
  let map = new Map();

  for (let i = 0; i < len; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  nums.sort((a, b) => {
    return a - b;
  });

  let sum = nums.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);

  answer.push(Math.round(sum / len));

  answer.push(nums[Math.floor(len / 2)]);

  max = Math.max(...map.values());

  maxArr = [...map.entries()].reduce((acc, cur) => {
    if (cur[1] === max) {
      acc.push(cur);
    }
    return acc;
  }, []);

  if (maxArr.length > 1) {
    maxArr.sort((a, b) => {
      return a[0] - b[0];
    });
    answer.push(maxArr[1][0]);
  } else {
    answer.push(maxArr[0][0]);
  }

  answer.push(nums[nums.length - 1] - nums[0]);

  console.log(answer.join("\n"));
  process.exit();
});
