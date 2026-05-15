# Regression Tests

Use this folder for prompts and expected behavior that protect the 01-12
knowledge files from drift.

Suggested convention:
- `regression_cases/*.md`: input scenario, expected classification, rating constraints, and failure modes.

After changing knowledge files, update the relevant expected file and run:

```bash
node scripts/check_knowledge.mjs
```
