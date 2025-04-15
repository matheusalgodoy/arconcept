
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-24">
        <div className="container-custom">
          <h1 className="section-title">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <p className="mb-8">
                We are always interested in discussing new projects, creative ideas or opportunities to be part 
                of your vision. Use the form to get in touch, or contact us directly through our email or social media.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-4 text-salmon" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p>La Paz, BCS, MX</p>
                  </div>
                </div>
                <div className="flex items-center">
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
                  <a href="https://www.instagram.com/ar_concept.studio" className="text-grey-elegant hover:text-salmon transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/ar-concept-studio-15b624360" className="text-grey-elegant hover:text-salmon transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8">
              <h2 className="text-2xl font-poppins mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
          
          <div className="w-full h-[400px] bg-grey-light">
            {/* A map would go here - using a placeholder for now */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-grey-elegant/50">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
