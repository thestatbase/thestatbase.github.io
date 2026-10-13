"""Prepare album exports without changing their embedded player data.

Run from any directory: python3 scripts/prepare-potential-charts.py
The resulting chart files remain self-contained when downloaded.
"""
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
CSS = (ROOT / 'assets/css/chart-embed.css').read_text()
JS = (ROOT / 'assets/js/chart-embed.js').read_text()
ALBUMS = json.loads((ROOT / '_data/potential_albums.json').read_text())

for position, album in ALBUMS.items():
    for season in album['seasons']:
        for chart in season['weeks']:
            path = ROOT / chart['url'].lstrip('/')
            source = path.read_text()
            source = re.sub(r'<!-- statbase-embed-head -->.*?<!-- /statbase-embed-head -->', '', source, flags=re.S)
            source = re.sub(r'<!-- statbase-embed-script -->.*?<!-- /statbase-embed-script -->', '', source, flags=re.S)
            source = re.sub(r'<title>.*?</title>', f'<title>StatBase {position} Potential · Week {chart["week"]}</title>', source, count=1)
            match = re.search(r'(<script id="initial-state"[^>]*>)(.*?)(</script>)', source, re.S)
            initial = json.loads(match[2])
            initial['position'] = position
            source = source[:match.start(2)] + json.dumps(initial) + source[match.end(2):]
            head = '<!-- statbase-embed-head --><script>if(new URLSearchParams(location.search).get("embed")==="1")document.documentElement.classList.add("embed-mode");</script><style>'+CSS+'</style><!-- /statbase-embed-head -->'
            source = source.replace('</head>', head+'</head>', 1)
            source = source.replace('</body>', '<!-- statbase-embed-script --><script>'+JS+'</script><!-- /statbase-embed-script --></body>', 1)
            path.write_text(source)
            print('Prepared', path.relative_to(ROOT))
