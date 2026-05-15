#!/usr/bin/env python3
"""Build a zip archive for the active GPT Builder package."""

from __future__ import annotations

import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parent
OUT = ROOT.parent / "cpg-audit-gpt.zip"


def active_files() -> list[tuple[Path, str]]:
    files = [
        (ROOT / "instructions" / "00_CUSTOM_GPT_INSTRUCTIONS.md", "00_CUSTOM_GPT_INSTRUCTIONS.md"),
        (ROOT / "CHANGELOG.md", "CHANGELOG.md"),
    ]
    files.extend((path, f"knowledge/{path.name}") for path in sorted((ROOT / "knowledge").glob("*.md")))
    return files


def main() -> None:
    with zipfile.ZipFile(OUT, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for path, arcname in active_files():
            archive.write(path, arcname)
    print(f"Built {OUT}")


if __name__ == "__main__":
    main()
