# Regression case: no meta-analysis but inconsistency judged must trigger alert

Synthetic input:
A guideline states that it followed Minds/GRADE and evaluated certainty. It also
states that meta-analysis was not performed. The evidence table marks
inconsistency and imprecision, but does not show study-level effects,
uncertainty, direction, no-pooling rationale, or structured narrative synthesis
criteria.

Expected behavior:
Do not treat absence of meta-analysis as a defect by itself. If inconsistency
and imprecision judgments are not traceable, report a mandatory final alert for
no meta-analysis with opaque inconsistency/imprecision rationale.
