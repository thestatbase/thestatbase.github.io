---
layout: default
title: Momentum & Game Outcomes in the NBA
description: A two-phase study examining whether momentum-based statistics can predict NBA game outcomes, featuring a novel Scoring Run Performance metric. 68.2% accuracy over 148 forward-tested games.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
  <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span>
  Momentum &amp; Game Outcomes
</div>

<div class="page-header">
  <div class="page-header-inner">
  <div class="page-category nba">NBA &middot; Predictive Modeling</div>
  <h1>Momentum &amp; Game Outcomes in the NBA</h1>
  <div class="page-meta">AP Research &middot; Backtesting Oct 21, 2025 &ndash; Jan 4, 2026 &middot; Forward Testing Jan 24 &ndash; All-Star Break</div>
  </div>
</div>

<div class="page-content" markdown="1">

<div class="stat-row">
  <div class="stat-card">
    <span class="stat-value">68.2%</span>
    <span class="stat-label">Overall Accuracy</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">75%</span>
    <span class="stat-label">Accuracy (No Injuries)</span>
  </div>
  <div class="stat-card">
    <span class="stat-value">r&nbsp;=&nbsp;0.688</span>
    <span class="stat-label">SRP Correlation</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">n&nbsp;=&nbsp;148</span>
    <span class="stat-label">Games Forward-Tested</span>
  </div>
</div>

## Research Question

This project examines the extent to which momentum-based statistics can be used to predict NBA game outcomes in 2026. No prior research connects momentum-based statistics to NBA game outcome prediction at the professional level, which is a notable gap given Miyakawa's (2023) evidence that momentum is a significant predictor in Men's College Basketball. That gap served as the primary inspiration for this project. The NBA's analytics scene has lagged behind other sports for years, with coaches and analysts relying on basic box score statistics that provide increasingly little useful insight on their own.

## Background: Key Definitions

Box score statistics are the basic performance indicators tracked in every NBA game, including points, assists, rebounds, and steals. Momentum-based statistics are a group of advanced metrics that quantify a team's momentum across a game, including fast break points, scoring runs, second chance points, point differential, and home court advantage. Backtesting refers to using historical data to optimize a model's formula before applying it to new, unseen data, and in this project it covered all NBA games from October 21 to January 4, 2026. Forward testing refers to applying the optimized model to new game data (n = 148 games) to measure its real-world predictive accuracy.

## Methodology

### Phase 1: Backtesting

The backtesting phase ran from October 21 to January 4, 2026. A Python web scraper sourced statistics from ESPN's official API endpoints for every game in that window. Seven run-related statistics were then correlated against point differential to identify which held the most significance in predicting convincing wins. That process produced the first formula, srpOriginal, built directly from those correlations:

(2.5 &times; Runs) + (0.4 &times; Points) &minus; (3.0 &times; RunsAllowed) &minus; (0.4 &times; PointsAllowed) + RunDiff

Regression optimization on the backtesting data then produced the final formula, srpDominance, which identified that run differential and average run size drove the most explanatory power:

(Runs &times; AvgSize) &minus; (RunsAllowed &times; AvgSizeAllowed) + (2.0 &times; RunDiff)

SRP refers to srpDominance throughout the rest of this page, as that is the formula used in forward testing.

### Phase 2: Forward Testing

The forward testing window ran from January 24, 2026 through the All-Star Break (n = 148 games). In this phase, SRP was combined with four additional factors, including fast break points, home court advantage, second chance points, and average point differential, which were weighted and combined into a single momentum score per team. Each day, the model produced a predicted winner based on those momentum scores and a home advantage multiplier, and each prediction was checked against the actual result. Conditional probability breakdowns were also run separately, with upsets, favorites, home wins, away wins, and injury-free games all tested as separate subsets.

## Results

