# CPG Audit GPT

This repository manages the knowledge files for a Custom GPT that audits
clinical practice guideline trustworthiness and traceability.

## Layout

- `00_CUSTOM_GPT_INSTRUCTIONS.txt`: top-level GPT instruction text.
- `knowledge/`: numbered knowledge files loaded in order from 01 to 13.
- `knowledge_manifest.json`: expected file list, titles, and roles.
- `scripts/check_knowledge.py`: consistency check for the knowledge set.
- `tests/`: regression scenarios and expected behavior.
- `changelog.md`: intentional rule and structure changes.

## Maintenance

After editing `knowledge/*.md`, run:

```bash
node scripts/check_knowledge.mjs
```

Then update `changelog.md` and, when behavior changes, add or revise files in
`tests/cases/` and `tests/expected/`.
