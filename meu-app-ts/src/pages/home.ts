import { createPageLayout, initThemeToggle } from '../components';

const homeContent = `
  <div class="page-content">
    <p>Bem-vindo ao nosso site! Aqui você encontrará informações sobre nossos serviços e como podemos ajudá-lo.</p>
  </div>
`;

export const homePage = createPageLayout('Inicio', homeContent);

export function initContatoForm(): void {
  initThemeToggle();
}
