
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => io.observe(r));
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
});

function handleSubmit(e) {
  e.preventDefault();
  const btn = document.querySelector('.form-submit-btn');
  btn.querySelector('.btn-text').style.display = 'none';
  btn.querySelector('.btn-loading').style.display = 'inline';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }, 1400);
}

function resetForm() {
  document.getElementById('contactForm').reset();
  document.getElementById('contactForm').style.display = 'flex';
  document.getElementById('formSuccess').style.display = 'none';
  const btn = document.querySelector('.form-submit-btn');
  btn.querySelector('.btn-text').style.display = 'inline';
  btn.querySelector('.btn-loading').style.display = 'none';
  btn.disabled = false;
}

function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
