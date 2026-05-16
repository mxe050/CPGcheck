# 02 Red Flag Dictionary

Red flags indicate need for deeper audit. They do not prove the clinical recommendation is wrong.

## Red flag classification metadata
Each red flag must be interpreted through these fields before rating:
- **Trigger**: the observed phrase, structure, inconsistency, or missing link.
- **Required audit question**: what must be checked before judgment.
- **Mandatory final alert**: Yes / No.
- **Rating impact**: none / possible / strong.
- **Downgrade condition**: when the finding becomes a rating-lowering defect.
- **A-with-alerts compatible**: Yes / No.

Use three severity classes:
- **Inspection trigger**: prompts closer audit; no rating downgrade by itself.
- **Mandatory audit alert**: must appear in Final, but may remain compatible with
  A, A with mandatory audit alerts, or A-minus.
- **Rating-lowering defect**: materially affects recommendation direction,
  strength, certainty, EtD, or COI/governance.

Do not convert an inspection trigger into a rating-lowering defect without
materiality assessment: centrality, repetition, direction-changing potential,
certainty impact, EtD impact, COI/governance impact, and whether limitations
are explained.

## Claim and evidence red flags
RF-01 Unsupported GRADE claim: explicit GRADE/Minds/Core GRADE claim without traceable outcome-specific certainty, domains, SoF/Evidence Profile/equivalent, or EtD.

RF-02 Unsupported SR/NMA claim: explicit SR/NMA claim without traceable databases, search date, search strategy, eligibility criteria, study selection, RoB, included studies, and synthesis method.

RF-02a SR claim formally present but substantively compromised: search
databases, search period, included-study counts, meta-analysis, and effect
estimates are described, but substantive SR validity is not established because
PICO, outcome-specific selection, primary-study independence, design-specific
RoB, confounding assessment, outcome-specific certainty, SoF/Evidence Profile,
or EtD connection is not traceable.

RF-02b Formal SR claim without substantive SR validity: "SR was performed,"
"Minds-compliant," "GRADE-based," search databases, study counts, forest plots,
or effect estimates establish only formal existence. They do not support the SR
claim unless primary-study units, existing-review use, duplicate-study risk,
design-specific RoB, observational confounding, outcome-specific certainty, and
EtD connection are substantively traceable.

RF-03 Literature catalog instead of certainty: SRs, RCTs, and observational studies are listed in parallel without certainty assessment or linkage to recommendation strength.

RF-03a Study-design counting used as evidence appraisal: counts such as RCTs,
observational studies, and case series are acceptable as a search or selection
summary, but become a red flag when the count is used as a substitute for
outcome-specific SR/GRADE appraisal, design-appropriate RoB, confounding,
directness, precision, inconsistency, SoF/Evidence Profile, or EtD linkage.

RF-03b Mixed design evidence treated as equal: RCTs, observational studies, and
case series are placed side by side as recommendation evidence without
explaining their different risk structures, certainty implications, or roles in
the decision.

RF-04 Study design or significance confused with certainty: “RCT,” “phase III,” “high-quality trial,” or “statistically significant” is used as if it automatically means high certainty.

RF-04a Non-significance misinterpreted as equivalence/non-inferiority:
"no statistically significant difference," "no difference," "equivalent," or
"non-inferior" is used as a conclusion without a prespecified equivalence or
non-inferiority margin, a clinically acceptable difference, and effect estimate
with 95% CI fully within that margin. A superiority trial or ordinary
meta-analysis with p>0.05 does not establish equivalence or non-inferiority.

RF-04b Certainty overestimated from conclusion labels or p-values: High/A-like
certainty is assigned from labels such as non-significant, equivalent,
non-inferior, low heterogeneity, or concordant meta-analyses without
outcome-specific RoB, inconsistency, indirectness, imprecision, publication
bias, confounding, duplicate evidence, and threshold-based imprecision checks.

RF-05 Downgrade arithmetic mismatch: domain ratings do not match final certainty, or downgrades are described but final certainty remains high without explanation.

RF-06 Search strategy weak: search terms fail to capture PICO, key synonyms, drug/device names, class names, or appropriate controlled vocabulary/free text.

