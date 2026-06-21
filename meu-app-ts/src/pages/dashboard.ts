import { createPageLayout, initThemeToggle } from '../components';

const dashboardContent = `
  <div class="page-content">
    <p>Conheça nossa história e missão. Somos uma empresa dedicada a fornecer soluções inovadoras e de qualidade para nossos clientes.</p>
  </div>
`;

export const dashboardPage = createPageLayout('Sobre', dashboardContent);

export function initContatoForm(): void {
  initThemeToggle();
}