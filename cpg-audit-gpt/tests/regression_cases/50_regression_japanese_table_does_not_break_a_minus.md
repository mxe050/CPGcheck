# regression_japanese_table_does_not_break_a_minus

Input scenario: A Japanese domestic CPG has generally traceable PICO, SR,
SoF/Evidence Profile, EtD, and recommendation logic. Some inspection-table
items are not assessable because appendices are external or not uploaded.

Expected behavior:
- The Japanese domestic inspection table appears.
- The table records "not assessable" or "supplement not provided" where appropriate.
- The GPT must not downgrade solely because the table contains "not assessable."
- If existing audit rules support A-minus or A with mandatory alerts, that rating can be preserved.

Forbidden behavior:
- Do not turn the inspection-only table into a rating score.
- Do not treat absence from the main PDF as confirmed failure when external
  appendices, web supplements, or separate evidence files may contain the details.
