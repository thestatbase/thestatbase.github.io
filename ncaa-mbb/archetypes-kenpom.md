---
layout: default
title: Player Archetypes & KenPom Ratings
description: A multiple regression analysis of all D1 teams examining how the archetype composition of a team's best players predicts KenPom rating, using 2025-26 season data.
---

<div class="breadcrumb">
  <a href="{{ '/' | relative_url }}">StatBase</a> <span>/</span> <a href="{{ '/projects/' | relative_url }}">Projects</a> <span>/</span> Archetypes &amp; KenPom
</div>

<div class="page-header">
  <div class="page-category ncaa">NCAA Men's Basketball · Team Construction</div>
  <h1>Player Archetypes &amp; KenPom Ratings</h1>
  <div class="page-meta">2025–26 Season · All D1 Teams · Multiple Regression Analysis</div>
</div>

<div class="page-content">

<div class="stat-row">
  <div class="stat-card">
    <span class="stat-value">r = 0.72</span>
    <span class="stat-label">Best Player vs Team KenPom</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">R² = 0.51</span>
    <span class="stat-label">Variance Explained</span>
  </div>
  <div class="stat-card">
    <span class="stat-value">0.470</span>
    <span class="stat-label">Strongest Correlation (Secondary BH)</span>
  </div>
  <div class="stat-card amber">
    <span class="stat-value">0.111</span>
    <span class="stat-label">Weakest Correlation (Athletic Finisher)</span>
  </div>
</div>

## Project Overview

This project analyzes the relationship between team KenPom net rating and the average archetype scores of the most impactful players on each D1 team, using 2025-26 season data. Every team's roster was processed through the archetype framework to identify each player's primary archetype and their score in that archetype, and those scores were correlated and regressed against KenPom net rating. The central question is practical: beyond having talented players in general, does the type of player a team has, and specifically the type filling each of the top roles, predict how good the team is in KenPom terms?

## The Archetype Framework

Ten player archetypes are used throughout this analysis, each scored on a 0-100 scale based on box score statistics. The guard and wing archetypes are Primary Ball Handler, Secondary Ball Handler, Shot Creator / Slasher, Athletic Finisher, Off-Screen / Movement Shooter, and Stationary Shooter. The big archetypes are Versatile Big, Post Scorer, Stretch Big, and Roll and Cut Big. Each player receives a score in every archetype, and their highest score determines their primary classification. Average archetype scores were then computed across the top players on each team (top-3 and top-5 by WARP) and correlated against team KenPom rating.

## Having a Great Best Player Matters More Than Having Depth

There is a strong relationship (r = 0.72, R² = 0.51) between how good a team's best player is in their archetype and how good the team is in KenPom terms. Half of the variance in team KenPom rating can be explained by a single number: how well the team's primary contributor fills their role. Building a diverse roster is not as important as having a few players who fit their roles very well and fill them effectively for the team, with high WARP players who dominate their specific archetype scores. The model confirms what coaching intuition often suggests: star player quality is the primary ceiling-setter for team performance.

## Best Player Archetype Matters Significantly

Not all best-player archetypes are equally valuable. Teams whose primary contributor is a Versatile Big or Primary Ball Handler show the highest average KenPom ratings. Teams whose best player is a Roll and Cut Big show the lowest average KenPom rating among archetypes with meaningful sample sizes. This is not simply a reflection of how common each archetype is. The Versatile Big advantage persists after controlling for overall player quality because a strong Versatile Big provides a combination of rim protection, rebounding, and perimeter threat that is more difficult to defend against than an equally skilled Post Scorer, who depends on a narrower set of scoring situations.

## Archetype Scores by KenPom Quartile

<figure class="chart-figure">
  <img src="{{ '/assets/images/archetype-scores-kenpom-quartile.png' | relative_url }}" alt="Heatmap of mean archetype scores by KenPom quartile from Q1 (worst 25%) to Q4 (best 25%)">
  <figcaption>Mean Archetype Scores by KenPom Quartile. Green = higher mean score, Red = lower mean score. Q1 = worst 25% by KenPom, Q4 = best 25%. 2025-26 D1 season.</figcaption>
</figure>

The heatmap makes the structure visible. Guard and wing archetypes including Primary Ball Handler, Secondary Ball Handler, Shot Creator / Slasher, Off-Screen / Movement Shooter, and Stationary Shooter all show relatively high mean scores across every quartile, meaning that nearly every D1 program has players functioning in these roles at a reasonable level. The real differentiation happens in the big archetypes.

