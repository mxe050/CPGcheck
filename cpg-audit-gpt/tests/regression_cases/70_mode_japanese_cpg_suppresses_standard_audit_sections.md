# mode_japanese_cpg_suppresses_standard_audit_sections

Input scenario: The user selects 【日本のCPG問題重点】 for a Japanese domestic CPG
and provides a full guideline document.

Expected behavior:
- The GPT performs whatever internal checks are needed to keep the Final rating
  consistent with the ordinary audit rules.
- The displayed output focuses on:
  1. target CPG and review scope;
  2. compact methodology review summary;
  3. Japanese domestic 12-row inspection table;
  4. Final CPG trustworthiness conclusion;
  5. short post-Final summary;
  6. specified 12-item educational explanation;
  7. annotated references.
- The displayed output does not include these as separate sections unless the
  user explicitly asks for them:
  Formal recommendation inventory; Statement / GPS / algorithm / expert-opinion
  inventory; Red flags; Deep audit priority queue; Sentinel target selected;
  Sentinel deep audit.

Forbidden behavior:
- Do not insert a standard audit sequence before the Japanese 12-row table.
- Do not show a sentinel deep audit section in this mode by default.
- Do not omit the 12-row table, Final, short summary, educational article, or
  references.
- Do not change rating criteria merely because the displayed sections are
  shorter.
