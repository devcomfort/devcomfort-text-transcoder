// Import the Zod library for runtime type checking and validation
import { z } from "zod";
// Import the list of supported encodings from the encodings module
import encodings from "../encodings/encoding";

/**
 * ### Text Encoder Schema
 *
 * This creates a type that only allows encodings from the `encodings` list.
 * It provides type safety and runtime validation for encoding values.
 */
const Encoding = z.enum(encodings);

export { Encoding, Encoding as default };
