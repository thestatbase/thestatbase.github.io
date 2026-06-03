---
layout: default
title: Translatability Index (TI)
description: Full methodology for the 0-100 composite score used across the Up-Down-Up and D2-to-D1 transfer analyses to quantify how likely a transfer candidate is to hold their production at the next level.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
  <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span>
  Translatability Index
</div>

<div class="page-header">
  <div class="page-header-inner">
  <div class="page-category ncaa">NCAA Men's Basketball &middot; Methodology</div>
  <h1>Translatability Index (TI)</h1>
  <div class="page-meta">
    Applied across:
    <a href="{{ '/ncaa-mbb/up-down-up-transfers/' | relative_url }}">Up-Down-Up Transfers</a>
    &middot;
    <a href="{{ '/ncaa-mbb/d2-to-d1-transfers/' | relative_url }}">D2-to-D1 Transfers</a>
  </div>
  </div>
</div>

<div class="page-content" markdown="1">

## What the TI Is

The Translatability Index is a composite 0&ndash;100 score built to quantify how likely a transfer candidate is to hold their production at the next competitive level. A separate TI was constructed for each of the two transfer populations covered in this project, the <a href="{{ '/ncaa-mbb/up-down-up-transfers/' | relative_url }}">Up-Down-Up path</a> and the <a href="{{ '/ncaa-mbb/d2-to-d1-transfers/' | relative_url }}">D2-to-D1 path</a>, because the two populations differ meaningfully in what predicts success. The components and weights are shared across both TIs, but the underlying data lookups differ to reflect the different competition structures involved.

The TI is designed to rank candidates, not to binary filter them. A player with a TI of 70 is a better bet than a player with a TI of 45, but the TI does not guarantee success in either direction, and it should be used alongside the individual statistics described on each transfer analysis page.

## Five Components

**Efficiency (35%)** covers WARP/40 + TS% + WS/40 at the origin school, and it is weighted most heavily because efficiency is the strongest predictor of success at the next level across both populations. Efficiency stats travel. Volume stats do not. This finding appears consistently across every part of the analysis.

**Jump Risk (20%)** captures the size of the KenPom (or Net Rating Adjusted) gap between the origin school and the destination. A larger jump reduces the TI. Please note that in the D2-to-D1 analysis, this component did not reach significance on its own (r = &minus;0.060, not significant), likely because of a selection effect where players who land at harder D1 schools tend to be better players to begin with, partially offsetting the difficulty signal. The component was retained in the composite because it contributes to the combined score even when it does not hold up independently.

**System Fit (20%)** uses an empirical average WARP/40 lookup for the player's archetype in the destination team's system. This is the component that does the most work of any individual piece in the D2-to-D1 TI (r = 0.426 on its own), and it reflects the straightforward reality that the same player archetype in a different system produces very different outcomes. Evaluating the archetype-to-system match explicitly is what makes this component valuable.

**Trajectory (15%)** measures how much WARP/40, TS%, and PTS/40 improved from Year 1 to Year 2 at the origin school. For players with only one season at the origin school, a median placeholder is used in place of the trajectory calculation. This component is more meaningful in the Up-Down-Up analysis than in the D2-to-D1 analysis, where year-over-year D2 improvement is a noisier signal.

**Volume Appropriateness (10%)** penalizes usage rates that fall significantly outside the 18&ndash;22% sweet spot, with the score peaking at 20% USG% and falling symmetrically in both directions. Extreme usage in either direction reliably signals a player whose role will not translate cleanly to the next level.

## The Paradox in the Success-Rate-by-Tier Chart

This is the most important thing to understand about both the Up-Down-Up and D2-to-D1 TI charts, and it applies equally to both. When success rates are broken down by TI tier, the pattern looks inverted: players with very low TI scores show the highest binary success rates, and players with elite TI scores show the lowest. This is not a flaw in the index.

The reason this happens is that the success metric is relative, not absolute. Each player's success bar is set at their own Phase 2 (or Phase 1) WARP/40 minus 0.005, which means better players at the origin school have a much higher bar to clear than worse players.

To see how this works, consider Very Low TI players in the Up-Down-Up dataset (n = 32). They averaged a Phase 2 WARP/40 of &minus;0.090, meaning they were poor contributors at the down school. Their Phase 3 WARP/40 only needs to beat &minus;0.090 minus 0.005, or &minus;0.095, to count as success. Their actual average Phase 3 WARP/40 is &minus;0.018, which comfortably clears that threshold, producing a 71.9% success rate. The important detail is that &minus;0.018 is still a very poor Phase 3 WARP/40. These players cleared the bar, but they are still bad players.

