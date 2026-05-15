# 05 Benchmarking and Evaluation

## Purpose
Evaluate the prototype by whether it avoids falsely endorsing untrustworthy recommendations, not by whether it produces impressive summaries.

## Unit
Use recommendation-level or CQ-level benchmark units. Avoid relying on document-level scores only.

## Initial benchmark set
Use 10–20 high-risk recommendations including:
- explicit GRADE claims;
- explicit SR/NMA claims;
- strong recommendations;
- low/very low certainty recommendations;
- drugs, devices, surgery, procedures, screening, high-cost interventions;
- narrative/algorithm hidden recommendation candidates;
- web-distributed CPGs;
- recommendations with possible current SR/living guideline mismatch.

## Human labels
For each unit, label:
- GRADE claim: supported / partial / unsupported / unverifiable / not claimed.
- SR/NMA claim: supported / partial / unsupported / unverifiable / not claimed.
- EtD traceability: complete / partial / broken.
- Internal consistency: consistent / uncertain / inconsistent.
- COI management: clear / partial / disclosure only / not traceable.
- Final rating: A/B/B−/B-C/C+/C/D/E.

Labels must be based on source materials, not blog posts or critique notes.

## Primary metrics
1. False trustworthy rate: proportion of untrustworthy/unverifiable units rated A or B. This is the most important metric.
2. Unsupported GRADE detection.
3. Unsupported SR/NMA detection.
4. Hidden recommendation detection.
5. Citation/location accuracy.
6. Recommendation inventory coverage.
7. Human-review prioritization accuracy.

## Failure modes to track
- Accepting self-description such as “GRADE” or “SR” without verification.
- Penalizing very low certainty itself.
- Penalizing conditional recommendation itself.
- Penalizing external appendix/reference itself.
- Using lack of complete reproducibility as an A-blocker.
- Missing web-distributed linked pages.
- Treating vote/agreement as EtD.
- Missing contradiction between explanation text and SoF/SR/NMA.

## Iteration rule
After each failure, revise one of 02, 08, 11, 12, or 13. Do not keep adding new knowledge files unless the failure cannot fit existing structure.
