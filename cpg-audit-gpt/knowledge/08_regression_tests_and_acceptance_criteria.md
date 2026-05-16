# 08 Regression Tests and Acceptance Criteria

The GPT must be strict but fair. Run these tests after changes.

## Common pass criteria
- Classify claim status before criticizing missing GRADE/SR elements.
- Use scope-specific “not found.”
- Do not give final A/B/C/D from an excerpt unless defect is fully established.
- Do not penalize very low certainty, conditional recommendation, external supplement, or quantitative non-pooling by itself.
- Do not use complete reproducibility as an A-blocker.
- Always return from sentinel audit to CPG-level conclusion.
- Expanded rating labels such as A with mandatory audit alerts, A-minus, B+,
  and B/C boundary must not appear as bare labels. The Final must state the
  nearest ordinary rating family, why the modifier is needed, which alerts
  remain, and what would move the CPG upward or downward.
- CPG-level or cluster-level SR conceptual failure must not be negated by a
  sparse sentinel CQ. When evidence-unit hierarchy failure repeats across major
  CQ clusters or affects major recommendations, A/A-minus/A-eligible is excluded
  and the candidate range is B-minus, B/C boundary, or C by materiality.

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

## Test 24: SR conceptual failure must appear in final
Expected: when existing SR/NMA, primary studies, RCTs, observational studies,
case series, and review articles are mixed without PICO, primary-study unit,
RoB, outcome-specific certainty, and EtD connection, Final CPG trustworthiness
conclusion must mention SR conceptual failure or suspected SR conceptual
failure regardless of whether the rating is lowered.

## Test 25: SR conceptual failure should not be silent even if rating B
Expected: a B or B− rating may be possible for isolated, limitation-aware
problems, but the SR conceptual failure alert must still be present in Final
CPG trustworthiness conclusion.

## Test 26: All critical outcomes are not equal decision weight
Expected: when all outcomes are critical but mortality, serious complications,
function, QOL, harms, burden, and costs are not weighted or linked to the
recommendation, flag unclear decision weight among critical outcomes.

## Test 27: Values/preferences variability only is insufficient
Expected: if values/preferences only state variability without addressing
utility, disutility, relative importance, burden, or trade-offs among outcomes,
detect values/preferences reduced to variability only.

## Test 28: Same-direction/highest-certainty shortcut triggers alert
Expected: if same-direction critical outcomes lead to choosing the highest
certainty as overall certainty, flag overall certainty selected by
same-direction/highest-certainty shortcut and include a Final alert.

## Test 29: Decision-driving outcome certainty not traceable
Expected: if the outcome driving recommendation direction or strength is not
identified, or its certainty is not connected to the final certainty/strength,
flag decision-driving outcome not identified and decision-driving outcome
certainty not traceable.

## Test 30: Appropriate outcome weighting should not be overpenalized
Expected: if EtD explains relative importance among critical outcomes, accounts
for a low-certainty important outcome, and connects this to weak, conditional,
or no recommendation wording, record the issue but do not mechanically lower
whole-CPG trustworthiness.

## Test 31: Japanese/domestic CPG SR conceptual failure scan must appear in final
Expected: for Japanese-language or domestically produced CPG audits, the Final
CPG trustworthiness conclusion always includes an SR conceptual failure scan
field with present, possible, not found, or not assessable status.

## Test 32: Japanese/domestic SR failure should not be silent
Expected: if a Japanese-language or domestically produced CPG mixes existing
SR/NMA, primary studies, RCTs, observational studies, case series, and review
articles without PICO, primary-study unit, RoB, outcome-specific certainty, and
EtD connection, the Final conclusion includes SR conceptual failure or suspected
SR conceptual failure regardless of whether rating is lowered.

## Test 33: Formal SR claim is not substantive validity in domestic scan
Expected: search databases, study counts, meta-analysis, forest plots, and
effect estimates support only formal SR existence. The output must separately
judge substantive SR validity and must not write only "SR claim supported."

## Test 34: Mixed review and primary evidence is SR conceptual failure
Expected: if review-level evidence and primary-study evidence are counted in the
same included-study unit, detect review-level evidence confused with
primary-study evidence, evidence-unit confusion, and duplicate evidence risk.

## Test 35: SR conceptual failure can keep rating B but not clean B
Expected: an isolated, limitation-aware SR conceptual failure may remain B or
B−, but the Final conclusion must still show the SR conceptual failure alert;
"clean B" without alert fails.

