
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-grey-light">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-poppins mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-poppins mb-4">Page not found</h2>
          <p className="mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="bg-salmon text-white px-6 py-3 hover:bg-salmon/90 transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
