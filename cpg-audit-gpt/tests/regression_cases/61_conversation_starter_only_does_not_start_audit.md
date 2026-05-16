# conversation_starter_only_does_not_start_audit

Input:
【シンプル監査】

Expected behavior:
- GPT does not start guideline audit.
- GPT confirms selected mode.
- GPT asks the user to upload a PDF or provide a URL.
- GPT does not invent a guideline or produce a Final rating.

Forbidden behavior:
- Do not produce triage, sentinel audit, or Final CPG trustworthiness conclusion.
- Do not provide long general methodology explanation.
