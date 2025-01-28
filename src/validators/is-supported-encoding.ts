import { Encoding } from "../schemas";
import type { TEncoding } from "../types";

/**
 * Checks if the given string is a supported encoding
 *
 * This function uses Zod's safeParse method to validate
 * if the input string matches any of the supported encodings
 * defined in the Encoding schema.
 *
 * @param text - The string to check
 * @returns true if the string is a supported encoding, false otherwise
 *
 * @example
 * isSupportedEncoding("utf-8") // returns true
 * isSupportedEncoding("invalid-encoding") // returns false
 */
function isSupportedEncoding(text: string): text is TEncoding {
	return Encoding.safeParse(text).success;
}

export { isSupportedEncoding, isSupportedEncoding as default };
