# 03 Output Templates

Use tables. Avoid long narrative summaries. Always distinguish: found at location / not found in provided material / referenced but not provided / claimed but not traceable / publicly unverifiable.

## Template A: Whole-guideline triage plus sentinel audit

```text
# CPG Methodology Audit

## 1. Document identification
| Item | Finding | Location / scope |
|---|---|---|
| Title/version |  |  |
| Organization |  |  |
| Scope/population |  |  |
| Materials reviewed |  |  |
| Materials not reviewed |  |  |

## 2. Evidence-system classifier
- Classifier:
- GRADE/Minds/Core GRADE claim status:
- SR/NMA claim status:
- EtD claim/status:
- Non-GRADE statement separation:

## 3. Inventory
| ID | Type | Topic | Recommendation/action | Strength/certainty | Location | Traceability status |
|---|---|---|---|---|---|---|

## 4. Web / appendix / source map if applicable
| Source | URL/file/location | Role | Linked recommendation | Status |
|---|---|---|---|---|

## 5. Red flags and priority queue
| Priority | Target | Score | Risk reason | Traceability concern | Next audit question |
|---:|---|---:|---|---|---|

## 6. Sentinel target selected
- Target:
- Why selected:

## 7. Sentinel deep audit
| Domain | Judgment | Evidence/location | Concern |
|---|---|---|---|
| PICO/actionability |  |  |  |
| SR/NMA/search |  |  |  |
| RoB and certainty domains |  |  |  |
| SoF/effect interpretation |  |  |  |
| Claim type | superiority / equivalence / non-inferiority / no recommendation / descriptive evidence |  |  |
| Evidence unit and independence | primary studies / existing SR / meta-analysis / overview / mixed unclear |  |  |
| Study design handling |  |  |  |
| Existing SR/meta-analysis use |  |  |  |
| Confounding and adjusted estimates |  |  |  |
| Subgroup / interaction logic |  |  |  |
| Equivalence or non-inferiority logic |  |  |  |
| Certainty calibration |  |  |  |
| EtD: benefits/harms |  |  |  |
| EtD: values/resources/feasibility |  |  |  |
| EtD reflection of evidence limitations |  |  |  |
| COI management |  |  |  |
| Internal consistency |  |  |  |
| Impact on rating |  |  |  |

## 8. Sentinel rating
- Rating:
- Rationale:
- What should not be counted against the rating:
- What actually lowers trust:

## 9. Final CPG trustworthiness conclusion
- Final CPG rating candidate:
- Trustworthiness conclusion:
- What can be trusted:
- What lowers trust:
- Sentinel implication:
- Residual uncertainty:
```

Use these judgment labels in sentinel deep audit domains:
- Adequate
- Partly adequate / unclear
- Major concern
- Not assessable from available materials

## Template B: Partial excerpt / page-based cluster assembly

```text
# Slice Router / Cluster Assembly

1. Scope of reviewed material
2. Slice map
3. Cluster candidates
4. Formal recommendation candidates
5. Narrative or algorithmic recommendation-like statements
6. Missing linked materials
7. Minimum next slice
8. Useful later
9. Deep audit materials
10. Ready for deep audit: Yes / Partially / No
11. Priority queue
12. Provisional concern
```

Do not give final A/B/C/D rating from a partial excerpt unless the defect is fully established in that excerpt.

## Template C: Claim-gated mini-audit

```text
| Claim | Status | Scope | Judgment |
|---|---|---|---|
| GRADE | explicit / non-GRADE / ambiguous / absent |  |  |
| SR/NMA | explicit / evidence review / narrative / absent |  |  |
| EtD | traceable / partial / not traceable |  |  |
| COI management | traceable / partial / disclosure only / not traceable |  |  |
```

Forbidden conclusion patterns:
- “GRADE violation” when no explicit GRADE claim exists.
- “SR not done” from an excerpt only.
- “A impossible because certainty is very low.”
- “B because complete reproducibility is lacking.”
