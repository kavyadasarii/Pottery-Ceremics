(function () {
  var root = document.documentElement;

  
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  var savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    savedTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  applyTheme(savedTheme);

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  });

  
  function applyDir(dir) {
    root.setAttribute('dir', dir);
    root.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
  }

  var savedDir = localStorage.getItem('terrakiln-dir') || 'ltr';
  applyDir(savedDir);

  document.querySelectorAll('.rtl-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var current = root.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
      var next = current === 'rtl' ? 'ltr' : 'rtl';
      applyDir(next);
      localStorage.setItem('terrakiln-dir', next);
    });
  });

  
  document.querySelectorAll('.toggle-visibility').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = document.getElementById(btn.getAttribute('data-target'));
      var icon = btn.querySelector('i');
      if (!input) return;
      var isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      if (icon) {
        icon.classList.toggle('fa-eye', !isHidden);
        icon.classList.toggle('fa-eye-slash', isHidden);
      }
      btn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    });
  });

  
  document.querySelectorAll('form[data-auth-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn-submit');
      if (btn) {
        var original = btn.innerHTML;
        btn.textContent = form.getAttribute('data-auth-form') === 'signup' ? 'Firing up your account…' : 'Signing in…';
        btn.disabled = true;
        setTimeout(function () {
          btn.innerHTML = original;
          btn.disabled = false;
        }, 1200);
      }
    });
  });
})();
