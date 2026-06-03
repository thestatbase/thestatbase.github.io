---
layout: default
title: March Madness Trends (2002–2026)
description: An in-depth data science study of NCAA D1 Men's Basketball using KenPom metrics across 24 seasons, covering seeding patterns, upset rates, conference dominance, machine learning feature importance, coaching longevity, and the 2026 tournament field.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a> <span>/</span> <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span> March Madness Trends
</div>

<div class="page-header">
  <div class="page-header-inner">
  <div class="page-category ncaa">NCAA Men&rsquo;s Basketball &middot; March Madness</div>
  <h1>March Madness Trends (2002–2026)</h1>
  <div class="page-meta">24 Seasons &middot; 364 Teams Analyzed &middot; 1,535 Tournament Appearances &middot; Based on KenPom Metrics</div>
  </div>
</div>

<div class="page-content" markdown="1">

<div class="stat-row">
  <div class="stat-card">
    <span class="stat-value">24</span>
    <span class="stat-label">Seasons (2002–2026)</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">1,535</span>
    <span class="stat-label">Tournament Appearances</span>
  </div>
  <div class="stat-card">
    <span class="stat-value">88</span>
    <span class="stat-label">Final Fours</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">14+</span>
    <span class="stat-label">Metrics Tracked</span>
  </div>
</div>

## Project Overview

This project examines 24 seasons of NCAA D1 Men's Basketball tournament data, from 2002 through 2026, using KenPom metrics to identify patterns in seeding, team construction, conference dominance, coaching success, and the statistical fingerprint of teams that advance deep into March Madness. The goal is not to describe individual tournaments but to identify the patterns that hold across a large sample and to apply those patterns to the 2026 tournament field.

## Seeding Analysis and Upset Patterns

1-seeds have reached the Final Four at a 34.8% rate all-time, which is the highest of any seed but also lower than many people assume. That rate has declined slightly in recent eras, dropping to 25.0% over the past five years, suggesting that the quality gap between top seeds and the rest of the field has narrowed somewhat as player development and recruiting have become more nationally distributed. The average Final Four seed per year has been 3.3 all-time, with significant variance in individual years: the most upset-heavy tournaments have produced average Final Four seeds above 5.0, while the most chalk-heavy have produced averages at or below 2.0.

1-seeds account for 15 of the 22 national championships in this dataset, which is more than all other seeds combined. 2-seeds have won 2 and 3-seeds have won 3, with only two titles belonging to seeds higher than 4 (both going to 7-seeds). While upsets are a defining feature of the tournament's entertainment value, deep runs from high seeds are rare enough that building a bracket around them is not a statistically sound strategy.

The seed versus deepest-round-reached matrix confirms how sharply success rates fall after the top four seeds. Of the 60 1-seed first-round or second-round appearances in the dataset, 9 reached the Final Four, 8 reached the championship game, and 15 won the national championship. By the 5-seed row, Final Four appearances number 4 and championship appearances drop to 3, with zero titles.

## KenPom Metric Profiles by Tournament Round

Adjusted Efficiency Margin increases consistently from teams that exit in the first two rounds through those that reach the Final Four and championship game, which is expected. More informative is how the specific components of AdjEM differ by round. Adjusted Offensive Efficiency shows a clear upward trend from R1/R2 teams to champions, while Adjusted Defensive Efficiency (where lower is better) shows the opposite, declining from R1/R2 teams to champions, meaning champions are both more efficient offensively and more stingy defensively than the average team that reaches the early rounds.

Turnover rate decreases consistently as teams advance, which reflects that championship-caliber programs take care of the ball better than programs that exit early. This finding is consistent across every era in the dataset and has not changed meaningfully over time, making it one of the more stable predictive signals in college basketball.

## Offensive versus Defensive Fingerprints of Champions

