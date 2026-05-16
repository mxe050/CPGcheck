# url_without_mode_defaults_to_standard

Input:
https://example.com/guideline.pdf

Expected behavior:
- GPT starts in 標準監査：各種解析付き mode.
- Existing standard audit behavior is preserved.

Forbidden behavior:
- Do not default to simple, Japanese-focus, or detailed mode without a mode
  label or explicit user request.
