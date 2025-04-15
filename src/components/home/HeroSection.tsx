
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Empty cathedral interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative container-custom h-full flex flex-col justify-end pb-24 sm:pb-32">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-medium mb-6">
            Architectural Visions Unveiled
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Transforming spaces through innovative design and architectural storytelling
          </p>
          <Link to="/projects" className="inline-flex items-center bg-salmon text-white px-6 py-3 hover:bg-salmon/90 transition-colors group">
            Explore Our Work
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
