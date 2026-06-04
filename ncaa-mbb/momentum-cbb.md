---
layout: default
title: Momentum & CBB Power Ratings (MA-NetRtg)
description: MA-NetRtg is a five-source momentum-adjusted power rating for college basketball that blends KenPom AdjEM, EvanMiya head-to-head data, schedule strength, kill shots, and roster quality into a single number.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
  <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span>
  Momentum &amp; Power Ratings
</div>

<div class="page-header">
  <div class="page-category ncaa">NCAA Men's Basketball &middot; Power Ratings</div>
  <h1>Momentum &amp; CBB Power Ratings</h1>
  <div class="page-meta">MA-NetRtg &middot; Top 75 KenPom Teams &middot; Data: EvanMiya + KenPom &middot; 10-fold CV R&sup2; = 0.984</div>
</div>

<div class="page-content">

<div class="stat-row">
  <div class="stat-card">
    <span class="stat-value">0.984</span>
    <span class="stat-label">10-Fold CV R&sup2;</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">0.973</span>
    <span class="stat-label">Rank &rho; vs EvanMiya (Top 75)</span>
  </div>
  <div class="stat-card">
    <span class="stat-value">&plusmn;2.4</span>
    <span class="stat-label">Adj Range (AdjEM pts)</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">5</span>
    <span class="stat-label">Formula Components</span>
  </div>
</div>

## What MA-NetRtg Is

The Momentum-Adjusted Net Rating (MA-NetRtg) is a power rating for college basketball that addresses a limitation in single-source metrics like KenPom's AdjEM. Raw efficiency ratings capture season-long performance well, but they do not fully account for how a team is currently playing. A team can sit third nationally by AdjEM while losing three straight games, and AdjEM will not distinguish it from a third-ranked team on a seven-game winning streak.

MA-NetRtg blends five sources, each normalized to the AdjEM scale before being combined, and the final output is rescaled to preserve the NetRtg distribution. The goal is a single number that answers the question of where a team ranks when both their season-long quality and their current form are accounted for simultaneously.

## The Formula

MA-NetRtg = 0.40 &times; NetRtg + 0.35 &times; Relative Rating + 0.15 &times; SOS NetRtg + 0.08 &times; Kill Shots + 0.02 &times; Roster Score

<figure class="chart-figure">
  <img src="{{ '/assets/images/ma-netrtg-formula.png' | relative_url }}" alt="MA-NetRtg formula weight distribution showing five components and their weights">
  <figcaption>MA-NetRtg weight distribution. Five sources, each normalized to AdjEM scale before blending. Output rescaled to preserve NetRtg distribution.</figcaption>
</figure>

### Component Definitions

**NetRtg (40%)** is KenPom AdjEM (AdjO minus AdjD), the single largest component and the most established measure of season-long team quality. It is weighted at 40% because it remains the most predictive single number available for college basketball.

**Relative Rating (35%)** is EvanMiya's head-to-head net rating, which is the momentum component of the formula. EvanMiya's relative rating captures how a team performs relative to opponents' expected quality based on recent results, which identifies whether a team is winning because they are playing better or because of schedule variance.

**SOS NetRtg (15%)** is KenPom schedule strength (AdjEM), which accounts for the quality of opposition faced. A team posting a +30 AdjEM against a weak schedule is rated lower than one posting the same number against elite competition.

**Kill Shots (8%)** is EvanMiya's 10-0 run composite, which captures how frequently a team generates or concedes decisive momentum swings. This is the same scoring run concept at the core of the <a href="{{ '/nba/momentum/' | relative_url }}">NBA momentum research</a> on this site, applied to college basketball. Miyakawa's original work showed the 10-0 run is a strong predictor of postseason success, and this component operationalizes that finding at the season level.

**Roster Score (2%)** is EvanMiya's talent rank (inverted), included as a small independent signal for roster quality. The weight is intentionally low because roster quality is already partially captured in the other components, and weighting it more heavily would double-count talent signals already embedded in AdjEM.

## Top 20 Momentum-Adjusted Power Rankings

<figure class="chart-figure portrait">
  <img src="{{ '/assets/images/top20-rankings.png' | relative_url }}" alt="Top 20 Momentum-Adjusted Power Rankings table">
  <figcaption>Top 20 Momentum-Adjusted Power Rankings. MA-NetRtg = 0.40&times;NetRtg + 0.35&times;RelRtg + 0.15&times;SOS + 0.08&times;KillShots + 0.02&times;Roster. Data: EvanMiya + KenPom, Top-75 KenPom teams.</figcaption>
</figure>

Michigan ranks first with an MA-NetRtg of 38.849, driven by a momentum adjustment of +1.259 that pushes them above Duke (37.918, &minus;0.982) despite Duke holding a higher raw AdjEM (+38.90 versus +37.59). Arizona drops from second to third on the same dynamic, as a negative momentum adjustment of &minus;0.835 reflects recent performance below what their season-long rating would suggest.

Among the most notable rank changes, Vanderbilt rises three spots from KenPom rank 12 to MA rank 9, and St. John's rises four spots from KenPom rank 17 to MA rank 13, with both teams carrying strong positive momentum adjustments that reflect current form above their season-long averages. Wisconsin's +1.415 momentum adjustment, the largest in the top 20, pushes them into the rankings despite a relatively modest raw AdjEM. Nebraska falls four spots from KenPom rank 14 to MA rank 18, and Gonzaga falls two spots from KenPom rank 10 to MA rank 12, with both teams carrying negative adjustments indicating recent performance below their season-long norms.

## Momentum Decomposition: Top 20 Teams

<figure class="chart-figure">
  <img src="{{ '/assets/images/momentum-decomp.png' | relative_url }}" alt="Stacked bar chart showing the signed contribution of each MA-NetRtg component for the top 20 teams">
  <figcaption>Momentum Adjustment Decomposition, Top 20. Signed contribution of each formula component. Line = net adjustment. Data: EvanMiya + KenPom, Top-75 KenPom teams.</figcaption>
</figure>

The decomposition chart breaks each team's momentum adjustment into its four contributing components (Relative Rating, SOS, Kill Shots, and Roster) and tracks the signed net adjustment as a dashed line across teams.

Relative Rating dominates the total bar height for virtually every team, confirming that the EvanMiya head-to-head component is the primary driver of what separates teams when their raw AdjEM is similar. Michigan's large positive net adjustment is driven primarily by its Relative Rating and Kill Shots composite. Duke's negative adjustment is driven by its Relative Rating underperforming its season-long average. Gonzaga's negative adjustment is notable because its SOS component is considerably weaker than peers at a similar AdjEM level, meaning that schedule strength is suppressing what would otherwise be a higher rating.

## How to Read This System

MA-NetRtg is most useful for identifying which high-AdjEM teams are currently playing above their season-long average (positive momentum adjustment) and which high-AdjEM teams may be more vulnerable than their raw rating suggests (negative momentum adjustment). It is not designed to replace KenPom but rather to layer current-form information on top of the season-long foundation that KenPom provides.

A team with a large positive momentum adjustment is one whose recent results, head-to-head performance, and kill shot margin suggest they are playing above their average. A team with a large negative adjustment is one where the opposite is true. The adjustment range in this dataset is approximately &minus;1.93 to +2.45 AdjEM points, which is a meaningful margin in a conference-era environment where 1&ndash;2 AdjEM points can separate tournament seedings.

</div>
