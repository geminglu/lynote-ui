import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createWorkspaceTsConfig } from "../../eslint.shared.js";

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(
  createWorkspaceTsConfig({
    tsconfigRootDir,
    files: [
      "src/**/*.{ts,tsx}",
      ".storybook/**/*.{ts,tsx}",
      "vite.config.ts",
      "vitest.shims.d.ts",
    ],
    rules: {
      "storybook/no-uninstalled-addons": [
        "error",
        { packageJsonLocation: path.resolve(tsconfigRootDir, "package.json") },
      ],
    },
    ignores: ["storybook-static"],
    enableReactRefresh: false,
  }),
  storybook.configs["flat/recommended"],
);
