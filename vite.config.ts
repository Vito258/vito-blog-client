import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(".", "./src"),
    },
  },
  define: {
    "process.env.PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL || "/"),
  },
});
