// Importa as páginas
import { homePage } from './pages/home';
import { dashboardPage } from './pages/dashboard';
import { cursosPage } from './pages/cursos';
import { contatoPage, initContatoForm } from './pages/contato';
import { testeLayoutPage } from './pages/testeLayoutPage';

// Define o conteúdo de cada "página"
const pages: Record<string, string> = {
  home: homePage,
  dashboard: dashboardPage,
  cursos: cursosPage,
  contato: contatoPage,
  testeLayoutPage: testeLayoutPage
};

// Seleciona os elementos do DOM
const contentDiv = document.querySelector<HTMLDivElement>('#content');
const navButtons = document.querySelectorAll<HTMLButtonElement>('.nav-btn');
const themeToggleBtn = document.querySelector<HTMLButtonElement>('#themeToggle');
const themeIcon = document.querySelector<HTMLSpanElement>('.theme-icon');
const htmlElement = document.documentElement;

// ============ THEME MANAGEMENT ============
// Função para obter o tema atual
function getCurrentTheme(): string {
  return localStorage.getItem('theme') || 'light';
}

// Função para aplicar o tema
function applyTheme(theme: string): void {
  if (theme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.removeAttribute('data-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Função para alternar o tema
function toggleTheme(): void {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// Adiciona o evento de clique no botão de toggle
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// Inicializa o tema ao carregar a página
applyTheme(getCurrentTheme());

// ============ PAGE NAVIGATION ============
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

  // Inicializa scripts específicos da página
  if (pageId === 'contato') {
    initContatoForm();
  }
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