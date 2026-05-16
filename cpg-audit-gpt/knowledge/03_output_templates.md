# 03 Output Templates

Use tables. Avoid long narrative summaries. Always distinguish: found at location / not found in provided material / referenced but not provided / claimed but not traceable / publicly unverifiable.

## Output mode router

Conversation Starters are mode prompts. Select the output mode when the user
message contains one of these bracketed labels:
- 【シンプルレビュー】 = Mode 1 Simple review.
- 【日本のCPG問題重点】 = Mode 2 Japanese domestic CPG focus.
- 【標準レビュー：各種解析付き】 = Mode 3 Standard review with scans.
- 【詳細解析レポート】 = Mode 4 Detailed analytic report.

If no mode is selected and the user only provides a PDF, file, or URL, use Mode
3. Mode changes reporting length and organization only. It must not change the
rating rubric, SR conceptual failure judgment, A/A-minus exclusion rule, red
flag thresholds, sentinel selection logic, or Final CPG rating.

## Two-step Conversation Starter flow

Conversation Starters may be pressed before the user attaches a PDF or pastes a
URL. If the user message contains a mode label or starter prompt text, with no
PDF, URL, or guideline text, do not start the audit. Do not infer a guideline,
do not give
general methodology commentary, and do not produce any rating. Reply only with
the selected mode and the next action.

Use these short waiting responses:

```text
【選択モード：シンプルレビュー】
このモードで文書の方法論的信頼性をレビューします。次のメッセージで、診療ガイドライン文書のPDFを添付するか、URLを送ってください。
```

```text
【選択モード：日本のCPG問題重点】
日本の学会作成ガイドライン文書として、形式的SR/GRADE/Minds claimと実質的運用の乖離を重点的にレビューします。次のメッセージで、診療ガイドライン文書のPDFを添付するか、URLを送ってください。
```

```text
【選択モード：標準レビュー：各種解析付き】
PICO・SR・GRADE・EtD・COIの観点から標準形式で文書レビューします。次のメッセージで、診療ガイドライン文書のPDFを添付するか、URLを送ってください。
```

```text
【選択モード：詳細解析レポート】
作成方法、根拠のつながり、推奨作成プロセスまで詳しく解析します。次のメッセージで、診療ガイドライン文書のPDFを添付するか、URLを送ってください。
```

If the immediately following user message provides a PDF, URL, or identifiable
guideline text and does not choose a new mode, apply the previously confirmed
mode. If a new mode and source material arrive together, the new mode overrides
the previous one and the audit starts immediately. If source material arrives
with no selected mode, default to Mode 3. A selected mode applies to one audit
only after completion unless the user explicitly says to continue in the same
mode. If the next material is not sufficient for guideline audit, do not force a
full audit; ask for the full guideline PDF/URL, or at least the methods section
and relevant CQ/recommendation pages.

When the audit starts, show:

```text
レビューモード：
対象資料：
```

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

## Mode 1: シンプルレビュー

Use when the message contains 【シンプルレビュー】.

```text
# シンプル方法論レビュー

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
# 日本のCPG問題重点 方法論レビュー

## 1. 対象CPGとレビュー範囲
## 2. 方法論レビューの最低限要約
## 3. 日本の学会作成CPG向け：形式的SR/GRADE/Minds claimと実質的運用の乖離チェック
## 4. Final CPG trustworthiness conclusion
## 5. 短い総括
## 6. 12項目の解説：形式的SR/GRADE/Minds claimと実質的運用の乖離
## 7. 参考文献・URL一覧
```

In this mode, the Japanese domestic inspection table should be more detailed
than in Mode 3. Each row should explain what is written, what is not visible in
the main text, whether supplements could resolve the issue, and why the pattern
matters. The table is inspection-only and must not be scored.

Do not display these standard-audit intermediate sections in Mode 2 unless the
user explicitly asks for them:
- Formal recommendation inventory;
- Statement / GPS / algorithm / expert-opinion inventory;
- Red flags;
- Deep audit priority queue;
- Sentinel target selected;
- Sentinel deep audit.

