import { defineConfig } from "dumi";
import path from "node:path";

export default defineConfig({
  outputPath: "docs-dist",
  themeConfig: {
    name: "lynote-ui",
  },
  resolve: {
    atomDirs: [{ type: "component", dir: "../../packages/ui/src" }],
  },
  alias: {
    "lynote-ui": path.join(__dirname, "../../packages/ui/src"),
    "lynote-ui/style": path.join(__dirname, "../../packages/ui/dist/style.css"),
    "lynote-ui/style.css": path.join(
      __dirname,
      "../../packages/ui/dist/style.css",
    ),
  },
});
