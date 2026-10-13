(function () {
  'use strict';
  var archive = document.querySelector('[data-chart-archive]');
  if (!archive) return;
  var seasonSelect = archive.querySelector('[data-archive-season]');
  var buttons = Array.from(archive.querySelectorAll('[data-archive-position]'));
  var panels = Array.from(archive.querySelectorAll('[data-archive-panel]'));
  var status = archive.querySelector('[data-archive-status]');
  var seasons = JSON.parse(archive.querySelector('[data-archive-seasons]').textContent);
  var query = new URLSearchParams(location.search);
  var season = seasons.some(function (item) { return item.value === query.get('season'); }) ? query.get('season') : seasons[0].value;
  var position = query.get('position') === 'RB' ? 'RB' : 'WR';
  var flourishPromise;

  function flourish() {
    if (window.Flourish && typeof window.Flourish.loadEmbed === 'function') return Promise.resolve(window.Flourish);
    if (flourishPromise) return flourishPromise;
    flourishPromise = new Promise(function (resolve, reject) {
      window.Flourish = {disable_autoload: true};
      var script = document.createElement('script');
      script.src = 'https://public.flourish.studio/resources/embed.js';
      script.async = true;
      script.onload = function () {
        if (window.Flourish && typeof window.Flourish.loadEmbed === 'function') resolve(window.Flourish);
        else reject(new Error('Embed unavailable'));
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return flourishPromise;
  }
  function loadOriginal(panel) {
    var placeholder = panel.querySelector('[data-archive-flourish]');
    if (!placeholder || placeholder.dataset.loaded) return;
    placeholder.dataset.loaded = 'loading';
    var message = panel.querySelector('[data-provider-status]');
    message.hidden = false;
    message.textContent = 'Loading the original chart album…';
    flourish().then(function (api) {
      // A hidden album is loaded only when the visitor returns to it.
      if (panel.hidden) { delete placeholder.dataset.loaded; message.hidden = true; return; }
      api.loadEmbed(placeholder);
      placeholder.dataset.loaded = 'true';
      message.hidden = true;
    }).catch(function () {
      // A plain iframe remains usable when the responsive loader is blocked.
      var frame = document.createElement('iframe');
      frame.className = 'archive-legacy-frame';
      frame.src = 'https://flo.uri.sh/' + placeholder.dataset.src + '/embed';
      frame.title = panel.getAttribute('aria-label');
      frame.loading = 'lazy';
      frame.setAttribute('allowfullscreen', '');
      placeholder.appendChild(frame);
      placeholder.dataset.loaded = 'true';
      message.textContent = 'If the album does not load, open the original on Flourish below.';
    });
  }
  function show(updateURL) {
    seasonSelect.value = season;
    buttons.forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.archivePosition === position)); });
    panels.forEach(function (panel) {
      panel.hidden = panel.dataset.season !== season || panel.dataset.position !== position;
      if (panel.hidden) {
        panel.querySelectorAll('[data-album-play][aria-pressed="true"]').forEach(function (play) { play.click(); });
      } else if (panel.dataset.kind === 'flourish') loadOriginal(panel);
    });
    var info = seasons.find(function (item) { return item.value === season; });
    status.textContent = info.label + ' · ' + (position === 'WR' ? 'Wide receivers' : 'Running backs') + ' · ' + info.description;
    if (updateURL) {
      var url = new URL(location.href);
      url.searchParams.set('season', season);
      url.searchParams.set('position', position);
      try { history.replaceState(null, '', url.href); } catch (error) { /* Local-file previews still work. */ }
    }
    // Charts revealed after loading need a fresh measurement of their height.
    panels.filter(function (panel) { return !panel.hidden; }).forEach(function (panel) {
      panel.querySelectorAll('[data-album-frame]').forEach(function (frame) {
        if (frame.contentWindow) frame.contentWindow.postMessage({type: 'statbase:resize'}, '*');
      });
    });
  }
  seasonSelect.addEventListener('change', function () { season = seasonSelect.value; show(true); });
  buttons.forEach(function (button) { button.addEventListener('click', function () { position = button.dataset.archivePosition; show(true); }); });
  show(false);
  archive.querySelector('[data-archive-controls]').hidden = false;
}());
