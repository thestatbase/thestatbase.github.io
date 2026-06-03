---
layout: default
title: D2-to-D1 Transfer Analysis
description: 566 players, 2020-26. A rigorous look at what happens to production when players make the jump from Division II to Division I. Only 17.0% maintain relative production, but the profile of a player who translates is identifiable.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
  <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span>
  D2-to-D1 Transfers
</div>

<div class="page-header">
  <div class="page-header-inner">
  <div class="page-category ncaa">NCAA Men's Basketball &middot; Transfer Analysis</div>
  <h1>D2-to-D1 Transfer Analysis</h1>
  <div class="page-meta">566 Players &middot; 2020&ndash;21 thru 2025&ndash;26 &middot; D2 + D1 &middot; All stats per 40 minutes</div>
  </div>
</div>

<div class="page-content">

<div class="stat-row">
  <div class="stat-card">
    <span class="stat-value">566</span>
    <span class="stat-label">Players Tracked</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">17.0%</span>
    <span class="stat-label">Phase 2 Success Rate</span>
  </div>
  <div class="stat-card">
    <span class="stat-value">&minus;0.123</span>
    <span class="stat-label">Avg WARP/40 Drop</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">r&nbsp;=&nbsp;0.386</span>
    <span class="stat-label">Best Predictor (WS/40)</span>
  </div>
</div>

## Project Overview

This project tracks 566 players who transferred from D2 to D1 between the 2020&ndash;21 and 2025&ndash;26 seasons, examining how production translates across that level gap. Most players who proved themselves at D2 cannot hold their production level at D1 because the competition gap is real and the role they held at D2 compresses when they arrive at a program with better teammates. The 17.0% relative success rate describes how many players came close to matching what they did at D2. The 61.8% positive absolute WARP/40 number describes the different question of how many players produce anything positive at D1 at all. Both numbers are meaningful, and evaluators who treat them as measuring the same thing make predictable errors.

### Defining the Phases and Success Metric

Phase 1 is the D2 career, with the final season used as the primary reference point, and Phase 2 is the first D1 season. All statistics are normalized to per-40-minute rates to remove playing time effects. Success is defined as Phase 2 WARP/40 being greater than or equal to Phase 1 WARP/40 minus 0.005, which is a relative bar rather than an absolute one. Please note that the same paradox from the Up-Down-Up analysis applies here: players with higher D2 production face a higher threshold to clear, which is why the success-rate-by-TI-tier chart looks counterintuitive. The full explanation is available on the <a href="{{ '/ncaa-mbb/translatability-index/' | relative_url }}">Translatability Index page</a>.

## The Translatability Index (TI)

A separate TI was built for this population, also a composite 0&ndash;100 score. The full methodology is available on the <a href="{{ '/ncaa-mbb/translatability-index/' | relative_url }}">Translatability Index page</a>. The TI shows a correlation of r = 0.313 (p less than 0.001) against Phase 2 WARP/40, which outperforms most individual statistics as a ranking tool. The System Fit component shows the strongest individual correlation (r = 0.426 on its own), meaning that the archetype-to-D1-system lookup does real predictive work independently of how good the player is.

## Dataset Overview

78.4% of the 566 players land at D1 programs with below-average Net Rating Adjusted, and the mean D1 landing Net Rtg Adj is &minus;1.74, confirming that most end up at low-major or lower mid-major programs. Very few players make the jump into genuinely strong D1 programs, as those programs recruit from within D1.

The most common archetype at D2 is Shot Creator / Slasher (217 players), by a wide margin, followed by Off-Screen / Movement Shooter (143) and Versatile Big (134). The dominance of the Shot Creator category reflects how D2 offenses are often structured around a primary scorer, making that archetype the most common template at the lower level.

The best absolute Phase 2 WARP/40 by archetype belongs to Versatile Big, Post Scorer, and Primary Ball Handler. Roll and Cut Big and Stretch Big show the weakest absolute Phase 2 WARP/40. Please note that the success rate chart shows the inverse pattern due to the TI paradox described in detail on the <a href="{{ '/ncaa-mbb/translatability-index/' | relative_url }}">Translatability Index page</a>, so the WARP/40 column is the correct one to read when comparing archetypes.

## Per-40 Stat Trajectory: D2 to D1

Every main statistical category drops from D2 to D1, and the drops are substantial across the board.

<div class="data-table-wrap">
<table class="data-table">
  <thead>
    <tr><th>Stat</th><th>D2 Average</th><th>D1 Average</th><th>Change</th><th>Significance</th></tr>
  </thead>
  <tbody>
    <tr><td class="highlight">PTS/40</td><td>18.30</td><td>13.18</td><td class="neg">&minus;5.1</td><td>p &lt; 0.001</td></tr>
    <tr><td class="highlight">REB/40</td><td>7.26</td><td>5.91</td><td class="neg">&minus;1.4</td><td>p &lt; 0.001</td></tr>
    <tr><td class="highlight">AST/40</td><td>2.88</td><td>2.19</td><td class="neg">&minus;0.7</td><td>p &lt; 0.001</td></tr>
    <tr><td class="highlight">STL/40</td><td>1.35</td><td>1.27</td><td>&minus;0.1</td><td>p = 0.085 (ns)</td></tr>
    <tr><td class="highlight">TS%</td><td>.569</td><td>.520</td><td class="neg">&minus;4.9pp</td><td>p &lt; 0.001</td></tr>
    <tr><td class="highlight">USG%</td><td>.230</td><td>.191</td><td class="neg">&minus;3.9pp</td><td>p &lt; 0.001</td></tr>
    <tr><td class="highlight">WS/40</td><td>.135</td><td>.081</td><td class="neg">&minus;0.054</td><td>p &lt; 0.001</td></tr>
  </tbody>
