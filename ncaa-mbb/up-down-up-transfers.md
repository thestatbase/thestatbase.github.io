---
layout: default
title: Up-Down-Up Transfer Analysis
description: 503 players, 2020-26. A three-phase analysis of players who transferred from a competitive program to a weaker one and then returned to a competitive program. Only 45.3% meet the success threshold.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">StatBase</a> <span>/</span> <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span> Up-Down-Up Transfers
</div>

<div class="page-header">
  <div class="page-category ncaa">NCAA Men's Basketball · Transfer Analysis</div>
  <h1>Up-Down-Up Transfer Analysis</h1>
  <div class="page-meta">503 Players · 2020–21 thru 2025–26 · D1 + D2 · All stats per 40 minutes</div>
</div>

<div class="page-content">

<div class="stat-row">
  <div class="stat-card">
    <span class="stat-value">503</span>
    <span class="stat-label">Players Tracked</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">45.3%</span>
    <span class="stat-label">Phase 3 Success Rate</span>
  </div>
  <div class="stat-card">
    <span class="stat-value">r = 0.449</span>
    <span class="stat-label">Best Single Predictor (WARP/40)</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">r = 0.245</span>
    <span class="stat-label">Best Trajectory Predictor (ΔAST/40)</span>
  </div>
</div>

## Project Overview

The up-down-up transfer path describes a specific three-phase pattern where a player begins at a competitive program (Phase 1), transfers to a weaker program or D2 school (Phase 2), and then returns to a more competitive program (Phase 3). The assumption most people make is that if a player proved themselves at the weaker school they can replicate that performance at a better one, but in reality only 45.3% of these transfers are successful according to the threshold used in this analysis. That number should be the first thing anyone sees when evaluating a player on this path.

### Defining the Phases and Success Metric

Phase 1 is the original competitive program, Phase 2 is the weaker or D2 school, and Phase 3 is the return to a competitive program. All statistics are normalized to per-40-minute rates to remove playing time effects. Success is defined as Phase 3 WARP/40 being greater than or equal to Phase 2 WARP/40 minus 0.005, which is a relative bar rather than an absolute one. A player must come close to maintaining what they did at the down school rather than clearing some external threshold. Please note that this distinction matters significantly for how to read the TI tier chart, and it is explained in full on the <a href="{{ '/ncaa-mbb/translatability-index/' | relative_url }}">Translatability Index page</a>.

## The Translatability Index (TI)

A composite 0-100 score was built to quantify the likelihood of Phase 3 success. The full methodology, including components, weights, and an explanation of the paradox in the success-rate-by-tier chart, is detailed on the <a href="{{ '/ncaa-mbb/translatability-index/' | relative_url }}">Translatability Index page</a>. The TI shows a correlation of r = 0.375 (p less than 0.001) against Phase 3 WARP/40, and r = -0.308 against binary success. The negative correlation with binary success is not a flaw in the index but rather a consequence of how the relative success bar interacts with each player's Phase 2 baseline, as players with higher TI scores also faced a higher threshold to clear.

## Dataset Overview

The 503 players in this dataset follow a clearly structured path when their KenPom distributions are examined across all three phases. Phase 1 sits in the upper KenPom range, Phase 2 sits noticeably lower as expected for the down school, and Phase 3 returns to the middle-to-upper range. The violin shapes confirm this is not one blob of overlapping distributions but a path with real structure.

The most common archetype at Phase 2 is Primary Ball Handler by count, followed by Shot Creator / Slasher, Post Scorer, Secondary Ball Handler, and Athletic Finisher. Stationary Shooters and Stretch Bigs are less common in the dataset but show notably higher success rates, which is likely a function of lower usage and a skill set that travels more cleanly across competition levels.

Success by jump size follows a clear gradient: Q1 (small jump) shows the highest success rate in the dataset, Q2 (moderate) is second highest, Q3 (large) falls off considerably, and Q4 (huge jump) shows the worst success rate. A jump size outside the small-to-moderate range is essentially a guarantee of a production falloff.

## Per-40 Stat Trajectory Across All Three Phases

The main box statistics, normalized per 40 minutes to remove playing time bias, tell an informative story across the three phases. AST/40 holds better than PTS/40 across the full arc, which is an important finding in this context. Playmaking under pressure is a skill that a player developed, while scoring totals against weaker defenders are at least partially a function of the competition level rather than a true measure of skill.

