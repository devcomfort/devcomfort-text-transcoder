const { encode, decode } = require("iconv-lite");

/**
 * `start` 형식 인코딩에서 `end` 형식 인코딩으로 인코딩을 변환하는 함수
 * @param {string} str 인코딩을 변환할 대상 문자
 * @param {string} start 출발 인코딩
 * @param {string} end 끝 인코딩
 */
const reEncode = (str, start, end) => decode(encode(str, start), end);

module.exports = { reEncode };