</table>
</div>

STL/40 is the only stat to hold essentially flat across the level jump, which means defensive activity translates across competition levels better than any offensive metric. WS/40 shows the largest proportional drop (t = 19.6), reflecting how sensitive win shares are to the quality of competition. USG% contracting from 23% to 19% reflects the universal role compression these players experience: they are no longer the primary focal point of the offense the way they were at D2.

## Freshman to Sophomore at D2

355 players had two or more seasons at D2, and the year-over-year statistical changes in those seasons were tested as predictors of Phase 2 WARP/40. The finding here is the opposite of the Up-Down-Up analysis: &Delta;AST/40 at D2 is near-zero as a predictor (r = 0.006, not significant). D2 assist totals inflate when teammates miss shots that D1 defenders would not leave open, which means that playmaking numbers from D2 are not a reliable signal of playmaking at D1. Please note that this is completely different from D1-to-D1 transfers, where assist improvement is the strongest trajectory predictor, and assist numbers from D2 should not be weighted in projection models for this population.

The only trajectory statistic that reaches significance in this subset is &Delta;REB/40 (r = 0.152, p less than 0.01), but that number also comes with an important caveat: D2 rebounding often reflects a size advantage over opponents rather than genuine rebounding skill, and that size advantage narrows at D1 where the competition is physically closer to the player's level. TS% improvement is actually slightly negative as a predictor (r = &minus;0.143, p less than 0.01), which appears to reflect the fact that players who improved efficiency significantly at D2 often did so against weaker competition, and the improvement does not carry to D1 defense.

## D2 Statistics That Predict D1 WARP/40

The pattern across every Phase 1 statistic is consistent with the Up-Down-Up analysis: efficiency stats travel and volume stats travel less.

WS/40 at D2 is the best single predictor (r = 0.386, p less than 0.001), followed by WARP/40 (r = 0.289), PTS/40 (r = 0.148), USG% (r = 0.134), STL/40 (r = 0.133), REB/40 (r = 0.128), and TS% (r = 0.114). BLK/40 (r = 0.077) and AST/40 (r = 0.006) are essentially flat.

Please note that high D2 usage is not a warning sign in this population the way it is in D1-to-D1 evaluations. A player posting 24% USG% at D2 may simply be a good player on a weak team rather than a player whose role is inflated by the level, which is why USG% shows a mild positive correlation here rather than a negative one.

## System Fit: Archetype Versus D1 System

System fit is nearly as important as player quality in predicting D1 outcomes, and this is the finding that scouting processes most commonly overlook. The strongest combinations in this dataset include Versatile Big in a Ball Movement Offense (+0.089 average WARP/40), Shot Creator / Slasher in a Paint Dominant Offense (+0.100), and Off-Screen / Movement Shooter in a Pressure and Havoc Defense system (+0.194, as shooters benefit from the extra spacing created by a disruptive defense). The weakest combination is Post Scorer in an Isolation Offense (&minus;0.111), and Post Scorer in any fast-tempo system is a consistent danger zone throughout the entire dataset.

Most of these players land at Half-Court Grinder, Perimeter Shooting, and Isolation Offense programs at D1 because those are the programs that recruit from D2. Very few end up in Pace and Space or Ball Movement systems, as those programs recruit from within D1. Shooting archetypes (Off-Screen, Stationary) show the most stable positive outcomes across system types, which reinforces the broader finding that shooting skills travel across competition levels more reliably than most other skills.

## Archetype Transitions D2 to D1

Only 32.9% of players retain their D2 dominant archetype at D1, which is within the expected 30&ndash;35% range. Shooting identity archetypes hold best, with Stationary Shooter (40%) and Off-Screen / Movement Shooter (38.5%) retaining their roles most consistently, because shooting skill translates across levels better than almost any other skill. Shot Creator / Slasher shows the widest role diffusion (19.3%), with many players becoming Secondary Ball Handlers or role players rather than primary scorers at D1. Please note that role changes are not automatically negative outcomes. A player's ability to adapt to a new role matters more than whether they maintain the same archetype label, and evaluating players on their projected D1 role rather than their D2 dominant role is the correct approach.

## The Profile of a Player Who Translates

A player in a shooting archetype (Off-Screen / Movement Shooter, Stationary Shooter, or Stretch Big) at D2, posting WS/40 above 0.10 on 18&ndash;22% usage, landing in a system that creates opportunities matching their skill set, is the most consistently positive profile in this dataset. This combination is not a guarantee given the overall difficulty of this transfer path, but it represents the most reliable set of signals across all the analyses on this page.

## Summary

Only 17.0% of D2-to-D1 transfers clear the relative success bar. WS/40 at D2 (r = 0.386) is the single best predictor and should be examined first. TS% and WARP/40 are the next most important numbers. AST/40 at D2 is near-zero as a predictor and should not be weighted. System fit is nearly as important as player quality, and mapping the archetype to the D1 system should be a standard part of any evaluation. Post Scorer in a fast-tempo system is the most consistently dangerous combination in the dataset, and shooting archetypes in matching systems are the safest bets.

</div>
