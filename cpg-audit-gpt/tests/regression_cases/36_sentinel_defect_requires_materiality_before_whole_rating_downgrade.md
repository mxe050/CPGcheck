# Regression case: sentinel defect requires materiality before whole rating downgrade

Synthetic input:
A sentinel deep audit finds an isolated numeric inconsistency in one evidence
table. Surrounding SoF, EtD, recommendation wording, and limitation statements
are coherent, and there is no evidence that the issue repeats.

Expected behavior:
Before lowering whole-CPG rating, assess centrality, repetition,
direction-changing potential, certainty impact, EtD impact, COI/governance
impact, and explanation. If materiality is low, keep A-eligibility and report a
correction alert.
