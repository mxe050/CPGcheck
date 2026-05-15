# CPG Audit GPT

This repository manages the knowledge files for a Custom GPT that audits
clinical practice guideline trustworthiness and traceability.

## Layout

- `AGENTS.md`: repository instructions for Codex work in this project.
- `CODEX_WORKFLOW_FOR_CPG_AUDIT_GPT.md`: user workflow for ChatGPT, Codex, Git, and GPT Builder.
- `instructions/00_CUSTOM_GPT_INSTRUCTIONS.md`: top-level GPT instruction text.
- `knowledge/`: numbered knowledge files loaded in order from 01 to 13.
- `knowledge_manifest.json`: expected file list, titles, and roles.
- `scripts/check_knowledge.py`: consistency check for the knowledge set.
- `tests/regression_cases/`: regression scenarios and expected behavior.
- `releases/v0.3/`: frozen v0.3 release package.
- `archive/old_versions/`: superseded files retained for reference.
- `CHANGELOG.md`: intentional rule and structure changes.

## Maintenance

After editing `knowledge/*.md`, run:

```bash
node scripts/check_knowledge.mjs
```

Then update `CHANGELOG.md` and, when behavior changes, add or revise files in
`tests/regression_cases/`.

Codex should follow `AGENTS.md` before editing this repository. GPT Builder is
still updated manually by pasting `instructions/00_CUSTOM_GPT_INSTRUCTIONS.md`
and uploading active `knowledge/*.md`.
