var $gXNCa$iconvlite = require("iconv-lite");


var $4fa36e821943b400$require$encode = $gXNCa$iconvlite.encode;
var $4fa36e821943b400$require$decode = $gXNCa$iconvlite.decode;
/**
 * `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수
 * @param {string} str
 * @param {string} start
 * @param {string} end
 * @returns
 */ const $4fa36e821943b400$var$reEncode = (str, start, end)=>$4fa36e821943b400$require$decode($4fa36e821943b400$require$encode(str, start), end);
module.exports = {
    reEncode: $4fa36e821943b400$var$reEncode
};


//# sourceMappingURL=index.js.map