RF-06a Formal Minds/GRADE claim not substantiated: a guideline says it followed
Minds/GRADE, evaluated certainty, or used GRADE-like methods, but prespecified
PICO, outcome-specific study selection, design-appropriate RoB, GRADE domain
judgments, SoF/Evidence Profile, EtD domains, certainty-strength alignment, and
transparent linkage to recommendation wording are not traceable.

RF-06b Existing meta-analysis table mistaken for SR/GRADE evidence: existing
meta-analysis articles are listed in a table with article name, number of RCTs,
participants, or significance conclusions, and the table is treated as valid
SR/GRADE evidence without assessing PICO fit, currency, methodological quality,
overlap of primary studies, outcome-specific SoF/Evidence Profile, or EtD
linkage.

RF-06c Evidence unit confusion / duplicate evidence risk: primary studies,
existing SRs, meta-analyses, reviews, and guideline summaries are counted as if
they were independent evidence units, or the same primary studies may be counted
multiple times through overlapping reviews.

RF-06d Existing SR/NMA mixed with primary studies: existing SR/NMA reports,
meta-analysis articles, narrative reviews, primary RCTs, observational studies,
and case series are placed in the same evidence hierarchy or counted as the same
"study" unit without specifying whether the method is de novo SR, existing SR
adoption, guideline adaptation, GRADE-ADOLOPMENT, overview of reviews, umbrella
review, or supplementary narrative citation.

RF-06e SR conceptual failure: existing SR/NMA, primary studies, observational
studies, case series, and review articles are mixed without PICO-based
primary-study organization, duplicate-study handling, design-specific RoB,
outcome-specific certainty, SoF/Evidence Profile, and EtD connection. When this
pattern affects major recommendations or repeats across multiple targets, treat
it as a basic SR concept failure, not merely a missing detail.
Metadata: Trigger = mixed evidence units or untraceable SR architecture.
Required audit question = what units are mixed, what organizing steps are
missing, and whether certainty/recommendation/EtD are affected. Mandatory final
alert = Yes. Rating impact = possible to strong. Downgrade condition = repeated
or central failure connected to certainty, recommendation strength, or unexplained
EtD. A-with-alerts compatible = Yes only if isolated, explained, and not
direction-changing.

RF-06f Possible SR conceptual failure: the available materials suggest mixed
evidence units, unclear primary-study independence, unclear review-level
evidence handling, or absent outcome-specific certainty/EtD connection, but
materials are insufficient to confirm full SR conceptual failure. This still
requires a Final alert when relevant to the audited CPG.
Metadata: Mandatory final alert = Yes when relevant. Rating impact = possible.
Downgrade condition = unresolved concern is central/repeated or supports
certainty/strength without explanation. A-with-alerts compatible = Yes when
main PICO-SR-SoF-EtD-recommendation chain remains practically traceable.

RF-06g Review-level evidence confused with primary-study evidence: existing
SRs, NMAs, meta-analysis reports, reviews, or guideline summaries are treated as
if they were primary studies or counted inside "included studies" without
separating review-level evidence from primary-study evidence, assessing overlap,
or specifying adoption/adaptation/ADOLOPMENT/overview/supplementary citation.
Metadata: Mandatory final alert = Yes if used in the recommendation evidence
chain. Rating impact = possible to strong. Downgrade condition = the confusion
changes evidence independence, certainty, or recommendation strength.

RF-06h Japanese domestic CPG requires high-sensitivity SR conceptual failure
scan: for Japanese-language guidelines or guidelines produced through domestic
professional, research-group, public-institution, or Minds-related processes,
perform and report an SR conceptual failure scan in the Final conclusion. This
flag means "scan required," not "defect present," and must not lower rating by
itself.
Metadata: Severity class = inspection trigger / mandatory reporting rule.
Mandatory final alert = scan field required. Rating impact = none unless
substantive SR conceptual failure is detected. A-with-alerts compatible = Yes.

