async function loadComponents() {
  const tasks = [
    loadComponent(
      'header-placeholder',
      '/giovana-jafelice/components/header.html',
    ),
    loadComponent(
      'footer-contato-placeholder',
      '/giovana-jafelice/components/footer-contato.html',
    ),
    loadComponent(
      'footer-placeholder',
      '/giovana-jafelice/components/footer.html',
    ),
    loadComponent(
      'whatsapp-placeholder',
      '/giovana-jafelice/components/whatsapp.html',
    ),
  ];

  // Agora ele vai esperar todas as tarefas que REALMENTE existem
  await Promise.all(tasks);
  document.body.classList.add('loaded');
}

function loadComponent(id, path) {
  const element = document.getElementById(id);

  // SEGREDO: Se o ID não existir nesta página, avisamos que a tarefa acabou (resolve)
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
