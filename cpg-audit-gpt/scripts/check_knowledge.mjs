#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), "..");
const knowledgeDir = path.join(root, "knowledge");
const manifestPath = path.join(root, "knowledge_manifest.json");

const prohibitedPatterns = [
  [
    /very low certainty.*(automatically|by itself).*(lower|downgrade|penal)/i,
    "Very low certainty must not lower trust by itself.",
  ],
  [
    /conditional recommendation.*(automatically|by itself).*(lower|downgrade|penal)/i,
    "Conditional recommendations must not lower trust by themselves.",
  ],
  [
    /external (appendix|supplement).*(automatically|by itself).*(lower|downgrade|penal)/i,
    "External appendices or supplements must not lower trust by themselves.",
  ],
  [
    /Core GRADE.*is an official product of the GRADE Working Group/i,
    "Core GRADE should not be described as an official GRADE Working Group product.",
  ],
];

const requiredGlobalIdeas = [
  ["claim status", "classify claim status before criticizing method elements"],
  ["very low certainty", "do not penalize very low certainty by itself"],
  ["strong recommendation", "strong recommendation with low certainty needs exceptional rationale"],
  ["COI", "COI disclosure is not the same as active management"],
  ["appendix", "traceable external appendices can satisfy transparency"],
];

function normalizeTitle(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function check() {
  const errors = [];
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")).knowledge_files;
  const expectedFiles = manifest.map((item) => item.file);
  const actualFiles = fs.readdirSync(knowledgeDir).filter((name) => name.endsWith(".md")).sort();

  if (JSON.stringify(actualFiles) !== JSON.stringify(expectedFiles)) {
    errors.push(
      `Knowledge file set/order mismatch.\n  expected: ${JSON.stringify(expectedFiles)}\n  actual:   ${JSON.stringify(actualFiles)}`,
    );
  }

  const numbers = manifest.map((item) => item.number);
  const expectedNumbers = Array.from({ length: 12 }, (_, index) => String(index + 1).padStart(2, "0"));
  if (JSON.stringify(numbers) !== JSON.stringify(expectedNumbers)) {
    errors.push(`Manifest numbers must be exactly 01-12, got ${JSON.stringify(numbers)}`);
  }

  let combinedText = "";
  for (const item of manifest) {
    const filePath = path.join(knowledgeDir, item.file);
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const text = fs.readFileSync(filePath, "utf8");
    combinedText += `\n${text}`;

    if (!text.trim()) {
      errors.push(`${item.file} is empty`);
      continue;
    }

    const firstHeading = text.split(/\r?\n/).find((line) => line.trim())?.trim() ?? "";
    const expectedPrefix = `# ${item.number} `;
    if (!firstHeading.startsWith(expectedPrefix)) {
      errors.push(`${item.file} first heading should start with '${expectedPrefix}'`);
    }

    if (!normalizeTitle(firstHeading).includes(normalizeTitle(item.title))) {
      errors.push(`${item.file} heading does not contain manifest title '${item.title}'`);
    }

    for (const [pattern, message] of prohibitedPatterns) {
      if (pattern.test(text)) {
        errors.push(`${item.file}: ${message}`);
      }
    }
  }

  const combinedLower = combinedText.toLowerCase();
  for (const [needle, message] of requiredGlobalIdeas) {
    if (!combinedLower.includes(needle.toLowerCase())) {
      errors.push(`Missing global idea: ${message}`);
    }
  }

  return errors;
}

const errors = check();
if (errors.length > 0) {
  console.log("Knowledge check failed:");
  for (const error of errors) {
    console.log(`- ${error}`);
  }
  process.exit(1);
}

console.log("Knowledge check passed: 12 files, manifest, headings, and core consistency look OK.");
