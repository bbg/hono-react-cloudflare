//
// BEGIN
//

import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    tsconfigPaths(),
    react({ include: "**/*.tsx" }),
  ],
  build: {
    assetsDir: "dist",
    manifest: true,
    minify: true,
    ssrManifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/entry-client.tsx"),
        globals: resolve(__dirname, "src/globals.css"),
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
        globals: {
          react: "React",
        },
      },
    },
  },
});

//
// END
//
