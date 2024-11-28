import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  banner: {
    js: `"use client"`,
  },
  //   treeshake: true,
  //   splitting: true,
  minify: true,
  clean: true,
  entry: ["src/index.ts"],
  outDir: "build",
  sourcemap: true,
  dts: true,
  external: ["react", "react-native", "react-native-web"],
}));