The GPT may still perform internal checks needed for rating consistency. The
displayed Mode 2 report should stay focused on the Japanese 12-point table,
Final conclusion, short summary, educational explanation, and references.

Mode 2 completion contract:
- Do not stop after the inspection table.
- Do not stop after Final CPG trustworthiness conclusion.
- The output is incomplete unless it includes, in this order:
  1. 対象CPGとレビュー範囲;
  2. 方法論レビューの最低限要約;
  3. Japanese domestic 12-row inspection-only table;
  4. Final CPG trustworthiness conclusion;
  5. short post-Final summary;
  6. full 12-item educational article;
  7. annotated methodological references with URLs.
- The 12-row table and the 12-item educational article are different sections.
  The table applies the 12 points to the specific guideline. The article teaches
  what the 12 points mean in general.

For the Japanese domestic inspection-only table, use these exact columns:

| チェック項目 | このCPGでの確認箇所・記載 | パターン判定 | 補足資料確認 | コメント |
|---|---|---|---|---|

The table should normally include all 12 standard rows below. If a row cannot be
assessed, keep the row and write "提供資料内では確認できない", "本文では確認できない",
or "補足資料未確認のため評価不能" rather than deleting it.

Standard 12 rows:
1. Minds/GRADE/SR claim と実質的エビデンス統合の対応
2. メタ分析なし／forest plotなしでcertaintyを判断している可能性
3. SRを装った文献集・エビデンス集
4. 既存SR/NMAと一次研究の階層混同
5. 観察研究メタ分析における未調整raw data統合
6. 観察研究certainty inflation
7. 同じ方向だから最高certaintyを採るshortcut
8. サロゲートアウトカムの都合のよい使用
9. P値・有意差あり/なしに依存した推奨
10. 相対効果だけに依存した推奨
11. EtD claim と本文・推奨文の乖離
12. 推奨がエビデンス要約の直後に突然出る構造

For the Japanese 12-row inspection table in Mode 2, avoid generic checklist
phrases. Each applicable or suspected row should include concrete evidence from
the guideline:
- the exact page/section/CQ/table/appendix/web source when available;
- a short quote or close paraphrase of the guideline wording;
- a sentence explaining why that wording fits the candidate pattern, using
  "ここにこう書いてあるので、この12項目の候補に当てはまる / 当てはまる疑いがある";
- whether a supplement, separate PDF, evidence table, forest plot, SoF/Evidence
  Profile, or web file could resolve the uncertainty.
Use many small, location-specific snippets rather than long quotations.

For each applicable or suspected row, the "コメント" cell should contain a
specific explanation in this style:
"該当箇所では『...』と記載されているため、[12項目名]の候補に該当する/該当疑いである。論点は...であり、この表自体はrating非連動である。"

If the row is not confirmed, still explain the uncertainty:
"本文では確認できない。別PDF、Web補足資料、forest plot、GRADE evidence table、
SoF/Evidence Profile、検索式、予備投票資料があれば確認できる可能性がある。"

## Mode 3: 標準レビュー：各種解析付き

Use when the message contains 【標準レビュー：各種解析付き】 or no mode is selected.
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
## 2. レビュー範囲と資料限界
## 3. 方法論的レビューの進め方
## 4. Deep audit priority queue and sentinel selection
## 5. Sentinel deep audit詳細
## 6. 根拠箇所と判断理由
| レビュー論点 | ガイドライン内の箇所・短い引用 | ここはこうだからこう判断した | 未確認資料・限界 |
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

Mode 2 should normally include this full article unless the user asks for a very
short answer. Mode 4 should include the full article. Keep it educational:
these 12 items explain patterns, but they are not rating criteria and are not a
checklist score.

1. Minds/GRADE/SRと書いてあるが、中身が伴っていない問題

「Mindsに準拠した」「GRADEを用いた」「システマティックレビューを行った」と書かれていても、それだけで信頼できる推奨とは言えません。重要なのは、PICO、文献選択、RoB評価、アウトカム別certainty、SoF/Evidence Profile、EtD、推奨方向・推奨強度までの流れが実際に追えるかです。

