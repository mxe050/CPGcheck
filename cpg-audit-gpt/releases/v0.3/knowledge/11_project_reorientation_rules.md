# 11 Project Reorientation Rules

## Purpose
This is a prototype for a future whole-guideline audit application. It must not become a system that forces the user to upload endless page slices. The final target is an application that ingests a full CPG PDF or web guideline and identifies methodologically unreliable, poorly traceable, or high-risk recommendations.

## Core correction
Do not convert the workflow into a document collection task. The GPT should reduce user burden. If traceability is not possible after reviewing relevant available materials, that is an audit finding.

## Final target behavior
The system should:
1. ingest a full guideline or web CPG;
2. map contents and recommendation units;
3. detect formal, narrative, algorithmic, and hidden recommendation candidates;
4. map recommendations to evidence;
5. determine whether SR/NMA, SoF, Evidence Profile, EtD, and COI management are traceable;
6. prioritize high-risk recommendations;
7. perform one sentinel deep audit;
8. return to CPG-level trustworthiness conclusion.

## Triage is not deep audit
During triage, use: candidate, likely, not yet verified, provisional concern, priority queue. Avoid confirmed, verified, present, absent, fully assessed unless location evidence is given.

## Location discipline
Every audit judgment should distinguish:
- found at a specific location;
- not found in provided excerpt;
- referenced but not provided;
- claimed but not traceable;
- absent from reviewed materials;
- publicly unverifiable.

Do not infer SoF, EtD, SR appendix, or COI management without location evidence. Do not infer absence from limited excerpts.

## Evidence-system discipline
Do not collapse COR/LOE, Oxford, USPSTF, or society systems into GRADE. If no explicit GRADE claim, do not write Unsupported GRADE claim. Use non-GRADE evidence grading system / GRADE claim absent / GRADE use not verified.

## SR claim discipline
Do not call narrative review unsupported SR unless explicit SR claim exists. Classify explicit SR claim / evidence review / narrative summary / no SR claim.

## Certainty level is not CPG quality
Low or very low certainty is about the evidence, not the methodological trustworthiness of the CPG. It does not lower the CPG rating by itself. What matters is whether the uncertainty was correctly assessed, explained, and connected to recommendation strength.

## A rating should not be blocked by these alone
- very low certainty;
- conditional recommendation;
- no recommendation after SR;
- QOL/harms/burden not meta-analysed when explained;
- empirical acceptability/equity evidence lacking but domain considered;
- details located in appendix, supplement, linked SR, or web page;
- simplified recommendation-level COI log when no relevant COI or industry concern exists;
- inability to fully recalculate search or downgrade when major judgments are practically verifiable.

## A rating should be lowered by these
- low/very low certainty with strong recommendation and no exceptional EtD rationale;
- SR/NMA missing or not traceable when claimed/needed;
- search/RoB/certainty methods unknown;
- harms, costs, burden, or values ignored;
- NMA ranking used inappropriately;
- recommendation conflicts with SoF/SR/NMA/meta-analysis;
- relevant COI, industry influence, or funding exists but management is not traceable;
- external materials are referenced but inaccessible or disconnected from the recommendation.

## Complete reproducibility vs practical verifiability
Do not require full recalculation of every search hit, NMA, or downgrade for A. Require practical verification of major judgments and internal consistency. “Complete reproducibility lacking” is not a rating reason. “Important judgment not practically verifiable” is a rating reason.

## Avoid over-fragmentation
Avoid turning each audit into: upload next page, appendix, evidence table, COI document, then defer. Produce a provisional but explicit traceability assessment.

## Main audit question
Can a critical reader trace: clinical question, population, intervention/action, comparator, patient-important outcomes, evidence source/search, RoB/evidence limits, certainty/LOE, benefits/harms, values/preferences, resources/feasibility, COI management, final recommendation wording/strength?

If this chain is broken, mark a traceability concern.
