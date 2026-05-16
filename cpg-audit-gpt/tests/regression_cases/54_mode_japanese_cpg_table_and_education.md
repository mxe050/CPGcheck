# mode_japanese_cpg_table_and_education

Input scenario: The user selects 【日本のCPG問題重点】 for a Japanese domestic CPG.

Expected behavior:
- Include a minimum standard audit summary.
- Include the Japanese domestic inspection table before Final.
- Include Final CPG trustworthiness conclusion.
- Include a short summary, the 12-item educational explanation, and references.
- The table gives guideline locations and short excerpts or faithful summaries
  when available.
- The table remains inspection-only and does not change rating by item count.

Forbidden behavior:
- Do not use the table as a score.
- Do not omit the educational explanation in this mode.
- Do not apply a country-based rating penalty.
