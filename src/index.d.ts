declare module "@devcomfort/text-transcoder" {
  /** `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수 */
  function reEncode(str: string, start: string, end: string): string;
}
