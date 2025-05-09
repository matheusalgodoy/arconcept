import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Ruler, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';

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
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
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
      '/images/2.1.jpg',
      '/images/2.2.jpg',
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
      '/images/3.1.jpg',
      '/images/3.2.jpg',
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
      '/images/4.1.jpg',
      '/images/4.2.jpg',
      '/images/4.3.jpg',
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
      '/images/5.1.jpg',
      '/images/5.2.jpg',
      '/images/5.3.jpg',
    ]
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '1');
  const project = projectsData.find(p => p.id === projectId);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<number[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Função simplificada para mudar a imagem
  const changeImage = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex(newIndex);
    
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const nextImage = () => {
    if (!project) return;
    const newIndex = currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1;
    changeImage(newIndex);
  };

  const prevImage = () => {
    if (!project) return;
    const newIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
    changeImage(newIndex);
  };

  const goToImage = (index: number) => {
    changeImage(index);
  };

  // Limpar timeouts quando o componente é desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Quando uma imagem é carregada, registrar no estado
  const handleImageLoaded = (index: number) => {
    setImagesLoaded(prev => Array.from(new Set([...prev, index])));
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
        
        <div className="relative mb-4 bg-white" style={{ minHeight: '400px', height: '60vh' }}>
          {/* Mostrar apenas a imagem atual */}
          <div className="w-full h-full overflow-hidden">
            <OptimizedImage
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-95' : 'opacity-100'}`}
              style={{
                backgroundColor: 'white',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
              }}
              onLoad={() => handleImageLoaded(currentImageIndex)}
              // Fallback para caso de erro
              fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E"
            />
          </div>

          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 shadow-md transition-colors z-20"
                aria-label="Imagem anterior"
                disabled={isTransitioning}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 shadow-md transition-colors z-20"
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
                className={`overflow-hidden transition-all duration-300 aspect-video ${
                  index === currentImageIndex ? 'ring-2 ring-salmon' : ''
                }`}
                disabled={isTransitioning}
              >
                <OptimizedImage
                  src={image}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  className="w-full h-full"
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
