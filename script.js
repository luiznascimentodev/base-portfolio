const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Seleciona o botão
const scrollToTopButton = document.getElementById('scrollToTop');

// Mostra o botão ao rolar para baixo
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Exibe o botão após 200px de rolagem
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

// Função para rolar até o topo ao clicar no botão
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rola suavemente
  });
});

// Funções para os botões de LinkedIn, GitHub e Download CV
document.getElementById('linkedin-profile').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/luiz-felippe-nascimento/', '_blank');
});

document.getElementById('go-to-projects').addEventListener('click', () => {
  window.open('https://github.com/luiznascimentodev', '_blank');
});

document.getElementById('download-cv').addEventListener('click', () => {
  window.location.href = './assets/Luiz_Nascimento_CV.pdf';
});

// Animação para os elementos de tecnologia
const tecnologias = document.querySelectorAll('.tecnologia');
tecnologias.forEach(tecnologia => {
  tecnologia.addEventListener('mouseover', () => {
    tecnologia.classList.add('hover');
  });
  tecnologia.addEventListener('mouseout', () => {
    tecnologia.classList.remove('hover');
  });
});

// Carrossel de projetos
const carousel = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

