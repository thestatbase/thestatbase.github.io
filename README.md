# The StatBase

Complete Jekyll source for https://thestatbase.github.io.

## Publish on GitHub Pages

1. Extract this ZIP.
2. Use the contents of `thestatbase.github.io` as the root of the existing repository. Keep the repository's current Pages publishing settings.
3. Remove any old `nfl/wr-potential.md` and `nfl/rb-potential.md` files. The current versions are `.html` files with the same public URLs; leaving both versions creates duplicate outputs.
4. Commit the updated files. GitHub Pages builds and publishes the site.

All nine project source files are preserved. The homepage and project directory show the two published NFL projects. JavaScript adds sport filters and the mobile navigation menu; the projects and article results remain readable without JavaScript.

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

- Light portfolio theme with restrained green accents, familiar Arial/Helvetica typography.
- The public homepage and project directory contain only the WR and RB projects. The other seven remain available in local draft previews.
- Correct Markdown rendering across the seven NBA and NCAA articles.
- Separate WR and RB pages with published-call results displayed directly. The two additional result tabs, position switch, and chart-extrema disclosure were removed.
- Wording changes limited to the requested voice adjustments and punctuation. Existing research figures, formulas, and chart assets are retained; this update does not rerun the statistical analysis.
- No Sites preview is included.

## Validation

Built with Jekyll 3.10.0 and Kramdown 2.4.0. All 11 pages were checked in a real browser at 1366, 390, and 320 pixel widths. Checks covered heading rendering, horizontal overflow, images, internal links, contents links, project filters, mobile navigation, and readable no-JavaScript fallbacks. Original research figures and the retained WR/RB result tables were checked against the previous source.

## October 12 update

The WR and RB pages retain their article text, results, methodology, and player examples without the supporting figures that previously appeared beside those sections. The RB card now matches the current article's 8/9 (88.9%) decline result.

The 2026–27 albums are at the bottom of the WR and RB pages, starting with Week 4. The supplied player data is preserved in `assets/charts/2026/`. The chart documents include a self-contained embedded view, with the position fixed to the page and export settings hidden.

### Add another chart week

1. Copy the next weekly HTML export into `assets/charts/2026/`.
2. In `_data/potential_albums.json`, append an entry to the matching position's `weeks` array, in week order. For example:

```json
{"week": 5, "url": "/assets/charts/2026/StatBase-WR-2026-W5.html"}
```

After adding each real export and its data-file entry, run `python3 scripts/prepare-potential-charts.py` to apply the embedded view. Only add weeks with actual exported files. Week navigation, a timeline slider, and Play/Pause appear automatically once a season has two or more charts. Search, arrows, and selected player labels carry across weeks. Each position uses a common axis range within the selected season. To add a new season, append a season object with its label and weeks.

### Edit the unpublished projects locally

The `nba/` and `ncaa-mbb/` source files are byte-for-byte unchanged. `_config.yml` excludes these folders from publishing, and the shared project grid only lists NFL projects. Excluding pages from the build does not make source files private in a public GitHub repository.

For a normal preview containing only public pages:

```sh
bundle exec jekyll serve --livereload
```

To preview and edit all nine projects locally:

```sh
bundle exec jekyll serve --config _config.yml,_config.preview.yml --livereload
```

Use only `_config.yml` when publishing. The draft-preview override is for your laptop. Upload the source files in this ZIP to the existing repository; do not upload an old `_site/` or `_preview/` folder. The public build has no HTML outputs for the seven unfinished project URLs.

### Validation for this update

Built the public site and local draft preview with Jekyll 3.10.0 and Kramdown 2.4.0. Checked all four public pages at 1366, 390, and 320 pixel widths. Verified figure enlargement, player search, chart labels and arrows, expandable player tables, iframe sizing, and absence of horizontal page overflow. All seven unfinished project URLs are absent from the public build and all seven appear in the local draft preview. A separate temporary two-week fixture verified Previous/Next, week selection, the timeline slider, playback, consistent axes, and retained player selections/search/arrow settings. Test-fixture weeks are not included in this ZIP.


## October 13: project thumbnails and chart archive

The two public project cards now use SVG scatterplot previews drawn from the supplied 2026 Week 4 data. Ja’Marr Chase and Jahmyr Gibbs are highlighted. Each preview shows the opportunity/production relationship, current versus fitted scoring, and the original percentile boxes. The scoring gap is a same-period residual, not a future forecast. Both public cards fill the desktop row and stack on phones.

A clickable homepage widget and the navigation link open `/charts/`. Visitors can choose WR or RB and switch between the labeled 2025–26 originals and growing 2026–27 albums. The original Flourish story IDs are 3356523 (WR) and 3410504 (RB). They use the provider's responsive embed loader, with direct links and an iframe fallback. The loader starts only when a visitor selects an original album. The implementation follows [Flourish's embedding guide](https://developers.flourish.studio/embedding/introduction/) and [controlled loading guide](https://developers.flourish.studio/embedding/controlling-when-graphics-load/).

Current albums read the same `_data/potential_albums.json` used on the research pages, so a week added there appears in the archive as well. `_data/chart_archive.json` holds the archive labels and original album IDs. Unique IDs keep both current albums independent on the same page. Selected names, search, and arrows persist across available weeks. Hidden albums stop playback. Without page JavaScript, all four labeled albums remain available.

`_includes/chart-archive-card.html` defines the homepage widget; `charts.html` defines the archive; `assets/js/chart-archive.js` handles the album filters and old-album loading. Article text and raw player data are unchanged. The ZIP contains source files, without old generated builds or repository metadata.

Checks for this update: SVG previews were rendered and visually inspected. JavaScript syntax, archive filters, URL selections, lazy loading, reused albums, provider-loader failure fallback, chart rendering, player selection/search, restored preferences, iframe sizing, week navigation, source references, and unchanged research/data were checked. A fresh browser preview, live Flourish rendering, and Ruby/Jekyll build were unavailable in this session. Earlier browser checks above describe previous versions.
