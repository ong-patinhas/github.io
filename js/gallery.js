
// Dados da galeria
const galleryData = [
  { imgSrc: "../img/gallery-1.jpg", altText: "gallery img 1" },
  { imgSrc: "../img/gallery-2.jpg", altText: "gallery img 2" },
  { imgSrc: "../img/gallery-3.jpg", altText: "gallery img 3" },
  { imgSrc: "../img/gallery-4.jpg", altText: "gallery img 4" },
  { imgSrc: "../img/gallery-5.jpg", altText: "gallery img 5" },
  { imgSrc: "../img/gallery-6.jpg", altText: "gallery img 6" },
  { imgSrc: "../img/gallery-7.jpg", altText: "gallery img 7" },
  { imgSrc: "../img/gallery-8.jpg", altText: "gallery img 8" },
  { imgSrc: "../img/gallery-9.jpg", altText: "gallery img 9" },
];

// Função para gerar o HTML da galeria dinamicamente
function generateGalleryHTML() {
  const galleryContainer = document.getElementById("gallery");
  let galleryHTML = '';

  galleryData.forEach((item, index) => {
      galleryHTML += `
          <div class="gallery-item shadow" style="background-image: url('${item.imgSrc}');">
              <img src="${item.imgSrc}" alt="${item.altText}">
              <span class="zoom-icon">
                  <i class="fas fa-search-plus"></i>
              </span>
          </div>
      `;
  });

  galleryContainer.innerHTML = `<div class="gallery-row">${galleryHTML}</div>`;;
}

// Chamada da função para gerar a galeria
generateGalleryHTML();

// Dados das ações e campanhas
const popularData = [
  {
      imgSrc: "../img/popular-1.jpg",
      title: "Campanha de Sensibilização 🐶🐱",
      description: "Levantamos a voz contra a crueldade animal por meio de campanhas de sensibilização. Trabalhamos para criar uma sociedade mais consciente, denunciando casos de maus-tratos e educando as pessoas sobre a importância de tratar os animais com respeito e compaixão.",
      additionalInfo: "Cada ação, cada palavra compartilhada, é um passo em direção a uma sociedade onde o amor e a empatia são estendidos a todos os seres vivos, criando um ambiente onde animais não apenas sobrevivem, mas prosperam em lares repletos de carinho e cuidado. Juntos, estamos moldando um futuro onde a harmonia entre humanos e animais é uma realidade alcançável."
  },
  {
      imgSrc: "../img/popular-2.jpg",
      title: "Não Compre, Adote 🐶🐱",
      description: "Lutamos contra o comércio de animais de estimação incentivando a adoção em vez da compra. Nossa campanha 'Não Compre, Adote' destaca a diversidade de animais incríveis esperando por um lar amoroso em abrigos, promovendo uma abordagem ética e sustentável para a obtenção de animais de estimação.",
      additionalInfo: "Ao escolher adotar, não apenas proporcionamos uma segunda chance para animais que enfrentaram adversidades, mas também contribuímos para a interrupção do ciclo prejudicial do comércio de animais."
  },
  {
      imgSrc: "../img/popular-6.jpg",
      title: "Campanhas nas Escolas 🐶🐱",
      description: "Estamos comprometidos em construir um futuro onde a compaixão pelos animais seja cultivada desde cedo. Realizamos campanhas educativas em escolas, proporcionando conhecimento sobre o respeito aos animais, a importância da esterilização e o papel vital da proteção animal.",
      additionalInfo: "Nossas campanhas educativas em escolas são uma peça fundamental nesse processo, visando cultivar o respeito pelos animais e promover a compreensão sobre a importância da esterilização. Acreditamos que ao instilar esses valores desde cedo, estamos plantando as sementes para uma sociedade mais empática e responsável para com nossos amigos de quatro patas."
  },
  {
      imgSrc: "../img/popular-3.jpg",
      title: "Adoção de animais de natal 🎅🐶🐱",
      description: "Conheça alguns dos felizes finais que nossos animais adotados encontraram em lares amorosos no natal.",
      additionalInfo: "Neste período festivo, celebramos não apenas a alegria que esses animais trazem aos lares, mas também o amor generoso compartilhado por aqueles que escolheram dar a esses seres incríveis uma nova chance na vida. Junte-se a nós para celebrar esses momentos de aconchego, gratidão e vínculos duradouros criados entre humanos e seus novos amigos de quatro patas. É a magia da adoção que ilumina não apenas o Natal, mas todos os dias do ano."
  },
  {
      imgSrc: "../img/popular-4.jpg",
      title: "Campanha de vacinação contra raiva 🐶🐱💉",
      description: "Campanha realizada na ONG para prevenção da raiva. A raiva é uma doença grave que afeta o sistema nervoso central e é potencialmente fatal, tanto para animais quanto para seres humanos. Os principais transmissores são os animais silvestres, como morcegos, saguis (soim), raposa e macacos, que contaminam cachorros, gatos e humanos de forma acidental."
  },
  {
      imgSrc: "../img/popular-5.jpg",
      title: "Campanha em busca de lar temporário 🐶🐱🏡",
      description: "Realizamos uma campanha em busca de lar temporário para alguns animais da ONG.",
      additionalInfo: "Seja por algumas semanas ou meses, seu apoio cria um ambiente acolhedor que ajuda esses animais a superarem desafios passados e a se prepararem para uma vida cheia de amor. Se você está interessado em fazer parte desta campanha, oferecendo um lar temporário e ajudando um animal a dar seus primeiros passos em direção a um futuro promissor, entre em contato conosco."
  },
  {
      imgSrc: "../img/popular-7.jpg",
      title: "Campanha de Castração 🐶🐱🏥",
      description: "A superpopulação de animais abandonados é um desafio que enfrentamos com campanhas de castração gratuita. Buscamos controlar a reprodução descontrolada, promovendo a saúde e o bem-estar dos animais, além de contribuir para a redução do número de animais nas ruas."
  },
  {
      imgSrc: "../img/popular-8.jpg",
      title: "Campanha de Resgate 🐶🐱🚨",
      description: "Em situações de desastres naturais, estamos prontos para agir. Nossa campanha de resgate mobiliza equipes para salvar animais em áreas afetadas por enchentes, incêndios ou outros desastres, garantindo que também recebam os cuidados necessários em momentos de crise."
  }
];


