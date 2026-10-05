(function () {
  'use strict';
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  function setNavigation(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      setNavigation(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNavigation(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (event) {
      if (!toggle.contains(event.target) && !links.contains(event.target)) setNavigation(false);
    });
    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) setNavigation(false);
    });
    document.documentElement.classList.add('js-ready');
  }
  document.querySelectorAll('[data-project-directory]').forEach(function (directory) {
    var controls = directory.querySelector('.project-filters');
    var buttons = directory.querySelectorAll('[data-sport-filter]');
    var cards = directory.querySelectorAll('[data-project-sport]');
    var status = directory.querySelector('[data-project-status]');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var sport = button.dataset.sportFilter;
        var count = 0;
        buttons.forEach(function (item) {
          item.setAttribute('aria-pressed', String(item === button));
        });
        cards.forEach(function (card) {
          card.hidden = sport !== 'all' && card.dataset.projectSport !== sport;
          if (!card.hidden) count += 1;
        });
        status.textContent = count + ' ' + (count === 1 ? 'project' : 'projects') + ' shown.';
      });
    });
    controls.hidden = false;
  });
}());