RF-06i Red flag should not automatically downgrade A-eligible CPG: a concern is
present in an otherwise high-traceability GRADE/EtD CPG, but PICO, SR/living SR
or evaluated existing SR/NMA, SoF/Evidence Profile, GRADE certainty, EtD,
benefit-harm reasoning, values/preferences, resources, equity, acceptability,
feasibility, limitations, and recommendation direction/strength remain
practically traceable.
Metadata: Severity class = rating guardrail. Mandatory final alert = Yes if the
concern is clinically or methodologically material. Rating impact = none to
possible. Downgrade condition = the concern materially affects direction,
strength, certainty, EtD, or governance. A-with-alerts compatible = Yes.

RF-06j GRADE/Minds certainty assessment without quantitative synthesis
transparency: the guideline claims Minds/GRADE, certainty assessment, or
evidence-body evaluation while meta-analysis or quantitative synthesis is absent
or unclear, and the basis for certainty domains is not traceable.
Metadata: Trigger = no pooling or non-quantitative SR plus certainty labels.
Required audit questions = why no pooling, what study-level effects/uncertainty
were used, and how inconsistency, imprecision, indirectness, RoB, publication
bias, outcome certainty, overall certainty, and EtD were judged. Mandatory final
alert = Yes when domain judgments are opaque. Rating impact = possible to
strong. Downgrade condition = opaque certainty supports major outcomes, high
certainty, strong recommendation, or repeats. A/B/C boundary guidance = A with
alerts if transparent and limitation-aware; B/C boundary or C if opaque and
central. Example final wording = "Minds/GRADE claim is formal, but the
substantive certainty basis is not traceable without quantitative or structured
narrative synthesis."

RF-06k No meta-analysis but inconsistency/imprecision judged without rationale:
the guideline states that meta-analysis was not performed, or uses only
qualitative synthesis, but still judges inconsistency or imprecision without
showing study-level effects, direction, confidence intervals, event numbers,
clinical thresholds, or structured narrative criteria.
Metadata: Mandatory final alert = Yes. Rating impact = possible. Downgrade
condition = judgments are treated as "no serious concern" or used for high
certainty/strong recommendation without rationale. A-with-alerts compatible =
Yes when uncertainty is explained and reflected in weak/conditional/no
recommendation.

RF-06l Narrative synthesis substituted for GRADE certainty without transparent
criteria: narrative explanation, selected study descriptions, or author
interpretation is used as the certainty basis without explicit structured
narrative synthesis methods for direction, magnitude, consistency, precision,
RoB, indirectness, and publication bias.
Metadata: Mandatory final alert = Yes when used for certainty. Rating impact =
possible to strong. Downgrade condition = narrative synthesis drives certainty
or recommendation strength without transparent criteria.

RF-06m Non-quantitative SR claim with opaque downgrade decisions: an SR claim is
non-quantitative or qualitative, yet downgrade/no-downgrade decisions for GRADE
domains are listed without traceable evidence or rationale.
Metadata: Mandatory final alert = Yes. Rating impact = possible. Downgrade
condition = opaque downgrade decisions affect major recommendations or repeat.

RF-06n Overall certainty assigned despite untraceable effect estimates: overall
certainty is assigned even though outcome-specific effect estimates, study-level
results, confidence intervals, event counts, or direction/magnitude are not
traceable.
Metadata: Mandatory final alert = Yes. Rating impact = possible to strong.
Downgrade condition = high/A-like certainty, strong recommendation, or
decision-driving outcome rests on untraceable effects.

RF-06o Selective narrative evidence used as certainty basis: selected favorable
or convenient narrative findings are used to justify certainty or direction
without showing complete eligible study results or explaining why conflicting
results do not change certainty.
Metadata: Mandatory final alert = Yes when used for certainty/recommendation.
Rating impact = possible to strong. Downgrade condition = selectivity affects
major outcomes, certainty, or recommendation strength.

RF-06p Evidence profile unsupported by quantitative or structured narrative
synthesis: an Evidence Profile or certainty table exists, but its domain
judgments cannot be traced to quantitative synthesis, study-level effects, or
structured narrative synthesis criteria.
Metadata: Mandatory final alert = Yes. Rating impact = possible. Downgrade
condition = unsupported profile drives final certainty or recommendation.

