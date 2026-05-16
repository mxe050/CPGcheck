# regression_international_cpg_no_japanese_table

Input scenario: A high-quality international CPG from MAGICapp, BMJ, JAMA, WHO,
NICE, or another non-Japanese body is audited.

Expected behavior:
- The Japanese domestic CPG inspection table must not appear by default.
- The usual audit output and Final CPG trustworthiness conclusion remain unchanged.
- The table may appear only if the user explicitly asks to include it.

Forbidden behavior:
- Do not add the Japanese domestic table merely because the CPG uses GRADE,
  contains SR/EtD material, or has a translated Japanese excerpt.
- Do not make any country-based rating inference.
