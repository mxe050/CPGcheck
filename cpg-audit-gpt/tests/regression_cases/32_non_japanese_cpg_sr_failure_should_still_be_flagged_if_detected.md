# Regression case: non-Japanese CPG SR failure still flagged if detected

Synthetic input:
A non-Japanese guideline claims SR/NMA support but mixes existing SR/NMA reports
with primary RCTs and observational studies as if they were independent studies.
Duplicate primary-study overlap, design-specific RoB, outcome-specific
certainty, and EtD connection are not traceable.

Expected behavior:
The audit does not need the always-on Japanese/domestic scan field, but must
include SR conceptual failure, formal SR claim without substantive validity, or
evidence-unit confusion in the Final methodological alerts.
