(function () {
  'use strict';

  function syncMotion() {
    document.documentElement.classList.toggle('an-error-paused', document.hidden);
  }
  syncMotion();
  document.addEventListener('visibilitychange', syncMotion);

  // Register independently of external iframes finishing their initial load.
  if ('serviceWorker' in navigator && !document.querySelector('.an-offline-page')) {
    navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch(function () {
      // Recovery is an enhancement; registration failure must not break the site.
    });
  }

  function init() {
    // Standalone recovery pages share the portfolio's session preference.
    if (document.body.classList.contains('an-standalone-recovery')) {
      var themeButtons = document.querySelectorAll('[data-recovery-theme-toggle]');
      function applyTheme(mode, save) {
        var day = mode === 'day';
        document.documentElement.dataset.recoveryTheme = mode;
        document.body.classList.toggle('an-day-mode', day);
        themeButtons.forEach(function (button) {
          button.setAttribute('aria-label', day ? 'Switch to night theme' : 'Switch to day theme');
          button.setAttribute('title', day ? 'Nightfall' : 'Daybreak');
        });
        var themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta) themeMeta.content = day ? '#ffffff' : '#03010a';
        if (save) {
          try {
            sessionStorage.setItem('an_theme', mode);
            sessionStorage.setItem('an_ts', Date.now());
            sessionStorage.setItem('an_act', Date.now());
          } catch (e) {}
        }
      }
      applyTheme(document.documentElement.dataset.recoveryTheme || 'day', false);
      themeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          applyTheme(document.body.classList.contains('an-day-mode') ? 'night' : 'day', true);
        });
      });
    }
    // The standalone embed wrapper and offline page have their own notices.
    if (document.querySelector('.hc-shell, .an-offline-page')) return;
    var notice = document.createElement('aside');
    notice.className = 'an-connection-notice';
    notice.hidden = true;
    notice.setAttribute('role', 'status');
    notice.setAttribute('aria-live', 'polite');
    notice.innerHTML = '<h2 class="an-connection-title"></h2><p class="an-connection-copy"></p><button type="button" class="an-connection-dismiss">Keep exploring</button>';
    document.body.appendChild(notice);
    var title = notice.querySelector('h2');
    var copy = notice.querySelector('p');
    var lostConnection = false;
    function showOffline() {
      lostConnection = true;
      title.textContent = 'A pause between worlds';
      copy.textContent = 'Your connection may have wandered. This page is still yours to explore; online features may need a moment.';
      notice.hidden = false;
    }
    notice.querySelector('button').addEventListener('click', function () { notice.hidden = true; });
    window.addEventListener('offline', showOffline);
    window.addEventListener('online', function () {
      if (!lostConnection) return;
      title.textContent = 'A light on the horizon';
      copy.textContent = 'Your device reports a connection again. Try your last action whenever you are ready.';
      notice.hidden = false;
      lostConnection = false;
    });
    // Connection flags provide hints, never disable an action or discard input.
    if (navigator.onLine === false) showOffline();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
