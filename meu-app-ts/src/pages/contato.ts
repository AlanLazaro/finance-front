export const contatoPage = `
  <div class="contato-interna-container">
    
    <div class="contato-coluna-esquerda">
      
      <div class="contato-header">
        <h1>Contato</h1>
        <div class="social-links-header">
          <h3>Follow us</h3>
          <div class="social-icons">
            <a href="#" class="social-link instagram" title="Instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
            <a href="#" class="social-link tiktok" title="TikTok" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.26 6.26 0 0 0-1-.08A6.26 6.26 0 0 0 5 20.1a6.26 6.26 0 0 0 10.86-4.43v-7a8.54 8.54 0 0 0 4.77 1.52v-3.6a4.76 4.76 0 0 1-.96-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <form id="contactForm" class="contact-form">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" required>
        </div>

        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" name="telefone" required>
        </div>
        
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
          <label>Objetivos</label>
          <div class="objectives-dropdown">
            <div class="objectives-list">
              <label class="checkbox-label">
                <input type="checkbox" name="objetivo" value="Viagem" class="objetivo-checkbox">
                <span>Viagem</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="objetivo" value="Trabalho" class="objetivo-checkbox">
                <span>Trabalho</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="objetivo" value="Lazer" class="objetivo-checkbox">
                <span>Lazer</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="objetivo" value="Outros" class="objetivo-checkbox" id="outrosCheckbox">
                <span>Outros</span>
              </label>
            </div>
          </div>
          <textarea id="outrosTexto" name="outrosTexto" class="outros-textarea" placeholder="Por favor, especifique..." style="display: none;"></textarea>
        </div>

        <button type="submit" class="submit-btn">Enviar</button>
      </form>

    </div>

    <aside class="contato-painel-lateral">
      
      <button class="theme-toggle-painel" id="themeToggle" title="Alternar tema">
        <span class="theme-icon">🌙</span>
      </button>

      <h2>Painel Extra</h2>
      <div class="painel-conteudo">
        <p>Preencha os seus dados e objetivos para receber um atendimento personalizado da nossa equipe.</p>
      </div>
    </aside>

  </div>
`;

export function initContatoForm(): void {
  const form = document.getElementById('contactForm') as HTMLFormElement;
  const outrosCheckbox = document.getElementById('outrosCheckbox') as HTMLInputElement;
  const outrosTexto = document.getElementById('outrosTexto') as HTMLTextAreaElement;
  const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement;

  // Lógica da caixa de texto complementar para "Outros"
  if (outrosCheckbox && outrosTexto) {
    outrosCheckbox.addEventListener('change', (e) => {
      const isChecked = (e.target as HTMLInputElement).checked;
      outrosTexto.style.display = isChecked ? 'block' : 'none';
      if (!isChecked) {
        outrosTexto.value = '';
      }
    });
  }

  // Envio de dados do formulário
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {
        nome: formData.get('nome'),
        telefone: formData.get('telefone'),
        email: formData.get('email'),
        objetivos: formData.getAll('objetivo'),
        outros: formData.get('outrosTexto')
      };
      console.log('Dados do formulário enviados:', data);
      alert('Formulário enviado com sucesso!');
      form.reset();
      if (outrosTexto) outrosTexto.style.display = 'none';
    });
  }

  // Nova lógica do Alternador de Tema integrado à página
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Sincroniza o ícone (Sol/Lua) de acordo com o tema carregado no HTML
    const atualizaIcone = (tema: string | null) => {
      if (themeIcon) {
        themeIcon.textContent = tema === 'dark' ? '☀️' : '🌙';
      }
    };
    
    atualizaIcone(document.documentElement.getAttribute('data-theme'));

    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const novoTema = isDark ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', novoTema);
      localStorage.setItem('theme', novoTema); // Opcional: Salva a preferência
      atualizaIcone(novoTema);
    });
  }
}