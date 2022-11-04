const { encode, decode } = require("iconv-lite");

/**
 * `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수
 * @param {string} str
 * @param {string} start
 * @param {string} end
 * @returns
 */
const reEncode = (str, start, end) => decode(encode(str, start), end);

module.exports = reEncode;
