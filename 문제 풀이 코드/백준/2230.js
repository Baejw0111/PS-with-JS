const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);
const arr = input.map((v) => +v).sort((a, b) => a - b);
let ans = Infinity;

const twoPointer = () => {
  let [s, e] = [0, 0];
  while (e < n) {
    if (arr[e] - arr[s] >= m) {
      ans = Math.min(ans, arr[e] - arr[s]);
      ++s;
    } else {
      ++e;
    }
  }
};

twoPointer();

console.log(ans);
