import { TextDecoder, TextEncoder } from "text-decoding";
import { TEncoding } from "../types";

/**
 * Transcodes a string from one encoding to another
 * 한 인코딩에서 다른 인코딩으로 문자열을 변환합니다
 *
 * @param str - The string to transcode
 *              변환할 문자열
 * @param start - The starting encoding of the input string
 *                입력 문자열의 시작 인코딩
 * @param end - The desired ending encoding for the output string
 *              출력 문자열의 원하는 끝 인코딩
 * @returns {string} The transcoded string
 *                   변환된 문자열
 *
 * @example
 * transcode("Hello", "UTF-8", "ASCII")
 *
 * @remarks
 * This function uses TextEncoder and TextDecoder from the text-decoding library.
 * It first encodes the input string using the start encoding, then decodes it using the end encoding.
 * The NONSTANDARD_allowLegacyEncoding option is used to allow legacy encodings.
 *
 * 이 함수는 text-decoding 라이브러리의 TextEncoder와 TextDecoder를 사용합니다.
 * 먼저 시작 인코딩을 사용하여 입력 문자열을 인코딩한 다음, 끝 인코딩을 사용하여 디코딩합니다.
 * NONSTANDARD_allowLegacyEncoding 옵션은 레거시 인코딩을 허용하는 데 사용됩니다.
 */
function transcode(str: string, start: TEncoding, end: TEncoding): string {
  return new TextDecoder(end).decode(
    new TextEncoder(start, {
      NONSTANDARD_allowLegacyEncoding: true,
    }).encode(str)
  );
}

// Export the transcode function for use in other parts of the application
// Also export it as the default export for more flexible importing
// transcode 함수를 애플리케이션의 다른 부분에서 사용할 수 있도록 내보냅니다
// 더 유연한 가져오기를 위해 기본 내보내기로도 내보냅니다
export { transcode, transcode as default };