// Função para gerar o HTML das ações e campanhas dinamicamente
function generateActionsHTML() {
  const popularContainer = document.getElementById("popular-container");
  let actionsHTML = '';

  popularData.forEach((item, index) => {
      actionsHTML += `
          <div class="popular-item shadow">
              <img src="${item.imgSrc}" alt="">
              <div class="popular-open-card-${index % 2 === 0 ? 1 : 2}">
                  <span>${item.title}</span>
                  <p class="text">${item.description}</p>
                  <p class="text">${item.additionalInfo}</p>
              </div>
          </div>
      `;
  });

  popularContainer.innerHTML = actionsHTML;
}

// Chamada da função para gerar as ações dinamicamente
generateActionsHTML();


// image modal
const allGalleryItem = document.querySelectorAll(".gallery-item");
const imgModalDiv = document.getElementById("img-modal-box");
const modalCloseBtn = document.getElementById("modal-close-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let imgIndex = 0;

allGalleryItem.forEach((galleryItem) => {
  galleryItem.addEventListener("click", () => {
    imgModalDiv.style.display = "block";
    let imgSrc = galleryItem.querySelector("img").src;
    imgIndex = parseInt(imgSrc.split("-")[1].substring(0, 1));
    showImageContent(imgIndex);
  });
});

// next click
nextBtn.addEventListener("click", () => {
  imgIndex++;
  if (imgIndex > allGalleryItem.length) {
    imgIndex = 1;
  }
  showImageContent(imgIndex);
});

// previous click
prevBtn.addEventListener("click", () => {
  imgIndex--;
  if (imgIndex <= 0) {
    imgIndex = allGalleryItem.length;
  }
  showImageContent(imgIndex);
});

function showImageContent(index) {
  imgModalDiv.querySelector(
    "#img-modal img"
  ).src = `../img/gallery-${index}.jpg`;
}

modalCloseBtn.addEventListener("click", () => {
  imgModalDiv.style.display = "none";
});