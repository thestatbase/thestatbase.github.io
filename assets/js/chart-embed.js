/* Runs inside weekly chart documents. Standalone exports retain their tools. */
(function () {
  'use strict';
  var position = INITIAL.position;
  var prominent = new Set(DATA.charts[position]?.selected || []);
  if (location.protocol === 'https:' || location.protocol === 'http:' || document.documentElement.classList.contains('embed-mode')) {
    selections[position] = new Set(prominent);
    render();
  }
  if (!document.documentElement.classList.contains('embed-mode')) return;
  var controls = document.querySelector('.below details');
  controls.classList.add('embed-player-controls');
  var row = document.createElement('div');
  row.className = 'embed-controls-row';
  ['search', 'auto', 'clear', 'arrows'].forEach(function (id) {
    var node = $(id);
    row.appendChild(id === 'search' || id === 'arrows' ? node.closest('label') : node);
  });
  controls.insertBefore(row, $('csv'));
  $('csv').classList.add('embed-csv');
  var method = $('method').closest('details');
  method.hidden = true;
  for (var next = method.nextElementSibling; next; next = next.nextElementSibling) next.hidden = true;
  $('chart').setAttribute('aria-label', position + ' potential scatterplot, ' + DATA.season + ', Week ' + DATA.week);
  $('shell').setAttribute('tabindex', '0');
  $('shell').setAttribute('aria-label', 'Interactive chart. On smaller screens, scroll horizontally to explore the plot.');
  $('tablewrap').setAttribute('tabindex', '0');
  $('tablewrap').setAttribute('aria-label', 'Player values, ordered by potential');
  var pending = false;
  var configured = false;
  function state() {
    var labels = Array.from(selections[position]);
    // Each week has its own prominent players. Carry only custom selections across weeks.
    var usingDefault = labels.length === prominent.size && labels.every(function (id) { return prominent.has(id); });
    return {labels: labels, useProminent: usingDefault, search: $('search').value, arrows: $('arrows').checked};
  }
  function report() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () {
      pending = false;
      parent.postMessage({type: 'statbase:chart', position: position, week: DATA.week, configured: configured, height: Math.ceil(document.body.getBoundingClientRect().height), state: state()}, '*');
    });
  }
  window.addEventListener('message', function (event) {
    if (event.source !== parent || !event.data) return;
    if (event.data.type === 'statbase:resize') { report(); return; }
    if (event.data.type !== 'statbase:configure') return;
    var config = event.data;
    if (config.position !== position) return;
    if (config.bounds) {
      ['xmin', 'xmax', 'ymin', 'ymax'].forEach(function (key) {
        if (Number.isFinite(config.bounds[key])) DATA.charts[position][key] = config.bounds[key];
      });
    }
    if (config.state) {
      var ids = new Set(DATA.positions[position].map(function (player) { return player.id; }));
      selections[position] = config.state.useProminent ? new Set(prominent) :
        new Set(config.state.labels.filter(function (id) { return ids.has(id); }));
      $('search').value = config.state.search || '';
      $('arrows').checked = config.state.arrows !== false;
    }
    configured = true;
    render();
    report();
  });
  if (window.ResizeObserver) new ResizeObserver(report).observe(document.body);
  window.addEventListener('resize', report);
  document.addEventListener('click', report);
  document.addEventListener('input', report);
  document.addEventListener('change', report);
  document.querySelectorAll('details').forEach(function (detail) { detail.addEventListener('toggle', report); });
  report();
}());
