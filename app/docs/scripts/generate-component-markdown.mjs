import { glob } from "glob";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.resolve(SCRIPT_DIR, "..");
const REPO_ROOT = path.resolve(DOCS_DIR, "..", "..");
const COMPONENTS_DIR = path.join(REPO_ROOT, "packages", "ui", "src");
const OUTPUT_DIR = path.join(DOCS_DIR, "docs-dist", "components");
const DOCS_BASE_URL = "https://geminglu.github.io/lynote-ui";

const CODE_TAG_RE = /<code\b([^>]*)>([\s\S]*?)<\/code>/g;

function extractFrontmatter(rawContent) {
  const match = rawContent.match(/^---\n([\s\S]*?)\n---/);

  return match?.[1] ?? "";
}

function extractFrontmatterValue(frontmatter, key) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = frontmatter.match(
    new RegExp(`^${escapedKey}:\\s*(.+)$`, "m"),
  );

  return match?.[1]?.trim() ?? "";
}

function extractComponentMetadata(rawContent, componentName) {
  const frontmatter = extractFrontmatter(rawContent);
  const title = extractFrontmatterValue(frontmatter, "title") || componentName;
  const group = extractFrontmatterValue(frontmatter, "  title") || "未分组";
  const groupOrder = Number(extractFrontmatterValue(frontmatter, "  order") || 999);

  return {
    componentName,
    title,
    group,
    groupOrder,
  };
}

function getAttribute(attributes, name) {
  const match = attributes.match(new RegExp(`${name}=["']([^"']+)["']`, "i"));

  return match?.[1] ?? "";
}

function buildCodeFence(source, language = "tsx") {
  return `\`\`\`${language}\n${source.replace(/\r\n/g, "\n").trimEnd()}\n\`\`\``;
}

async function replaceDemoCodeTags(content, readmePath) {
  const readmeDir = path.dirname(readmePath);
  const matches = Array.from(content.matchAll(CODE_TAG_RE));

  if (!matches.length) {
    return content;
  }

  let output = content;

  for (const match of matches) {
    const [fullMatch, attributes = "", rawTitle = ""] = match;
    const title = rawTitle.trim();
    const src = getAttribute(attributes, "src");
    const description = getAttribute(attributes, "description");

    if (!src) {
      console.warn(`[llms-docs] skipped code tag without src in ${readmePath}`);
      continue;
    }

    const demoPath = path.resolve(readmeDir, src);
    let demoSource = "";

    try {
      demoSource = await fs.readFile(demoPath, "utf8");
    } catch {
      console.warn(`[llms-docs] missing demo file: ${demoPath}`);
      continue;
    }

    const sections = [];

    if (title) {
      sections.push(`### ${title}`, "");
    }

    if (description) {
      sections.push(description, "");
    }

    sections.push(buildCodeFence(demoSource));

    output = output.replace(fullMatch, sections.join("\n"));
  }

  return output;
}

async function generateComponentMarkdown(readmePath) {
  const componentName = path.basename(path.dirname(readmePath));
  const rawContent = await fs.readFile(readmePath, "utf8");
  const metadata = extractComponentMetadata(rawContent, componentName);
  const transformedContent = await replaceDemoCodeTags(rawContent, readmePath);
  const outputPath = path.join(OUTPUT_DIR, `${componentName}.md`);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${transformedContent.trimEnd()}\n`, "utf8");

  console.log(
    `[llms-docs] generated components/${componentName}.md from ${path.relative(REPO_ROOT, readmePath)}`,
  );

  return metadata;
}

function buildIndexMarkdown(componentMetadatas) {
  const groups = new Map();

  for (const metadata of componentMetadatas) {
    const groupKey = metadata.group;

    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        name: metadata.group,
        order: metadata.groupOrder,
        items: [],
      });
    } else {
      groups.get(groupKey).order = Math.min(
        groups.get(groupKey).order,
        metadata.groupOrder,
      );
    }

    groups.get(groupKey).items.push(metadata);
  }

  const sections = [
    "# Components Markdown Index",
    "",
    `组件页面与 Markdown 路由保持一致，例如 \`/components/date-picker\` 对应 \`${DOCS_BASE_URL}/components/date-picker.md\`。`,
    "",
  ];

  const sortedGroups = Array.from(groups.values()).sort(
    (left, right) => left.order - right.order || left.name.localeCompare(right.name),
  );

  for (const group of sortedGroups) {
    sections.push(`## ${group.name}`, "");

    const sortedItems = group.items.sort((left, right) =>
      left.componentName.localeCompare(right.componentName),
    );

    for (const item of sortedItems) {
      sections.push(
        `- [${item.title}](${DOCS_BASE_URL}/components/${item.componentName}.md)`,
      );
    }

    sections.push("");
  }

  return `${sections.join("\n").trimEnd()}\n`;
}

async function generateComponentIndex(componentMetadatas) {
  const indexPath = path.join(OUTPUT_DIR, "index.md");
  const indexContent = buildIndexMarkdown(componentMetadatas);

  await fs.mkdir(path.dirname(indexPath), { recursive: true });
  await fs.writeFile(indexPath, indexContent, "utf8");

  console.log("[llms-docs] generated components/index.md");
}

async function main() {
  const readmePaths = await glob("*/README.md", {
    absolute: true,
    cwd: COMPONENTS_DIR,
  });

  const componentMetadatas = await Promise.all(readmePaths.map(generateComponentMarkdown));

  await generateComponentIndex(componentMetadatas);
}

main().catch((error) => {
  console.error("[llms-docs] failed to generate component markdown files");
  console.error(error);
  process.exit(1);
});
