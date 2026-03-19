function initMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!menuBtn) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// fica tentando até existir
const interval = setInterval(() => {
  const menuBtn = document.getElementById('menuBtn');

  if (menuBtn) {
    initMenu();
    clearInterval(interval);
  }
}, 100);
