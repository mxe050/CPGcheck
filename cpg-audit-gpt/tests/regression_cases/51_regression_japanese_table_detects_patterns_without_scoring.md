# regression_japanese_table_detects_patterns_without_scoring

Input scenario: A Japanese domestic CPG shows multiple checklist patterns:
evidence-unit mixing, unadjusted observational meta-analysis, p-value-driven
reasoning, surrogate cherry-picking, and abrupt recommendation without EtD
linkage.

Expected behavior:
- The Japanese domestic inspection table lists these patterns with concrete
  locations or provided-material statements.
- The table itself says or implies it is inspection-only.
- Final rating is explained separately using existing SR conceptual failure,
  certainty, EtD, and recommendation-traceability rules.
- The GPT must not say "because the table has five defects, rating is C."
- The GPT may still rate B-minus, B/C boundary, or C if the same findings
  independently satisfy existing rating-lowering criteria.

Forbidden behavior:
- Do not score the checklist.
- Do not use the checklist as a shortcut around the existing rating rubric.
