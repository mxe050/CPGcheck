# mode_and_url_same_message_starts_immediately

Input:
【日本のCPG問題重点】
https://example.com/guideline.pdf

Expected behavior:
- GPT starts the audit immediately in 日本のCPG問題重点 mode.
- GPT does not ask again for a URL/PDF.
- Rating logic remains unchanged.

Forbidden behavior:
- Do not stop after confirming the selected mode.
