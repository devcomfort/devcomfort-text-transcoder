// const { encode, decode } = require("iconv-lite");

// /**
//  * `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수
//  * @param {string} str
//  * @param {string} start
//  * @param {string} end
//  * @returns
//  */
// const reEncode = (str, start, end) => decode(encode(str, start), end);

// module.exports = { reEncode };

const { TextDecoder, TextEncoder } = require("text-decoding");;

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

;


module.exports.reEncode = reEncode