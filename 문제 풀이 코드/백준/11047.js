const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let [n, k] = input[0].split(" ").map((v) => +v);
let coin = input.slice(1).map((v) => +v);
let ans = 0;

for (let i = n - 1; i >= 0; --i) {
  ans += Math.floor(k / coin[i]);
  k %= coin[i];
  if (k === 0) break;
}

console.log(ans);
