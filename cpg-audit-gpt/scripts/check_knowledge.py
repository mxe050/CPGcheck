#!/usr/bin/env python3
"""Check ordering, naming, headings, and core consistency of knowledge files."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
KNOWLEDGE = ROOT / "knowledge"
MANIFEST = ROOT / "knowledge_manifest.json"

PROHIBITED_PATTERNS = [
    (
        re.compile(r"(?i)very low certainty.*(automatically|by itself).*(lower|downgrade|penal)"),
        "Very low certainty must not lower trust by itself.",
    ),
    (
        re.compile(r"(?i)conditional recommendation.*(automatically|by itself).*(lower|downgrade|penal)"),
        "Conditional recommendations must not lower trust by themselves.",
    ),
    (
        re.compile(r"(?i)external (appendix|supplement).*(automatically|by itself).*(lower|downgrade|penal)"),
        "External appendices or supplements must not lower trust by themselves.",
    ),
    (
        re.compile(r"(?i)Core GRADE.*is an official product of the GRADE Working Group"),
        "Core GRADE should not be described as an official GRADE Working Group product.",
    ),
]

REQUIRED_GLOBAL_IDEAS = [
    ("claim status", "classify claim status before criticizing method elements"),
    ("very low certainty", "do not penalize very low certainty by itself"),
    ("strong recommendation", "strong recommendation with low certainty needs exceptional rationale"),
    ("COI", "COI disclosure is not the same as active management"),
    ("appendix", "traceable external appendices can satisfy transparency"),
]


def load_manifest() -> list[dict[str, str]]:
    with MANIFEST.open(encoding="utf-8") as f:
        data = json.load(f)
    return data["knowledge_files"]


def normalize_title(value: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9]+", " ", value.lower())).strip()


def check() -> list[str]:
    errors: list[str] = []
    manifest = load_manifest()
    expected_files = [item["file"] for item in manifest]
    actual_files = sorted(p.name for p in KNOWLEDGE.glob("*.md"))

    if actual_files != expected_files:
        errors.append(
            "Knowledge file set/order mismatch.\n"
            f"  expected: {expected_files}\n"
            f"  actual:   {actual_files}"
        )

    numbers = [item["number"] for item in manifest]
    if numbers != [f"{i:02d}" for i in range(1, 13)]:
        errors.append(f"Manifest numbers must be exactly 01-12, got {numbers}")

    combined_text = ""
    for item in manifest:
        path = KNOWLEDGE / item["file"]
        if not path.exists():
            continue

        text = path.read_text(encoding="utf-8")
        combined_text += "\n" + text

        if not text.strip():
            errors.append(f"{item['file']} is empty")
            continue

        first_heading = next((line.strip() for line in text.splitlines() if line.strip()), "")
        expected_prefix = f"# {item['number']} "
        if not first_heading.startswith(expected_prefix):
            errors.append(f"{item['file']} first heading should start with '{expected_prefix}'")

        if normalize_title(item["title"]) not in normalize_title(first_heading):
            errors.append(f"{item['file']} heading does not contain manifest title '{item['title']}'")

        for pattern, message in PROHIBITED_PATTERNS:
            if pattern.search(text):
                errors.append(f"{item['file']}: {message}")

    combined_lower = combined_text.lower()
    for needle, message in REQUIRED_GLOBAL_IDEAS:
        if needle.lower() not in combined_lower:
            errors.append(f"Missing global idea: {message}")

    return errors


def main() -> int:
    errors = check()
    if errors:
        print("Knowledge check failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Knowledge check passed: 12 files, manifest, headings, and core consistency look OK.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
