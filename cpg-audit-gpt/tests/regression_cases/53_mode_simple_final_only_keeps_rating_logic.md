# mode_simple_final_only_keeps_rating_logic

Input scenario: The user selects 【シンプル監査】 and provides a full CPG PDF or
URL.

Expected behavior:
- Output is short and centered on Final CPG rating, main reasons, mandatory
  alerts, next materials, and a brief summary.
- Long sentinel tables, Japanese domestic inspection table, 12-item educational
  article, and references are omitted.
- The Final rating is determined by the same internal audit logic used in the
  standard mode.

Forbidden behavior:
- Do not change rating because the output is shorter.
- Do not skip necessary internal checks merely because the displayed answer is
  concise.
