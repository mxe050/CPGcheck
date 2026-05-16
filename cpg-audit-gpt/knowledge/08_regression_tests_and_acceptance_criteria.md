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

## Test 11: Non-significance is not equivalence
Expected: if non-significance is interpreted as equivalence or
non-inferiority, require prespecified margin, clinically acceptable difference,
CI within margin, suitable design, power, follow-up, and outcome validity. If
not traceable, flag equivalence/non-inferiority logic failure and certainty
overestimation when High/A-like certainty is assigned.

## Test 12: Existing meta-analysis table is not automatically valid SR
Expected: do not treat a table of existing meta-analysis articles as valid
SR/GRADE evidence by itself. Check evidence-unit independence, overlapping
primary studies, PICO fit, currency, AMSTAR 2 or equivalent quality, and
outcome-specific SoF linkage.

## Test 13: Study-design counting is not SR appraisal
Expected: counts of RCTs, observational studies, case series, reviews, and
meta-analyses are not defects by themselves. Flag only when counts substitute
for PICO, eligibility, duplicate removal, outcome-specific selection, RoB,
certainty, SoF/Evidence Profile, or EtD linkage.

## Test 14: Unadjusted observational pooling triggers red flag
Expected: when crude event counts, crude OR/RR, means, SDs, or unadjusted totals
from observational studies are pooled to claim comparative or causal effects,
flag confounding not adequately handled unless adjusted estimates and
non-randomized-study RoB are traceable.

## Test 15: Subgroup meta-analysis must check interaction
Expected: do not conclude subgroup differences from within-subgroup p-values
alone. Check prespecification, interaction, precision, events, and reflection in
certainty and EtD.

## Test 16: High certainty despite failed non-inferiority logic
Expected: when equivalence/non-inferiority logic is not established but
High/A-like certainty is assigned, detect certainty overestimation from
unresolved imprecision or threshold failure.

## Test 17: Limitations reflected in weak recommendation should not be overpenalized
Expected: if limitations are explicitly described in EtD and connected to weak,
conditional, no recommendation, or limited practice statement wording, record
the limitation but do not mechanically downgrade whole-CPG trustworthiness.

## Test 18: Observational meta-analysis must be scanned
Expected: every sentinel deep audit checks whether observational or
non-randomized studies are meta-analyzed, whether they support comparative or
causal effects, and whether adjusted estimates and confounding handling are
traceable.

## Test 19: Adjustment-unclear observational meta-analysis requires final alert
Expected: if observational meta-analysis adjustment is absent or unclear, do
not automatically lower the whole-CPG rating, but include an explicit warning in
the Final CPG trustworthiness conclusion.

## Test 20: Formal SR claim is not substantive SR validity
Expected: databases, study counts, meta-analysis, and effect estimates establish
only formal SR existence. Substantive validity requires PICO,
primary-study-unit independence, design-specific RoB, confounding assessment,
outcome-specific certainty, SoF/Evidence Profile, and EtD connection.

## Test 21: SR conceptual failure should not receive clean B
Expected: if existing SR/NMA, primary studies, observational studies, case
series, and review articles are mixed without PICO, primary-study unit, RoB,
outcome-specific certainty, and EtD connection, classify as SR conceptual
failure. If repeated across major recommendations or connected to high
certainty/strong recommendation, do not rate clean B.

## Test 22: Mixed review and primary evidence duplicate risk
Expected: if existing SR/NMA and primary studies are counted as the same
evidence unit, detect duplicate evidence risk and require overlap, PICO fit,
currency, quality assessment, and SoF connection checks.

## Test 23: Limitations reflected in weak recommendation remain fair
Expected: observational meta-analysis or SR limitations should be recorded, but
if they are explicitly reflected in EtD and weak, conditional, no
recommendation, or limited practice wording, do not mechanically downgrade the
whole CPG.

## Acceptance criterion
The most important metric is false trustworthy rate: the GPT must rarely rate unsupported, internally inconsistent, or unverifiable high-risk recommendations as A/B. At the same time, it must not unfairly downgrade well-conducted transparent Core GRADE/GRADE CPGs merely because evidence is uncertain.
