const { encode, decode } = require("iconv-lite");

const reEncode = (str, start, end) => decode(encode(str, start), end);

module.exports = reEncode;
