async function loadComponents() {
  const tasks = [
    loadComponent('header-placeholder', '/components/header.html'),
    loadComponent(
      'footer-contato-placeholder',
      '/components/footer-contato.html',
    ),
    loadComponent('footer-placeholder', '/components/footer.html'),
    loadComponent('whatsapp-placeholder', '/components/whatsapp.html'),
  ];
  await Promise.all(tasks);
  document.body.classList.add('loaded');
}
function loadComponent(id, path) {
  const element = document.getElementById(id);
  if (!element) {
    return Promise.resolve();
  }
  return fetch(path)
    .then((response) => {
      if (!response.ok) throw new Error(`Erro ao carregar ${path}`);
      return response.text();
    })
    .then((data) => {
      element.innerHTML = data;
    })
    .catch((err) => {
      console.warn('Aviso:', err.message);
    });
}

loadComponents();
