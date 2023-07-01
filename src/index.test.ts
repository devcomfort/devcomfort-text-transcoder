import test, { ExecutionContext } from "ava";
import { reEncode } from "./index.js";
import { EncodingLabel } from "text-decoding";

const encodingTestCases: {
  name: string
  input: string
  start: EncodingLabel
  end: EncodingLabel
  expectedOutput: string
}[] = [
    {
      name: "windows-1252 to euc-kr",
      input: "ÀÚ",
      start: "windows-1252",
      end: "euc-kr",
      expectedOutput: "자",
    }
  ];

const runEncodingTest = (
  t: ExecutionContext,
  testCase: (typeof encodingTestCases)[number]
) => {
  const result = reEncode(testCase.input, testCase.start, testCase.end);
  t.is(result, testCase.expectedOutput);
};

encodingTestCases.forEach((testCase) => {
  test(testCase.name, (t) => {
    t.plan(1);
    runEncodingTest(t, testCase);
  });
});
