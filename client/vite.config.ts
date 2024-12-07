import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import { runtimeErrorOverlay } from "@vitejs/plugin-react";
import path from "path";
import { themePlugin } from "../plugins/theme";

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true, overlay: false }),
    runtimeErrorOverlay(),
    themePlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
