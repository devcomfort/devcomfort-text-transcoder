const { reEncode } = require("./build/index.js");

test("Windows-1252 to EUC-KR Transcode Test", () => {
  expect(reEncode("ÀÚ", "windows-1252", "euc-kr")).toEqual("자");
});
