import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, Instagram, Linkedin } from 'lucide-react';

const ContactPreview = () => {
  return (
    <section className="py-24 bg-grey-light">
      <div className="container-custom">
        <h2 className="section-title mb-12">Get in Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <div>
            <p className="mb-8">
              We are always interested in discussing new projects, creative ideas or opportunities to be part 
              of your vision. Contact us directly or visit our full contact page to use our contact form.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <MapPin size={20} className="mr-4 text-salmon" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p>La Paz, BCS, MX</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-4 text-salmon" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>ar.arcstudio@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/ar_concept.studio" className="text-grey-elegant hover:text-salmon transition-colors" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ar-concept-studio-15b624360" className="text-grey-elegant hover:text-salmon transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-sm">
            <img 
              src="/images/AR.Logo.png" 
              alt="AR.CONCEPT STUDIO" 
              className="w-full max-h-[400px] object-contain mb-6" 
            />
            <div className="text-center">
              <p className="mb-4 text-lg">Ready to start your project?</p>
              <Link to="/contact" className="inline-flex items-center text-salmon hover:underline group">
                Get a detailed quote
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview; 