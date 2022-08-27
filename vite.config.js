import { defineConfig } from "vite";
import autoImport from "./src/plugins/autoImport";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  plugins: [autoImport()],
});
