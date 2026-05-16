# 03 Output Templates

Use tables. Avoid long narrative summaries. Always distinguish: found at location / not found in provided material / referenced but not provided / claimed but not traceable / publicly unverifiable.

## Output mode router

Conversation Starters are mode prompts. Select the output mode when the user
message contains one of these bracketed labels:
- 【シンプル監査】 = Mode 1 Simple audit.
- 【日本のCPG問題重点】 = Mode 2 Japanese domestic CPG focus.
- 【標準監査：各種解析付き】 = Mode 3 Standard audit with scans.
- 【詳細解析レポート】 = Mode 4 Detailed analytic report.

If no mode is selected and the user only provides a PDF, file, or URL, use Mode
3. Mode changes reporting length and organization only. It must not change the
rating rubric, SR conceptual failure judgment, A/A-minus exclusion rule, red
flag thresholds, sentinel selection logic, or Final CPG rating.

## Evidence excerpt and explanation style

For Mode 2 and Mode 4, increase explanation density. For each important
check, show:
- where the guideline says it: page, chapter, CQ, recommendation table,
  appendix, evidence table, web supplement, or URL when available;
- a short direct excerpt or faithful paraphrase of the guideline wording;
- "ここはこうだからこう判断した": the audit inference drawn from that wording;
- what remains not assessable because appendices, separate PDFs, forest plots,
  GRADE tables, SoF/Evidence Profiles, search files, or web supplements are not
  available.

Use multiple short excerpts rather than long reproductions. Do not quote large
sections of a guideline. When a precise quote is not available, cite the
location and summarize the finding.

## Mode 1: シンプル監査

Use when the message contains 【シンプル監査】.

```text
# シンプル方法論監査

## 対象CPG
- Title / version:
- Materials reviewed:
- Materials not reviewed:

## Final CPG trustworthiness rating
- Rating:
- Trustworthiness conclusion:

## 主な理由
1.
2.
3.

## Mandatory audit alerts
- Alert:
- Rating impact:

## 次に確認すべき資料
- Appendix / supplement / web source:

## 短い総括
```

Keep the answer short and Final-centered. Do not include long sentinel tables,
the Japanese 12-row inspection table, the 12-item educational article,
reference lists, or long methodology explanations. The audit reasoning remains
the same as Mode 3; only the displayed report is shorter.

## Mode 2: 日本のCPG問題重点

Use when the message contains 【日本のCPG問題重点】. Use this primarily for
Japanese domestic CPGs. If the CPG is not domestic Japanese, say that the mode
was requested but the Japanese-domestic table is not applicable unless the user
explicitly wants it applied as an explanatory lens.

```text
# 日本のCPG問題重点 方法論監査

## 1. 対象CPGと監査範囲
## 2. 標準監査の最低限要約
## 3. 根拠箇所と判断理由
| 監査論点 | ガイドライン内の箇所・短い引用 | ここはこうだからこう判断した | 未確認資料・限界 |
|---|---|---|---|
## 4. 日本の学会作成CPG向け：形式的SR/GRADE/Minds claimと実質的運用の乖離チェック
## 5. Final CPG trustworthiness conclusion
## 6. 短い総括
## 7. 12項目の解説：形式的SR/GRADE/Minds claimと実質的運用の乖離
## 8. 参考文献・URL一覧
```

In this mode, the Japanese domestic inspection table should be more detailed
than in Mode 3. Each row should explain what is written, what is not visible in
the main text, whether supplements could resolve the issue, and why the pattern
matters. The table is inspection-only and must not be scored.

## Mode 3: 標準監査：各種解析付き

Use when the message contains 【標準監査：各種解析付き】 or no mode is selected.
This is the regression baseline and should stay close to Template A below:
whole-guideline triage, priority queue, sentinel selection, sentinel deep audit,
mandatory alerts, SR conceptual failure scan, observational meta-analysis scan,
EtD/certainty/recommendation traceability, and Final CPG trustworthiness
conclusion. Add the Japanese domestic inspection-only table only when
applicable under Knowledge 12.

## Mode 4: 詳細解析レポート

Use when the message contains 【詳細解析レポート】.

