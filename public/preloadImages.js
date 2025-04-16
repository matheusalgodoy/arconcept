// Lista de imagens para pré-carregar
const imagesToPreload = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/2.1.jpg',
  '/images/2.2.jpg',
  '/images/3.1.jpg',
  '/images/3.2.jpg',
  '/images/4.1.jpg',
  '/images/4.2.jpg',
  '/images/4.3.jpg',
  '/images/5.1.jpg',
  '/images/5.2.jpg',
  '/images/5.3.jpg',
];

// Função para pré-carregar imagens em segundo plano
function preloadImages() {
  console.log('Iniciando pré-carregamento de imagens...');
  
  // Carregamos as imagens em segundo plano
  imagesToPreload.forEach((src) => {
    const img = new Image();
    // Salvamos no cache do navegador
    img.src = src;
  });
}

// Inicia o pré-carregamento após a página carregar completamente
window.addEventListener('load', () => {
  // Pequeno atraso para garantir que a interface principal seja carregada primeiro
  setTimeout(preloadImages, 1000);
}); 