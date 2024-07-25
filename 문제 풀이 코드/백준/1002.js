const rawInput = require("fs").readFileSync(0, "utf-8").toString();

function solution(input) {
  const [x1, y1, r1, x2, y2, r2] = input;

  const [rmax, rmin] = [Math.max(r1, r2), Math.min(r1, r2)];
  const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  if (rmax + rmin < d) return 0;
  if (rmax + rmin === d) return 1;
  if (rmax + rmin > d) {
    if (rmax - rmin < d) return 2;
    if (rmax - rmin === d) {
      if (rmax === rmin) return -1;
      return 1;
    }
    return 0;
  }
}

function main() {
  const parsedInput = rawInput.trim().split("\n");
  const inputs = [...parsedInput.slice(1)];

  inputs.map((input) => {
    console.log(solution(input.split(" ")));
  });
}

main();