```text
# 詳細解析レポート

## 1. 対象CPGの同定
## 2. 監査範囲と資料限界
## 3. 方法論的監査の進め方
## 4. Deep audit priority queue and sentinel selection
## 5. Sentinel deep audit詳細
## 6. 根拠箇所と判断理由
| 監査論点 | ガイドライン内の箇所・短い引用 | ここはこうだからこう判断した | 未確認資料・限界 |
|---|---|---|---|
## 7. SR conceptual failure scan詳細
## 8. 観察研究メタ分析scan詳細
## 9. Certainty / EtD / recommendation traceability
## 10. COI / governance
## 11. 日本の学会作成CPG向けinspection-only table
## 12. Final CPG trustworthiness conclusion
## 13. 12項目の解説：形式的SR/GRADE/Minds claimと実質的運用の乖離
## 14. 参考文献・URL一覧
## 15. 追加確認資料・次の回帰テスト観点
```

Mode 4 may be long, but avoid repetition. State the conclusion clearly before
the educational appendix becomes long. Explain why each inspected feature
matters in plain Japanese and keep rating logic identical to Mode 3.

## 12-item educational article for Mode 2 and Mode 4

Title:
12項目の解説：形式的SR/GRADE/Minds claimと実質的運用の乖離

Opening:
以下の12項目は、ratingを決めるための採点基準ではありません。日本の学会作成CPGを読むときに、形式的には「Mindsに従った」「GRADEを用いた」「SRを行った」と書かれていても、実際には推奨の根拠が十分に追跡できないことがあります。ここでは、そのような「形式と実質のズレ」を理解するための代表的なパターンを説明します。

Use short form in Mode 2 when the report is already long. Use full form in Mode
4 unless the user asks for brevity.

1. Minds/GRADE/SRと書いてあるが、中身が伴っていない問題: Method names
do not establish trust. Check whether PICO, study selection, RoB,
outcome-specific certainty, SoF/Evidence Profile, EtD, and direction/strength
are actually traceable.

2. メタ分析やforest plotが見えないままcertaintyを決めている問題: No
meta-analysis is not a defect by itself. The issue is whether study effects,
uncertainty, inconsistency, imprecision, and overall certainty are traceable
without pooled estimates or forest plots.

3. SRではなく、文献集になっている問題: SR is not a list of papers. It
requires PICO, eligibility, study selection, RoB, outcome-level synthesis, and
connection to recommendation judgments.

4. SR/NMA、RCT、観察研究、症例集積を同列に扱う問題: Existing SRs/NMAs are
review-level evidence; RCTs and observational studies are primary studies. If
they are counted or interpreted at the same level, evidence units and duplicate
primary-study risk become unclear.

5. 観察研究をraw dataでメタ分析する問題: Crude group totals from
observational studies can reflect confounding, severity, treatment selection,
or facility differences. Statistical poolability is not the same as valid
causal inference.

6. 観察研究のcertaintyを不自然に高くする問題: Large sample size or small
p-values do not remove bias. High or moderate certainty from observational
evidence requires traceable upgrade logic or an explicit ROBINS-I/high-start
framework with downgrades.

7. アウトカムが同じ方向だから最高certaintyを採る問題: Same direction does
not automatically justify using the highest certainty as overall certainty.
Identify the decision-driving outcome and explain how its certainty affects the
recommendation.

8. サロゲートアウトカムを都合よく使う問題: Surrogates are sometimes
necessary. The concern is using favorable biomarkers, imaging, scores, or lab
values without explaining indirectness or connection to patient-important
outcomes.

9. 有意差あり／なしだけで判断する問題: Statistical significance is not
clinical importance, and non-significance is not equivalence or non-inferiority.
Equivalence/non-inferiority requires a prespecified margin and confidence
interval interpretation.

10. 相対効果だけで推奨する問題: RR or OR can look impressive while absolute
benefit is small. Check baseline risk, absolute risk difference, NNT/NNH, MID,
and clinically meaningful thresholds.

11. EtDを使ったと書くが、判断過程が見えない問題: EtD is not decorative.
Benefits, harms, certainty, patient values/preferences, burden, and contextual
factors must connect to recommendation direction and strength. Cost/resources/
equity/feasibility may be context-dependent, but benefit-harm and patient
values are central.

