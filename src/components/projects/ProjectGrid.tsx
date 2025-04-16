import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Função para pré-carregar uma imagem
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Cache global de imagens
const projectImagesCache = new Map();

/*  This is where you will add your projects
for example:

{
    id: 1,
    title: 'EXAMPLE PROJECT',
    category: 'Residential / Commercial / Institutional / etc ',
    images: [
      '/images/1.png',
      '/images/2.png',
      '/images/3.png',
    ],
    year: 2025,
  },


  You can add as many projects as you want, and they will all be displayed in the project grid.

remembering that the projects must be inside the "const projects = [

and to appear in the details, and to appear in the details, you go to ProjectDetail.tsx

*/

const projects = [
  {
    id: 1,
    title: 'The Concrete Monolith',
    category: 'Residential',
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
    ],
    year: 2025,
  },
  {
    id: 2,
    title: 'Zen Passage',
    category: 'Residential',
    images: [
      '/images/2.1.png',
      '/images/2.2.jpg',
    ],
    year: 2025,
  },
  {
    id: 3,
    title: 'Amber Horizon Kitchen',
    category: 'Residential',
    images: [
      '/images/3.1.png',
      '/images/3.2.png',
    ],
    year: 2025,
  },
  {
    id: 4,
    title: 'The Soft Gallery',
    category: 'Residential',
    images: [
      '/images/4.1.png',
      '/images/4.2.png',
      '/images/4.3.png',
    ],
    year: 2025,
  },
  {
    id: 5,
    title: 'Elevated Reflections',
    category: 'Public',
    images: [
      '/images/5.1.png',
      '/images/5.2.png',
      '/images/5.3.png',
    ],
    year: 2025,
  },
];

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState([]);
  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);
  const [visibleImages, setVisibleImages] = useState({});
  const timeoutRef = useRef(null);
  const imageRefs = useRef({});

  // Pré-carregar todas as imagens do projeto quando o componente é montado
  useEffect(() => {
    const cacheKey = `projectCard-${project.id}`;
    
    // Verifica se as imagens já estão no cache
    if (projectImagesCache.has(cacheKey)) {
      setImagesLoaded(project.images.map((_, index) => index));
      setAllImagesPreloaded(true);
      setVisibleImages({[currentImageIndex]: true});
      return;
    }
    
    const preloadAllImages = async () => {
      try {
        // Preload all images in parallel
        const preloadPromises = project.images.map((src, index) => 
          preloadImage(src)
            .then(img => {
              // Atualiza imagens carregadas imediatamente
              setImagesLoaded(prev => [...prev, index].sort());
              return img;
            })
        );
        
        const loadedImages = await Promise.all(preloadPromises);
        
        // Armazena no cache global
        projectImagesCache.set(cacheKey, loadedImages);
        
        setAllImagesPreloaded(true);
        
        // Setup initial visible state
        setVisibleImages({[currentImageIndex]: true});
      } catch (error) {
        console.error('Erro ao pré-carregar imagens:', error);
      }
    };
    
    preloadAllImages();
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [project.images, project.id, currentImageIndex]);
  
  // Preparar a próxima imagem antes da transição
  const prepareNextImage = (nextIndex) => {
    if (nextIndex !== currentImageIndex) {
      setVisibleImages(prev => ({
        ...prev,
        [nextIndex]: true,  // A próxima imagem já está visível, mas não exibida
      }));
    }
  };

  const changeImage = (newIndex, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (isTransitioning || !allImagesPreloaded) return;
    
    setIsTransitioning(true);
    
    // Primeiro, garanta que a próxima imagem esteja pronta
    prepareNextImage(newIndex);
    
    // Curto atraso para garantir que o React renderize a imagem oculta
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 200); // Transição ainda mais rápida
    }, 50);
  };

  const nextImage = (e) => {
    const newIndex = currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1;
    changeImage(newIndex, e);
  };

  const prevImage = (e) => {
    const newIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
    changeImage(newIndex, e);
  };

  const isImageLoaded = (index) => imagesLoaded.includes(index);

  return (
    <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
      <div className="overflow-hidden relative bg-white" style={{ minHeight: '240px' }}>
        {/* Loader enquanto não estiver pronto */}
        {!allImagesPreloaded && (
          <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center">
            <p className="text-gray-400">Carregando...</p>
          </div>
        )}
        
        {/* Renderiza todas as imagens com posicionamento absoluto */}
        {project.images.map((src, index) => (
          <img 
            key={`img-${index}`}
            ref={el => imageRefs.current[index] = el}
            src={src} 
            alt={project.title} 
            className={`project-image w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-200 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            } ${visibleImages[index] ? 'block' : 'hidden'}`}
            style={{
              backgroundColor: 'white',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
            }}
          />
        ))}
        
        {allImagesPreloaded && project.images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md transition-colors z-20"
              aria-label="Imagem anterior"
              disabled={isTransitioning}
            >
              ←
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md transition-colors z-20"
              aria-label="Próxima imagem"
              disabled={isTransitioning}
            >
              →
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20">
              {project.images.map((_, index) => (
                <span 
                  key={index} 
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-poppins text-xl mb-1">{project.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm text-grey-elegant/70">{project.category}</p>
          <p className="text-sm text-grey-elegant/70">{project.year}</p>
        </div>
      </div>
    </Link>
  );
};

// Pré-carrega todos os projetos
const preloadAllProjectImages = () => {
  projects.forEach(project => {
    project.images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });
};

// Pré-carrega imagens assim que o componente é importado
preloadAllProjectImages();

const ProjectGrid = () => {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