## Test 36: Non-Japanese CPG SR failure still flagged if detected
Expected: non-Japanese or externally produced CPGs do not require the always-on
domestic scan field, but detected SR conceptual failure, formal SR claim without
substantive validity, or evidence-unit confusion must still appear in the Final
alert.

## Test 37: SR conceptual failure final alert must be explanatory
Expected: Final must not say only "SR conceptual failure alert present." It must
state the mixed evidence units, missing PICO/primary-study/RoB/certainty/SoF/EtD
links, why this is conceptual SR failure or suspicion, connection to certainty
or recommendation, and rating impact.

## Test 38: High-traceability GRADE CPG remains A candidate with alerts
Expected: when PICO, living SR or evaluated SR/NMA, SoF, EtD, GRADE certainty,
conditional recommendation rationale, values, resources, equity, acceptability,
and feasibility are traceable, isolated wording errors or distributed external
materials do not force B-minus. A with mandatory audit alerts or A-minus is
allowed.

## Test 39: Red flags are not automatic downgrades
Expected: classify red flags as inspection trigger, mandatory audit alert, or
rating-lowering defect before rating. Downgrade only after materiality
assessment.

## Test 40: Sentinel defect requires materiality before whole rating downgrade
Expected: an isolated numeric inconsistency in sentinel audit does not lower
whole-CPG rating unless centrality, repetition, direction-changing potential,
certainty impact, EtD impact, and explanation support a whole-guideline defect.

## Test 41: Residual governance uncertainty does not automatically drop to B
Expected: if COI management is referenced outside the PDF, no direct industry
influence is evident, and the recommendation is conditional with transparent
EtD, A-minus or A with mandatory audit alerts remains possible.

## Test 42: Commercial product untraceable COI should downgrade or strong alert
Expected: if a commercial product recommendation has relevant untraceable COI
management, produce a strong governance alert and consider lowering from A.

## Test 43: Isolated transcription error is correction alert, not rating drop
Expected: an isolated wording/table/cell error that does not change
recommendation direction, strength, certainty, or EtD is a mandatory correction
alert, not automatic whole-CPG downgrade.

## Test 44: High-quality CPG should not be accepted blindly
Expected: high-traceability formats, platforms, tools, or journal publication do
not guarantee A. If recommendation direction conflicts with SoF/EtD, low
certainty supports a strong recommendation without rationale, or commercial COI
management is untraceable, lower from A as appropriate.

## Test 45: No meta-analysis but inconsistency judged must trigger alert
Expected: if Minds/GRADE is claimed and meta-analysis is absent, meta-analysis
absence itself is not a defect. But if inconsistency or imprecision judgments
lack traceable rationale, report "no meta-analysis but
inconsistency/imprecision judged without rationale" as a mandatory final alert.

## Test 46: Qualitative SR with transparent certainty should not be overpenalized
Expected: if no meta-analysis is justified, study-level effects, direction,
uncertainty, inconsistency, imprecision, RoB, indirectness, and EtD limitations
are transparently explained, do not downgrade merely because synthesis is
qualitative.

## Test 47: Formal Minds/GRADE claim without substantive certainty basis
Expected: separate formal Minds/GRADE claim from substantive certainty basis
when GRADE-domain rationale, study-level effect estimates, and structured
narrative synthesis are not traceable.

## Test 48: No pooling with high certainty should be challenged
Expected: if there is no meta-analysis, effect estimates are unclear, and
inconsistency/imprecision rationale is opaque, High/A-like certainty should be
challenged and B/C boundary or C considered when central to major
recommendations.

## Test 49: No meta-analysis uncertainty reflected in weak recommendation
Expected: when no meta-analysis is performed but uncertainty is explicitly
explained and connected to weak, conditional, or no recommendation wording,
record concerns if needed but do not mechanically downgrade whole-CPG rating.

## Test 50: CPG-level SR conceptual failure is not A-minus
Expected: if a guideline claims Minds/GRADE but literature searches lead to
parallel listing of existing SRs, NMAs, meta-analysis reports, RCTs,
observational studies, case series, and reviews without primary-study mapping,
design-specific RoB, outcome-specific certainty, or SoF-to-EtD linkage across
major CQ clusters, do not conclude A-minus merely because one sentinel CQ is
sparse. State that the sentinel CQ is not assessable from that CQ alone, perform
or require CPG-level SR architecture scan, classify possible or confirmed SR
conceptual failure, exclude A/A-minus/A-eligible when major recommendations or
multiple clusters are affected, and consider B-minus, B/C boundary, or C. Do not
use "not automatic C" to preserve A/A-minus.

