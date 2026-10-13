/* Adapts the embedded view; the supplied weekly HTML exports stay unchanged. */
(function () {
  'use strict';
  var resizeObserver;
  var reportHeight;
  window.statbaseAlbumChart = {
    readState: function (position) {
      return {labels: Array.from(selections[position]), search: $('search').value, arrows: $('arrows').checked};
    },
    configure: function (position, bounds, state, onResize) {
      $('position').value = position;
      $('position').closest('label').hidden = true;
      ['image-width', 'image-height'].forEach(function (id) { $(id).closest('label').hidden = true; });
      ['png', 'html'].forEach(function (id) { $(id).hidden = true; });
      var spacer = document.querySelector('.spacer');
      if (spacer) spacer.hidden = true;
      document.title = 'StatBase ' + position + ' Potential Chart · Week ' + DATA.week;
      $('instructions').textContent = 'Click a dot to add or remove its name. Use the player table below to inspect each value.';
      $('chart').setAttribute('aria-label', position + ' potential scatterplot for ' + DATA.season + ', Week ' + DATA.week);
      if (bounds && DATA.charts[position]) Object.assign(DATA.charts[position], bounds);
      if (state) {
        var ids = new Set((DATA.positions[position] || []).map(function (p) { return p.id; }));
        selections[position] = new Set(state.labels.filter(function (id) { return ids.has(id); }));
        $('search').value = state.search;
        $('arrows').checked = state.arrows;
      }
      render();
      if (!document.getElementById('album-view-style')) {
        var style = document.createElement('style');
        style.id = 'album-view-style';
        style.textContent = 'body{background:#fff}.toolbar{margin:8px auto 14px;padding:0 18px;gap:10px}.toolbar [hidden]{display:none!important}button:hover{border-color:#0023ff;color:#0023ff}input[type=checkbox]{accent-color:#0023ff}#instructions{padding:0 18px;margin-bottom:12px}.shell{border-left:0;border-right:0}#status{padding:0 18px}.below{padding:0 18px 12px}#chart{min-width:780px}@media(max-width:700px){.toolbar{padding:0 12px}.toolbar button{font-size:12px;padding:8px}.toolbar label{font-size:11px}#instructions,#status,.below{padding-left:12px;padding-right:12px}}';
        document.head.appendChild(style);
      }
      reportHeight = function () { onResize(Math.ceil(document.body.getBoundingClientRect().height) + 8); };
      if (resizeObserver) resizeObserver.disconnect();
      resizeObserver = new ResizeObserver(reportHeight);
      resizeObserver.observe(document.body);
      document.querySelectorAll('details').forEach(function (item) { item.addEventListener('toggle', reportHeight); });
      requestAnimationFrame(reportHeight);
    }
  };
}());
