import { defineConfig } from "rollup";

import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import progress from "rollup-plugin-progress";
import clear from "rollup-plugin-clear";
// import { visualizer } from "rollup-plugin-visualizer";

import sucrase from "@rollup/plugin-sucrase";
// https://github.com/ondras/rollup-plugin-graph?tab=readme-ov-file
// : 순환 참조 의존성 탐색에 도움을 줌

export default defineConfig([
  {
    input: "src/index.ts",
    treeshake: "recommended",
    output: [
      {
        dir: "dist/esm",
        format: "esm",
        manualChunks: {
          encoder: ["text-decoding"],
        },
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        manualChunks: {
          encoder: ["text-decoding"],
        },
      },
      {
        dir: "dist/umd",
        format: "umd",
        name: "textTranscoder",
      },
    ],
    plugins: [
      clear({
        // required, point out which directories should be clear.
        targets: ["./dist"],
        // optional, whether clear the directores when rollup recompile on --watch mode.
        watch: true, // default: false
      }),
      progress(),
      commonjs(),
      resolve({
        browser: true,
        extensions: [".js", ".ts"],
      }),
      sucrase({
        transforms: ["typescript"],
      }),
      terser({
        compress: true,
        sourceMap: true,
        module: true,
        mangle: true,
      }),
      // visualizer({
      //   emitFile: true,
      //   filename: "stats.html",
      // }),
    ],
  },
  {
    input: "src/index.ts",
    treeshake: "recommended",
    output: {
      dir: "./dist",
      format: "esm",
    },
    plugins: [dts()],
  },
]);