これが追えない場合、方法論の名称だけが使われ、実際の判断は専門家の主観や慣習に依存している可能性があります。AGREE IIなどの形式的評価が整って見えても、GRADEに基づく科学的に妥当な推奨であることは別問題です。ユーザー作成資料でも、この「形式的完成度」と「真の信頼性」の距離が中心的な問題として整理されています。

2. メタ分析やforest plotが見えないままcertaintyを決めている問題

メタ分析がないこと自体は欠陥ではありません。研究数が少ない、アウトカム定義が異なる、異質性が大きい、希少疾患であるなど、メタ分析を行わないことが妥当な場合はあります。

問題は、メタ分析もforest plotもなく、各研究の効果推定値や95%信頼区間も十分に示されないまま、非一貫性・不精確性・overall certaintyが決められている場合です。この場合、どの情報に基づいて「非一貫性に問題なし」「不精確性で格下げ」などと判断したのかが分かりません。つまり、certainty評価が再現可能な方法論的判断ではなく、作成者の印象評価になってしまいます。

3. SRではなく、文献集になっている問題

システマティックレビューとは、単に検索して見つかった論文を並べる作業ではありません。事前にPICOと適格基準を決め、研究を選択し、RoBを評価し、アウトカムごとにエビデンスを統合し、その結果を推奨判断に接続する作業です。

ところが実際には、「検索した結果、いくつかの論文が見つかったので、それぞれを解説した」というだけのものがSRと呼ばれていることがあります。これは、SRではなく文献集です。文献集では、都合のよい論文が強調されたり、不都合な結果が弱く扱われたりしても、読者が検証しにくくなります。ユーザー作成資料でも、「SRを行った」と書きながら、実態は数本の論文解説に近い例が問題として挙げられています。

4. SR/NMA、RCT、観察研究、症例集積を同列に扱う問題

既存SRやNMA、RCT、観察研究、症例集積、レビュー論文は、同じ種類のエビデンスではありません。既存SRやNMAは二次研究であり、RCTや観察研究は一次研究です。症例集積は比較効果の推定にはさらに大きな限界があります。

これらを階層化せずに、「SRではこうだった、RCTではこうだった、観察研究ではこうだった」と横並びに比較すると、エビデンスの単位が混乱します。さらに、既存SRに含まれるRCTを、別の一次研究として再び数えてしまう重複カウントの危険もあります。異なる研究デザインを同じ重みで扱えば、推奨の根拠が実際より強く見えることがあります。

5. 観察研究をraw dataでメタ分析する問題

観察研究では、治療を受けた群と受けなかった群の背景が最初から違います。重症度、年齢、併存疾患、施設、治療選択の理由などが異なるため、単純なイベント数の比較は治療効果ではなく、患者背景の違いを反映している可能性があります。

それにもかかわらず、観察研究から症例数とイベント数だけを抜き出し、RCTと同じようにORやRRを計算してメタ分析する例があります。これは統計ソフトでは計算できますが、疫学的には危険です。調整済みOR/RR/HR、傾向スコア、多変量調整などを考慮しなければ、交絡によって作られた見かけの効果を、治療効果と誤解することになります。

6. 観察研究のcertaintyを不自然に高くする問題

観察研究は、たとえ症例数が多くても、交絡や選択バイアスの問題を避けられません。p値が小さい、症例数が多い、有意差がある、という理由だけでcertaintyを「中」以上にするのは誤りです。

ここで混同されやすいのは、「精度」と「妥当性」です。症例数が多ければ信頼区間は狭くなりますが、バイアスが小さくなるわけではありません。大きなデータであっても、交絡が残っていれば、間違った推定値を非常に精密に出しているだけかもしれません。観察研究のcertaintyを上げるには、GRADEの正当なupgrade理由や、ROBINS-I等による妥当なバイアス評価が必要です。

7. アウトカムが同じ方向だから最高certaintyを採る問題

