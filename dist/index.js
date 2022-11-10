var $6uPpa$iconvlite = require("iconv-lite");


var $d3928351bb4a0237$require$encode = $6uPpa$iconvlite.encode;
var $d3928351bb4a0237$require$decode = $6uPpa$iconvlite.decode;
/**
 * `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수
 * @param {string} str
 * @param {string} start
 * @param {string} end
 * @returns
 */ const $d3928351bb4a0237$var$reEncode = (str, start, end)=>$d3928351bb4a0237$require$decode($d3928351bb4a0237$require$encode(str, start), end);
module.exports = {
    reEncode: $d3928351bb4a0237$var$reEncode
};


