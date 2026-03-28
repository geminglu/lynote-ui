/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./packages/core/theme/index.css",
  tailwindFunctions: ["clsx", "cva"],
};
