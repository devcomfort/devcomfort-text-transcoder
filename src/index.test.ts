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
    },
    {
      name: "euc-kr to utf-8",
      input: "가나다라마바사",
      start: "euc-kr",
      end: "utf-8",
      expectedOutput: "가나다라마바사",
    },
    {
      name: "utf-8 to utf-16le",
      input: "Hello, world!",
      start: "utf-8",
      end: "utf-16le",
      expectedOutput: "Hello, world!",
    },
    {
      name: "iso-2022-jp to utf-8",
      input: "こんにちは",
      start: "iso-2022-jp",
      end: "utf-8",
      expectedOutput: "こんにちは",
    },
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
