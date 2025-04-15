import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="py-24 bg-grey-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="section-title">Our Approach</h2>
            <p className="mb-6">
              At AR.Concept Studio, we believe in creating meaningful spaces that enhance the human experience. 
              Our designs are rooted in understanding context, environment, and the specific needs of each client.
            </p>
            <p className="mb-8">
              We combine innovative thinking with technical expertise to deliver architecture that is both 
              functional and beautiful, always striving for sustainability and timelessness in our work.
            </p>
            <Link to="/about" className="inline-flex items-center text-salmon hover:underline group">
              Learn more about us
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="images/AR.Logo.png" 
              alt="Architecture design process" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-salmon w-8 h-8"></div>
          </div>
        </div>

        <div className="relative py-12 px-6 md:px-12 my-16 bg-white">
          <Quote size={48} className="absolute -top-6 left-6 text-salmon opacity-50" />
          <blockquote className="text-xl md:text-2xl font-poppins font-light text-grey-elegant/80 max-w-4xl mx-auto text-center">
            "Architecture should speak of its time and place, but yearn for timelessness."
          </blockquote>
          <p className="text-center mt-6 text-sm">— Frank Gehry</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg md:text-xl font-poppins mb-3">Our Philosophy</h3>
            <p className="text-sm">
              We believe in an architecture that balances aesthetics, functionality, and sustainability. 
              Our design process is collaborative and iterative, ensuring that each project meets the 
              specific needs of our clients while contributing positively to the built environment.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-poppins mb-3">Our Approach</h3>
            <p className="text-sm">
              We approach each project with fresh eyes, avoiding preconceived notions or standard solutions. 
              Through deep research and exploration, we develop designs that respond to the unique conditions 
              of each brief and site, creating spaces that feel both distinctive and appropriate.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-poppins mb-3">Our Expertise</h3>
            <p className="text-sm">
              Our portfolio includes residential projects. 
              We have particular expertise in sensitive heritage contexts, sustainable design, 
              and creating spaces that foster community and connection.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link to="/about" className="px-6 py-3 bg-salmon text-white font-medium hover:bg-salmon/90 transition-colors">
            Learn more about us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
