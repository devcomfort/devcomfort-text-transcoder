import { describe, it, expect } from "vitest";
import { transcode } from "./transformer/transcode";
import { TEncoding } from "./types";

/**
 * **Test Case Specs:**
 *
 * `[raw text, encoded text, start encoding, end encoding]`
 *
 * - `rawText` - The original text to encode/decode
 * - `encodedText` - The result text after conversion
 * - `startEncoding` - The initial encoding of the raw text
 * - `endEncoding` - The target encoding to convert to
 */
type Case = [string, string, TEncoding, TEncoding];

const testCases: Case[] = [["ÀÚ", "자", "windows-1252", "euc-kr"]];

describe("encode/decode test ", function () {
  testCases.forEach(
    /**
     *
     * @param testCase
     */
    function (testCase) {
      const [rawText, encodedText, startEncoding, endEncoding] = testCase;
      it(`${startEncoding} -> ${endEncoding}`, function () {
        const encoded = transcode(rawText, startEncoding, endEncoding);
        expect(encoded.localeCompare(encodedText) === 0).toBeTruthy();
      });
    }
  );
});
