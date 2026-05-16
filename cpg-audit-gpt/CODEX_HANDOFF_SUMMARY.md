# Codex Handoff Summary for CPG Audit GPT

Last updated: 2026-05-16

This file preserves the current operating context so a new chat can continue the
same ChatGPT -> Codex -> GPT Builder workflow without rereading the whole prior
conversation.

## Current Project

- Repository/workspace: `F:\マイドライブ\2016年works\AI\作成アプリ\CPGcheck`
- Main project folder: `cpg-audit-gpt/`
- GitHub remote: `https://github.com/mxe050/CPGcheck`
- Last substantive content commit before this handoff: `a7dd27c`
- Routine release zip: not used unless the user explicitly requests it.

## Working Workflow

The successful workflow is:

1. The user runs the Custom GPT in GPT Builder or ChatGPT.
2. The user analyzes the GPT output in chat and extracts failure modes.
3. The user gives Codex a generalized correction prompt.
4. Codex edits repository files, adds regression cases, checks consistency, commits, and pushes to GitHub.
5. The user manually updates GPT Builder by pasting Instructions and uploading active Knowledge files.

Codex must not claim to edit GPT Builder directly.

## Active GPT Builder Structure

GPT Builder currently uses:

- Instructions field:
  - `cpg-audit-gpt/instructions/00_CUSTOM_GPT_INSTRUCTIONS.md`

- Knowledge field:
  - exactly 12 active files from `cpg-audit-gpt/knowledge/`

Active Knowledge files:

1. `01_methodological_core.md`
2. `02_red_flag_dictionary.md`
3. `03_output_templates.md`
4. `04_operational_workflow.md`
5. `05_benchmarking_and_evaluation.md`
6. `06_source_manifest.md`
7. `07_claim_gated_audit_rule.md`
8. `08_regression_tests_and_acceptance_criteria.md`
9. `09_japanese_guideline_slicing_rules.md`
10. `10_page_based_cluster_assembly_rules.md`
11. `11_project_reorientation_rules.md`
12. `12_whole_guideline_triage_output_control.md`

Important:

- The active Knowledge count must remain 12.
- Old `13_deep_audit_rating_and_phase_control.md` is not active.
- Deep audit, rating, phase control, and Final CPG conclusion logic are integrated into `knowledge/12_whole_guideline_triage_output_control.md`.
- Do not restore old 13 as active Knowledge.
- `CHANGELOG.md` is repository history only; do not upload it as Knowledge.
- `tests/regression_cases/` is repository-only regression material; do not upload it as Knowledge.
- The user normally takes updated Knowledge files directly from:
  `F:\マイドライブ\2016年works\AI\作成アプリ\CPGcheck\cpg-audit-gpt\knowledge`

## Standing Rules for Every Codex Task

For every requested fix:

1. Generalize the failure mode before editing.
2. Do not put specific guideline names, disease names, society names, CQ numbers, or recommendation numbers into reusable Knowledge.
3. Individual examples must become synthetic generic regression cases only.
4. Keep Instructions under 8000 characters.
5. Preserve active Knowledge 01-12.
6. Put deep audit/rating/final-output rules in Knowledge 12.
7. Put output format changes in Knowledge 03.
8. Put red flag definitions in Knowledge 02.
9. Put test expectations in Knowledge 08 and concrete synthetic cases under `tests/regression_cases/`.
10. Update `CHANGELOG.md`.
11. Do not build a zip unless explicitly asked.
12. Commit and push when the task is complete, unless the user asks not to.

Required checks before final response:

```powershell
node cpg-audit-gpt\scripts\check_knowledge.mjs
node cpg-audit-gpt\scripts\check_repository_policy.mjs
node -e "const fs=require('fs'); const s=fs.readFileSync('cpg-audit-gpt/instructions/00_CUSTOM_GPT_INSTRUCTIONS.md','utf8'); console.log([...s].length);"
Get-ChildItem -Force cpg-audit-gpt\knowledge | Measure-Object | Select-Object Count
rg -n "13_deep|knowledge/13|Knowledge 13|old 13.*active|JCS|breast|CQ[0-9]|CQ[０-９]|question\s*[0-9０-９]" cpg-audit-gpt\knowledge cpg-audit-gpt\instructions cpg-audit-gpt\tests\regression_cases
```

`rg` exit code 1 with no output is acceptable and means no matches.

## Current Methodological Rule Set

The project now contains rules for:

- active 12-Knowledge GPT Builder structure;
- separation of Instructions and Knowledge;
- generalizing real failure examples before adding reusable rules;
- whole-guideline triage before sentinel deep audit;
- final CPG trustworthiness conclusion, not isolated CQ-only commentary;
- claim-gated audit for GRADE/Minds/SR/EtD claims;
- formal SR claim vs substantive SR validity;
- Japanese-language/domestic CPG high-sensitivity SR conceptual failure scan;
- SR conceptual failure as a mandatory Final alert, including possible SR conceptual failure;
- Final SR conceptual failure alerts must be explanatory, not one-line labels;
- review-level evidence confused with primary-study evidence;
- evidence unit confusion and duplicate evidence risk;
- study-design counting not substituted for SR appraisal;
- existing SR/NMA or meta-analysis tables not automatically treated as valid SR/GRADE evidence;
- non-significance not treated as equivalence or non-inferiority;
- observational meta-analysis mandatory scan and confounding/adjustment status;
- unadjusted observational pooling as a major red flag when used for comparative causal effects;
- subgroup overinterpretation and missing interaction checks;
- critical outcome relative importance and decision-driving outcome checks;
- same-direction/highest-certainty shortcut for overall certainty;
- red flags separated into inspection triggers, mandatory audit alerts, and rating-lowering defects;
- sentinel-to-whole rating materiality assessment;
- A-eligible high-traceability GRADE/EtD profile;
- A with mandatory audit alerts, A-minus, and B+ labels;
- staged COI/governance assessment;
- no meta-analysis / non-quantitative SR opaque certainty assessment alert;
- qualitative SR and lack of meta-analysis not downgraded by themselves when rationale and certainty basis are transparent.

## Recent Major Commits

- `8dcb0de` - Require domestic SR conceptual failure scan
- `a429e0b` - Calibrate A ratings and explanatory alerts
- `a7dd27c` - Add no-pooling certainty audit rules

## GPT Builder Update Reporting Rule

Every final Codex response after edits must include:

- `終了しました。`
- latest commit hash;
- whether Instructions changed;
- exact Knowledge files to re-upload;
- Knowledge files to remove, if any;
- statement that `CHANGELOG.md` and `tests/regression_cases/` are repository-only;
- statement that zip was not created unless requested;
- verification results, especially:
  - active Knowledge count 12;
  - old 13 not restored;
  - Instructions character count;
  - checks passed;
  - working tree clean.

If the user asks a planning question without edits, still state which files would
change and what GPT Builder upload action would be needed.

## Suggested New Chat Starter

The user can start a new chat with:

```text
このリポジトリは F:\マイドライブ\2016年works\AI\作成アプリ\CPGcheck です。
cpg-audit-gpt/AGENTS.md と cpg-audit-gpt/CODEX_HANDOFF_SUMMARY.md を読んで、
診療ガイドライン方法論監査GPTのInstructions/Knowledge改善作業を続けてください。
active Knowledgeは12ファイル構成、旧13はactiveではありません。
```

