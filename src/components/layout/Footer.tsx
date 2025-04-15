import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-poppins text-lg font-medium mb-4">AR.CONCEPT STUDIO</h3>
            <p className="text-sm">
              Creating spaces that inspire, engage and transform lives through thoughtful and sustainable design.
            </p>
          </div>
          <div>
            <h3 className="font-poppins text-lg font-medium mb-4">Contact</h3>
            <p className="text-sm mb-2">La Paz, BCS, MX</p>   
            <p className="text-sm">ar.arcstudio@gmail.com</p>
          </div>
          <div>
            <h3 className="font-poppins text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ar_concept.studio" className="text-grey-elegant hover:text-salmon transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ar-concept-studio-15b624360" className="text-grey-elegant hover:text-salmon transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ar.arcstudio@gmail.com" className="text-grey-elegant hover:text-salmon transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-grey-light pt-8">
          <p className="text-xs text-center">© {new Date().getFullYear()} AR.CONCEPT STUDIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
