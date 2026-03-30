function initNavbar() {

  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const drawer    = document.getElementById('mobileDrawer');
  const overlay   = document.getElementById('navOverlay');

  if (!navbar || !hamburger || !drawer || !overlay) {
    console.warn('initNavbar: elements not found. Ensure navbar HTML is injected first.');
    return;
  }

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
      void b.offsetWidth; // Force reflow to restart animation
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
}
