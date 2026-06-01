---
layout: default
title: NFL WR Potential Chart
description: Linear regression model comparing fantasy production to WOPR to identify wide receivers likely to outperform their current average, 2025-26 NFL season.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">StatBase</a> <span>/</span> <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span> WR Potential
</div>

<div class="page-header">
  <div class="page-category">NFL · Wide Receivers</div>
  <h1>NFL Wide Receiver Potential Chart</h1>
  <div class="page-meta">2025–26 Season · Data sourced from github.com/nflverse</div>
</div>

<div class="page-content">

<div class="callout">
Best viewed on a large screen such as a laptop. Viewing on smaller displays may lead to distortion in the charts.
</div>

## Wide Receiver Potential Charts for the 2025–26 NFL Season

An explanation, definitions, examples, and limitations can be found below the chart.

---

## The Potential Chart: Explanation, Definitions, Examples, and Limitations

This project shows every wide receiver in the NFL and their "potential", measured using linear regression on a graph that compares fantasy production (1 point-per-reception scoring) to a player's WOPR (defined below). A player's overall potential can be gathered from their residual, or distance from the league-average regression line. A player's overall potential is defined as their potential to outperform their current fantasy average production, or fantasy points per game, with a larger negative residual corresponding to a higher potential score and a larger positive residual corresponding to a lower potential score.

For example, if a player is positioned far above the league-average regression line, granting a residual such as 3, they are less likely to outperform their current average fantasy points per game than a player who is positioned below the line, with a residual such as -3. This can be seen in the graphs above as the player marked with the least potential will always be far above the league-average line and the opposite is always true for the player with the most potential.

Please note that this model cannot always account for a player's true potential correctly, as it is unable to include certain contextual factors that may impact player performance such as injuries to a player's teammates, which could lead to drastic changes in production for that player.

### Key Term: WOPR

WOPR (Weighted Opportunity Rating) is a statistic that combines a receiver's target share and air yards share into a single number, properly weighting the two components to reflect their relative importance to fantasy production. It captures how much of a team's total passing opportunity is flowing through a given receiver, which makes it a better baseline for projection than raw targets or yards alone.

</div>
