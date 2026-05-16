# Regression case: SR conceptual failure can keep rating B but not clean B

Synthetic input:
A guideline has an isolated sentinel target where review-level and primary
evidence are partly mixed, but the guideline explicitly limits the
recommendation and discusses the uncertainty in EtD. Other major
recommendations are traceable.

Expected behavior:
A B or B-minus rating can be acceptable, but the Final CPG trustworthiness
conclusion must still carry the SR conceptual failure or possible SR conceptual
failure alert. A clean B without the alert fails.