Versatile Big scores are dramatically higher for Q4 (best 25%) teams compared to Q1 (worst 25%) teams, averaging 34.9 versus 20.7. The same separation appears for Roll and Cut Big (23.2 versus 14.0) and Stretch Big (28.5 versus 20.4). The worst KenPom teams tend to lack meaningful frontcourt size, and the best KenPom teams consistently prioritize having a strong Versatile Big as part of their core three players. Q4 teams' big three by average archetype score are Primary Ball Handler (61.2), Secondary Ball Handler (60.9), and Versatile Big (34.9). Q1 teams' big three are Primary Ball Handler (52.7), Secondary Ball Handler (51.2), and Shot Creator / Slasher (56.0), a rotation of guard and wing archetypes with essentially no meaningful big presence. The best teams separate themselves at the frontcourt positions.

## Archetype Correlations with KenPom Rating

<figure class="chart-figure">
  <img src="{{ '/assets/images/archetype-score-correlation-kenpom.png' | relative_url }}" alt="Horizontal bar chart showing Pearson r correlations between average archetype score for top-5 players and KenPom net rating, ranked from smallest to largest">
  <figcaption>Avg Archetype Score (Top-5 Players) Correlation with KenPom. * p&lt;.05  ** p&lt;.01  *** p&lt;.001. Pearson r with KenPom Net Rating. 2025-26 D1 season.</figcaption>
</figure>

The correlation chart ranks every archetype by the strength of its relationship with team KenPom rating, using the average archetype score of the top-5 players on each team. Secondary Ball Handler leads (r = 0.470, p less than 0.001), followed closely by Versatile Big (r = 0.468) and Primary Ball Handler (r = 0.463), with all three significant at p less than 0.001. The practical difference between these three is negligible, and what matters is that all three show the strongest positive relationship with team quality across the full D1 sample.

Roll and Cut Big (r = 0.350) and Post Scorer (r = 0.333) are next, reflecting that any meaningful rim presence correlates positively with team quality even when the archetype itself is less versatile. Stretch Big (r = 0.312), Shot Creator / Slasher (r = 0.278), and Off-Screen / Movement Shooter (r = 0.206) show positive but progressively weaker correlations, suggesting that shooters and creators matter but that they matter less than strong ball handling and frontcourt presence.

Stationary Shooter (r = 0.177) and Athletic Finisher (r = 0.111) show the weakest correlations. Having these archetypes filled well is a positive signal, but it is considerably less predictive than the top-line positional archetypes. The Athletic Finisher finding is particularly notable because athletic big-wing players who score around the rim are common across every level of D1, and the archetype score alone does not differentiate team quality the way Primary Ball Handler or Versatile Big scores do.

## No Primary Ball Handler, No Ceiling

Teams with no primary ball handler, meaning no player whose archetype scores clearly identify them as the lead initiator and creator, consistently underperform in KenPom terms. The top quartile of KenPom teams practically all have at least one player who strongly fills the Primary Ball Handler role. This is not simply a statement that teams need a good point guard. The archetype framework is not position-based, and a wing can score highly as a Primary Ball Handler if they handle the ball and create offense at a sufficient rate. What the data shows is that someone on the team needs to be filling this function at a meaningful level. Teams that rely entirely on shared decision-making without an identifiable primary initiator are consistently worse in KenPom terms than teams with a clear lead creator.

## The Worst Teams Emphasize the Wrong Archetypes

Q1 (worst 25% by KenPom) teams consistently show their highest average archetype scores in Shot Creator / Slasher (56.0) and Primary Ball Handler (52.7), with essentially no separation in the big archetypes. These teams have players filling guard and wing creator roles, but they lack the frontcourt quality that separates good teams from bad ones in this dataset. Q4 teams do not lack guard quality, as their Primary Ball Handler (61.2) and Secondary Ball Handler (60.9) scores are the highest in the dataset. The difference is that they also carry Versatile Big scores (34.9) that are substantially higher than what Q1 teams have (20.7). Elite teams are not making a tradeoff between guard quality and frontcourt quality. They have both, and Q1 teams frequently have reasonable guard archetype coverage while missing the bigs entirely.

## Limitations

All archetype scores are computed from box score statistics, which means they do not capture certain contributions such as off-ball defense, screening quality, and positioning that affect actual team performance. A player can score well in the Versatile Big archetype based on their box score profile and still underperform that label in ways the number cannot capture. The multiple regression approach used here identifies the relationship between archetype composition and KenPom rating but does not establish causality in either direction. Please note that the most likely interpretation is that stronger programs attract players who fit these roles better, and that the roster composition findings here are a consequence of effective recruiting as much as a direct cause of team quality.

</div>
