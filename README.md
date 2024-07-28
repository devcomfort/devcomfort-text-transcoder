# @devcomfort/text-transcoder

## Overview

A light-weight, efficient text encoding library for Node.js/Browser.
It offers short function supports various encoding, including `utf-8`, `euc-kr`, `euc-jp`, etc.

The aim of this library is to provide a user-friendly API for converting text encodings in JavaScript handy, and fastly. But, the test coverage is currently limited as this library was initially developed for personal use.

We are welcome contributions to enhance our test coverage/project!

## Features

- ESM and CJS supported.
- CDN supported.
- TypeScript supported (type-safe)
- Also tested with vitest. (not 100% covered yet)

## Installation

```bash
npm i @devcomfort/text-transcoder  # npm
pnpm add @devcomfort/text-transcoder  # pnpm
yarn add @devcomfort/text-transcoder  # yarn
```

## Usage

```typescript
/** CommonJS(CJS) */
const transcode = require("@devcomfort/text-transcoder");
console.log(transcode("ÀÚ", "windows-1252", "euc-kr")); // 자

/** ECMAScript(ESM) */
import { transcode } from "@devcomfort/text-transcoder";
// or
import transcode from "@devcomfort/text-transcoder";
console.log(transcode("자", "euc-kr", "windows-1252")); // ÀÚ
```

## CDN Usage

```html
<!-- default -->
<script src="https://cdn.jsdelivr.net/npm/@devcomfort/text-transcoder/dist/umd/index.js"></script>
<!-- with specific version -->
<script src="https://cdn.jsdelivr.net/npm/@devcomfort/text-transcoder@1/dist/umd/index.js"></script>
<script>
  console.log(textTranscoder.transcode("ÀÚ", "windows-1252", "euc-kr")); // 자
</script>
```
