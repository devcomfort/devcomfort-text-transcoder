import { TextDecoder, TextEncoder } from "text-decoding";
import { EncodingLabel } from 'text-decoding';

/**
 *
 * @param str 문자열
 * @param start 시작 인코딩
 * @param end 끝 인코딩
 * @returns {string}
 */
const reEncode = (str: string, start: EncodingLabel, end: EncodingLabel): string =>
  new TextDecoder(end).decode(
    new TextEncoder(start, {
      NONSTANDARD_allowLegacyEncoding: true,
    }).encode(str)
  );

export default { reEncode };
export { reEncode };