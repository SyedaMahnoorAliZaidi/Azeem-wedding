import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the large static invitation as-is
    assetsInlineLimit: 0,
  },
});
