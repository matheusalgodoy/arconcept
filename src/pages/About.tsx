import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Quote } from 'lucide-react';

const About = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-24">
        <div className="container-custom">
          <h1 className="section-title">About Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div>
              <p className="mb-6">
                AR.CONCEPT STUDIO was founded in 2025 with a vision to create architecture that responds thoughtfully 
                to its context and enhances the lives of those who experience it.
              </p>
              <p className="mb-6">
                Our approach is characterized by a profound respect for the site, an understanding of spatial 
                experience, and an enthusiasm for innovative materials and construction methods. We believe that 
                good architecture should be both beautiful and practical, addressing the needs of today while 
                considering the challenges of tomorrow.
              </p>
              <p>     
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Our studio" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="relative py-16 px-8 md:px-16 my-24 bg-grey-light">
            <Quote size={64} className="absolute -top-8 left-8 text-salmon opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-poppins font-light text-grey-elegant/80 max-w-4xl mx-auto text-center">
              "Architecture should speak of its time and place, but yearn for timelessness."
            </blockquote>
            <p className="text-center mt-8 text-sm">— Frank Gehry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h2 className="text-xl md:text-2xl font-poppins mb-4">Our Philosophy</h2>
              <p>
                We believe in an architecture that balances aesthetics, functionality, and sustainability. 
                Our design process is collaborative and iterative, ensuring that each project meets the 
                specific needs of our clients while contributing positively to the built environment.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-poppins mb-4">Our Approach</h2>
              <p>
                We approach each project with fresh eyes, avoiding preconceived notions or standard solutions. 
                Through deep research and exploration, we develop designs that respond to the unique conditions 
                of each brief and site, creating spaces that feel both distinctive and appropriate.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-poppins mb-4">Our Expertise</h2>
              <p>
                Our portfolio includes residential projects. 
                We have particular expertise in sensitive heritage contexts, sustainable design, 
                and creating spaces that foster community and connection.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3">
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Our work" 
                className="w-full h-[700px] object-cover"
              />
            </div>
            <div className="lg:col-span-1">
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
