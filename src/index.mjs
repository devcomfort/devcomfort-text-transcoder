import { encode, decode } from "iconv-lite";

const reEncode = (str, start, end) => decode(encode(str, start), end);

export { reEncode };
