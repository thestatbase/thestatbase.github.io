(function () {
  'use strict';
  document.querySelectorAll('[data-potential-album]').forEach(function (album) {
    var seasons = JSON.parse(album.querySelector('[data-album-data]').textContent).seasons;
    var position = album.dataset.position;
    var seasonInput = album.querySelector('[data-album-season]');
    var weekInput = album.querySelector('[data-album-week]');
    var progression = album.querySelector('[data-album-progression]');
    var prev = album.querySelector('[data-album-prev]');
    var next = album.querySelector('[data-album-next]');
    var play = album.querySelector('[data-album-play]');
    var slider = album.querySelector('[data-album-slider]');
    var frame = album.querySelector('[data-album-frame]');
    var status = album.querySelector('[data-album-status]');
    var seasonIndex = Number(seasonInput.value);
    var index = Number(weekInput.value);
    var timer;
    var states = {};
    var bounds = {};
    var activeSeason = seasonIndex;
    var currentChart;
    var frameReady = false;

    function stop() {
      clearInterval(timer);
      timer = undefined;
      play.textContent = 'Play';
      play.setAttribute('aria-pressed', 'false');
    }
    function controls() {
      var season = seasons[seasonIndex];
      var chart = season.weeks[index];
      weekInput.value = String(index);
      weekInput.disabled = season.weeks.length < 2;
      progression.hidden = season.weeks.length < 2;
      prev.disabled = index === 0;
      next.disabled = index === season.weeks.length - 1;
      slider.max = String(season.weeks.length - 1);
      slider.value = String(index);
      slider.setAttribute('aria-valuetext', 'Week ' + chart.week);
      frame.title = position + ' potential chart, ' + season.label + ', Week ' + chart.week;
      status.textContent = 'Week ' + chart.week + ' · ' + season.weeks.length + ' chart' + (season.weeks.length === 1 ? '' : 's') + ' available';
    }
    function sendConfig(restore) {
      if (!frame.contentWindow || !frameReady) return;
      var config = {type: 'statbase:configure', position: position, bounds: bounds[seasonIndex]};
      if (restore && states[seasonIndex]) config.state = states[seasonIndex];
      frame.contentWindow.postMessage(config, '*');
    }
    function show(value) {
      var weeks = seasons[seasonIndex].weeks;
      index = Math.max(0, Math.min(weeks.length - 1, value));
      controls();
      currentChart = weeks[index];
      activeSeason = seasonIndex;
      var url = new URL(currentChart.url, document.baseURI);
      url.searchParams.set('embed', '1');
      frameReady = false;
      frame.src = url.href;
    }
    window.addEventListener('message', function (event) {
      if (event.source !== frame.contentWindow || !event.data || event.data.type !== 'statbase:chart') return;
      if (event.data.position !== position) return;
      if (event.data.week !== currentChart.week) return;
      if (event.origin !== location.origin && event.origin !== 'null') return;
      if (!frameReady) { frameReady = true; sendConfig(true); }
      var height = event.data.height;
      if (Number.isFinite(height) && height > 100 && height < 6000) frame.style.height = (height + 2) + 'px';
      if (event.data.configured) states[activeSeason] = event.data.state;
    });
    // Retain one common axis range per position and season as weeks are added.
    seasons.forEach(function (season, si) {
      Promise.all(season.weeks.map(function (chart) {
        return fetch(chart.url).then(function (response) { if (!response.ok) throw new Error('Chart unavailable'); return response.text(); })
          .then(function (html) {
            var node = new DOMParser().parseFromString(html, 'text/html').getElementById('chart-data');
            return JSON.parse(node.textContent).charts[position];
          });
      })).then(function (charts) {
        bounds[si] = {xmin: Math.min.apply(null, charts.map(function (c) { return c.xmin; })), xmax: Math.max.apply(null, charts.map(function (c) { return c.xmax; })), ymin: Math.min.apply(null, charts.map(function (c) { return c.ymin; })), ymax: Math.max.apply(null, charts.map(function (c) { return c.ymax; }))};
        if (si === seasonIndex) sendConfig(false);
      }).catch(function () { /* Each original chart remains usable if preloading fails. */ });
    });
    seasonInput.addEventListener('change', function () {
      stop();
      seasonIndex = Number(seasonInput.value);
      weekInput.replaceChildren();
      seasons[seasonIndex].weeks.forEach(function (chart, i) {
        var option = document.createElement('option'); option.value = String(i); option.textContent = 'Week ' + chart.week; weekInput.appendChild(option);
      });
      show(seasons[seasonIndex].weeks.length - 1);
    });
    weekInput.addEventListener('change', function () { stop(); show(Number(weekInput.value)); });
    prev.addEventListener('click', function () { stop(); show(index - 1); });
    next.addEventListener('click', function () { stop(); show(index + 1); });
    slider.addEventListener('input', function () { stop(); show(Number(slider.value)); });
    play.addEventListener('click', function () {
      if (timer) { stop(); return; }
      if (seasons[seasonIndex].weeks.length < 2) return;
      play.textContent = 'Pause'; play.setAttribute('aria-pressed', 'true');
      if (index === seasons[seasonIndex].weeks.length - 1) show(0);
      timer = setInterval(function () { if (index >= seasons[seasonIndex].weeks.length - 1) stop(); else show(index + 1); }, 3000);
    });
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); });
    frame.addEventListener('load', function () { frameReady = true; sendConfig(true); });
    currentChart = seasons[seasonIndex].weeks[index];
    controls();
  });

  // Image links still open the original PNG when JavaScript is unavailable.
  if (!window.HTMLDialogElement) return;
  var dialog = document.createElement('dialog');
  dialog.className = 'potential-image-dialog';
  var close = document.createElement('button');
  close.type = 'button'; close.textContent = 'Close';
  var largeImage = document.createElement('img');
  dialog.append(close, largeImage);
  document.body.appendChild(dialog);
  document.querySelectorAll('[data-enlarge-chart]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      largeImage.src = link.href; largeImage.alt = link.querySelector('img') ? link.querySelector('img').alt : (link.getAttribute('aria-label') || 'Supporting chart');
      dialog.setAttribute('aria-label', largeImage.alt);
      dialog.showModal(); dialog.scrollTop = 0;
    });
  });
  close.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) { if (event.target === dialog) { var box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
}());
