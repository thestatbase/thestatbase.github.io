# WR and RB year-one pages

This update keeps the existing StatBase color scheme, typography, navigation,
and all other research pages. The two NFL pages cover the 2025 regular season
only. No year-two model or percentile-box proposal is presented as a tested rule.

The writing follows the supplied AP Research paper's explanatory structure:
define the concept, explain the method, report the results, then discuss their
scope and limitations.

## Changed files

- `nfl/wr-potential.html` replaces `nfl/wr-potential.md`.
- `nfl/rb-potential.html` replaces `nfl/rb-potential.md`.
- Both public URLs stay the same through explicit Jekyll permalinks.
- `assets/css/potential.css` adds styles scoped to these pages.
- `assets/js/potential.js` adds the three result views. Without JavaScript,
  all three sections remain readable.
- `_layouts/default.html` loads these assets only on the two potential pages.
- `projects.html` updates only the two NFL descriptions.

The original Flourish stories are linked from the archive section of each
page. The year-one results are rendered locally, rather than depending on a
third-party embed to read them.

## Sources and definitions

Numerical results were taken from the current `StatBase-2025-Backtest.html`
report (review updated October 4, 2026), the year-one chart summaries, and the
final raw-rates discussion in `Improve Statistical Methods`. The original
formulas follow the clarified definitions in that discussion and
`METHODOLOGY.md`. This website update did not rerun the statistical audit.

The random-player baseline percentages are the rounded rates retrieved from
that discussion. Raw random-baseline denominators were not available, so none
were invented. They are distinct from the always-decline comparison in the
10+ PPR cohort, and from the descriptive check of whether an arrow literally
identified a plotted maximum or minimum.

Three-game scoring per recorded appearance is kept separate from scoring per
scheduled team game, which includes absences as zero. Repeated selections
and overlapping windows are not presented as independent players.

## GitHub Pages

Use the contents of this folder as the repository root. Remove the old
`nfl/wr-potential.md` and `nfl/rb-potential.md` files when applying these changes
to an existing checkout; leaving them creates duplicate output URLs.

The Gemfile and `_config.yml` are unchanged. Use the existing GitHub Pages
publishing setup. For a native local Jekyll build:

    bundle install
    bundle exec jekyll serve

## Included browser preview

`_preview/` contains an already-rendered static preview of the entire site.
Jekyll ignores this underscore-prefixed directory when publishing.
Run the following command from this folder, then open
`http://localhost:8000/nfl/wr-potential/`:

    python3 -m http.server 8000 --directory _preview

The updated NFL previews use the same HTML markup, layout, CSS, and results
script as the source pages. The original SCSS file contains only plain CSS
after its Jekyll frontmatter, so no Sass transformation is required for this
preview. Unchanged Markdown pages were rendered with Marked for convenience.
A native Jekyll build was not available in this execution environment;
the original project's GitHub Pages dependencies are retained.
