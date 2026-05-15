# Codex workflow for 診療ガイドライン方法論監査GPT

## Purpose

This document explains how the user should work with ChatGPT, Codex, Git, and GPT Builder when improving the Custom GPT.

## Recommended repository layout

```text
cpg-audit-gpt/
  AGENTS.md
  README.md
  CHANGELOG.md
  instructions/
    00_CUSTOM_GPT_INSTRUCTIONS.md
  knowledge/
    01_methodological_core.md
    02_red_flag_dictionary.md
    03_output_templates.md
    04_operational_workflow.md
    05_benchmarking_and_evaluation.md
    06_source_manifest.md
    07_claim_gated_audit_rule.md
    08_regression_tests_and_acceptance_criteria.md
    09_japanese_guideline_slicing_rules.md
    10_page_based_cluster_assembly_rules.md
    11_project_reorientation_rules.md
    12_whole_guideline_triage_output_control.md
    13_deep_audit_rating_and_phase_control.md
  tests/
    regression_cases/
  releases/
  archive/
```

## Role separation

| Place | Role |
|---|---|
| ChatGPT chat | Methodological reasoning, failure-mode analysis, and drafting repair specifications |
| Codex | Editing repository files, checking conflicts, updating changelog, maintaining tests |
| GPT Builder | Manual implementation: paste Instructions, upload Knowledge, run Preview tests |

## How to use this workflow

### Step 1: Detect a failure in GPT Builder Preview

Example:

```text
The GPT rated a formally well-organized but internally inconsistent GRADE/Minds-like CPG as A.
```

### Step 2: Ask ChatGPT for diagnosis and repair specification

Use this prompt:

```text
This output is a failure. Expected behavior is ...
Please identify whether the cause is in Instructions, Knowledge 11, 12, 13, or another Knowledge file. Then produce a Codex-ready repair specification.
```

### Step 3: Give the repair specification to Codex

Use this prompt:

```text
Please update this repository according to the following repair specification.

Constraints:
- Keep instructions/00_CUSTOM_GPT_INSTRUCTIONS.md under 8000 Japanese characters.
- Preserve the 01–13 Knowledge structure.
- 11, 12, 13 remain highest priority.
- Do not mix Instructions into knowledge/.
- Do not restore old archived rules.
- Update CHANGELOG.md.
- Add or update a regression case if appropriate.
- Show changed files and summarize conflicts checked.

Repair specification:
...
```

### Step 4: Review Codex diff

Check whether Codex:

- edited the intended file;
- accidentally weakened 11/12/13;
- reintroduced banned logic;
- exceeded the Instructions character limit;
- updated changelog;
- added a regression test when needed.

### Step 5: Manually update GPT Builder

- Paste `instructions/00_CUSTOM_GPT_INSTRUCTIONS.md` into the Instructions field.
- Upload active `knowledge/*.md` files.
- Remove old conflicting Knowledge files.
- Run Preview regression tests.

## Common failure modes and likely file to edit

| Failure mode | Likely repair target |
|---|---|
| Stops at initial triage | `knowledge/13_deep_audit_rating_and_phase_control.md` |
| Rates CPG A because it claims Minds/GRADE | `knowledge/12` and `knowledge/13` |
| Rates down because evidence is very low certainty | `instructions/` and `knowledge/13` |
| Requires perfect reproducibility | `knowledge/13` |
| Fails Web-distributed CPG cross-check | `knowledge/12` |
| Treats non-GRADE COR/LOE as GRADE | `knowledge/07` and `knowledge/11` |
| Confuses COI disclosure with COI management | `knowledge/11` and `knowledge/13` |
| Misses hidden recommendation in figure/algorithm | `knowledge/09`, `knowledge/10`, `knowledge/12` |
| Output format is confusing | `knowledge/03` |

## Changelog discipline

Every Codex edit should add an entry like:

```markdown
## YYYY-MM-DD vX.Y
- Problem: ...
- Files changed: ...
- Rule added/changed: ...
- Regression test: ...
```

## Release discipline

When a stable version is ready, package:

```text
releases/vX.Y/
  00_CUSTOM_GPT_INSTRUCTIONS.md
  knowledge/
  CHANGELOG.md
  cpg-audit-gpt-vX.Y.zip
```

