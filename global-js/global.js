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
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    // Diagnostic: if this logs a suspiciously small number for
    // components/footer.html, the fetched file itself is incomplete —
    // that's a file-on-disk problem, not a CSS or JS problem.
    console.log(`[loadComponent] ${url} -> ${html.length} chars`);

    el.innerHTML = html;
    
    fixComponentLinks(el);
  } catch (err) {
    console.error('loadComponent failed:', url, err);
  }
}


function getRelativePrefix() {

  const path = window.location.pathname;
  
  const subfolders = ['about', 'blog', 'contact', 'dashboard', 'home-1', 'home-2', 'login', 'services'];
  const currentFolder = path.split('/').filter(p => p).slice(-2, -1)[0];
  
  if (subfolders.includes(currentFolder)) {
    return '../';
  }
  
  return './';
}

function fixComponentLinks(container) {
  const prefix = getRelativePrefix();
  const links = container.querySelectorAll('a[href]');
  
  links.forEach(link => {
    let href = link.getAttribute('href');
    
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }
    
    if (href.startsWith('/')) {
      href = href.substring(1);
    }
    
    link.href = prefix + href;
  });
}

function getComponentPath(fileName) {
  return getRelativePrefix() + `components/${fileName}`;
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  fixComponentLinks(document.body);

  const navPlaceholder = document.getElementById('navbar-placeholder');

  const promises = [];
  if (navPlaceholder) {
    promises.push(loadComponent('#navbar-placeholder', getComponentPath('navbar.html')));
  }
  // footer-placeholder is no longer fetched here — footer.js injects
  // it directly and calls initFooter() itself once it's in the DOM.

  Promise.all(promises).then(() => {
    if (typeof initNavbar === 'function') initNavbar();
    initReveal();
    initHeroBg();
    initServicesFilter();
  });
});