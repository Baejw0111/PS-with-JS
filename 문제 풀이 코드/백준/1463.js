const input = require("fs").readFileSync(0, "utf-8").toString().trim();

const n = +input;
let dp = new Array(n + 1).fill(0);
dp[1] = 0;

for (let i = 2; i <= n; ++i) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  if (i % 3 === 0) dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
}

console.log(dp[n]);