When offensive efficiency (higher is better) is plotted against defensive efficiency (lower is better) for all tournament teams across 24 seasons, champions cluster in the upper-left quadrant of the space, meaning they combine high offensive output with elite defensive efficiency. Runner-ups and other Final Four teams also cluster in that region but with more scatter, and first and second round exits are spread across a much wider range, often showing strong offense but weaker defense or vice versa.

The Champion versus Final Four z-score profile, measured against all tournament teams, shows that champions score higher than other Final Four teams on Offensive Efficiency, Effective FG%, and Block%, while showing comparable or slightly weaker marks on Steal Rate. The most consistent separation between champions and other Final Four teams appears on the defensive efficiency axis rather than the offensive one, suggesting that elite defense is a more reliable separator at the Final Four stage than elite offense.

## Champion and Final Four Metric Trends Over Time

Several trends in champion and Final Four team statistics have shifted meaningfully over the 24-season window.

Adjusted Efficiency Margin has trended upward at approximately +0.17 AdjEM points per year, reflecting the overall improvement in the quality of teams that reach the later rounds as the sport's competitive balance has shifted. Adjusted Offensive Efficiency has increased at approximately +0.26 points per year, driven by the shift toward pace-and-space basketball that has redefined offensive strategy across college basketball over the past decade.

3-point shooting percentage has shown the steepest trend, at approximately +0.54 percentage points per year, and this is one of the more significant structural changes in how successful tournament teams are built. Champion teams in the early 2000s frequently won with 3-point percentages in the low 20s, while recent champions have been considerably more reliant on perimeter shooting. Adjusted Tempo (possessions per 40 minutes) has trended in the opposite direction, declining at approximately -0.22 possessions per year, reflecting how teams at the elite level have generally moved toward more deliberate half-court offenses even as their shooting percentages have improved.

Team experience, measured as an average years-in-college score, has shown a slow positive trend at +0.02 per year, which is consistent with the narrative that more experienced rosters tend to perform better in the tournament's high-pressure environment.

## Conference Dominance

The Big Ten (145 appearances), Big East (142), and Big 12 (140) have the three most all-time tournament appearances in this dataset. The ACC (130) and SEC (131) are close behind, with all five of those conferences far ahead of the next group.

When appearances are converted to Final Four rates per tournament game, the ACC leads at 12.3%, followed by the Big East (10.6%) and CUSA (10.0%, though with a smaller sample). The Big Ten's rate (9.7%) is high despite a large denominator, meaning it has consistently produced strong tournament teams relative to the size of its representation. The WCC (4.8%) and MVC (5.4%) trail the field despite having had individual programs, most notably Gonzaga and Loyola Chicago, that have made deep runs.

Championship distribution by conference and five-year period shows the ACC winning 3 titles in the most recent five-year block, the most of any conference in that window. The Big East has shown the most consistent championship production across multiple eras, with titles in three of the five five-year periods in the dataset. The SEC produced two championships between 2005 and 2010 and one between 2010 and 2015, while the Big 12 has a notable concentration of titles in the most recent five-year period.

## Era Comparisons: How the Formula for Success Has Changed

Comparing the past five years to the past ten and fifteen years reveals that AdjEM for Final Four teams has increased, with the median Final Four team in the past five years having a higher AdjEM than in prior eras. This reflects partly improved data quality and partly genuine increases in the efficiency of elite teams.

The 3-point FG% distribution for Final Four teams in the past five years is shifted rightward compared to earlier eras, confirming the pace-and-space shift described in the trends section above. The adjusted defensive efficiency distribution has also tightened in the past five years compared to earlier eras, with fewer Final Four teams posting defensive efficiencies above 95 in recent tournaments than was common in the early 2000s.

Champion experience over time shows a trend of +0.015 per year, which is slow but consistent. The most recent champions have tended to have more experienced rosters on average than champions from ten or fifteen years ago, though there is still substantial variance from year to year.

## Machine Learning Feature Importance for Final Four Prediction

A Random Forest model was trained to predict Final Four appearances using KenPom metrics, and its feature importance scores identify which statistics carry the most predictive weight in a model free from linear assumptions. The model produced a cross-validated AUC of 0.756, which is reasonably strong for a classification problem with this much natural randomness.

