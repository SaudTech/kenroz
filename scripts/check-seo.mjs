import fs from "node:fs";
import path from "node:path";

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
      files.push(full);
    }
  }
  return files;
}

const pages = walk("src/app");
const missing = [];
for (const p of pages) {
  const src = fs.readFileSync(p, "utf8");
  const hasGenerate = /export\s+async\s+function\s+generateMetadata|export\s+const\s+metadata[^=]*=/.test(src);
  if (hasGenerate) continue;
  const dir = path.dirname(p);
  if (fs.existsSync(path.join(dir, "metadata.ts")) || fs.existsSync(path.join(dir, "metadata.tsx"))) continue;
  missing.push(p);
}
if (missing.length) {
  console.log("Pages missing metadata (add metadata or generateMetadata):\n" + missing.join("\n"));
  process.exitCode = 1;
} else {
  console.log("All pages have metadata defined ✅");
}
