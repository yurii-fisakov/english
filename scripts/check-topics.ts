import { spheres, topics, type SphereId } from "../src/data/topics.ts";
import { topicTitleRu } from "../src/data/ui-ru.ts";

const expected: Record<SphereId, number> = {
  personal: 12,
  public: 23,
  education: 2,
};

function sentenceCount(text: string): number {
  return text
    .split(/[.!?]+/)
    .map((part) => part.trim())
    .filter(Boolean).length;
}

const errors: string[] = [];

if (topics.length !== 37) {
  errors.push(`expected 37 topics, found ${topics.length}`);
}

const ids = new Set<string>();
for (const sphere of spheres) {
  const count = topics.filter((topic) => topic.sphere === sphere.id).length;
  if (count !== expected[sphere.id]) {
    errors.push(`${sphere.id}: expected ${expected[sphere.id]}, found ${count}`);
  }
}

for (const topic of topics) {
  if (ids.has(topic.id)) errors.push(`duplicate id ${topic.id}`);
  ids.add(topic.id);
  if (!topicTitleRu[topic.id]) errors.push(`${topic.id} has no Russian gloss`);
  if (!topic.titleUk.endsWith(".")) {
    errors.push(`${topic.id} title does not end with a period`);
  }
  for (const [label, text] of [
    ["en", topic.answerEn],
    ["uk", topic.answerUk],
  ] as const) {
    const count = sentenceCount(text);
    if (count !== 2) {
      errors.push(`${topic.id} ${label} has ${count} sentences`);
    }
    if (text.includes("\u2014") || text.includes("\u2013")) {
      errors.push(`${topic.id} ${label} contains a dash`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`ok: ${topics.length} topics, two sentences each`);
