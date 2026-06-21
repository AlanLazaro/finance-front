// ============ SOCIAL ICONS (SVG PATHS) ============
const INSTAGRAM_SVG = `<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
</svg>`;

const TIKTOK_SVG = `<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.26 6.26 0 0 0-1-.08A6.26 6.26 0 0 0 5 20.1a6.26 6.26 0 0 0 10.86-4.43v-7a8.54 8.54 0 0 0 4.77 1.52v-3.6a4.76 4.76 0 0 1-.96-.1z"/>
</svg>`;

// ============ REUSABLE COMPONENTS ============

/**
 * Creates the header component with title and social links
 */
export function createPageHeader(title: string): string {
  return `
    <div class="contato-header">
      <h1>${title}</h1>
      <div class="social-links-header">
        <h3>Follow us</h3>
        <div class="social-icons">
          <a href="#" class="social-link instagram" title="Instagram" aria-label="Instagram">
            ${INSTAGRAM_SVG}
          </a>
          <a href="#" class="social-link tiktok" title="TikTok" aria-label="TikTok">
            ${TIKTOK_SVG}
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Creates the sidebar component with theme toggle
 */
export function createPageSidebar(sidebarContent?: string): string {
  return `
    <aside class="contato-painel-lateral">
      <button class="theme-toggle-painel" id="themeTogglePainel" title="Alternar tema">
        <span class="theme-icon">🌙</span>
      </button>

      <h2>Painel Extra</h2>
      <div class="painel-conteudo">
        ${sidebarContent || '<p>Preencha os seus dados e objetivos para receber um atendimento personalizado da nossa equipe.</p>'}
      </div>
    </aside>
  `;
}

/**
 * Creates the complete page layout with header, content, and sidebar
 */
export function createPageLayout(
  title: string,
  content: string,
  sidebarContent?: string
): string {
  return `
    <div class="contato-interna-container">
      <div class="contato-coluna-esquerda">
        ${createPageHeader(title)}
        ${content}
      </div>
      ${createPageSidebar(sidebarContent)}
    </div>
  `;
}

/**
 * Handles theme toggle button in sidebar and main toggle
 */
export function initThemeToggle(): void {
  const themeTogglePainel = document.getElementById('themeTogglePainel') as HTMLButtonElement;
  
  if (themeTogglePainel) {
    themeTogglePainel.addEventListener('click', () => {
      const event = new CustomEvent('toggleTheme');
      document.dispatchEvent(event);
    });
  }
}
