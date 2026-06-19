// Define o conteúdo de cada "página"
const pages: Record<string, string> = {
  home: `
    <h1>Início</h1>
    <p> Comprem muitos cursos.</p>
  `,
  dashboard: `
    <h1>Historia</h1>
    <p> Toda a Historia Muitos anos de XP com muitos alunos.</p>
  `,
  cursos: `
    <h1>Cursos disponiveis</h1>
    <p>Cursos de Viagem.</p>
  `,
  yasgata: `
    <h1>YAS MUITO GATA</h1>
  `
};

// Seleciona os elementos do DOM
const contentDiv = document.querySelector<HTMLDivElement>('#content');
const navButtons = document.querySelectorAll<HTMLButtonElement>('.nav-btn');

const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Glassial Indifference', sans-serif;
  }

  h1 {
    font-family: 'Fredoka', sans-serif;
  }
`;
document.head.appendChild(style);

// Função para mudar a página
function navigateTo(pageId: string) {
  if (!contentDiv) return;

  // Atualiza o conteúdo HTML
  contentDiv.innerHTML = pages[pageId] || pages['home'];

  // Atualiza a classe "active" nos botões
  navButtons.forEach(btn => {
    if (btn.dataset.page === pageId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Adiciona os eventos de clique no menu
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const pageId = btn.dataset.page;
    if (pageId) navigateTo(pageId);
  });
});

// Inicializa na página "home"
navigateTo('home');