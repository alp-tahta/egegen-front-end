document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
  });

  // Optional: Close nav when clicking outside (mobile)
  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
});