複数の重大アウトカムがあり、それぞれcertaintyが異なる場合、「同じ方向だから一番高いcertaintyをoverall certaintyにする」という処理は危険です。たとえば、検査値は高certaintyで改善していても、死亡、QOL、重大有害事象は低certaintyかもしれません。

推奨にとって重要なのは、どのアウトカムが意思決定を主導しているかです。すべての重大アウトカムを同じ重みで扱い、都合よく高いcertaintyだけを採用すると、推奨の不確実性が隠れてしまいます。逆に、常に最低certaintyに合わせればよいという単純な話でもありません。必要なのは、decision-driving outcomeを明示し、そのcertaintyと推奨判断の関係を説明することです。

8. サロゲートアウトカムを都合よく使う問題

サロゲートアウトカムを使うこと自体は悪くありません。疾患領域によっては、死亡、発症、QOL、機能などの患者重要アウトカムを直接評価することが難しく、検査値、画像所見、疾患活動性スコア、バイオマーカーなどを使わざるを得ない場合があります。

問題は、サロゲートが患者にとって本当に重要なアウトカムにつながるのかを説明せず、都合のよいサロゲートだけを選んで推奨根拠にすることです。検査値が改善しても、患者の症状、生活の質、生命予後、有害事象が改善するとは限りません。サロゲートを使うなら、その間接性を認め、患者重要アウトカムとの関係を説明し、必要ならcertaintyで非直接性として扱う必要があります。

9. 有意差あり／なしだけで判断する問題

「有意差あり」は「臨床的に重要」という意味ではありません。大規模研究では、患者にとってほとんど意味のない小さな差でもp値が有意になることがあります。一方で、「有意差なし」は「効果がない」「差がない」「同等」「非劣性」を意味しません。

この誤解は、推奨を大きく歪めます。有意差がない研究でも、信頼区間が大きな利益と大きな害の両方を含んでいれば、結論は「分からない」です。同等性や非劣性を主張するには、事前に決めたマージンと信頼区間に基づく評価が必要です。p値だけで推奨方向を決めるのは、臨床判断として不十分です。

10. 相対効果だけで推奨する問題

RR 0.50やOR 0.35のような相対効果は、効果を大きく見せることがあります。しかし、患者にとって重要なのは、多くの場合、絶対効果です。もともとのリスクが非常に低ければ、相対リスクが半分になっても、実際に利益を受ける患者はごく少数かもしれません。

たとえば、発症リスクが0.2%から0.1%になる場合、相対的には50%低下ですが、絶対差は0.1%です。推奨を決めるには、ベースラインリスク、絶対リスク差、NNT/NNH、MID、患者にとって意味のある差を考える必要があります。相対効果だけを強調すると、利益が過大評価されやすくなります。

11. EtDを使ったと書くが、判断過程が見えない問題

EtDは、単に「考慮した」と書くための飾りではありません。エビデンスの確実性、利益と害のバランス、患者の価値観・意向、負担、必要に応じて費用、資源、公平性、実行可能性などを整理し、なぜその推奨方向・推奨強度になったのかを説明するための枠組みです。

Core GRADEの観点では、費用、資源、公平性、実行可能性などは文脈によって扱いが変わり、常に詳細な記載が必須というわけではありません。しかし、患者の価値観・意向や、利益と害のバランスが推奨判断にどうつながったのかは中核的です。方法章でEtDやMinds/GRADEを使ったと書きながら、本文では論文結果だけを示して突然推奨が出るなら、EtDは実質的に機能していません。

12. エビデンス要約の直後に推奨が突然出る問題

信頼できるCPGでは、「エビデンスがこうだった」だけでなく、「だからなぜその推奨になったのか」が説明されます。推奨は、効果の大きさ、害、certainty、患者価値観、負担、臨床的文脈を踏まえた判断だからです。

