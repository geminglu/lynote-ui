import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const srcDir = path.resolve(rootDir, "src");
const packageJsonPath = path.resolve(rootDir, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8")) as {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

function resolveEntry(directoryName: string) {
  const tsEntry = path.resolve(srcDir, directoryName, "index.ts");
  if (fs.existsSync(tsEntry)) {
    return tsEntry;
  }

  const tsxEntry = path.resolve(srcDir, directoryName, "index.tsx");
  if (fs.existsSync(tsxEntry)) {
    return tsxEntry;
  }

  return null;
}

const componentEntries = Object.fromEntries(
  fs
    .readdirSync(srcDir, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name))
    .filter(
      (entry) => entry.isDirectory() && !["lib", "style"].includes(entry.name),
    )
    .map((entry) => [entry.name, resolveEntry(entry.name)] as const)
    .filter((entry): entry is [string, string] => Boolean(entry[1])),
);

const externalPackages = [
  ...new Set([
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ]),
];

function isExternal(id: string) {
  return externalPackages.some(
    (pkgName) => id === pkgName || id.startsWith(`${pkgName}/`),
  );
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: "src",
      exclude: ["src/**/demos/**", "src/**/*.md", "src/style.ts"],
      outDir: "dist",
      staticImport: true,
      tsconfigPath: path.resolve(rootDir, "tsconfig.json"),
    }),
  ],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    minify: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        index: path.resolve(srcDir, "index.ts"),
        style: path.resolve(srcDir, "style.ts"),
        ...componentEntries,
      },
      cssFileName: "style",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        const extension = format === "es" ? "mjs" : "js";
        return entryName === "index"
          ? `index.${extension}`
          : `${entryName}/index.${extension}`;
      },
    },
    rollupOptions: {
      external: isExternal,
    },
  },
});