RF-06q Formal GRADE/Minds claim without substantive certainty basis: GRADE/Minds
terminology is present, but effect estimates, uncertainty, no-pooling rationale,
structured synthesis, domain judgments, outcome-specific certainty, and EtD
connection are not substantively traceable.
Metadata: Mandatory final alert = Yes. Rating impact = possible to strong.
Downgrade condition = claim supports high certainty, strong recommendation, or
repeated major recommendations without substantive basis.

## Recommendation formation red flags
RF-07 Strong recommendation with low/very low certainty and no exceptional EtD rationale.

RF-08 Panel vote substitutes for EtD. Consensus, Delphi, or high agreement may document agreement but cannot replace benefits/harms/values/resources reasoning.

RF-09 Patient-important outcomes omitted: mortality, morbidity, symptoms, function, QOL, harms, burden, or costs/resources are ignored when relevant.

RF-10 Alternatives or comparator unclear: clinically relevant alternatives are omitted or comparator is not specified.

RF-11 Non-actionable wording: vague recommendation without population, action, comparator, direction, strength, or conditions.

RF-12 Harms, burden, cost, feasibility, or patient values ignored despite being decision-relevant.

RF-13 Conditionality mismatch: major uncertainty or value variability exists, but the recommendation wording implies uniform action.

RF-13a Undifferentiated critical outcomes / no decision-weight rationale: all
important outcomes are classified as critical, but the guideline does not
explain their relative importance, utility/disutility, seriousness, reversibility,
frequency, absolute effects, clinical thresholds, or contribution to the
recommendation.

RF-13b Values/preferences reduced to variability only: patient values are
treated only as "variable" or "not variable" without explaining how patients
value benefits, harms, burdens, utilities/disutilities, or trade-offs across
critical outcomes.

RF-13c Decision-driving outcome not identified: the recommendation does not
identify which benefit or harm outcome(s) drove direction, strength, or
conditionality.

## Evidence presentation red flags
RF-14 Relative effect only: relative effect is presented without absolute effect, baseline risk, MID, NNT/NNH, or clinical interpretation when needed.

RF-15 Inappropriate effect conversion: HR/RR/OR/RD or continuous outcomes are translated into misleading clinical effects.

RF-16 NMA ranking misuse: SUCRA/P-score/rank probability is used as main justification without network credibility, incoherence, and certainty assessment.

RF-17 Surrogate outcome overreach: surrogate/intermediate outcomes drive a recommendation without explaining patient-important outcome uncertainty.

RF-18 Inconsistency, imprecision, indirectness, publication bias, or RoB ignored despite visible concern.

RF-18a Crude observational meta-analysis overused: observational data are pooled
from crude event counts, crude means, SDs, or unadjusted totals for a
confounding-sensitive question and then used as recommendation evidence without
appropriate adjusted effect estimates, non-randomized-study RoB assessment, or
certainty downgrading.

RF-18b Observational meta-analysis treated as automatically high trust: the mere
presence of a meta-analysis of observational studies is used to raise trust
without checking confounding, adjustment differences, ROBINS-I or equivalent
RoB, directness, imprecision, inconsistency, and whether the result is overused
for strong recommendation or high certainty.

RF-18c Unadjusted observational pooling / confounding ignored: observational or
non-randomized studies are pooled for a comparative or causal effect using crude
event counts, crude OR/RR, means, SDs, or unadjusted totals, without adjusted
effect estimates, confounding strategy, adjustment-set assessment, or
non-randomized-study RoB. This is a major red flag when used as recommendation
justification.

RF-18c1 Observational meta-analysis adjustment unclear: observational or
non-randomized studies are meta-analyzed for comparative or causal effects, but
it is unclear whether adjusted OR/RR/HR or equivalent estimates were used,
whether propensity scores, multivariable adjustment, stratification, sensitivity
analyses, severity, facility, indication bias, treatment-selection bias, or
prognostic factors were considered, or whether ROBINS-I/equivalent RoB informed
certainty and EtD.

RF-18d Subgroup analysis overinterpreted / interaction not assessed: severity,
background, co-intervention, setting, or other subgroup results are used as
recommendation evidence based on within-subgroup p-values alone, without
prespecification, sufficient events, precision, and between-subgroup interaction
assessment.

