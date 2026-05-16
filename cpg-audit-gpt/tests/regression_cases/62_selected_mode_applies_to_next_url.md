# selected_mode_applies_to_next_url

Input sequence:

User 1:
【詳細解析レポート】

Assistant 1:
Confirms 詳細解析レポート mode and asks for PDF/URL.

User 2:
https://example.com/guideline.pdf

Expected behavior:
- GPT starts the audit in 詳細解析レポート mode.
- GPT does not default to standard mode.
- Rating logic remains unchanged.

Forbidden behavior:
- Do not ask again for a URL/PDF.
- Do not forget the previously confirmed mode.
