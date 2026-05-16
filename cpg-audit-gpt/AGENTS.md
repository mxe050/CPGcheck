# AGENTS.md — CPG Methodology Audit GPT Repository Instructions

## Project purpose

This repository manages the Custom GPT project **診療ガイドライン方法論監査GPT**.
The goal is not to judge clinical correctness. The goal is to maintain and improve the GPT's ability to audit whether an entire clinical practice guideline (CPG) is methodologically trustworthy: whether evidence → judgment → recommendation is traceable, whether SR/SoF/EtD/COI processes function, and whether recommendation-level internal consistency is adequate.

For continuity across new chats, read `CODEX_HANDOFF_SUMMARY.md` after this file.
It records the current 12-file Knowledge structure, workflow, latest rule set,
and GPT Builder reporting expectations.

## Repository roles

Treat files by role. Do not mix them.

```text
cpg-audit-gpt/
  instructions/
    00_CUSTOM_GPT_INSTRUCTIONS.md       # pasted into GPT Builder Instructions
  knowledge/
    01_methodological_core.md           # uploaded as GPT Knowledge
    ...
    12_whole_guideline_triage_output_control.md
  tests/
    regression_cases/                   # preview/test cases; not uploaded as Knowledge
  releases/                             # packaged versions
  archive/                              # old versions; never use as active source
  CHANGELOG.md
```

- `instructions/` contains the text pasted into the Custom GPT Instructions field.
- `knowledge/` contains files uploaded to the Custom GPT Knowledge section.
- `tests/` contains regression cases and expected behavior; do not upload these as Knowledge unless explicitly requested.
- `archive/` contains obsolete material; do not restore old rules from archive unless explicitly instructed.

## Priority of Knowledge files

If Knowledge 01–12 exist, preserve this priority:

1. `knowledge/11_project_reorientation_rules.md`
2. `knowledge/12_whole_guideline_triage_output_control.md`
3. `knowledge/01`–`10` as auxiliary rules

Never weaken or bypass 11–12 when editing other files.

- 11 returns the project to whole-CPG trustworthiness rather than isolated CQ commentary.
- 12 controls whole-guideline triage, Web-distributed CPG handling, inventory, red flags, priority queue, sentinel deep audit, rating, and final CPG conclusion.

## What Codex should do

Codex should edit repository files only. It should not claim to directly update the Custom GPT in GPT Builder.

For every requested fix:

1. Identify the failure mode.
2. Decide whether the fix belongs in `instructions/`, `knowledge/11`, `knowledge/12`, or another Knowledge file.
3. Make the smallest coherent edit.
4. Preserve the existing 01–12 structure.
5. Check for conflicting or obsolete wording elsewhere.
6. Update `CHANGELOG.md`.
7. Add or update a regression test under `tests/regression_cases/` when appropriate.
8. Summarize changed files and rationale.
9. Always tell the user exactly what to update manually in GPT Builder.

Do not rewrite all Knowledge files unless explicitly asked.

## Instruction length constraint

`instructions/00_CUSTOM_GPT_INSTRUCTIONS.md` must stay under 8000 Japanese characters unless the user explicitly changes this constraint.

When adding material:

- Put high-level control rules in Instructions.
- Put detailed triage rules in Knowledge 12.
- Put detailed rating/deep-audit rules in Knowledge 12.
- Put claim-gating rules in Knowledge 07 unless already covered by 11–12.
- Put regression examples in Knowledge 08 or `tests/`, not in Instructions.

## Non-negotiable audit principles

Do not reintroduce old failure modes.

### 1. Do not confuse evidence certainty with CPG trustworthiness

`low certainty` or `very low certainty` is not itself a reason to lower the CPG methodology rating.

A CPG can be methodologically trustworthy even when evidence certainty is very low, if the uncertainty is correctly assessed, explained, and reflected in recommendation strength.

Forbidden reasons:

- “very low certainty, therefore not A”
- “conditional recommendation, therefore not C or below”
- “QOL or harms not meta-analysed, therefore lower rating”

Allowed reasons:

- low/very low certainty with strong recommendation and no EtD exception rationale
- certainty rating process not traceable
- downgrade decisions inconsistent with final certainty
- recommendation text contradicts SoF/SR/NMA/EtD

### 2. Do not require perfect reproducibility

