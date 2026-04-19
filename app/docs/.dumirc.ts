import { defineConfig } from "dumi";
import path from "node:path";

const DEFAULT_REPOSITORY_NAME = "lynote-ui";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? DEFAULT_REPOSITORY_NAME;
const base = process.env.GITHUB_ACTIONS ? `/${repositoryName}/` : "/";

export default defineConfig({
  outputPath: "docs-dist",
  base,
  publicPath: base,
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
