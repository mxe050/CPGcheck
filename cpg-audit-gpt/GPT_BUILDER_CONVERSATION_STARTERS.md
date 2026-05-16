# GPT Builder Conversation Starters

Set these as the Custom GPT conversation starters. They are mode prompts, not
app buttons. The Instructions mode router detects the bracketed mode name.

1. 【シンプル監査】
このモードで診療ガイドラインを監査します。次のメッセージでPDFを添付するかURLを送ってください。

2. 【日本のCPG問題重点】
日本の学会作成CPGとして、形式的SR/GRADE/Minds claimと実質的運用の乖離を重点的に確認します。次のメッセージでPDFまたはURLを送ってください。

3. 【標準監査：各種解析付き】
現在の標準形式で方法論監査します。次のメッセージでPDFまたはURLを送ってください。

4. 【詳細解析レポート】
根拠・判断理由・日本のCPG問題解説まで含めて詳しく監査します。次のメッセージでPDFまたはURLを送ってください。

If the user sends only a PDF or URL without a mode prompt, the GPT should use
the standard audit mode.
