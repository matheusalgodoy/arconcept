import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Ruler, ChevronLeft, ChevronRight } from 'lucide-react';

// This would typically come from an API or database

/*
example of a project:

 {
    id: 1,
    title: 'EXAMPLE PROJECT',
    category: 'Residential / Commercial / Institutional / etc ',
    year: 2025,
    location: 'Surrey, UK',
    client: 'Private',
    description: 'A sculptural residence with expressive geometry and brutalist aesthetics, inspired by futuristic architectural language.',
    images: [
      '/images/1.png',
      '/images/2.png',
      '/images/3.png'
    ]
  },

it also has to be inside const projectsData = [

*/

const projectsData = [
  {
    id: 1,
    title: 'The Concrete Monolith',
    category: 'Residential',
    year: 2025,
    location: 'La Paz, MX',
    client: 'Private',
    description: 'A sculptural residence with expressive geometry and brutalist aesthetics, inspired by futuristic architectural language.',
    images: [
      '/images/1.png',
      '/images/2.png',
      '/images/3.png'
    ]
  },
  {
    id: 2,
    title: 'Zen Passage',
    category: 'Residential',
    year: 2025,
    location: 'La Paz, MX',
    client: 'Private',
    description: 'A serene entrance that blends raw materials with natural greenery and a modern atmosphere of calm.',
    images: [
      '/images/2.1.png',
      '/images/2.2.png',
    ]
  },
  {
    id: 3,
    title: 'Amber Horizon Kitchen',
    category: 'Residential',
    year: 2025,
    location: 'La Paz, MX',
    client: 'Private',
    description: "An immersive kitchen bathed in golden light, where premium functionality meets warm, contemporary design.",
    images: [
      '/images/3.1.png',
      '/images/3.2.png',
    ]
  },
  {
    id: 4,
    title: 'The Soft Gallery',
    category: 'Residential',
    year: 2025,
    location: 'La Paz, MX',
    client: 'Private',
    description: "A luxurious living space with gallery-style design, where every texture and form is crafted to offer art, relaxation, and sophistication.",
    images: [
      '/images/4.1.png',
      '/images/4.2.png',
      '/images/4.3.png',
    ]
  },
  {
    id: 5,
    title: 'Elevated Reflections',
    category: 'Public',
    year: 2025,
    location: 'La Paz, MX',
    client: 'Private',
    description: "An elevated and elegant architectural proposal with sculptural presence and modern lines that reflect both light and surroundings.",
    images: [
      '/images/5.1.png',
      '/images/5.2.png',
      '/images/5.3.png',
    ]
  },












];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '1');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  
  const project = projectsData.find(p => p.id === projectId);
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const changeImage = (newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex(newIndex);
    
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration
  };

  const nextImage = () => {
    const newIndex = currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
    changeImage(newIndex);
  };

  const goToImage = (index) => {
    changeImage(index);
  };

  if (!project) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-3xl mb-4">Project not found</h2>
        <Link to="/projects" className="text-salmon hover:underline">
          Back to all projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <Link to="/projects" className="inline-flex items-center mb-8 hover:text-salmon transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to all projects
        </Link>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">{project.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Clock size={18} className="mr-2 text-salmon" />
              <p><span className="font-medium">Year:</span> {project.year}</p>
            </div>
            <div className="flex items-center mb-4">
              <MapPin size={18} className="mr-2 text-salmon" />
              <p><span className="font-medium">Location:</span> {project.location}</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="mb-4"><span className="font-medium">Client:</span> {project.client}</p>
            <p>{project.description}</p>
          </div>
        </div>
        
        <div className="relative mb-4 bg-white overflow-hidden" style={{ minHeight: '400px' }}>
          <img 
            key={currentImageIndex}
            src={project.images[currentImageIndex]} 
            alt={`${project.title} - Image ${currentImageIndex + 1}`} 
            className={`w-full max-h-[80vh] object-cover transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
            style={{ 
              backgroundColor: 'white',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
            }}
          />
          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 shadow-md transition-colors"
                aria-label="Imagem anterior"
                disabled={isTransitioning}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 shadow-md transition-colors"
                aria-label="Próxima imagem"
                disabled={isTransitioning}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {project.images.length > 1 && (
          <div className="flex justify-center items-center gap-2 mb-8">
            {project.images.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToImage(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-salmon' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}

        {project.images.length > 1 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {project.images.map((image, index) => (
              <button 
                key={index} 
                onClick={() => goToImage(index)}
                className={`overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex ? 'ring-2 ring-salmon' : ''
                }`}
                disabled={isTransitioning}
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Thumbnail ${index + 1}`} 
                  className="w-full aspect-square object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
