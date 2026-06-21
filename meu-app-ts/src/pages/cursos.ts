import { createPageLayout, initThemeToggle } from '../components';

const cursosContent = `
  <div class="page-content">
    <p>Confira nossos cursos disponíveis e escolha o que melhor se adequa aos seus objetivos.</p>
  </div>
`;

export const cursosPage = createPageLayout('Cursos', cursosContent);

export function initContatoForm(): void {
  initThemeToggle();
}