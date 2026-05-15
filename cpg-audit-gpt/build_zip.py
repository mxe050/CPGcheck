#!/usr/bin/env python3
"""Build a zip archive for uploading the CPG Audit GPT knowledge package."""

from __future__ import annotations

import zipfile
from pathlib import Path


ROOT = Path(__file__).resolve().parent
OUT = ROOT.parent / "cpg-audit-gpt.zip"
INCLUDE_SUFFIXES = {".txt", ".md", ".json", ".py"}


def should_include(path: Path) -> bool:
    if path.name.startswith("."):
        return False
    if "__pycache__" in path.parts:
        return False
    return path.suffix in INCLUDE_SUFFIXES


def main() -> None:
    with zipfile.ZipFile(OUT, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        for path in sorted(ROOT.rglob("*")):
            if path.is_file() and should_include(path):
                archive.write(path, path.relative_to(ROOT.parent))
    print(f"Built {OUT}")


if __name__ == "__main__":
    main()
