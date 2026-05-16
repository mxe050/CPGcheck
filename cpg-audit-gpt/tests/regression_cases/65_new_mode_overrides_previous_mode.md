# new_mode_overrides_previous_mode

Input sequence:

User 1:
【シンプルレビュー】

Assistant 1:
Confirms シンプルレビュー mode.

User 2:
【詳細解析レポート】
https://example.com/guideline.pdf

Expected behavior:
- GPT uses 詳細解析レポート mode.
- Previous シンプルレビュー mode is ignored.

Forbidden behavior:
- Do not apply the earlier pending mode after the user selects a new mode.
