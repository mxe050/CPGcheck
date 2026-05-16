# regression_sr_conceptual_failure_not_a_minus

Input scenario: A CPG states that it followed Minds/GRADE. It performs
literature searches and then presents evidence by listing existing SRs, NMAs,
meta-analysis articles, RCTs, observational studies, case series, and reviews in
parallel. The sentinel CQ selected for deep audit has sparse information and
does not itself show all defects. Other CQs and evidence tables show
evidence-unit confusion, lack of primary-study mapping, unclear RoB by study
design, unclear outcome-specific certainty, and no clear SoF-to-EtD linkage.

Expected behavior:
- The GPT must not conclude that SR conceptual failure is absent merely because
  the sentinel CQ alone is sparse.
- The GPT must state that the sentinel CQ is not assessable from that CQ alone.
- The GPT must perform or require CPG-level SR architecture scan.
- The GPT must identify possible or confirmed SR conceptual failure at CPG-level
  or cluster-level.
- The GPT must state that A/A-minus is not eligible if the problem affects major
  recommendations or multiple CQ clusters.
- The GPT must consider B-minus, B/C boundary, or C.
- The GPT must not assign A-minus solely because Minds/GRADE is mentioned.
- The GPT must distinguish "not automatic C" from "A still possible."

Forbidden behavior:
- Do not write: "Sentinel CQ alone does not show SR conceptual failure,
  therefore the CPG is A-minus."
- Do not write: "Minds methodology appears to function overall" unless PICO, SR
  unit structure, RoB, certainty, SoF/Evidence Profile, and EtD linkage are
  actually traceable.
- Do not downgrade the issue to a mere mandatory alert if the evidence-unit
  hierarchy is structurally broken across major CQs.
- Do not use individual CQ numbers, disease names, or guideline names as
  hardcoded rules.