Phase 1 versus Phase 3 differentials are also smaller than expected. Phase 1 numbers were typically suppressed by limited playing opportunity rather than inferior skill, as players were often performing at a reasonable level but not receiving the court time to demonstrate it fully.

## Freshman to Sophomore at the Down School

161 of the 503 players had two or more seasons at the down school, and the year-over-year statistical changes in those seasons are among the best predictors of Phase 3 outcomes in the entire dataset. ΔAST/40 is the single best predictor of Phase 3 WARP/40 in this group (r = 0.245, p less than 0.01), ahead of scoring, efficiency, and every other metric tested. A player who becomes a meaningfully better playmaker in Year 2 at a weak school is developing a real skill rather than exploiting bad defenders. Please note that this finding is likely partially skewed by the high proportion of point guards in this dataset, as assists are considerably more meaningful for primary ball handlers than for other position archetypes.

Players who improved both AST/40 and TS% from Year 1 to Year 2 showed meaningfully higher Phase 3 WARP/40 than those who improved only one or neither, and the gap is large enough to function as a real scouting filter. Two positives together signal genuine development rather than circumstance.

### Trajectory Types at the Down School

The trajectory classification reveals the most practically important finding in this section. Players classified as Developing Stars (PTS + AST + TS% all up) show the best Phase 3 outcomes by a wide margin. Efficiency Refiners (TS% up, PTS down) show decent outcomes and are consistently underestimated by evaluators who focus primarily on scoring. Volume Padders (PTS up, TS% down) perform worse in Phase 3 than their raw Phase 2 statistics would suggest, because more points from falling efficiency indicates that the player is inflating production against weak competition rather than developing transferable skills. Stalling Out players (PTS, AST, and TS% all flat or declining) show the worst Phase 3 outcomes. The Volume Padder finding in particular matters because it means that taking a high-scoring player from the down school at face value without examining the efficiency trend is a predictable evaluation error.

## Phase 2 Statistics That Predict Phase 3 WARP/40

The pattern across every Phase 2 statistical category is consistent: efficiency stats travel to higher competition levels and volume stats do not. WARP/40 at Phase 2 is the best single predictor (r = 0.449, p less than 0.001), followed by WS/40 (r approximately 0.38) and TS% (r approximately 0.30). PTS/40 and AST/40 are positive but weaker predictors.

USG% is slightly negative as a predictor, which is the most counterintuitive result in the dataset but makes sense on reflection. A player carrying a weak team on 28% usage is not the same player as one posting efficient numbers on 20% usage, because the high-usage player is often being propped up by the level of competition rather than demonstrating genuine superiority. Stationary Shooters cluster in the top-right of the Phase 2 versus Phase 3 WARP/40 scatter, showing high production in both phases with reliable translation. Post Scorers scatter everywhere with no reliable pattern because so much of their Phase 3 outcome depends on system fit at the return school.

## System Fit: Archetype Versus Return Team System

The same player archetype in a different return team system produces very different Phase 3 outcomes, and the team a player is entering matters nearly as much as how good the player is. This is a factor that gets ignored frequently in transfer evaluations.

The strongest combinations are Stationary Shooters in Perimeter Shooting systems (the highest average WARP/40 in the dataset) and Stationary Shooters in Pace and Space systems, as both create the catch-and-shoot opportunities that this archetype depends on. The weakest combinations are Post Scorers in Transition Offense systems, where fast pace eliminates their half-court touches, and Ball Handlers in Isolation systems, where there is no room for a second creator. Off-Screen Shooters in Isolation systems also show poor outcomes because the system does not generate the off-ball movement they rely on to get open. Every one of the best archetype-system combinations involves a logical skill-to-system match, and every one of the worst combinations involves a mismatch that a careful evaluation process should identify before recruiting.

## Summary

Only 45.3% of up-down-up transfers meet the relative success bar. WARP/40 at Phase 2 (r = 0.449) is the single best predictor and should be the first number examined. Efficiency stats travel to higher competition and volume stats do not. High USG% at the down school is a warning sign rather than a positive indicator. For players with two or more seasons at the down school, improvements in both AST/40 and TS% together signal genuine development. A player who is scoring more while shooting worse (Volume Padder) should have their raw numbers discounted. System fit at the return school matters nearly as much as player quality, and mapping the archetype to the system should be part of any serious evaluation.

</div>