RF-18e Overall certainty selected by same-direction/highest-certainty shortcut:
multiple critical outcomes point in the same direction and the highest
certainty among them is used as overall certainty without explaining the
decision-driving outcome, benefit-harm balance, relative outcome importance,
absolute effects, clinical thresholds, patient values, or the influence of
lower-certainty critical outcomes.

RF-18f Decision-driving outcome certainty not traceable: the certainty of the
outcome(s) that drive recommendation direction or strength is unclear or not
connected to the final certainty/strength judgment.

RF-18g Certainty calibration failure across critical outcomes: outcome-specific
certainty exists, but overall certainty or recommendation confidence does not
reflect differences across critical benefits and harms, especially when a
low-certainty critical outcome materially affects the decision.

## Traceability and document-structure red flags
RF-19 Formal traceability only: PICO/SR/SoF/EtD/COI documents exist, but their contents do not align with each other.

RF-20 Web or appendix fragmentation: key materials are scattered without reliable links to recommendation units.

RF-21 Explanation text conflicts with SoF/SR/NMA/meta-analysis.

RF-22 Hidden recommendation: narrative, figure, algorithm, summary box, or footnote adds clinical action not linked to formal recommendation and evidence.

RF-23 Algorithm ambiguity: arrows, colors, boxes, sequences, thresholds, or escalation rules imply action without evidence basis or strength.

RF-24 CQ methods generalized incorrectly: a few GRADE/SR-based CQs are used to imply all recommendation tables are GRADE/SR-based.

RF-24a Study-design counting substituted for SR appraisal: counts of RCTs,
observational studies, case series, reviews, and meta-analyses are used as if
they established SR appraisal or certainty, without prespecified PICO,
eligibility criteria, duplicate removal, outcome-specific selection,
design-specific role, RoB, certainty, SoF/Evidence Profile, and EtD linkage.

RF-24b Evidence-to-recommendation connection failure after flawed synthesis:
limitations in SR, existing-review use, observational pooling, equivalence or
non-inferiority logic, subgroup interpretation, or certainty calibration are
not reflected in EtD, recommendation strength, conditions, exceptions, or final
wording.

RF-24c Certainty overestimated despite unresolved confounding/design-unit
problems: High/A-like certainty or strong recommendation language is assigned
while evidence-unit independence, duplicate review-level evidence,
design-specific RoB, observational confounding, imprecision, indirectness, or
outcome-specific certainty remains unresolved.

RF-24d Mandatory final alert omitted: SR conceptual failure, possible SR
conceptual failure, formal SR claim without substantive SR validity,
evidence-unit confusion, review-level evidence confused with primary-study
evidence, adjustment-unclear observational meta-analysis, unclear critical
outcome weighting, decision-driving outcome uncertainty, or same-direction /
highest-certainty shortcut is detected but absent from the Final CPG
trustworthiness conclusion.

RF-24e SR conceptual failure alert too terse: Final CPG trustworthiness
conclusion states only that an SR conceptual failure alert exists, without
explaining the mixed evidence units, missing PICO/primary-study/RoB/certainty/
SoF/EtD links, why this is a conceptual SR problem, connection to certainty or
recommendation, and rating impact.
Metadata: Severity class = mandatory audit alert quality failure. Mandatory
final alert = Yes. Rating impact = possible because the audit output is
insufficient, not because the CPG itself is necessarily worse.

RF-24f Sentinel defect generalized without materiality assessment: an isolated
sentinel finding is used to lower whole-CPG rating without assessing centrality,
repetition, direction-changing potential, certainty impact, EtD impact,
COI/governance impact, and explanation of limitations.
Metadata: Severity class = rating guardrail. Mandatory final alert = Yes when
rating depends on the sentinel finding. Rating impact = prevents automatic
downgrade. A-with-alerts compatible = Yes when whole-CPG materiality is low.

RF-24g Isolated inconsistency in otherwise high-traceability CPG: a table value,
wording, cell, appendix cross-reference, or local summary is inconsistent, but
the surrounding PICO-SR-SoF-EtD-recommendation chain, limitation explanation,
and recommendation direction/strength remain coherent.
Metadata: Severity class = mandatory audit alert or correction alert. Rating
impact = none to possible. Downgrade condition = the inconsistency is repeated
or could change direction, strength, certainty, or EtD. A-with-alerts compatible
= Yes.

