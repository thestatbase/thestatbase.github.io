# The StatBase — Jekyll Portfolio

Advanced sports analytics portfolio. Built with Jekyll for GitHub Pages.

## Setup Instructions

### 1. Prerequisites

Install Ruby and Bundler if you haven't already:
- Ruby: https://www.ruby-lang.org/en/downloads/ (use rbenv or RVM on Mac/Linux)
- Then run: `gem install bundler`

### 2. Local Development

```bash
# Clone or download this repository, then:
cd thestatbase
bundle install
bundle exec jekyll serve
# Open http://localhost:4000 in your browser
```

### 3. Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a user site, or any name for a project site)
2. Push this folder to that repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOURUSERNAME/YOURREPO.git
git push -u origin main
```

3. In your GitHub repository, go to **Settings > Pages**
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder, then click Save
6. Your site will be live at `https://YOURUSERNAME.github.io/YOURREPO` within a few minutes

### 4. Custom Domain (Optional)

To use a custom domain (e.g. thestatbase.com):
1. In GitHub Pages settings, enter your custom domain
2. With your domain registrar, add a CNAME record pointing to `YOURUSERNAME.github.io`

### 5. Adding or Editing Pages

- All pages are Markdown (.md) or HTML (.html) files in the root or subdirectory folders
- Each page starts with front matter between `---` lines (title, description, layout)
- Images go in `assets/images/`
- CSS is in `assets/css/main.scss`

### File Structure

```
thestatbase/
├── _layouts/         # HTML templates
├── assets/
│   ├── css/          # Stylesheet (main.scss)
│   └── images/       # Charts and images
├── nfl/              # NFL pages
├── nba/              # NBA pages
├── ncaa-mbb/         # NCAA MBB pages
├── index.html        # Home page
├── projects.html     # All projects index
├── _config.yml       # Jekyll configuration
└── Gemfile           # Ruby dependencies
```
