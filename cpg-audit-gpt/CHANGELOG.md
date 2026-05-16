# Changelog

## 2026-05-16

- Hardened 【日本のCPG問題重点】 output so the guideline-specific 12-row
  inspection table, Final conclusion, post-Final short summary, full 12-item
  educational article, and annotated reference list are all required completion
  blocks.
- Added the exact 12 standard inspection rows and required table columns to the
  Mode 2 template, including location-specific guideline excerpts or faithful
  summaries and "ここにこう書いてあるので..." reasoning for applicable or suspected
  rows.
- Added regression coverage preventing Mode 2 from collapsing the 12 rows into
  generic bullets, omitting unconfirmed rows, stopping after Final, or treating
  the table as a rating score.
- Renamed GPT Builder-facing profile to "ガイドライン信頼性レビューGPT" and added
  a research/education-only description that excludes individual diagnosis,
  treatment selection, medical advice, visit timing, and clinical
  decision-making.
- Updated Instructions opening text and Conversation Starter labels toward
  document review and methodological trustworthiness while preserving all rating,
  SR conceptual failure, A/A-minus exclusion, red flag, and Final rating logic.
- Added a regression case requiring patient-specific medical advice requests to
  be redirected to guideline-document methodology review without changing later
  rating behavior.
- Added two-step Conversation Starter flow: mode-only messages confirm the
  selected mode and wait for PDF/URL, the next source uses the pending mode,
  source-only defaults to standard audit, and pending modes are not sticky after
  one completed audit.
- Updated GPT Builder Conversation Starters to beginner-friendly mode-selection
  prompts that ask for PDF or URL in the next message.
- Added regression cases for mode-only starts, next-message mode carryover,
  mode+URL same-message starts, standard fallback, mode override, non-sticky
  modes, and insufficient material after mode selection.
- Expanded Mode 2/4 Japanese CPG educational output so the 12-item explanation
  uses the full detailed article, table rows must connect guideline wording to
  candidate patterns, and references include methodological annotations.
- Added Conversation Starter mode routing for simple audit, Japanese CPG focus,
  standard audit, and detailed analytic report, with reporting-only mode
  behavior that preserves existing rating logic.
- Added Mode 2/4 evidence-excerpt expectations, a 12-item educational
  explanation block, and a methodological reference list for Japanese domestic
  CPG reporting.
- Added regression cases to ensure output modes do not change ratings and that
  no selected mode defaults to standard audit.
- Strengthened Japanese domestic inspection table placement so it must render as
  a Markdown table immediately before Final CPG trustworthiness conclusion and
  cannot be replaced by a post-Final prose SR conceptual failure scan.
- Added an inspection-only Japanese domestic CPG table immediately before the
  Final CPG trustworthiness conclusion to show formal SR/GRADE/Minds claims
  versus operational substance without changing rating calculations.
- Defined display conditions and exclusions for the Japanese domestic table,
  including international CPGs and translated-only materials.
- Added regression cases confirming the table is non-rating, domestic-only by
  default, does not break A-minus when evidence is otherwise traceable, and
  detects patterns without checklist scoring.
- Added CPG-level SR architecture rules so evidence collections masquerading as
  SR, heterogeneous evidence-unit parallel listing, and repeated evidence-unit
  hierarchy failure cannot be dismissed by a sparse sentinel CQ.
- Added an A/A-minus exclusion gate and rating ceiling for confirmed or repeated
  CPG-level SR conceptual failure, clarifying that "not automatic C" does not
  preserve A/A-minus.
- Added Final output fields for SR architecture and evidence-unit hierarchy
  judgment, including detection level, A/A-minus eligibility, rating ceiling,
  and rating implication.
- Required expanded rating labels such as `A with mandatory audit alerts`,
  `A-minus`, `B+`, and `B/C boundary` to be explained in Final CPG conclusions
  rather than used as bare labels, including their nearest ordinary rating
  family, remaining alerts, materiality, and upward/downward movement conditions.
- Added a regression case for expanded rating label explanations.
- Updated README maintenance references for the current `.mjs` checks and
  routine no-zip release workflow.
