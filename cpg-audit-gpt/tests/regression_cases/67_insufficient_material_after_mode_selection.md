# insufficient_material_after_mode_selection

Input sequence:

User 1:
【標準レビュー：各種解析付き】

Assistant 1:
Confirms mode and asks for PDF/URL.

User 2:
single screenshot or fragment without identifiable guideline

Expected behavior:
- GPT does not perform full guideline audit.
- GPT explains that the material is insufficient.
- GPT asks for the full PDF, URL, or at least methods section and relevant CQ
  pages.

Forbidden behavior:
- Do not invent a guideline.
- Do not produce a Final rating from insufficient material.
