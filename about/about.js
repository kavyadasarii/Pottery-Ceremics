async function loadComponent(id, path) {
  try {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (e) {
    console.warn(`Could not load component: ${path}`, e);
  }
}

Promise.all([
  loadComponent('navbar-placeholder', '../components/navbar.html'),
  loadComponent('footer-placeholder', '../components/footer.html')
]).then(() => {
  if (typeof initNavbar === 'function') initNavbar();
  initReveal();
  markActiveNav();
});

function markActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.getAttribute('href')?.includes('about')) {
      link.classList.add('active');
    }
  });
}

function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

function initHero() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;
  setTimeout(() => heroBg.classList.add('loaded'), 100);
  window.addEventListener('scroll', () => {
    heroBg.style.transform = `scale(1) translateY(${window.scrollY * 0.3}px)`;
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHero();
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