- Added `CODEX_HANDOFF_SUMMARY.md` and a root `AGENTS.md` pointer so future chats can resume the ChatGPT -> Codex -> GPT Builder workflow without relying on the prior conversation.
- Added mandatory audit alerts for Minds/GRADE certainty assessment without meta-analysis or quantitative synthesis transparency, including opaque inconsistency, imprecision, overall certainty, and EtD/recommendation linkage.
- Separated formal Minds/GRADE claims from substantive certainty basis when qualitative or non-quantitative SR is used.
- Clarified that absence of meta-analysis, qualitative SR, sparse studies, very low certainty, conditional/weak recommendations, and no recommendation are not defects by themselves when no-pooling rationale, study-level results, structured narrative synthesis, certainty judgments, and EtD reflection are traceable.
- Added regression cases for no-meta-analysis opaque inconsistency/imprecision judgments, transparent qualitative SR, formal claim without substantive certainty basis, high certainty without pooling rationale, and uncertainty reflected in weak recommendations.
- Made SR conceptual failure Final alerts explanatory: alerts must include what was detected, why it matters, connection to certainty/recommendation/EtD, and rating impact rather than a one-line label.
- Separated red flags into inspection triggers, mandatory audit alerts, and rating-lowering defects, with materiality assessment before whole-guideline downgrade.
- Added an A-eligible high-traceability GRADE/EtD gate so distributed evidence packages, isolated correction issues, low certainty, conditional recommendations, and residual governance uncertainty do not automatically force B-minus when the core PICO-SR/SoF-EtD-recommendation chain is traceable.
- Added A with mandatory audit alerts, A-minus / A-eligible with residual governance uncertainty, and B+ rating handling.
- Added sentinel-to-whole rating separation and staged COI/governance assessment, including residual governance uncertainty and commercial product COI strong alerts.
- Added regression cases for explanatory SR conceptual failure alerts, non-automatic red-flag downgrades, A-eligible high-traceability CPGs, materiality assessment, COI staging, isolated correction alerts, and blind acceptance guardrails.
- Strengthened SR conceptual failure handling for Japanese-language and domestically produced CPGs: Final conclusions must show an SR conceptual failure scan status even when rating is unchanged, and Japanese/domestic origin is not a rating defect by itself.
- Added review-level evidence confused with primary-study evidence, possible SR conceptual failure, and formal SR claim without substantive SR validity to the mandatory alert workflow.
- Added regression cases for Japanese/domestic mandatory SR conceptual failure scan, non-silent SR failure alerts, mixed review/primary evidence, and "B but not clean B" handling.
- Added mandatory Final alerts for SR conceptual failure and outcome-weighting/overall-certainty calibration concerns, including critical-outcome relative importance, decision-driving outcomes, same-direction/highest-certainty shortcuts, and values/preferences reduced to variability only.
- Added formal-vs-substantive SR claim judgment, mandatory observational meta-analysis scan and final alerts, SR conceptual failure rating caps, evidence-unit duplication checks, and related regression cases.
- Added generalized red flags, sentinel audit domains, output template fields, rating guardrails, and regression cases for non-significance/equivalence errors, existing meta-analysis table misuse, evidence-unit duplication, unadjusted observational pooling, subgroup overinterpretation, and certainty overestimation.
- Added a routine-edit rule: do not rebuild or provide zip packages unless explicitly requested; tell the user "終了しました" and list exact GPT Builder files to update.
- Changed active GPT Builder Knowledge from 13 files to 12 files by merging deep audit/rating control into `knowledge/12_whole_guideline_triage_output_control.md` and archiving the old `knowledge/13`.
- Updated Instructions and repository checks for the 01-12 Knowledge structure.
- Updated zip builders and added `releases/v0.4` so GPT Builder replacement packages contain only active Instructions, CHANGELOG, and the 12 active Knowledge files.
- Added a required Codex reporting rule for GPT Builder manual update instructions: Instructions field status, Knowledge files to re-upload, removals, CHANGELOG handling, tests, and release package status.
- Added general Knowledge rules preventing study-design counts, name-only SR/Minds/GRADE claims, and crude observational meta-analysis from being mistaken for substantive SR/GRADE/EtD traceability.
- Added generalized regression cases for design-count evidence, formal Minds/GRADE claims, and crude observational meta-analysis overuse.
- Added a rule requiring specific CPG/CQ failure examples to be generalized before entering Instructions, Knowledge, or regression tests.
- Generalized regression test file names and titles to avoid preserving individual CPG names.
- Added a repository policy check for Instructions length and generalized regression cases.
- Added `AGENTS.md` with Codex repository instructions.
- Added `CODEX_WORKFLOW_FOR_CPG_AUDIT_GPT.md` for the ChatGPT → Codex → GPT Builder workflow.
- Created the repository structure for CPG Audit GPT.
- Moved knowledge files 01-13 under `knowledge/`.
- Added a manifest and consistency checkers for numbering, headings, and core rule drift.
- Added initial regression-test placeholders.
- Added Japanese custom GPT instructions under `instructions/`.
- Renamed regression cases and prepared v0.3 release packaging.
