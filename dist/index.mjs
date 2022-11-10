import {encode as $5OpyM$encode, decode as $5OpyM$decode} from "iconv-lite";

var $cf838c15c8b009ba$exports = {};

var $cf838c15c8b009ba$require$encode = $5OpyM$encode;
var $cf838c15c8b009ba$require$decode = $5OpyM$decode;
/**
 * `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수
 * @param {string} str
 * @param {string} start
 * @param {string} end
 * @returns
 */ const $cf838c15c8b009ba$var$reEncode = (str, start, end)=>$cf838c15c8b009ba$require$decode($cf838c15c8b009ba$require$encode(str, start), end);
$cf838c15c8b009ba$exports = {
    reEncode: $cf838c15c8b009ba$var$reEncode
};


export {$cf838c15c8b009ba$exports as default};
//# sourceMappingURL=index.mjs.map
