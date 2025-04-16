import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  fallbackSrc?: string;
}

/**
 * Componente de imagem otimizado para carregamento progressivo
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  onLoad,
  fallbackSrc
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Função para lidar com o carregamento da imagem
  const handleImageLoaded = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  // Função para lidar com erros de carregamento
  const handleImageError = () => {
    setIsLoading(false);
    setError(true);
  };
  
  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Indicador de carregamento */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center"
          style={{ zIndex: 1 }}
        >
          <div className="w-8 h-8 border-4 border-salmon border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* A imagem real, ou fallback em caso de erro */}
      <img
        src={error && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={`${className} transition-opacity duration-300`}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: isLoading ? 0 : 1,
          ...style
        }}
        onLoad={handleImageLoaded}
        onError={handleImageError}
      />
    </div>
  );
};

export default OptimizedImage; 