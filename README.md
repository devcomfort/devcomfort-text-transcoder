# @devcomfort/text-transcoder

## Overview

`@devcomfort/text-transcoder` is a light and efficient text encoding conversion library for Node.js. It offers straightforward functions to convert text between various encodings, including UTF-8, EUC-KR, EUC-JP, and others.

The aim of this library is to provide a user-friendly API for managing text encodings in JavaScript applications. However, the test coverage is currently limited as this library was initially developed for personal use. We encourage contributions to enhance our test coverage! The existing test file can be found at `./src/index.test.ts`.

## Features

- Compatible with both `CommonJS(CJS)` and `ECMAScript(ESM)` imports
- Comes with TypeScript definitions for type safety.
- Testing conducted using Vitest (Addition of more test cases is welcomed!)
- (Coming soon) Support for `CDN`.

## Installation

```bash
npm i @devcomfort/text-transcoder
yarn add @devcomfort/text-transcoder
pnpm add @devcomfort/text-transcoder
```

## Usage

```typescript
/** CommonJS(CJS) */
const reEncode = require("@devcomfort/text-transcoder");
console.log(reEncode("ÀÚ", "windows-1252", "euc-kr")); // 자

/** ECMAScript(ESM) */
import reEncode from "@devcomfort/text-transcoder";
console.log(reEncode("자", "euc-kr", "windows-1252")); // ÀÚ
```
