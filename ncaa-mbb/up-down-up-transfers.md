---
layout: default
title: Up-Down-Up Transfer Analysis
description: 503 players, 2020-26. A three-phase analysis of players who transferred from a competitive program to a weaker one and then returned to a competitive program. Only 45.3% meet the success threshold.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
  <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span>
  Up-Down-Up Transfers
</div>

<div class="page-header">
  <div class="page-category ncaa">NCAA Men's Basketball &middot; Transfer Analysis</div>
  <h1>Up-Down-Up Transfer Analysis</h1>
  <div class="page-meta">503 Players &middot; 2020&ndash;21 thru 2025&ndash;26 &middot; D1 + D2 &middot; Data sourced from cbbanalytics.com</div>
</div>

<div class="page-content" markdown="1">

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
    <span class="stat-value">r&nbsp;=&nbsp;0.449</span>
    <span class="stat-label">Best Predictor (WARP/40)</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">r&nbsp;=&nbsp;0.375</span>
    <span class="stat-label">Index Fit (TI vs Phase 3)</span>
  </div>
</div>

## Project Overview and Goal

The up-down-up transfer path describes a specific three-phase pattern tracked across 503 college basketball players between the 2020-21 and 2025-26 seasons. All statistics are normalized to per-40-minute rates to remove playing time effects and prevent differences in court time from distorting the comparisons.

* **Phase 1** is the original competitive program, where players typically struggled for minutes or production at a higher level of competition.
* **Phase 2** is the down school, where the player transferred and saw expanded opportunity and larger statistical volume. This includes moving from D1 to D2, or from a higher-level D1 to a lower-level D1 (with tier quality determined by KenPom AdjEM ratings).
* **Phase 3** is the return school, when the player jumps back up to a higher-level D1 program.

The goal of this project was to develop a method to predict if a player would maintain or further improve their impact—measured by the change in Wins Above Replacement Player per 40 minutes (&Delta;WARP/40)—when transitioning from Phase 2 to Phase 3. This predictive method is called the Translatability Index (TI).

The common assumption most coaches and evaluators make is that if a player proved themselves at a weaker school, they can seamlessly replicate that performance at a better one. In reality, the up-down-up path fails more often than it succeeds: only 45.3% of these transfers are successful. In this analysis, success is defined relatively as a Phase 3 WARP/40 being greater than or equal to Phase 2 WARP/40 minus 0.005. A player must come close to maintaining their down-school efficiency rather than clearing some arbitrary external threshold.

### The Translatability Index (TI)

A composite 0&ndash;100 score was built to quantify the likelihood of Phase 3 success. The TI correlates with Phase 3 WARP/40 at r = 0.375 (p less than 0.001) across all 503 players, making it a stronger predictor of future performance than any single Phase 2 counting statistic evaluated in isolation. 

Interestingly, the TI shows a negative correlation of r = &minus;0.308 against binary success. This is not a flaw in the index, but rather a consequence of how the relative success bar interacts with each player's Phase 2 baseline; players with the highest TI scores performed at an elite level in Phase 2, meaning they faced a much higher statistical threshold to clear in Phase 3. Please note that this distinction matters significantly for how to read the TI tier chart, and it is explained in full on the <a href="{{ '/ncaa-mbb/translatability-index/' | relative_url }}">Translatability Index page</a>.

## Dataset Overview and Player Archetypes

The 503 players in this dataset follow a clearly structured path when their KenPom distributions are examined across all three phases. Phase 1 sits in the upper KenPom range, Phase 2 sits noticeably lower as expected for the down school, and Phase 3 returns to the middle-to-upper range. The violin shapes confirm this is a path with real structural definition.

The most common player archetype at Phase 2 is Primary Ball Handler by count, followed by Shot Creator / Slasher, Post Scorer, Secondary Ball Handler, and Athletic Finisher. Stationary Shooters and Stretch Bigs are less common in the dataset but show notably higher success rates, which is likely a function of lower usage and a skill set that travels more cleanly across competition levels.

## Freshman to Sophomore at the Down School

Of the total dataset, 161 players spent two or more seasons at the down school. The year-over-year statistical changes in those consecutive seasons provide the single clearest development signal in the entire dataset. Improving both AST/40 and True Shooting percentage (TS%) from Year 1 to Year 2 serves as a massive indicator; these players averaged meaningfully higher Phase 3 WARP/40 than those who improved only one or neither metric. 

