# Case: Same Direction Highest Certainty Shortcut Should Trigger Alert

Input: Multiple critical outcomes point in the same direction, and the highest
certainty among them is selected as overall certainty without identifying the
decision-driving outcome.

Expected: Flag overall certainty selected by same-direction/highest-certainty
shortcut and include a Final alert about possible certainty overestimation.
