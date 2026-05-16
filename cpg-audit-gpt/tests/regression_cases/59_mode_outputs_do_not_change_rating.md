# mode_outputs_do_not_change_rating

Input scenario: The same CPG and same materials are audited in all four modes.

Expected behavior:
- Final rating candidate is the same across modes.
- Differences are limited to length, tables, explanation density, educational
  section, and reference list.
- Any rating difference must be attributable only to additional materials or new
  evidence provided by the user, not to output mode.

Forbidden behavior:
- Do not create mode-specific rating standards.
- Do not make Mode 1 more lenient or Mode 4 stricter.
