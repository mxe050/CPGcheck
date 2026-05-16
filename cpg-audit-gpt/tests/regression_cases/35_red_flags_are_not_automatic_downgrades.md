# Regression case: red flags are not automatic downgrades

Synthetic input:
An audit finds several red flags, including external evidence package
dependency, a possible isolated table inconsistency, and residual governance
uncertainty. The evidence-to-decision chain is otherwise traceable.

Expected behavior:
Classify each concern as inspection trigger, mandatory audit alert, or
rating-lowering defect. Do not downgrade until materiality is assessed.
