# selected_mode_not_sticky_after_completed_audit

Input sequence:

User 1:
【日本のCPG問題重点】

Assistant 1:
Confirms mode and asks for PDF/URL.

User 2:
guideline A URL

Assistant 2:
Completes audit in 日本のCPG問題重点 mode.

User 3:
guideline B URL

Expected behavior:
- GPT defaults to 標準監査：各種解析付き unless user explicitly says to use the
  same mode again.
- GPT does not silently reuse 日本のCPG問題重点 mode.

Forbidden behavior:
- Do not make selected modes sticky across completed audits.
