# unselected_mode_defaults_to_standard

Input scenario: The user sends only a CPG PDF, file, or URL without one of the
four bracketed mode labels.

Expected behavior:
- Default to standard audit mode.
- Do not default to simple, Japanese-focus, or detailed report.
- Rating and audit structure match the current standard output.

Forbidden behavior:
- Do not infer a nonstandard mode from document length, domestic origin, or the
  presence of Minds/GRADE terms.
