import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

function verifyChunks() {
  const manifest = "encoded/chunks/SHA256SUMS";
  if (!existsSync(manifest)) return;
  const mismatches = [];
  for (const line of readFileSync(manifest, "utf8").split("\n")) {
    if (!line.trim()) continue;
    const [expected, path] = line.split(/\s+/);
    if (!existsSync(path)) {
      mismatches.push(`missing ${path}`);
      continue;
    }
    const actual = createHash("sha256").update(readFileSync(path)).digest("hex");
    if (actual !== expected) mismatches.push(`checksum ${path}`);
  }
  if (mismatches.length > 0) {
    throw new Error(mismatches.join("\n"));
  }
}

verifyChunks();

function concatChunks(dir, target) {
  if (existsSync(target) || !existsSync(dir)) return;
  const parts = readdirSync(dir)
    .filter((name) => name.endsWith(".part"))
    .sort();
  if (parts.length === 0) return;
  const data = parts.map((name) => readFileSync(`${dir}/${name}`, "utf8")).join("");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, data);
}

concatChunks("encoded/chunks/package-lock", "package-lock.json");
concatChunks("encoded/chunks/source-page", "encoded/source-page.b64");
concatChunks("encoded/chunks/favicon", "encoded/favicon.b64");

const pairs = [
  ["encoded/source-page.b64", "public/source-page.jpg"],
  ["encoded/favicon.b64", "src/app/favicon.ico"],
];

for (const [encoded, target] of pairs) {
  if (existsSync(target) || !existsSync(encoded)) continue;
  const data = readFileSync(encoded, "utf8").replace(/\s/g, "");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, Buffer.from(data, "base64"));
}
