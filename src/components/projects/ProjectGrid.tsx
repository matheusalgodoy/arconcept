import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'The Concrete Monolith',
    category: 'Residential',
    images: [
      '/images/1.png',
      '/images/2.png',
      '/images/3.png',
    ],
    year: 2025,
  },
  {
    id: 2,
    title: 'Zen Passage',
    category: 'Residential',
    images: [
      '/images/2.1.png',
      '/images/2.2.png',
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
  const timeoutRef = useRef(null);

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
    }, 500); // Match this with the CSS transition duration
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
      <div className="overflow-hidden relative bg-white" style={{ minHeight: '240px' }}>
        <img 
          key={currentImageIndex}
          src={project.images[currentImageIndex]} 
          alt={project.title} 
          className={`project-image w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
          style={{
            backgroundColor: 'white',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
          }}
        />
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md transition-colors"
              aria-label="Imagem anterior"
              disabled={isTransitioning}
            >
              ←
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md transition-colors"
              aria-label="Próxima imagem"
              disabled={isTransitioning}
            >
              →
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
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
