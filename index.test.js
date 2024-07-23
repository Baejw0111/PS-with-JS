import { solution } from "./index.js";
 
// expoect에 테스트할 함수를, toEqual에는 예상 결과값을 넣어준다.
 
test("solution", () => {
  expect(solution()).toEqual(0);
});

// 백준 문제일 경우 출력을 담당하는 main 함수를 아래 코드로 테스트한다.
/*
import { main } from "./index.js";

test("main", () => {
  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  main();
  // toHaveBeenCalledWith에 예상 출력값을 넣어준다.
  expect(consoleSpy).toHaveBeenCalledWith(``);
  consoleSpy.mockRestore();
});
*/
