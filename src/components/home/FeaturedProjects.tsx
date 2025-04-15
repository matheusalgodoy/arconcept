import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'The Concrete Monolith',
    category: 'Residential',
    image: '/images/1.png',
  },
  {
    id: 3,
    title: 'Amber Horizon Kitchen',
    category: 'Residential',
    image: '/images/3.1.png',
  },
  {
    id: 5,
    title: 'Zen Passage',
    category: 'Residential',
    image: '/images/5.1.png',
  },
];

const FeaturedProjects = () => {
  const handleViewAllClick = () => {
    // Não precisamos implementar nada aqui, pois o componente Projects já tem o useEffect para rolar para o topo
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-xl mb-1">{project.title}</h3>
                <p className="text-sm text-grey-elegant/70">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Link 
            to="/projects" 
            className="px-6 py-3 bg-salmon text-white font-medium hover:bg-salmon/90 transition-colors flex items-center"
            onClick={handleViewAllClick}
          >
            View all projects
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
