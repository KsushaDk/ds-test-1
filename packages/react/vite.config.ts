import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/main.ts"),
      name: "@ds-test/react",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "./sb-preview/runtime.js"],
    },
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
      "@components": `${resolve(__dirname, "./src/components/")}`,
      "@ds-test/styles": `${resolve(__dirname, "../styles/")}`,
    },
  },
});
