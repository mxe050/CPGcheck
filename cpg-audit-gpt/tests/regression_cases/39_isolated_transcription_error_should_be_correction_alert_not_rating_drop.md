# Regression case: isolated transcription error is correction alert, not rating drop

Synthetic input:
A table has an isolated transcription or cell error. The linked SoF, EtD,
recommendation direction, recommendation strength, certainty judgment, and
limitation explanation are internally coherent.

Expected behavior:
Report a mandatory correction alert, but do not downgrade the whole CPG if the
error does not change direction, strength, certainty, or EtD.
