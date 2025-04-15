import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import AboutPreview from '@/components/home/AboutPreview';
import ContactPreview from '@/components/home/ContactPreview';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <ContactPreview />
    </MainLayout>
  );
};

export default Index;
