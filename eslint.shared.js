import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const SHARED_IGNORES = [
  "dist",
  "**/dist",
  "docs-dist",
  "**/docs-dist",
  "**/node_modules",
  ".dumi/tmp",
  "**/.dumi/tmp",
  ".dumi/tmp-test",
  "**/.dumi/tmp-test",
  ".dumi/tmp-production",
  "**/.dumi/tmp-production",
  "**/.DS_Store",
  "**/.history",
  "**/.husky",
  "**/.vscode",
  "**/storybook",
];

const SHARED_GLOBALS = {
  ...globals.browser,
  ...globals.node,
};

export function createWorkspaceTsConfig(options = {}) {
  const {
    files = ["**/*.{ts,tsx}"],
    ignores = [],
    rules = {},
    enableReactRefresh = true,
    tsconfigRootDir,
  } = options;

  return defineConfig(
    {
      ignores: [...SHARED_IGNORES, ...ignores],
    },
    {
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        eslintConfigPrettier,
      ],
      files,
      languageOptions: {
        ecmaVersion: "latest",
        globals: SHARED_GLOBALS,
        parserOptions: {
          tsconfigRootDir,
        },
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefreshPlugin,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        "react-hooks/set-state-in-effect": "off",
        ...(enableReactRefresh
          ? {
              "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
              ],
            }
          : {}),
        ...rules,
      },
    },
  );
}
