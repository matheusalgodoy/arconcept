import React, { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProjectGrid from '@/components/projects/ProjectGrid';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="pt-32 pb-24 bg-white">
        <div className="container-custom">
          <h1 className="section-title">Our Projects</h1>
          <p className="max-w-3xl mb-12">
            Explore our portfolio of architectural projects. Each design is crafted with a deep understanding 
            of context, client needs, and environmental considerations. We strive to create spaces that are 
            not just visually compelling, but also functional and sustainable.
          </p>
          <ProjectGrid />
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