RF-24h External evidence package dependency: essential details are distributed
across an app, GRADEpro/GDT file, living SR, supplement, linked SR/NMA, journal
appendix, or web evidence package. This is an inspection trigger, not a defect,
when core judgments remain practically verifiable across accessible materials.
Metadata: Rating impact = none to possible. Downgrade condition = major
judgments remain inaccessible, inconsistent, or not practically verifiable after
considering the external package. A-with-alerts compatible = Yes.

## COI and governance red flags
RF-25 COI disclosure without management, especially for high-cost drugs, devices, procedures, screening, or industry-sensitive topics.

RF-26 Recommendation-specific COI handling not traceable when relevant COI exists or industry funding/influence is plausible.

RF-27 External current evidence not reconciled when a living SR, major NMA, or major international guideline is likely relevant.

RF-28 Residual governance uncertainty: COI management, voting restrictions, or
role management are referenced but not fully visible in the uploaded PDF, while
no direct industry influence is evident and recommendation/EtD handling remains
transparent.
Metadata: Severity class = mandatory audit alert. Rating impact = none to
possible. Downgrade condition = relevant COI, industry influence, commercial
product recommendation, or governance inconsistency is material and management
cannot be traced. A-with-alerts compatible = Yes.

RF-29 COI management referenced but not directly visible: the document points to
COI management materials or policy outside the uploaded file, but the auditor
cannot inspect all details in the current materials.
Metadata: Severity class = inspection trigger or mandatory audit alert. Rating
impact = none to possible. Downgrade condition = relevant conflicts are likely
to affect a high-risk recommendation and management remains untraceable.
A-with-alerts compatible = Yes when no material conflict signal is present.

RF-30 Commercial product recommendation with untraceable COI management: a
commercial product, device, test, drug, procedure, or branded intervention is
recommended and relevant COI/industry influence management cannot be traced.
Metadata: Severity class = rating-lowering defect when material. Mandatory
final alert = Yes. Rating impact = strong. Downgrade condition = product-linked
COI plausibly affects recommendation direction/strength or strong promotion.
A-with-alerts compatible = No unless commercial relevance and COI materiality
are convincingly absent.

## Fairness guardrails
Do not flag as a defect by itself:
- very low certainty;
- conditional recommendation;
- lack of quantitative pooling for QOL/harms/burden when explained;
- lack of meta-analysis or quantitative pooling when no-pooling rationale,
  study-level effects or results, uncertainty, structured narrative synthesis,
  GRADE domain judgments, and EtD implications are transparent;
- external appendix/SR reference;
- lack of empirical acceptability/equity data if considered;
- incomplete full recalculation when major judgments are practically verifiable.

Do not flag study-design counts or observational meta-analysis as defects by
themselves. Flag only when they are used as substitutes for substantive
evidence appraisal or recommendation justification.

Also do not flag by itself: use of existing SR/meta-analysis, presence of a
non-significant result, subgroup analysis, observational evidence, very low
certainty, conditional/weak recommendation, no recommendation, or externally
located meta-analysis. The red flag is misuse, overinterpretation, unaddressed
bias, or failure to connect limitations to EtD and recommendation wording.

Do not flag by itself: classifying all outcomes as critical, omitting numeric
utility modeling, or noting patient-value variability. Flag when relative
importance, decision-driving outcomes, outcome-specific certainty, and EtD
weighting are not traceable.

Do not flag by itself: Japanese language or domestic guideline production.
Japanese/domestic status requires a high-sensitivity SR conceptual failure scan
and explicit Final reporting, but rating impact depends on the substantive
evidence-unit, RoB, certainty, and EtD findings.

Do not flag qualitative SR or narrative synthesis by itself. Flag when
Minds/GRADE certainty, inconsistency, imprecision, overall certainty, or
recommendation strength is assigned without traceable study-level results,
uncertainty, no-pooling rationale, structured narrative synthesis criteria, or
EtD reflection.
