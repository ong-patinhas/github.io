let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

// Function to loading blog details
const article = document.querySelectorAll(".article_expandable");
article.forEach((story) => {
  const button = story.querySelector(".article__accordion");
  button.addEventListener("click", () => {
    const paragraph = story.querySelector(".article__hidden-div");
    paragraph.classList.toggle("hidden");
    const text = paragraph.classList.contains("hidden")
      ? "Ler mais"
      : "Fechar";
    button.textContent = text;
  });
});

// função para validar formulário de inscrição na ong
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.subscribe-form form');
    const emailInput = document.querySelector('.subscribe-form input[type="email"]');
    const formContainer = document.getElementById('form-container-footer');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!validateEmail(emailInput.value)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        // Aqui você pode enviar o formulário
        formContainer.innerHTML = '<p>✅ Incrição realizada com Sucesso!</p>';
        formContainer.classList.remove('hidden-form-footer');
        // Limpar o campo de e-mail após o envio bem-sucedido
        emailInput.value = '';
        // Esconder o formulário após 3 segundos
        setTimeout(function () {
            formContainer.classList.add('hidden-form-footer');
        }, 3000);
    });

    function validateEmail(email) {
        // Expressão regular para validar o formato do e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formDoacao');
    const valorInput = document.getElementById('valorDoacao');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        if (valorInput.value.trim() === '') {
            alert('Por favor, insira um valor para doar.');
            return;
        }
        
        if (parseFloat(valorInput.value) <= 0.1) {
            alert('Por favor, insira um valor maior que R$ 0,10 para doar.');
            return;
        }
        
        form.submit();
        valorInput.value = '';
    });
});
