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
