import { z } from "zod";
import { Encoding } from "../schemas/encoding";

/**
 * ### Typoe of text encodings supported by the `text-decoding` library
 *
 * This constant array includes various character encodings used world-wide for different languages and systems.
 */
type TEncoding = z.infer<typeof Encoding>;

export type { TEncoding, TEncoding as default };