A rating should not be lowered simply because search strategy, RoB details, downgrade rationale, NMA credibility, harms data, or COI logs are not fully reproduced inside the uploaded main text.

Use **practical verifiability**, not perfect reproducibility.

A rating can remain high if major judgments are traceable through any accessible combination of:

- main text
- appendix
- supplement
- separate SR/NMA article
- evidence profile
- public web page
- public protocol

Lower the rating only if important judgments remain practically unverifiable or internally inconsistent after considering accessible linked materials.

Forbidden wording:

- “A cannot be assigned because details are not fully reproducible in the uploaded material.”
- “A cannot be assigned because search/RoB/downgrade/NMA details are not fully recalculable.”

Preferred wording:

- “A is lowered only if major judgments remain practically unverifiable even after considering linked appendices, supplements, SR/NMA articles, or public web materials.”

### 3. Do not overvalue formal structure

The existence of PICO, SR, meta-analysis, SoF, EtD, recommendation tables, voting rate, or COI tables does not itself justify A or B.

Distinguish:

- material exists
- material is linked
- content is internally consistent
- calculation/downgrade reasoning is practically verifiable
- recommendation strength follows from evidence and EtD

Formal traceability is not enough. Practical traceability requires consistency among search strategy, included studies, analyses, RoB, downgrade factors, final certainty, effect estimates, explanation text, recommendation direction/strength, and COI handling.

### 4. Do not generalize a subset method to the whole CPG

If only some CQs use GRADE/SR/EtD, do not generalize that method to all recommendations.

For example, if only a small subset of questions uses SR/EtD but the larger
recommendation set uses another evidence system, classify as mixed or
heterogeneous and do not rate the entire CPG as A based on the subset.

### 5. Claim-gated audit

Do not criticize a guideline for lacking GRADE elements unless it explicitly claims GRADE, uses Minds/GRADE-derived methods, or uses clearly GRADE-like language.

Do not call a narrative evidence summary an unsupported SR unless an SR is explicitly claimed.

Classify first:

- GRADE claim status
- SR claim status
- evidence-system classifier

### 6. Non-GRADE systems are not automatically bad

COR/LOE-like and other non-GRADE evidence systems must not be collapsed into
GRADE terminology.

Class I + C-EO is not “strong GRADE recommendation + low certainty.”
Use the system's own language unless explicit GRADE mapping is provided.

### 7. Strong recommendations need strict gates

Strong recommendations are high-risk when based on low/very-low certainty, surrogate outcomes, major harms, high cost, invasive interventions, devices, drugs with industry sensitivity, or variable patient values.

A strong recommendation can be methodologically acceptable only if EtD provides a convincing rationale.

Voting or consensus rate does not substitute for EtD.

### 8. Web-distributed CPGs require cross-page audit

If a guideline is distributed across multiple URLs, do not evaluate from the top page alone.
Inventory and cross-check:

- top page
- methods
- COI
- CQ/recommendation pages
- rationale/explanation pages
- evidence summaries
- SR/meta-analysis/NMA pages
- search strategies
- voting/consensus records
- appendices/supplements

Do not confuse links existing with content being consistent.

### 9. Sentinel deep audit must check internal consistency

For the selected high-risk sentinel target, cross-check:

- CQ text
- formal recommendation table
- SoF/Evidence Profile
- SR/NMA/meta-analysis
- search strategy
- RoB/downgrade reasons
- explanation text
- EtD rationale
- COI/voting records

Look for contradictions between evidence summaries and explanation text, downgrade calculations and final certainty, effect estimates and absolute effects, or recommendation strength and EtD.

### 10. COI disclosure is not COI management

Do not treat COI disclosure alone as COI management.

However, do not automatically lower the rating because recommendation-specific COI logs are brief if:

- all relevant members report no relevant COI,
- no industry funding is apparent,
- COI management policy exists,
- no specific inappropriate participation is suspected.

Lower the rating when relevant COI/industry influence exists and restriction from discussion/voting/recommendation drafting is not traceable.

## Rating guardrails

### A can still be possible when:

- evidence certainty is low or very low,
- recommendations are conditional,
- no recommendation is made,
- QOL/harms/patient burden cannot be quantitatively pooled,
- acceptability/equity lack empirical data but are considered,
- details are in appendices/supplements/SR/NMA articles rather than main text,
- recommendation-specific COI logs are brief but no relevant COI is present.

