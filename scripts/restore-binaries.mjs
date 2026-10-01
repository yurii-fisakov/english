import { existsSync, readFileSync, writeFileSync } from "node:fs";

const pairs = [
  ["encoded/source-page.b64", "public/source-page.jpg"],
  ["encoded/favicon.b64", "src/app/favicon.ico"],
];

for (const [encoded, target] of pairs) {
  if (existsSync(target) || !existsSync(encoded)) continue;
  const data = readFileSync(encoded, "utf8").replace(/\s/g, "");
  writeFileSync(target, Buffer.from(data, "base64"));
}