<div class="data-table-wrap">
<table class="data-table">
  <thead>
    <tr>
      <th>Metric</th>
      <th>Category / Condition</th>
      <th>Value</th>
      <th>n</th>
    </tr>
  </thead>
  <tbody>
    <tr><td class="highlight">Accuracy</td><td>Overall</td><td>68.2%</td><td>148</td></tr>
    <tr><td class="highlight">Accuracy</td><td>Underdog</td><td>65.0%</td><td>20</td></tr>
    <tr><td class="highlight">Accuracy</td><td>Favorite</td><td>69.0%</td><td>128</td></tr>
    <tr><td class="highlight">Accuracy</td><td>Home Team</td><td>67.0%</td><td>85</td></tr>
    <tr><td class="highlight">Accuracy</td><td>Away Team</td><td>70.0%</td><td>63</td></tr>
    <tr><td class="highlight">Accuracy</td><td>No Injuries</td><td>75.0%</td><td>32</td></tr>
    <tr><td>Avg Winner SRP</td><td>Overall</td><td>14.17</td><td>148</td></tr>
    <tr><td>Avg Score Differential</td><td>Correct Predictions</td><td>23.17</td><td>101</td></tr>
    <tr><td>Avg Score Differential</td><td>Incorrect Predictions</td><td>20.43</td><td>47</td></tr>
    <tr><td>Correlation (Backtest)</td><td>SRP vs Point Diff</td><td>r = 0.752</td><td>&mdash;</td></tr>
    <tr><td>R&sup2; (Backtest)</td><td>SRP vs Point Diff</td><td>0.566</td><td>&mdash;</td></tr>
    <tr><td>Correlation (Forward Test)</td><td>SRP vs Point Diff</td><td class="pos">r = 0.688</td><td>&mdash;</td></tr>
    <tr><td>R&sup2; (Forward Test)</td><td>SRP vs Point Diff</td><td>0.477</td><td>&mdash;</td></tr>
  </tbody>
</table>
</div>

The forward testing window (n = 148) is large enough to partially control for confounding variables, meaning these results can be used to draw significant conclusions.

## Discussion: SRP Analysis

SRP maintained a strong, positive correlation with point differential throughout the forward testing period, with a correlation coefficient (r) of 0.688. An r value above 0.6 is considered to signal a strong relationship, which validates the novel SRP metric for the professional level. Scoring runs were previously unquantified at the NBA level, meaning that this is the first study to generalize Miyakawa's college basketball finding to the professional game. Miyakawa originally showed that the 10-0 scoring run is a strong predictor in Men's College Basketball, and this study demonstrates that scoring runs set at the 7-0 threshold carry similar predictive weight in the NBA.

## Discussion: Conditional Analysis

The conditional breakdown shows that the model correctly predicted upsets at a 65% rate across 20 games, which is the most notable individual result in the study and is highly unlikely to occur by chance. Away team wins were predicted at 70%, the highest of any standard scenario tested, suggesting that momentum is a stronger signal for road teams than for home teams. This is consistent with the idea that home teams can draw on crowd energy and familiarity to generate wins independently of their momentum profile, while road teams depend more directly on the kind of sustained in-game momentum that this model captures. Removing injury-affected games from the sample improved accuracy to 75%, which isolates how the model performs when the most significant confounding variable is not present.

## Conclusions

The results demonstrate that momentum is an effective predictor of NBA game outcomes in 2026, confirming the hypothesis. The model finished 3.2 percentage points above the 65% baseline win rate for favorites, which is a meaningful margin given the sample size and the range of conditional scenarios tested.

## Limitations

The most significant limitation is the overfitting risk inherent in the backtesting phase. The srpDominance formula was optimized on the backtesting data, which means it may be partially tuned to patterns specific to that window rather than to general NBA basketball, and a larger forward-testing sample would reduce this concern considerably. Three confounding variables also affect accuracy throughout: rest days between games, travel schedules, and mid-game lineup changes. These are partially addressed by the size of the forward-testing sample, but they are not fully controlled for. Please note that the injury-removed subset (n = 32) is the clearest evidence that lineup changes are the single largest noise driver in the full-sample results.

## Implications and Future Directions

For NBA teams and coaches, momentum is now quantifiable in a way that standard box score statistics cannot support, and SRP and the five-factor momentum score can be tracked in real time to inform in-game decisions. For the analytics community, this project provides a basis for a new category of game prediction models that account for momentum directly. Future research should incorporate a player-rating metric into the momentum score, add momentum ranking differentials into existing NBA prediction frameworks, and test the model across multiple NBA seasons to determine whether the correlations are stable over time.

</div>
