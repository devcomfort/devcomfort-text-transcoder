import {encode as $gIDO3$encode, decode as $gIDO3$decode} from "iconv-lite";

var $82cbb5a2f3a1bcd0$exports = {};

var $82cbb5a2f3a1bcd0$require$encode = $gIDO3$encode;
var $82cbb5a2f3a1bcd0$require$decode = $gIDO3$decode;
/**
 * `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수
 * @param {string} str
 * @param {string} start
 * @param {string} end
 * @returns
 */ const $82cbb5a2f3a1bcd0$var$reEncode = (str, start, end)=>$82cbb5a2f3a1bcd0$require$decode($82cbb5a2f3a1bcd0$require$encode(str, start), end);
$82cbb5a2f3a1bcd0$exports = {
    reEncode: $82cbb5a2f3a1bcd0$var$reEncode
};


export {$82cbb5a2f3a1bcd0$exports as default};