Looking closely at year-over-year adjustments, &Delta;AST/40 is the single best individual trajectory predictor of Phase 3 WARP/40 in this group (r = 0.245, p less than 0.01), ahead of raw scoring and efficiency. A player who becomes a meaningfully better playmaker in Year 2 at a weak school is developing a real skill rather than exploiting bad defenders, though this finding is partially skewed by the high proportion of point guards in the dataset as assists are considerably more meaningful for primary ball handlers than for other position archetypes.

### Trajectory Types at the Down School

The trajectory classification reveals the most practically important finding in this section:
* **Developing Stars** (PTS, AST, and TS% all up) show the best Phase 3 outcomes by a wide margin.
* **Efficiency Refiners** (TS% up, PTS down) show decent outcomes and are consistently underestimated by evaluators who focus primarily on scoring volume.
* **Volume Padders** (PTS up, TS% down) perform worse in Phase 3 than their raw Phase 2 statistics would suggest. More points derived from falling efficiency indicates that the player is inflating production against weak competition rather than developing transferable skills. Taking a high-scoring transfer at face value without examining the efficiency trend is a predictable evaluation error.
* **Stalling Out** players (PTS, AST, and TS% all flat or declining) show the worst Phase 3 outcomes.

## Phase 2 Statistics That Predict Phase 3 WARP/40

The pattern across every Phase 2 statistical category is consistent: efficiency stats travel to higher competition levels and volume stats do not. True Shooting percentage is the second strongest individual predictor in the dataset, reflecting the fact that shooting efficiency is an incredibly portable basketball skill. 

Phase 2 WARP/40 is the best single individual predictor at r = 0.449 (p less than 0.001), meaning players who were genuinely impactful at driving team wins at the down school carry that impact forward at a meaningfully higher rate than players who were simply volume producers. 

Conversely, USG% is slightly negative as a predictor. A player carrying a weak team on 28% usage is often being propped up by the level of competition rather than demonstrating genuine superiority over a player posting efficient numbers on 20% usage. Stationary Shooters cluster in the top-right of the Phase 2 versus Phase 3 WARP/40 scatter, showing high production in both phases with reliable translation. Post Scorers scatter everywhere with no reliable pattern because so much of their Phase 3 outcome depends on system fit at the return school.

## System Fit: Archetype Versus Return Team System

System fit is one of the most underappreciated factors in transfer evaluation, and the data shows the effect is large enough to matter nearly as much as the player's own skill level. The same player archetype in a different return team system produces very different Phase 3 outcomes; the best player-system combinations in the dataset produce Phase 3 WARP/40 averages more than twice as high as the worst combinations.

* **Strongest Combinations:** Stationary Shooters placed in Perimeter Shooting systems or Pace and Space teams produce some of the highest Phase 3 WARP/40 averages in the dataset because those systems create exactly the catch-and-shoot opportunities that define the archetype's value.
* **Weakest Combinations:** Post Scorers in Transition Offense systems produce some of the worst outcomes because fast-paced teams generate fewer half-court possessions, and the half-court post touch is the only situation where a Post Scorer's skill set is actually useful. Similarly, Ball Handlers or Off-Screen Shooters in heavy Isolation systems perform poorly because the system fails to generate the ball movement and off-ball screens they rely on.

Before targeting a transfer, mapping the player's Phase 2 archetype to the system they would be joining is a critical filter. If the combination has historically produced poor outcomes, that structural risk needs to be factored into the recruitment process.

## Jump Size and Model Limitations

Success by jump size follows a clear gradient. Players making small KenPom jumps back up (Q1 and Q2) succeed at significantly higher rates than those making large leaps, and the top quartile of jump sizes (Q4) produces the worst outcomes in the dataset. A jump size outside the small-to-moderate range is a strong historical indicator of a production falloff. 

A high TI score partially compensates for a large jump, but the jump size effect remains real even at high TI levels. A player with an Elite TI making a large jump is a calculated gamble with data support behind it. A player with a Low TI making that same large jump is an acquisition the data consistently argues against.

### Model Limitations

Please note that this quantitative framework cannot always account for a player's true potential correctly. It is structurally unable to include certain critical contextual factors that may heavily affect performance, such as mid-season roster injuries, significant role changes within the new coaching staff, or personal circumstances that influenced the player's decision to transfer.

</div>