ところが、論文結果を数段落で説明したあと、突然「したがって推奨する」と書かれているCPGがあります。この場合、読者は、推奨方向や推奨強度がどの判断に基づくのかを検証できません。「パネルで合意した」「投票で決めた」という記載も、理由の説明にはなりません。合意形成は重要ですが、合意に至った論理が見えなければ、実質的には専門家意見の追認に近くなります。

## Annotated reference list for Mode 2 and Mode 4

Mode 2 and Mode 4 must include an annotated reference list after the 12-item
educational article. Do not omit it merely because the Final rating is already
shown. Mode 2 may use a compact version only if the answer would otherwise be
unusable, but it should still include the key URLs and one-line relevance notes.
Mode 4 should include the full list. These references support education and
methodological interpretation; they are not a separate scoring system.

Use this list:

- Lima JP, Mirza RD, Guyatt GH. How to recognize a trustworthy clinical
  practice guideline. 2023.
  URL: https://doi.org/10.1186/s44158-023-00094-7
  PubMed: https://pubmed.ncbi.nlm.nih.gov/37386667/
  信頼できるCPGを見分ける6つの問いを示した実用的な総説です。

- Lima JP, Tangamornsuksan W, Guyatt GH. Trustworthy evidence-based versus
  untrustworthy guidelines: detecting the difference. 2023.
  URL: https://doi.org/10.1136/fmch-2023-002437
  PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC10565152/
  信頼できるCPGと信頼できないCPGの違いを整理した、監査者向けに使いやすい文献です。

- Institute of Medicine. Clinical Practice Guidelines We Can Trust. 2011.
  URL: https://doi.org/10.17226/13058
  NAP: https://nap.nationalacademies.org/catalog/13058/clinical-practice-guidelines-we-can-trust
  透明性、COI、パネル構成、SRとの接続、推奨の根拠づけを扱う古典的基準です。

- Schunemann HJ, et al. Requirements for claiming the use of GRADE. J Clin
  Epidemiol. 2023.
  URL: https://doi.org/10.1016/j.jclinepi.2023.05.010
  Full text: https://www.jclinepi.com/article/S0895-4356(23)00122-1/fulltext
  「GRADEを使った」と主張するための条件を確認する文献です。

- GRADE Handbook.
  URL: https://gradepro.org/handbook/
  GRADEによるcertainty評価と推奨作成の基本資料です。

- GRADE Evidence to Decision frameworks. BMJ. 2016.
  Part 1 URL: https://doi.org/10.1136/bmj.i2016
  Part 2 URL: https://doi.org/10.1136/bmj.i2089
  EtDでエビデンスから推奨へ進む判断過程を透明化するための基本文献です。

- PRISMA 2020.
  URL: https://www.prisma-statement.org/prisma-2020-checklist
  SRとして何を報告すべきかを見るための基本チェックリストです。

- AMSTAR 2.
  URL: https://doi.org/10.1136/bmj.j4008
  BMJ: https://www.bmj.com/content/358/bmj.j4008
  既存SR/NMAを使う場合、その質を評価するための基本ツールです。

- RoB 2.
  URL: https://methods.cochrane.org/bias/resources/rob-2-revised-cochrane-risk-bias-tool-randomized-trials
  RCTのrisk of bias評価に使う基本ツールです。

- ROBINS-I.
  URL: https://doi.org/10.1136/bmj.i4919
  BMJ: https://www.bmj.com/content/355/bmj.i4919
  非ランダム化研究・観察研究のrisk of bias評価に使う基本文献です。

- AGREE II.
  URL: https://www.agreetrust.org/wp-content/uploads/2017/12/AGREE-II-Users-Manual-and-23-item-Instrument-2009-Update-2017.pdf
  CPGの報告整備度を見る基本ツールです。ただしAGREE II高得点はGRADE的な推奨妥当性を保証しません。

- Dahm P, et al. Analysis of European Association of Urology Guidelines 2023
  and its adherence to GRADE methodology. 2024.
  URL: https://doi.org/10.1002/gin2.70004
  Wiley: https://onlinelibrary.wiley.com/doi/10.1002/gin2.70004
  「GRADE採用」記載と実運用がずれることがある実例として有用です。

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