## Test 51: Japanese CPG inspection table is non-rating
Expected: for a Japanese domestic academic-society CPG with Minds/GRADE claims
and visible checklist patterns, include the Japanese domestic inspection table
immediately before Final CPG trustworthiness conclusion. Use the required five
columns, show locations or "not confirmed in provided materials," distinguish
main-text absence from unavailable supplements, and do not change rating merely
because of the table. Rating remains governed by existing audit rules.

## Test 52: International CPG does not get Japanese table by default
Expected: for a high-quality international CPG from a non-Japanese body, do not
show the Japanese domestic CPG inspection table by default. Usual audit and
Final CPG trustworthiness conclusion remain unchanged unless the user explicitly
asks for the table.

## Test 53: Japanese table does not break A-minus
Expected: for a Japanese domestic CPG with traceable PICO, SR, SoF/Evidence
Profile, EtD, and recommendation logic, the table appears but "not assessable"
or "supplement not provided" rows do not cause downgrade by themselves. If
existing audit rules support A-minus or A with mandatory alerts, preserve that
rating.

## Test 54: Japanese table detects patterns without scoring
Expected: when a Japanese domestic CPG shows multiple checklist patterns such as
evidence-unit mixing, unadjusted observational meta-analysis, p-value-driven
reasoning, surrogate cherry-picking, and abrupt recommendation without EtD
linkage, list them with concrete locations or provided-material statements. The
table must state or imply inspection-only status. Final rating is explained
separately using existing SR conceptual failure, certainty, EtD, and
recommendation-traceability rules; do not say rating is C because the table has
a certain number of items.

## Test 55: Japanese table must precede Final and be a table
Expected: for a Japanese domestic CPG, the inspection-only checklist must appear
as a Markdown table immediately before Final CPG trustworthiness conclusion. A
prose SR conceptual failure scan placed after Final does not satisfy this test.
The table cannot be skipped merely because Final includes an SR conceptual
failure scan.

## Test 56: mode_simple_final_only_keeps_rating_logic
Expected: when the user selects 【シンプル監査】, output is short and centered on
Final CPG rating, main reasons, mandatory alerts, next materials, and a brief
summary. It omits long sentinel tables, Japanese 12-row table, educational
article, and references. The Final rating must match the standard audit using
the same materials.

## Test 57: mode_japanese_cpg_table_and_education
Expected: when the user selects 【日本のCPG問題重点】 for a Japanese domestic CPG,
output includes minimum audit summary, detailed Japanese domestic inspection
table, Final, short summary, 12-item educational explanation, and references.
The table is inspection-only and does not alter rating by item count.

## Test 58: mode_standard_regression_no_output_drift
Expected: when the user selects 【標準監査：各種解析付き】 or no mode, current
standard audit structure and audit precision are preserved, including sentinel
deep audit, mandatory alerts, SR conceptual failure scan, observational
meta-analysis scan, EtD/certainty/recommendation traceability, and Final.

## Test 59: mode_detailed_report_contains_reasoning_explanations
Expected: when the user selects 【詳細解析レポート】, output includes the standard
audit plus plain-Japanese explanations of why each domain was checked, guideline
locations and short excerpts, 12-item educational explanation, references, and
next verification points.

## Test 60: unselected_mode_defaults_to_standard
Expected: if the user sends only a PDF, file, or URL without a mode label, use
the standard audit mode. Do not default to simple, Japanese-focus, or detailed
report merely because the CPG is short or domestic.

## Test 61: international_cpg_does_not_get_japanese_table_unless_requested
Expected: international CPGs do not receive the Japanese domestic inspection
table or 12-item Japanese CPG explanation by default. If the user explicitly
requests the Japanese lens, it may be shown as an explanatory frame without
country-based rating rules.

## Test 62: mode_outputs_do_not_change_rating
Expected: auditing the same CPG with the same materials under all four modes
should produce the same Final rating candidate. Differences are limited to
length, tables, explanation density, education section, and references.

## Acceptance criterion
The most important metric is false trustworthy rate: the GPT must rarely rate unsupported, internally inconsistent, or unverifiable high-risk recommendations as A/B. At the same time, it must not unfairly downgrade well-conducted transparent Core GRADE/GRADE CPGs merely because evidence is uncertain.
