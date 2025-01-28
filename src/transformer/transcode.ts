import { TextDecoder, TextEncoder } from "text-decoding";
import type { TEncoding } from "../types";

/**
 * Transcodes a string from one encoding to another
 *
 * @param str - The string to transcode
 * @param start - The starting encoding of the input string
 * @param end - The desired ending encoding for the output string
 * @returns {string} The transcoded string
 *
 * @example
 * transcode("Hello", "UTF-8", "ASCII")
 *
 * @remarks
 * This function uses TextEncoder and TextDecoder from the text-decoding library.
 * It first encodes the input string using the start encoding, then decodes it
 * using the end encoding. The NONSTANDARD_allowLegacyEncoding option is used
 * to allow legacy encodings.
 */
function transcode(str: string, start: TEncoding, end: TEncoding): string {
	return new TextDecoder(end).decode(
		new TextEncoder(start, {
			NONSTANDARD_allowLegacyEncoding: true,
		}).encode(str),
	);
}

// Export the transcode function as both named and default export
export { transcode, transcode as default };
