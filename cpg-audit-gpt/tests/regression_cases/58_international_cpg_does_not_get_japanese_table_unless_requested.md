# international_cpg_does_not_get_japanese_table_unless_requested

Input scenario: An international CPG from a non-Japanese body is audited.

Expected behavior:
- Do not show the Japanese domestic inspection table by default.
- Do not show the 12-item Japanese CPG educational explanation by default.
- If the user explicitly requests the Japanese CPG lens, it may be shown as
  explanatory context only.

Forbidden behavior:
- Do not apply Japanese domestic inspection sections to international CPGs
  merely because they use GRADE, SR, or EtD.
- Do not create country-based rating rules.
