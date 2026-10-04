(function () {
  'use strict';
  function initialize(root) {
    root.querySelectorAll('[data-results]').forEach(function (results) {
      var buttons = results.querySelectorAll('[data-result-view]');
      var panels = results.querySelectorAll('[data-result-panel]');
      function select(view) {
        buttons.forEach(function (button) {
          button.setAttribute('aria-pressed', String(button.dataset.resultView === view));
        });
        panels.forEach(function (panel) { panel.hidden = panel.dataset.resultPanel !== view; });
      }
      buttons.forEach(function (button) {
        button.addEventListener('click', function () { select(button.dataset.resultView); });
      });
      select('calls');
    });
  }
  window.StatBasePotential = { initialize: initialize };
  initialize(document);
}());