Elite TI players (n = 13) averaged a Phase 2 WARP/40 of +0.262, meaning they were excellent contributors at the down school. Their Phase 3 WARP/40 needs to beat +0.257 to count as success. Their actual average Phase 3 WARP/40 is +0.179, which is good in absolute terms but falls below that high threshold, producing a 38.5% success rate. These players are the best performers in absolute terms in Phase 3, but they technically fail at a high rate because the bar for them is much higher.

The TI measures absolute quality and future potential. The success metric measures production retention relative to each player's own origin-school baseline. These two things diverge because the best players face the highest bars. The most useful way to verify this is to look at average Phase 3 WARP/40 by tier rather than success rate by tier: players with Phase 3 WARP/40 above 0.10 (genuinely good outcomes) averaged TI = 60.5, while players with Phase 3 WARP/40 below 0.00 (bad outcomes) averaged TI = 48.5. The TI correctly identifies who produces well in absolute terms. Please read the WARP/40 column rather than the success rate column when evaluating TI tiers.

## Up-Down-Up TI: Tier Data

<div class="data-table-wrap">
<table class="data-table">
  <thead>
    <tr>
      <th>Tier</th>
      <th>Score Range</th>
      <th>n</th>
      <th>Success Rate</th>
      <th>Avg Ph2 WARP/40</th>
      <th>Avg Ph3 WARP/40</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="highlight">Elite</td><td>80+</td><td>13</td><td>38.5%</td><td>+0.262</td><td>+0.179</td></tr>
    <tr><td class="highlight">High</td><td>65&ndash;80</td><td>99</td><td>25.3%</td><td>+0.203</td><td>+0.123</td></tr>
    <tr><td class="highlight">Moderate</td><td>50&ndash;65</td><td>187</td><td>39.0%</td><td>+0.114</td><td>+0.070</td></tr>
    <tr><td class="highlight">Low</td><td>35&ndash;50</td><td>164</td><td>60.4%</td><td>+0.001</td><td>+0.009</td></tr>
    <tr><td class="highlight">Very Low</td><td>0&ndash;35</td><td>32</td><td>71.9%</td><td>&minus;0.090</td><td>&minus;0.018</td></tr>
  </tbody>
</table>
</div>

## D2-to-D1 TI: Tier Data

<div class="data-table-wrap">
<table class="data-table">
  <thead>
    <tr>
      <th>Tier</th>
      <th>Score Range</th>
      <th>n</th>
      <th>Success Rate</th>
      <th>Avg Ph1 WARP/40</th>
      <th>Avg Ph2 WARP/40</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="highlight">Elite</td><td>80+</td><td>8</td><td>0.0%</td><td>+0.30</td><td>+0.155</td></tr>
    <tr><td class="highlight">High</td><td>65&ndash;80</td><td>141</td><td>5.0%</td><td>+0.21</td><td>+0.080</td></tr>
    <tr><td class="highlight">Moderate</td><td>50&ndash;65</td><td>221</td><td>11.3%</td><td>+0.13</td><td>+0.042</td></tr>
    <tr><td class="highlight">Low</td><td>35&ndash;50</td><td>157</td><td>29.3%</td><td>+0.04</td><td>&minus;0.032</td></tr>
    <tr><td class="highlight">Very Low</td><td>0&ndash;35</td><td>39</td><td>46.2%</td><td>&minus;0.04</td><td>&minus;0.016</td></tr>
  </tbody>
</table>
</div>

The D2-to-D1 paradox is even more pronounced than in the Up-Down-Up analysis. The Elite TI tier (n = 8) shows a 0.0% binary success rate, but these are the same players who average +0.155 Phase 2 WARP/40, the best absolute production in the dataset. The 0.0% success rate reflects that the bar for Elite TI players in this population is extremely high and that almost none of them technically clear it even while being the best contributors in their new programs.

## Component Validation

Individual component correlations against Phase 2 WARP/40 in the D2-to-D1 population show System Fit as the strongest standalone component (r = 0.426), followed by Efficiency (r = 0.336). Jump Risk (r = &minus;0.060), Trajectory (r = &minus;0.081), and Volume (r = +0.019) do not reach significance on their own, though all three contribute to the composite. The fact that System Fit is the strongest individual component means that the archetype-to-system match is worth modeling explicitly and is not simply a qualitative consideration to be discussed after the statistical evaluation is complete.

## Limitations

The TI relies on the accuracy of both the archetype labels and the system labels in the underlying data, and mislabeled players or teams will produce incorrect System Fit lookups. The Trajectory component uses median placeholders for players with only one season at the origin school, which reduces its accuracy for that portion of the dataset. All Elite tier n-values are small (n = 13 for Up-Down-Up, n = 8 for D2-to-D1), so please treat those rows as directionally correct rather than statistically conclusive.

</div>
