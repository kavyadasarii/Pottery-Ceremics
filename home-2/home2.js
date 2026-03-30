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
});

function initReveal() {
  const reveals = document.querySelectorAll('.reveal2');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(r => io.observe(r));
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
