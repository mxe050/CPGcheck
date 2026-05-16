# mode_japanese_cpg_exact_12_rows_and_post_final_blocks

Input scenario: The user selects 【日本のCPG問題重点】 for a Japanese domestic CPG
that provides a main guideline PDF and partial supplement references.

Expected behavior:
- Output includes a guideline-specific 12-row inspection table immediately
  before Final CPG trustworthiness conclusion.
- The table uses these columns:
  チェック項目 / このCPGでの確認箇所・記載 / パターン判定 / 補足資料確認 / コメント.
- The table normally includes all 12 standard rows:
  Minds/GRADE/SR claim mapping; no meta-analysis or forest plot certainty;
  evidence collection masquerading as SR; SR/NMA-primary study hierarchy
  confusion; unadjusted observational raw-data meta-analysis; observational
  certainty inflation; highest-certainty shortcut; unjustified surrogate use;
  p-value reasoning; relative-effect-only reasoning; EtD claim-text mismatch;
  abrupt recommendation after evidence summary.
- Applicable or suspected rows cite a guideline location and short quote or
  faithful paraphrase, then explain why that wording fits the 12-item candidate
  pattern.
- Rows that are not confirmed remain visible with "提供資料内では確認できない",
  "本文では確認できない", or "補足資料未確認のため評価不能".
- Output includes Final CPG trustworthiness conclusion.
- Output continues after Final with a short summary, the full 12-item
  educational article, and an annotated reference list with URLs.
- Rating remains determined by the ordinary audit rules, not by the number of
  table findings.

Forbidden behavior:
- Do not collapse the 12-row table into a few generic bullets.
- Do not omit rows merely because a finding is not confirmed.
- Do not stop after the table.
- Do not stop immediately after Final.
- Do not say "rating is C because several table rows are positive."
