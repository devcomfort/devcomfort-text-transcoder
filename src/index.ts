import { TextDecoder, TextEncoder } from "text-decoding";
import { TEncoding } from "./schema";

/**
 *
 * @param str 문자열
 * @param start 시작 인코딩
 * @param end 끝 인코딩
 * @returns {string}
 */
export function reEncode(
  str: string,
  start: TEncoding,
  end: TEncoding
): string {
  return new TextDecoder(end).decode(
    new TextEncoder(start, {
      NONSTANDARD_allowLegacyEncoding: true,
    }).encode(str)
  );
}

export default reEncode;
