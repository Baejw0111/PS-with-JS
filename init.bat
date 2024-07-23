@echo off
setlocal enabledelayedexpansion

call :ModifyIndexJs
call :ModifyIndexTestJs

echo All steps completed successfully.
goto :eof

:ModifyIndexJs
echo Modifying index.js...
(
echo // 백준 문제일 경우 제출 코드에 다음 코드 주석 해제
echo // const rawInput = require^("fs"^).readFileSync^(0, "utf-8"^).toString^(^);
echo.
echo function solution^(input^) {
echo   // 풀이 코드 작성
echo   let answer = 0;
echo   return answer;
echo }
echo.
echo // 제출 시 삭제 필수
echo export { solution };
echo.
echo // 백준 문제일 경우 제출 코드에 다음 코드 추가
echo /*
echo function main^(^) {
echo   const rawInput = ``; // 예제 입력 그대로 복사. 제출 시 삭제 필수
echo   const parsedInput = rawInput.trim^(^);
echo.
echo   let output = "";
echo   output += solution^(parsedInput^);
echo   console.log^(output.trim^(^)^);
echo }
echo.
echo main^(^);
echo.
echo // 제출 시 삭제 필수
echo export { main };
echo */
) > index.js
goto :eof

:ModifyIndexTestJs
echo Modifying index.test.js...
(
echo import { solution } from "./index.js";
echo. 
echo // expoect에 테스트할 함수를, toEqual에는 예상 결과값을 넣어준다.
echo. 
echo test^("solution", ^(^) =^> {
echo   expect^(solution^(^)^).toEqual^(0^);
echo }^);
echo.
echo // 백준 문제일 경우 출력을 담당하는 main 함수를 아래 코드로 테스트한다.
echo /*
echo import { main } from "./index.js";
echo.
echo test^("main", ^(^) =^> {
echo   const consoleSpy = jest.spyOn^(console, "log"^).mockImplementation^(^(^) =^> {}^);
echo   main^(^);
echo.  // toHaveBeenCalledWith에 예상 출력값을 넣어준다.
echo   expect^(consoleSpy^).toHaveBeenCalledWith^(``^)^;
echo   consoleSpy.mockRestore^(^);
echo }^);
echo */
) > index.test.js
goto :eof

