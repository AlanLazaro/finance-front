import { createPageLayout, initThemeToggle } from '../components';

const contactFormContent = `
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
      <div class="dropdown-container">
        <button type="button" class="dropdown-toggle" id="objetivosToggle">
          Selecione objetivos
          <span class="dropdown-icon">▼</span>
        </button>
        <div class="objectives-dropdown" id="objetivosDropdown">
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
      </div>
      <textarea id="outrosTexto" name="outrosTexto" class="outros-textarea" placeholder="Por favor, especifique..." style="display: none;"></textarea>
    </div>

    <button type="submit" class="submit-btn">Enviar</button>
  </form>
`;

export const contatoPage = createPageLayout('Contato', contactFormContent);

export function initContatoForm(): void {
  const form = document.getElementById('contactForm') as HTMLFormElement;
  const outrosCheckbox = document.getElementById('outrosCheckbox') as HTMLInputElement;
  const outrosTexto = document.getElementById('outrosTexto') as HTMLTextAreaElement;
  const objetivosToggle = document.getElementById('objetivosToggle') as HTMLButtonElement;
  const objetivosDropdown = document.getElementById('objetivosDropdown') as HTMLDivElement;
  const objetivosCheckboxes = document.querySelectorAll('.objetivo-checkbox') as NodeListOf<HTMLInputElement>;

  // ============ DROPDOWN FUNCTIONALITY ============
  if (objetivosToggle && objetivosDropdown) {
    // Toggle dropdown
    objetivosToggle.addEventListener('click', (e) => {
      e.preventDefault();
      objetivosDropdown.classList.toggle('active');
      objetivosToggle.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!objetivosToggle.contains(e.target as Node) && !objetivosDropdown.contains(e.target as Node)) {
        objetivosDropdown.classList.remove('active');
        objetivosToggle.classList.remove('active');
      }
    });

    // Update button text when checkboxes change
    objetivosCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const selected = Array.from(objetivosCheckboxes)
          .filter(cb => cb.checked)
          .map(cb => cb.value);
        
        if (selected.length > 0) {
          objetivosToggle.innerHTML = `${selected.join(', ')}<span class="dropdown-icon">▼</span>`;
        } else {
          objetivosToggle.innerHTML = `Selecione objetivos<span class="dropdown-icon">▼</span>`;
        }
      });
    });
  }

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
      if (objetivosToggle) {
        objetivosToggle.innerHTML = `Selecione objetivos<span class="dropdown-icon">▼</span>`;
        objetivosToggle.classList.remove('active');
      }
      if (objetivosDropdown) {
        objetivosDropdown.classList.remove('active');
      }
    });
  }

  // Inicializa o toggle de tema
  initThemeToggle();
}