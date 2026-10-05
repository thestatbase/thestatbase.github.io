# The StatBase

Complete Jekyll source for https://thestatbase.github.io.

## Publish on GitHub Pages

1. Extract this ZIP.
2. Use the contents of `thestatbase.github.io-main` as the root of the existing repository. Keep the repository's current Pages publishing settings.
3. Remove any old `nfl/wr-potential.md` and `nfl/rb-potential.md` files. The current versions are `.html` files with the same public URLs; leaving both versions creates duplicate outputs.
4. Commit the updated files. GitHub Pages builds and publishes the site.

All nine project URLs are preserved. The homepage and project directory link to every project. JavaScript adds sport filters and the mobile navigation menu; the projects and article results remain readable without JavaScript.

## Local development

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000.

## Editing

- `_data/projects.json`: project titles, descriptions, and homepage figures.
- `_includes/project-grid.html`: the shared project directory.
- `_layouts/default.html`: navigation, metadata, and footer.
- `assets/css/main.scss`: the site theme.
- `assets/css/potential.css`: the WR and RB results styling.
- `assets/js/site.js`: project filters and mobile navigation.
- `nfl/`, `nba/`, `ncaa-mbb/`: project articles.

The Markdown articles intentionally use `markdown="1"` on their article containers so Kramdown parses the headings, paragraphs, and lists correctly. Retain this attribute when editing.

## This update

- Light portfolio theme with restrained green accents, serif titles, and readable article typography.
- All nine projects available from the homepage, with direct WR and RB links and sport filters.
- Correct Markdown rendering across the seven NBA and NCAA articles.
- Separate WR and RB pages with published-call results displayed directly. The two additional result tabs, position switch, and chart-extrema disclosure were removed.
- Wording changes limited to the requested voice adjustments and punctuation. Existing research figures, formulas, and chart assets are retained; this update does not rerun the statistical analysis.
- No Sites preview is included.

## Validation

Built with Jekyll 3.10.0 and Kramdown 2.4.0. All 11 pages were checked in a real browser at 1366, 390, and 320 pixel widths. Checks covered heading rendering, horizontal overflow, images, internal links, contents links, project filters, mobile navigation, and readable no-JavaScript fallbacks. Original research figures and the retained WR/RB result tables were checked against the previous source.
