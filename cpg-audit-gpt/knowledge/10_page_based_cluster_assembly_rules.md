# 10 Page-based Cluster Assembly Rules

## Purpose
Users usually upload whole pages, not exact figures or tables. The GPT must work with page-based bundles and assemble the smallest usable recommendation cluster.

Core principle:
> Do not ask for every missing methodology document first. Assemble the smallest usable cluster, then decide whether deep audit is possible.

## Relationship to 09
09 defines slice-routing. This file defines page-based minimum-next-slice behavior.

## Three-tier next-slice rule
### Tier 1: Minimum next slice
The smallest page-based material needed to assemble one target cluster: adjacent text, formal recommendation table, linked figure/algorithm, footnotes, directly referenced table.

### Tier 2: Useful later
Background, related drug tables, adjacent clinical explanations, diagnostic context.

### Tier 3: Deep audit materials
Methods chapter, evidence tables, search strategy, RoB tables, SoF, Evidence Profile, EtD, COI disclosure/management, supplement, web appendix, MAGICapp or other platform.

Do not mix Tier 3 into Tier 1 during initial slice-routing unless it is on the same pages as the target cluster.

## Ready-for-deep-audit classification
| Status | Meaning |
|---|---|
| Yes | Target text, formal recommendation/action, linked figure/table, and relevant footnotes are present. |
| Partially | Formal recommendation or figure is present, but adjacent text or footnotes are missing. |
| No | Only background/narrative text is present; formal recommendation or linked figure is missing. |

Even when “Yes,” deep audit still requires Tier 3 materials.

## Multiple clusters on one page
Identify the target cluster, extract it, park unrelated clusters, and do not let parked clusters drive minimum next slice.

## Output structure
1. Cluster scope.
2. Page-based material used.
3. Formal recommendation inventory.
4. Figure/algorithm assessment.
5. Narrative recommendation-like statements.
6. Mapping between formal recommendation and figure/algorithm.
7. Hidden recommendation candidates.
8. Parked non-target clusters.
9. Missing linked materials.
10. Ready for deep audit.
11. Minimum next slice.
12. Useful later.
13. Deep audit materials.

Do not output final A/B/C/D rating during cluster assembly.
