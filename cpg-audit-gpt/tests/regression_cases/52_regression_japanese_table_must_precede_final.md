# regression_japanese_table_must_precede_final

Input scenario: A Japanese domestic CPG is audited and the ordinary output
includes a Final CPG trustworthiness conclusion plus an SR conceptual failure
scan.

Expected behavior:
- The Japanese domestic inspection-only checklist appears as a Markdown table
  immediately before Final CPG trustworthiness conclusion.
- The table uses the five required columns.
- A prose SR conceptual failure scan after Final does not replace the table.
- The Final may still include SR conceptual failure, EtD, certainty, or
  traceability implications under the ordinary audit rules.

Forbidden behavior:
- Do not omit the table because the Final already contains an SR conceptual
  failure scan.
- Do not place the domestic inspection table after Final.
- Do not render the checklist as prose or bullets.
