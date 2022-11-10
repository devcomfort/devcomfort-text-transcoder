var $c5L0i$iconvlite = require("iconv-lite");


var $43d7963e56408b24$require$encode = $c5L0i$iconvlite.encode;
var $43d7963e56408b24$require$decode = $c5L0i$iconvlite.decode;
/**
 * `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수
 * @param {string} str
 * @param {string} start
 * @param {string} end
 * @returns
 */ const $43d7963e56408b24$var$reEncode = (str, start, end)=>$43d7963e56408b24$require$decode($43d7963e56408b24$require$encode(str, start), end);
module.exports = {
    reEncode: $43d7963e56408b24$var$reEncode
};


//# sourceMappingURL=main.cjs.map
