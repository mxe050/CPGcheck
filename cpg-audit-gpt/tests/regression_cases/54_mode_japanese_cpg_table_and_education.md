# mode_japanese_cpg_table_and_education

Input scenario: The user selects 【日本のCPG問題重点】 for a Japanese domestic CPG.

Expected behavior:
- Include a minimum standard audit summary.
- Include the Japanese domestic inspection table before Final.
- The inspection table uses the columns:
  チェック項目 / このCPGでの確認箇所・記載 / パターン判定 / 補足資料確認 / コメント.
- The inspection table normally includes all 12 standard rows, including rows
  with "本文では確認できない" or "補足資料未確認のため評価不能".
- Include Final CPG trustworthiness conclusion.
- Include a short summary, the 12-item educational explanation, and references.
- The table gives guideline locations and short excerpts or faithful summaries
  when available.
- Each applicable or suspected row explains: "ここにこう書いてあるので、この12項目の候補に当てはまる / 当てはまる疑いがある."
- The table remains inspection-only and does not change rating by item count.

Forbidden behavior:
- Do not use the table as a score.
- Do not omit the educational explanation in this mode.
- Do not stop immediately after the table or immediately after Final.
- Do not apply a country-based rating penalty.
