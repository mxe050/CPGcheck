#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), "..");

const errors = [];
const instructionsPath = path.join(root, "instructions", "00_CUSTOM_GPT_INSTRUCTIONS.md");
const regressionDir = path.join(root, "tests", "regression_cases");

const instructions = fs.readFileSync(instructionsPath, "utf8");
const instructionChars = [...instructions].length;
if (instructionChars > 8000) {
  errors.push(`Instructions exceed 8000 characters: ${instructionChars}`);
}

const caseSpecificPatterns = [
  [/\bJCS\b/i, "specific society/guideline abbreviation"],
  [/\bbreast\b/i, "specific disease/domain name"],
  [/\b[a-z]+_?20\d{2}\b/i, "specific guideline-year style identifier"],
  [/\bCQ\s*[0-9０-９]+/i, "specific CQ number"],
  [/\bquestion\s*[0-9０-９]+/i, "specific question number"],
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

for (const filePath of walk(regressionDir)) {
  const relative = path.relative(root, filePath);
  const text = fs.readFileSync(filePath, "utf8");
  for (const [pattern, label] of caseSpecificPatterns) {
    if (pattern.test(relative) || pattern.test(text)) {
      errors.push(`${relative}: regression case appears to contain ${label}`);
    }
  }
}

if (errors.length > 0) {
  console.log("Repository policy check failed:");
  for (const error of errors) {
    console.log(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Repository policy check passed: Instructions ${instructionChars}/8000 chars; regression cases are generalized.`);
