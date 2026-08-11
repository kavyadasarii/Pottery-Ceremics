function initNavbar() {

  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('mobileDrawer');
  const overlay   = document.getElementById('navOverlay');

  if (!navbar || !hamburger || !drawer || !overlay) {
    console.warn('initNavbar: elements not found. Ensure navbar HTML is injected first.');
    return;
  }
  if (navbar.dataset.navInit === 'true') {
    return;
  }
  navbar.dataset.navInit = 'true';

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  function toggleDrawer(open) {
    hamburger.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
    hamburger.setAttribute('aria-expanded', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => {
    toggleDrawer(!drawer.classList.contains('open'));
  });

  overlay.addEventListener('click', () => toggleDrawer(false));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleDrawer(false);
  });

  
  document.querySelectorAll('.mob-acc-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const body     = document.getElementById(targetId);
      if (!body) return;

      const isOpen = body.classList.contains('open');

      document.querySelectorAll('.mob-acc-body').forEach((b) => b.classList.remove('open'));
      document.querySelectorAll('.mob-acc-toggle').forEach((b) => b.classList.remove('open'));

      if (!isOpen) {
        body.classList.add('open');
        btn.classList.add('open');
      }
    });
  });

  const themeToggles = document.querySelectorAll('.theme-btn');
  let isDark = document.body.classList.contains('dark-mode');

  function applyTheme(dark) {
    document.body.classList.toggle('dark-mode', dark);
    themeToggles.forEach((b) => {
      b.classList.remove('theme-toggle-anim');
      void b.offsetWidth;
      b.textContent = dark ? '☀️' : '🌙';
      b.classList.add('theme-toggle-anim');
    });
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    isDark = dark;
  }

  applyTheme(isDark);

  themeToggles.forEach((btn) => {
    btn.addEventListener('click', () => applyTheme(!isDark));
  });

  const rtlToggles = document.querySelectorAll('.rtl-btn');
  let isRTL = document.documentElement.getAttribute('dir') === 'rtl';

  function applyRTL(rtl) {
    document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    rtlToggles.forEach((b) => {
      b.classList.remove('theme-toggle-anim');
      void b.offsetWidth;
      b.textContent = rtl ? 'LTR' : 'RTL';
      b.classList.add('theme-toggle-anim');
    });
    localStorage.setItem('dir', rtl ? 'rtl' : 'ltr');
    isRTL = rtl;
  }

  if (localStorage.getItem('dir') === 'rtl') {
    applyRTL(true);
  } else {
    applyRTL(false);
  }

  rtlToggles.forEach((btn) => {
    btn.addEventListener('click', () => applyRTL(!isRTL));
  });
}

(function () {
  function normalize(path) {
    try {
      var url = new URL(path, window.location.href);
      var p = url.pathname.replace(/\/index\.html$/i, '/').replace(/\/+$/, '');
      return p === '' ? '/' : p;
    } catch (e) {
      return path;
    }
  }
 
  var currentPath = normalize(window.location.pathname);
  var homeGroup = ['/home-1/home.html', '/home-2/home2.html'];
 
  function setActiveStates(selector, activeClass) {
    document.querySelectorAll(selector).forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;
      var linkPath = normalize(href);
      if (linkPath === currentPath) {
        link.classList.add(activeClass);
      } else {
        link.classList.remove(activeClass);
      }
    });
  }
 
  function applyActiveStates() {
    setActiveStates('.nav-links > .nav-item > .nav-link', 'active');
    setActiveStates('.dropdown-menu a', 'active');
    setActiveStates('.mob-link', 'active');
    setActiveStates('.mob-acc-body a', 'active');
 
    if (homeGroup.indexOf(currentPath) !== -1) {
      var homeTopLink = document.querySelector('.nav-links > .nav-item.dropdown > .nav-link');
      if (homeTopLink) homeTopLink.classList.add('active');
      var mobHomeToggle = document.querySelector('.mob-acc-toggle[data-target="mob-home"]');
      if (mobHomeToggle) mobHomeToggle.classList.add('active');
    }
  }
  
  function whenNavbarReady(callback) {
    if (document.querySelector('.navbar')) {
      callback();
      return;
    }
    var observer = new MutationObserver(function () {
      if (document.querySelector('.navbar')) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(document.body || document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  function boot() {
    whenNavbarReady(function () {
      initNavbar();
      applyActiveStates();
    });
  }
 
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
