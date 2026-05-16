# mode_detailed_report_contains_reasoning_explanations

Input scenario: The user selects 【詳細解析レポート】 and provides a full CPG.

Expected behavior:
- Include the standard audit plus expanded explanations of why each domain was
  checked.
- Include guideline locations and short excerpts or faithful summaries for key
  findings.
- Include the Japanese domestic inspection table when applicable.
- Include the 12-item educational explanation, references, and next
  verification points.
- Keep Final rating based on existing audit logic.

Forbidden behavior:
- Do not make the report long by repeating the same conclusion without new
  evidence or explanation.
- Do not change rating because the report is more detailed.
