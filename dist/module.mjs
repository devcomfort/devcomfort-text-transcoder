import {encode as $bdjGp$encode, decode as $bdjGp$decode} from "iconv-lite";

var $747425b437e121da$exports = {};

var $747425b437e121da$require$encode = $bdjGp$encode;
var $747425b437e121da$require$decode = $bdjGp$decode;
/**
 * `start` 형식 인코딩에서 `end` 형식 인코딩으로 변환하는 함수
 * @param {string} str
 * @param {string} start
 * @param {string} end
 * @returns
 */ const $747425b437e121da$var$reEncode = (str, start, end)=>$747425b437e121da$require$decode($747425b437e121da$require$encode(str, start), end);
$747425b437e121da$exports = {
    reEncode: $747425b437e121da$var$reEncode
};


export {$747425b437e121da$exports as default};
//# sourceMappingURL=module.mjs.map