Adjusted Efficiency Margin is the single most important feature by a significant margin, followed by Adjusted Defensive Efficiency and Adjusted Offensive Efficiency. These three features account for the majority of the model's predictive power. Turnover Rate, Offensive Rebound Percentage, Steal Rate, and Block Percentage are next, contributing meaningfully but at a lower level. Experience, Effective FG%, Average Height, Free Throw Rate, 3-point FG% (Defensive), and Adjusted Tempo all contribute at roughly similar levels at the bottom of the importance chart.

The Final Four rate by AdjEM bucket makes the threshold effect clear: teams with AdjEM between 15 and 20 reach the Final Four at a 1.7% rate, teams between 20 and 25 reach it at a 9.5% rate, teams between 25 and 30 reach it at 22.0%, and teams with AdjEM above 30 reach it at 54.3%. Being above 30 does not guarantee a Final Four appearance, but it describes the population from which most Final Four teams come.

## Coaching Longevity and March Madness Success

Among coaches with the most Final Four appearances in this dataset, Hubert Davis, Bill Self, and Dan Hurley each have 6 Final Four appearances, with Hurley's coming across 5 championship game appearances and Self's across 2. Tom Izzo is next with 5. This group of coaches also tends to carry the highest average KenPom margins in their tournament appearances, confirming that consistently reaching the Final Four requires both consistent program quality and effective in-tournament performance.

When coaching tenure is plotted against Final Four rate with a trend line, the R² is essentially 0.00, which means that tenure alone does not predict how often a coach reaches the Final Four. Some coaches reach the Final Four frequently in their first few years at a program, and some long-tenured coaches have never reached it. What the data shows more clearly is that the coaches with the highest Final Four rates regardless of tenure, such as Hurley (approximately 37%), Davis (approximately 32%), and Willard (approximately 25%), are operating programs with both strong KenPom averages and effective tournament performance simultaneously.

## 2026 Tournament Field Outlook

Duke entered the 2026 tournament as the highest-seeded team by raw AdjEM at +38.90, followed by Michigan (+37.59) and Arizona (+37.66). When the historical champion AdjEM distribution is overlaid on the 2026 1-seed AdjEM values, all four 1-seeds fall within the range that historical champions have occupied, and Duke's raw margin is at the high end of what championship teams have historically posted.

The West region enters as the strongest by average AdjEM (18.6), followed by East (17.6), Midwest (16.6), and South (15.9). This regional imbalance is meaningful in the context of bracket construction, as the South bracket produces a statistically easier path to the Final Four than the West bracket for an equivalent team.

The 2026 Cinderella candidates, defined as the highest-AdjEM teams seeded 8 or lower, include Iowa Hawkeyes (9-seed, AdjEM 22.4), Ohio State Buckeyes (8-seed, AdjEM 22.3), and Utah State Aggies (9-seed, AdjEM 20.7). Iowa's AdjEM of 22.4 at a 9-seed is comparable to several historical programs that made deep tournament runs as mid-level seeds, and their margin is well above the 1.7% Final Four rate threshold for the 15-20 AdjEM bucket, instead falling in the 9.5% bucket for the 20-25 range.

The top teams in the 2026 field, including Duke, Michigan, Arizona, and Florida, all sit above the historical Final Four average on AdjEM and Adjusted Offensive Efficiency. Duke and Michigan are above the historical average on AdjEM by more than 12 points, and Florida shows a significant advantage on Offensive Rebound Rate (+7.8 above the historical Final Four average), which is one of the more predictive factors at the margins of the model.

Please note that this analysis is descriptive rather than predictive in the bracket-by-bracket sense. The patterns identified here hold across a 24-season sample and describe the characteristics that historically separate tournament teams that advance from those that exit early. They do not account for specific matchup dynamics, injuries, or single-game variance, which are real factors that this type of season-level analysis cannot fully capture.

</div>
