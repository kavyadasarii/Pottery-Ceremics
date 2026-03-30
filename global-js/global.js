(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
})();


function initReveal() {
  const els = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-up'
  );
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.10 });
  els.forEach(el => obs.observe(el));
}


window.toggleFaq = function (item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
};


function initServicesFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const cards  = document.querySelectorAll('.service-card');
      let n = 0;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
        if (show) n++;
      });
      const el = document.getElementById('visible-count');
      if (el) el.textContent = n;
    });
  });
}


function initHeroBg() {
  const bg = document.getElementById('heroBg');
  if (!bg) return;
  const m = getComputedStyle(bg).backgroundImage.match(/url\(["']?([^"')]+)/);
  if (!m) return;
  const img = new Image();
  img.onload = () => bg.classList.add('loaded');
  img.src = m[1];
}


async function loadComponent(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res  = await fetch(url);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    console.error('loadComponent failed:', url, err);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHeroBg();
  initServicesFilter();
});