12. エビデンス要約の直後に推奨が突然出る問題: A trustworthy recommendation
explains why evidence leads to a particular direction and strength. If a
recommendation appears immediately after evidence summaries without judgment
logic, readers cannot verify the recommendation formation.

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
| SR claim judgment: formal claim |  |  |  |
| SR claim judgment: substantive validity |  |  |  |
| SR claim judgment: SR conceptual failure alert | yes / no / unclear |  |  |
| SR claim judgment: Final mandatory alert required | yes / no / unclear |  |  |
| Non-quantitative synthesis: meta-analysis performed | yes / no / unclear |  |  |
| Non-quantitative synthesis: reason for no pooling |  |  |  |
| Non-quantitative synthesis: study-level effect estimates shown | yes / no / unclear |  |  |
| Non-quantitative synthesis: structured narrative synthesis | adequate / partial / absent / unclear |  |  |
| Non-quantitative synthesis: inconsistency judgment basis |  |  |  |
| Non-quantitative synthesis: imprecision judgment basis |  |  |  |
| Non-quantitative synthesis: RoB / indirectness / publication bias basis |  |  |  |
| Non-quantitative synthesis: outcome-specific certainty basis |  |  |  |
| Non-quantitative synthesis: overall certainty rationale |  |  |  |
| Non-quantitative synthesis: EtD reflection |  |  |  |
| Non-quantitative synthesis: final alert required | yes / no / unclear |  |  |
| Non-quantitative synthesis: rating impact | none / possible / strong |  |  |
| Observational meta-analysis scan: present | yes / no / unclear |  |  |
| Observational meta-analysis scan: adjusted estimates used | adjusted / unadjusted / unclear / not applicable |  |  |
| Observational meta-analysis scan: confounding handling |  |  |  |
| Observational meta-analysis scan: alert required | yes / no / unclear |  |  |
| RoB and certainty domains |  |  |  |
| SoF/effect interpretation |  |  |  |
| Claim type | superiority / equivalence / non-inferiority / no recommendation / descriptive evidence |  |  |
| Evidence unit and independence | primary studies / existing SR / meta-analysis / overview / mixed unclear |  |  |
| Evidence unit handling |  |  |  |
| Study design handling |  |  |  |
| Existing SR/meta-analysis use |  |  |  |
| Confounding and adjusted estimates |  |  |  |
| SR conceptual failure: evidence unit hierarchy |  |  |  |
| SR conceptual failure: existing SR/NMA and primary-study mixing |  |  |  |
| SR conceptual failure: primary-study independence / duplicate evidence |  |  |  |
| SR conceptual failure: review-level evidence confused with primary-study evidence |  |  |  |
| SR conceptual failure: study design handling |  |  |  |
| SR conceptual failure: outcome-specific certainty and EtD connection |  |  |  |
| Japanese/domestic CPG SR conceptual failure scan required | yes / no / unclear |  |  |
| Japanese/domestic CPG SR conceptual failure scan result | present / possible / not found / not assessable / not applicable |  |  |
| SR conceptual failure alert required | yes / no / unclear |  |  |
| Critical outcomes listed |  |  |  |
| Relative importance among critical outcomes |  |  |  |
| Patient values / utility-disutility rationale |  |  |  |
| Decision-driving outcome(s) |  |  |  |
| Certainty of decision-driving outcome(s) |  |  |  |
| Same-direction/highest-certainty shortcut | yes / no / unclear |  |  |
| Overall certainty rationale |  |  |  |
| Subgroup / interaction logic |  |  |  |
| Equivalence or non-inferiority logic |  |  |  |
| Certainty calibration |  |  |  |
| RoB / confounding / certainty calibration |  |  |  |
| EtD: benefits/harms |  |  |  |
| EtD: values/resources/feasibility |  |  |  |
| EtD reflection of evidence limitations |  |  |  |
| Mandatory final warning |  |  |  |
| COI management |  |  |  |
| Internal consistency |  |  |  |
| Impact on rating |  |  |  |

## 8. Sentinel rating
- Rating:
- Rationale:
- What should not be counted against the rating:
- What actually lowers trust:
- Sentinel-to-whole materiality:
  - Centrality:
  - Repetition:
  - Direction-changing potential:
  - Certainty impact:
  - EtD impact:
  - COI/governance impact:
  - Explanation/limitation handling:

## 9. Japanese domestic CPG inspection table if applicable
Use this section only for Japanese domestic CPGs or when the user explicitly
requests it. Place it immediately before the Final CPG trustworthiness
conclusion. This is an inspection-only table, not a rating calculation table.
Render it as a Markdown table with the five columns below. Do not replace it
with a prose paragraph, bullet list, or post-Final SR conceptual failure scan.

日本の学会作成CPG向け：形式的SR/GRADE/Minds claimと実質的運用の乖離チェック
※この表はratingを直接変更する採点表ではなく、Final conclusionの前に置くinspection-only checklistである。

| チェック項目 | このCPGでの確認箇所・記載 | パターン判定 | 補足資料確認 | コメント |
|---|---|---|---|---|
| Minds/GRADE/SR claim と実質的エビデンス統合の対応 |  | 該当あり / 該当疑い / 本文では確認できない / 補足資料未確認のため評価不能 / 該当なし / 適用外 | 本文内で確認 / 付録で確認 / 別PDFで確認 / Web補足資料で確認 / 補足資料が参照されているが未提供 / 補足資料の存在を確認できない / 該当なし | claim自体ではなく、PICO、適格基準、RoB、outcome別certainty、SoF/Evidence Profile、EtD接続が追跡できるかが論点。 |
| メタ分析なし／forest plotなしでcertaintyを判断している可能性 |  |  |  | メタ分析がないこと自体ではなく、非一貫性・不精確性・overall certaintyの判断根拠が追跡できるかが論点。 |
| SRを装った文献集・エビデンス集 |  |  |  | 検索後の文献列挙ではなく、PICO別一次研究単位、重複、研究デザイン別RoB、outcome別certaintyが整理されているかが論点。 |
| 既存SR/NMAと一次研究の階層混同 |  |  |  | 既存SR/NMAの方法論評価、PICO適合性、更新性、直接性、重複一次研究リスクが扱われているかが論点。 |
| 観察研究メタ分析における未調整raw data統合 |  |  |  | 統計ソフトで計算できることと疫学的に妥当な因果推論は別であり、調整推定値や交絡処理が論点。 |
| 観察研究certainty inflation |  |  |  | 症例数、p値、有意差だけで中等度以上のcertaintyにしていないか、正当なupgradeまたはdowngrade過程が論点。 |
| 同じ方向だから最高certaintyを採るshortcut |  |  |  | 単純に最低certaintyへ合わせることではなく、重大アウトカム間の重みづけとdecision-driving outcomeの説明が論点。 |
| サロゲートアウトカムの都合のよい使用 |  |  |  | サロゲート使用自体ではなく、患者重要アウトカムへの接続やindirectness説明なしに都合のよいサロゲートだけを使っていないかが論点。 |
| P値・有意差あり/なしに依存した推奨 |  |  |  | p値だけで有効・無効・同等性を判断せず、効果量、95%CI、事前マージン、臨床的重要性が論点。 |
| 相対効果だけに依存した推奨 |  |  |  | 相対効果だけでなく、絶対効果、ベースラインリスク、risk difference、NNT/NNH、MID、臨床的閾値が論点。 |
| EtD claim と本文・推奨文の乖離 |  |  |  | 費用・公平性等の詳細不足だけではなく、患者価値観、益害判断、推奨強度の理由が本文・推奨文に接続しているかが論点。 |
| 推奨がエビデンス要約の直後に突然出る構造 |  |  |  | パネル会議や投票だけでなく、なぜその方向・強度になったかの判断過程が示されているかが論点。 |

## 10. Final CPG trustworthiness conclusion
- Final CPG rating candidate:
  - Normalized rating label:
  - If using an expanded label such as A with mandatory audit alerts, A-minus,
    B+, or B/C boundary, state how it relates to the ordinary A/B/C/D/E rating
    scale and why a plain unqualified label would be misleading.