### A should be lowered when:

- low/very-low certainty supports a strong recommendation without EtD exception rationale,
- SR/NMA is absent despite being claimed or required,
- search/RoB/certainty methods are not practically verifiable,
- harms/costs/patient burden are ignored,
- NMA ranking is used as recommendation basis without uncertainty/credibility assessment,
- recommendation text contradicts SoF/SR/NMA/meta-analysis/EtD,
- relevant COI or industry influence is present and management is not traceable.

### Avoid these rating rationales:

- “B because very low certainty.”
- “B because details are not in uploaded material.”
- “B because perfect recalculation is not possible.”
- “A because Minds/GRADE is claimed.”
- “A because SR/meta-analysis files exist.”
- “A because COI standards are strict.”

## When the user reports a new failure mode

Do not immediately rewrite everything. Follow this triage:

1. Is this a conceptual rule problem? → likely Instructions or Knowledge 11.
2. Is this whole-guideline/Web triage? → Knowledge 12.
3. Is this sentinel deep audit/rating/rubric? → Knowledge 12.
4. Is this claim-gating? → Knowledge 07, unless 11–12 already cover it.
5. Is this an output format problem? → Knowledge 03.
6. Is this a regression test need? → Knowledge 08 or `tests/`.

Then make the smallest edit.

## Generalize before adding rules

Rules that go into Instructions, Knowledge, or regression tests must be general
CPG-audit rules, not case notes about one named guideline, disease, society, or
CQ number.

When a failure is reported from a specific CPG, convert it before editing:

```text
Failure example:
In a specific CPG or CQ, the GPT produced output like X.

Generalized problem:
For any CPG, the GPT is mistaking condition X for condition Y.

Generalized correction rule:
Regardless of CPG name, disease name, society name, or CQ number, when condition
Z is present, treat it as Z.

Text for Instructions/Knowledge:
Write the rule as "For all clinical practice guidelines, ..." or an equivalent
general formulation.

Regression test:
Do not preserve the individual CPG name, disease name, society name, or CQ
number in the test title, file name, or case text.
```

If a real example is needed for internal reasoning, keep it in the chat only or
convert it into a synthetic generic scenario before committing it.

## Expected Codex output after each task

When Codex edits files, report:

```text
Changed files:
- ...

Reason:
- ...

Key rule added/changed:
- ...

Instructions character count:
- ...

Potential conflicts checked:
- ...

Regression test added or updated:
- ...

GPT Builder update instructions:
- Instructions field: changed / unchanged. If changed, paste
  instructions/00_CUSTOM_GPT_INSTRUCTIONS.md into the Instructions field.
- Knowledge files to re-upload: list only the active knowledge/*.md files that
  changed. If no Knowledge files changed, say "none".
- Knowledge files to remove: list obsolete uploaded files only when applicable.
- CHANGELOG.md: repository record only; do not upload it as Knowledge unless
  the user explicitly asks.
- Tests: repository-only regression cases; do not upload them as Knowledge.
- Release package: do not rebuild or provide a zip unless the user explicitly
  asks for a release/package. The user normally takes files directly from the
  local `knowledge/` folder.
```

When answering planning questions without editing files, still say which files
would be changed, whether Instructions would change, which Knowledge files would
need re-uploading, and what would happen to CHANGELOG.md.

## Things Codex must not do

- Do not add NotebookLM-specific material unless the user explicitly restarts that topic.
- Do not place Instructions inside `knowledge/`.
- Do not upload or edit GPT Builder directly.
- Do not restore old revised/intermediate files from archive.
- Do not make the user collect endless missing documents.
- Do not change the project from whole-CPG methodology audit into clinical correctness review.
- Do not collapse all ratings into A merely because the guideline looks formally well organized.
- Do not collapse all ratings into C merely because the evidence is uncertain.

## Manual GPT Builder reminder

Codex edits repository files. The user must still manually:

1. paste `instructions/00_CUSTOM_GPT_INSTRUCTIONS.md` into the Custom GPT Instructions field;
2. upload active `knowledge/*.md` files;
3. remove old conflicting Knowledge files;
4. run GPT Builder Preview regression tests.

By default, finish by saying "終了しました" and listing the exact Instructions
and Knowledge files to update. Do not create a zip for routine edits.
