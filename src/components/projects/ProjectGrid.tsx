import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../ui/OptimizedImage';

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
      '/images/2.1.jpg',
      '/images/2.2.jpg',
    ],
    year: 2025,
  },
  {
    id: 3,
    title: 'Amber Horizon Kitchen',
    category: 'Residential',
    images: [
      '/images/3.1.jpg',
      '/images/3.2.jpg',
    ],
    year: 2025,
  },
  {
    id: 4,
    title: 'The Soft Gallery',
    category: 'Residential',
    images: [
      '/images/4.1.jpg',
      '/images/4.2.jpg',
      '/images/4.3.jpg',
    ],
    year: 2025,
  },
  {
    id: 5,
    title: 'Elevated Reflections',
    category: 'Public',
    images: [
      '/images/5.1.jpg',
      '/images/5.2.jpg',
      '/images/5.3.jpg',
    ],
    year: 2025,
  },
];

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  // Limpar timeouts quando o componente é desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const changeImage = (newIndex, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex(newIndex);
    
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const nextImage = (e) => {
    const newIndex = currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1;
    changeImage(newIndex, e);
  };

  const prevImage = (e) => {
    const newIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
    changeImage(newIndex, e);
  };

  return (
    <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
      <div className="overflow-hidden relative bg-white" style={{ height: '280px' }}>
        {/* Imagem otimizada */}
        <OptimizedImage
          src={project.images[currentImageIndex]}
          alt={project.title}
          className={`project-image w-full h-full transition-opacity duration-300 ${
            isTransitioning ? 'opacity-95' : 'opacity-100'
          }`}
          style={{
            backgroundColor: 'white',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
          }}
          fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E"
        />
        
        {project.images.length > 1 && (
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