- Trustworthiness conclusion:
- A-eligibility assessment:
- What can be trusted:
- What lowers trust:
- Mandatory methodological alerts:
  - SR conceptual failure scan:
    - Result: Present / Possible / Not found / Not assessable
    - Detection level: sentinel CQ / CQ cluster / CPG-level methods / evidence tables / supplements / web materials
    - What was detected:
    - Evidence unit hierarchy:
    - Primary-study independence:
    - Missing organization: PICO / primary-study unit / duplicate risk / RoB / certainty / SoF / EtD
    - Why it matters:
    - Connection to certainty/recommendation:
    - A/A-minus eligibility:
    - Rating ceiling:
    - Rating impact:
    - Final warning required:
  - SR architecture and evidence-unit hierarchy judgment:
    - Status: Confirmed SR conceptual failure / Possible SR conceptual failure / Not found / Not assessable
    - Detection level:
    - Evidence units mixed or unclear:
    - Missing structural elements:
    - Sentinel-CQ limitation:
    - CPG-level or cluster-level scan result:
    - Impact on certainty / EtD / recommendation:
    - A/A-minus eligibility:
    - Rating ceiling:
    - Final rating implication:
  - SR conceptual failure / evidence unit confusion:
    - What was detected:
    - Why it matters:
    - Connection to certainty/recommendation:
    - Rating impact:
  - Isolated inconsistency / correction alert:
    - What was detected:
    - Does it affect recommendation direction/strength:
    - Rating impact:
  - COI / governance uncertainty:
    - Traceability level:
    - Commercial relevance:
    - Rating impact:
  - External evidence package dependency:
    - Materials involved:
    - Are core judgments traceable:
    - Rating impact:
  - A-eligibility preservation:
    - Why A/A-minus remains possible despite alerts:
    - What would lower it to B or below:
  - Observational meta-analysis confounding alert:
    - What was detected:
    - Connection to certainty/recommendation:
    - Rating impact:
  - No meta-analysis / opaque certainty assessment:
    - What was detected:
    - Meta-analysis performed:
    - Reason for no pooling:
    - Inconsistency judgment traceability:
    - Imprecision judgment traceability:
    - Certainty basis:
    - Why it matters:
    - Connection to certainty/recommendation:
    - Rating impact:
  - Critical outcome weighting / decision-driving outcome alert:
    - What was detected:
    - Connection to certainty/recommendation:
    - Rating impact:
  - Overall certainty calibration alert:
    - What was detected:
    - Connection to certainty/recommendation:
    - Rating impact:
  - EtD connection alert:
    - What was detected:
    - Rating impact:
- Materiality assessment:
  - Centrality:
  - Repetition:
  - Direction-changing potential:
  - Certainty impact:
  - EtD impact:
  - COI/governance impact:
  - Explanation:
- Why rating was or was not downgraded:
- Required corrections / confirmations:
- Sentinel implication:
- Residual uncertainty:
```

Use these judgment labels in sentinel deep audit domains:
- Adequate
- Partly adequate / unclear
- Major concern
- Not assessable from available materials

Mandatory methodological alerts must be shown even when they do not
automatically lower the final rating. Include alerts for adjustment-unclear
observational meta-analysis, SR conceptual failure, evidence-unit confusion,
possible non-significance/equivalence confusion, and high certainty despite
unresolved methodological limitations when present. A rating can be B while
still carrying mandatory methodological alerts.

For Japanese-language or domestically produced CPGs, the SR conceptual failure
scan line is mandatory even when the result is "not found" or "not assessable."
Do not leave the Final conclusion silent on this scan.

Final alerts must never be one-line labels. For every mandatory alert, write
what was detected, why it matters, how it connects to certainty/recommendation
or governance, and the rating impact. Alerts can coexist with A, A with
mandatory audit alerts, or A-minus when whole-guideline materiality is low.

When using expanded rating labels, do not let the label replace the rationale.
Explain whether the expanded label means an A-level CPG with non-material alerts,
an A-eligible CPG with residual confirmation needs, a mostly B-level CPG near
the A boundary, or a B/C-boundary CPG with major unresolved concerns. The Final
must make clear what would change the label upward or downward.

For no-meta-analysis / non-quantitative synthesis alerts, do not stop at "no
meta-analysis." State whether inconsistency, imprecision, certainty, and overall
certainty judgments are traceable to study-level effects, uncertainty,
no-pooling rationale, and structured narrative synthesis. Meta-analysis absence
alone is not a rating defect.

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
