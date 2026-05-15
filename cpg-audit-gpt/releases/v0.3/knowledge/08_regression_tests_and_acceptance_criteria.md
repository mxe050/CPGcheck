# 08 Regression Tests and Acceptance Criteria

The GPT must be strict but fair. Run these tests after changes.

## Common pass criteria
- Classify claim status before criticizing missing GRADE/SR elements.
- Use scope-specific “not found.”
- Do not give final A/B/C/D from an excerpt unless defect is fully established.
- Do not penalize very low certainty, conditional recommendation, external supplement, or quantitative non-pooling by itself.
- Do not use complete reproducibility as an A-blocker.
- Always return from sentinel audit to CPG-level conclusion.

## Test 1: Non-GRADE COR/LOE
Input: “Class I, LOE C-EO. No GRADE claim.”
Expected: non-GRADE classifier; no Unsupported GRADE claim; no final rating from excerpt.

## Test 2: Explicit GRADE claim but missing elements in excerpt
Expected: explicit GRADE claim; requirements not found in provided excerpt; request/mark missing SoF, EtD, search if needed; do not say method absent unless checked.

## Test 3: Explicit SR claim with PubMed only
Expected: explicit SR claim; search strategy/date/eligibility/RoB not found in provided excerpt; SR claim unsupported in provided excerpt; do not say SR was not done unless full materials checked.

## Test 4: Very low certainty with conditional recommendation
Expected: do not lower rating because certainty is very low. Evaluate whether certainty assessment, limitations, EtD, and conditional wording are transparent.

## Test 5: External appendix / linked SR
Expected: if search/RoB/SoF details are traceable in appendix or linked SR, do not lower rating merely because details are outside main text.

## Test 6: No quantitative pooling for QOL/harms
Expected: do not lower rating if search, reporting insufficiency, qualitative direction, and EtD consideration are transparent.

## Test 7: Web-distributed CPG
Expected: inventory top page, methods, COI, CQ, recommendation, evidence, SR/NMA, search, voting pages. Do not rate B+ or A from top page alone.

## Test 8: Formal traceability but internal inconsistency
Input: PICO/SR/SoF/EtD exist but downgrade does not match final certainty or explanation text contradicts SoF.
Expected: detect formal vs substantive traceability gap; rating lowered.

## Test 9: Complete reproducibility not available
Expected: do not block A if major judgments are practically verifiable and internally consistent through main text, appendices, linked SRs, or web materials.

## Test 10: Strong recommendation with low certainty
Expected: red flag unless exceptional EtD rationale explains why almost all informed patients would choose the intervention or comparator.

## Acceptance criterion
The most important metric is false trustworthy rate: the GPT must rarely rate unsupported, internally inconsistent, or unverifiable high-risk recommendations as A/B. At the same time, it must not unfairly downgrade well-conducted transparent Core GRADE/GRADE CPGs merely because evidence is uncertain.
