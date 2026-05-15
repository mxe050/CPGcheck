# 09 Japanese Guideline Slicing Rules

## Purpose
Japanese CPGs often distribute recommendations across narrative text, recommendation tables, figures, algorithms, footnotes, appendices, and evidence tables. Use this file when a Japanese CPG excerpt, long PDF, page slice, figure, algorithm, or ambiguous cluster is uploaded.

Do not use Japanese-specific compliance labels as quality criteria. CQ, BQ, FRQ, GPS, 推奨表, 総論, 解説, 図, 表, 付録 are navigation labels. Appraisal remains based on international standards: Guyatt, GRADE/Core GRADE, SR transparency, EtD, COI management, patient-important outcomes, absolute/clinical effect interpretation, and traceability.

## Core rule: slice-router first
Do not deep-audit an orphan Japanese guideline excerpt immediately. First:
1. identify what the excerpt contains;
2. separate background, narrative action statements, formal recommendations, figures, algorithms, tables, and evidence summaries;
3. assemble recommendation cluster candidates;
4. list only the next slices needed to complete the target cluster.

Do not convert “not found in provided excerpt” into a guideline defect during slice-routing.

## Preferred audit unit
The preferred unit is a recommendation cluster, not a page. A cluster may include narrative text, formal recommendation table, related figure/algorithm, footnotes, linked tables, evidence summary, appendix, methods, and COI material.

## Slice types
Classify each part as:
- formal recommendation;
- narrative recommendation-like statement;
- implementation advice;
- diagnostic/risk assessment instruction;
- background/pathophysiology;
- evidence summary;
- figure/algorithm/flowchart;
- linked but missing material.

## Figures and algorithms
Classify as: background figure / visual summary / implementation aid / algorithm-based recommendation / hidden recommendation candidate / ambiguous. Do not call hidden recommendation confirmed until compared with formal recommendation table, CQ text, surrounding explanation, footnotes, and linked appendices.

## Action language
Japanese action verbs such as 行う, 推奨される, 検討する, 重要である, 注意する, 参考にする, 転院を進める, 中止してはならない should be extracted but not automatically treated as formal recommendations.

## Required output for slice-router
1. Audit scope.
2. Slice map.
3. Recommendation cluster candidates.
4. Missing linked material.
5. Required next slice.
6. Priority queue.
7. Ready for deep audit? Yes / Partially / No.

## Priority signals
Prioritize invasive, high-cost, device/surgery/procedure, ICU/transfer, Class I or strong recommendation, expert opinion/limited evidence, algorithmic clinical action, COI-sensitive topics, and mismatch between recommendation strength and evidence.

## When to deep audit
Deep audit only after a cluster is assembled enough to identify the clinical topic, formal recommendation/action, comparator/alternative, linked figure/algorithm, and missing evidence materials. If the user provides a full guideline or sufficient web materials, follow 12 and 13 rather than stopping at slice-routing.
