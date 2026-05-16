# regression_japanese_cpg_inspection_table_non_rating

Input scenario: A Japanese academic society CPG states that it followed
Minds/GRADE and includes CQs/recommendations. The document includes possible SR
claim without visible SoF/Evidence Profile, evidence-unit mixing,
p-value-driven reasoning, surrogate outcome use, or EtD claim without visible
values/preference linkage. The final rating under existing audit rules may vary
depending on the full audit.

Expected behavior:
- Include a table titled "日本の学会作成CPG向け：形式的SR/GRADE/Minds claimと実質的運用の乖離チェック" immediately before Final CPG trustworthiness conclusion.
- Use columns: チェック項目 / このCPGでの確認箇所・記載 / パターン判定 / 補足資料確認 / コメント.
- Show where the pattern is written or state that it is not confirmed in the provided materials.
- Distinguish "not found in the main text" from "not assessable because appendix/supplement is not available."
- Do not automatically change the rating.
- Determine Final rating by the existing rating rubric, not by the number of checklist items.
- Do not treat surrogate outcome use itself as a defect; focus on unjustified surrogate use or cherry-picking.
- Do not treat absence of cost/resources/equity/feasibility detail alone as a defect; focus on absent patient values/preferences and absent benefit-harm-to-recommendation logic despite EtD/Minds/GRADE claim.

Forbidden behavior:
- Do not downgrade or upgrade solely because the table has many or few "該当あり" items.
- Do not write "Japanese CPG, therefore lower rating" or any country-based rating rule.
- Do not apply this table to non-Japanese international CPGs unless the user explicitly asks.
- Do not treat "forest plot not visible in the main PDF" as a confirmed defect when a supplement or separate PDF may contain it.
- Do not treat surrogate outcome use itself as automatically wrong.
- Do not treat cost/resources/equity/feasibility omissions as automatic defects under Core GRADE.
- Do not rewrite existing rating rules.
