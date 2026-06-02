---
layout: default
title: NFL RB Potential Chart
description: Residual-based potential framework applied to running backs using a volume index that properly accounts for fantasy value in volume-driven statistics. 2025-26 NFL season.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
  <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span>
  RB Potential Chart
</div>

<div class="page-header">
  <div class="page-category">NFL &middot; Running Backs</div>
  <h1>NFL Running Back Potential Chart</h1>
  <div class="page-meta">2025&ndash;26 Season &middot; Data sourced from github.com/nflverse</div>
</div>

<div class="page-content">

<div class="callout">
  Best viewed on a large screen. Viewing on smaller displays may lead to distortion in the charts.
</div>

## Running Back Potential Charts for the 2025&ndash;26 NFL Season

An explanation, definitions, examples, and limitations can be found below the chart.

---

## The Potential Chart: Explanation, Definitions, Examples, and Limitations

This project shows every running back in the NFL and their &ldquo;potential&rdquo;, measured using linear regression on a graph that compares fantasy production (1 point-per-reception scoring) to a player's volume per game, a specialized index that properly accounts for fantasy value in volume based statistics (defined below). A player's overall potential can be gathered from their residual, or distance from the league-average regression line. A player's overall potential is defined as their potential to outperform their current fantasy average production, or fantasy points per game, with a larger negative residual corresponding to a higher potential score and a larger positive residual corresponding to a lower potential score.

For example, if a player is positioned far above the league-average regression line, granting a residual such as 3, they are less likely to outperform their current average fantasy points per game than a player who is positioned below the line, with a residual such as -3. This can be seen in the graphs above as the player marked with the least potential will always be far above the league-average line and the opposite is always true for the player with the most potential.

Please note that this model cannot always account for a player's true potential correctly, as it is unable to include certain contextual factors, though the impact of those contextual factors tends to be less significant when evaluating the running back chart than it is when evaluating the wide receiver chart.

### Key Term: Volume Per Game Index

The Volume Per Game Index combines a running back's carries, targets, and air yards received into a single per-game number, weighted to reflect how each component contributes to fantasy production in 1 PPR scoring. It outperforms raw carry count as a baseline because it accounts for pass-game involvement, which is increasingly important to running back fantasy value in the modern NFL.

</div>
