import { TextDecoder, TextEncoder } from "text-decoding";

/**
 *
 * @param {string} str 문자열
 * @param {string} start 시작 인코딩
 * @param {string} end 끝 인코딩
 * @returns {string}
 */
const reEncode = (str, start, end) =>
  new TextDecoder(end).decode(
    new TextEncoder(start, {
      NONSTANDARD_allowLegacyEncoding: true,
    }).encode(str)
  );

export { reEncode };
