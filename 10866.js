const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const deFunc = function (command, deque, answer) {
  switch (command[0]) {
    case "push_front":
      deque.unshift(Number(command[1]));
      break;
    case "push_back":
      deque.push(Number(command[1]));
      break;
    case "pop_front":
      if (deque.length > 0) {
        answer.push(deque.shift());
      } else {
        answer.push(-1);
      }
      break;
    case "pop_back":
      if (deque.length > 0) {
        answer.push(deque.pop());
      } else {
        answer.push(-1);
      }
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      if (deque.length === 0) {
        answer.push(1);
      } else {
        answer.push(0);
      }
      break;
    case "front":
      if (deque.length > 0) {
        answer.push(deque[0]);
      } else {
        answer.push(-1);
      }
      break;
    case "back":
      if (deque.length > 0) {
        answer.push(deque[deque.length - 1]);
      } else {
        answer.push(-1);
      }
      break;
  }
};

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let deque = [];
  let answer = [];
  let len = Number(input.shift());
  for (let i = 0; i < len; i++) {
    let command = input[i].split(" ");
    deFunc(command, deque, answer);
  }
  console.log(answer.join("\n"));
  process.exit();
});
