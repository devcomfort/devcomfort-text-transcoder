# text-transcoder

A wrapper from `text-decoding` to change text encoding.

## Features

- Capable of both `CommonJS` and `ESM`.
- (Not yet supported) `CDN` library supported.

## Install

```bash
# yarn
yarn add @devcomfort/text-transcoder
```

```bash
# npm
npm i @devcomfort/text-transcoder
```

## Usage

```javascript
/** CommonJS */
const reEncode = require("@devcomfort/text-transcoder/index.cjs");
const str = "A";
console.log(reEncode(str, "utf-8", "utf-8")); // A
```

```javascript
/** ESM */
import reEncode from "@devcomfort/text-transcoder";
const str = "A";
console.log(reEncode(str, "utf-8", "utf-8")); // A
```
