document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const nameInput = document.querySelector('.contact-form input[type="text"]');
  const emailInput = document.querySelector('.contact-form input[type="email"]');
  const messageInput = document.querySelector('.contact-form textarea');
  const formContainer = document.getElementById('form-container-contact');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (nameInput.value.trim() === '') {
          alert('Por favor, preencha seu nome.');
          return;
      }

      if (emailInput.value.trim() === '') {
          alert('Por favor, preencha seu email.');
          return;
      }

      if (!isValidEmail(emailInput.value.trim())) {
          alert('Por favor, insira um email válido.');
          return;
      }

      if (messageInput.value.trim() === '') {
          alert('Por favor, preencha sua mensagem.');
          return;
      }


      formContainer.innerHTML = '<p>✅ Mensagem enviada com Sucesso!</p>';
      formContainer.classList.remove('hidden-contact');

      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';

      setTimeout(function () {
          formContainer.classList.add('hidden-contact');
      }, 3000);
  });

  function isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
});
