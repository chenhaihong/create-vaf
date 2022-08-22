import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      { find: "@pages", replacement: resolve(__dirname, "./pages") },
      { find: "@components", replacement: resolve(__dirname, "./components") },
      { find: "@common", replacement: resolve(__dirname, "./common") },
    ],
  },
  build: {
    emptyOutDir: true,
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          Vaf: ["@erye/vaf"],
          VafStyle: ["element-plus/dist/index.css", "@erye/vaf/dist/index.css"],
        },
      },
    },
  },
});
