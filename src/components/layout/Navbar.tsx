import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Desabilitar o scroll do body quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="font-poppins text-xl md:text-2xl font-medium tracking-tight">AR<span className="text-salmon">.</span>CONCEPT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-grey-elegant"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Movido para fora do header para garantir correto posicionamento */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[100] flex flex-col animate-fade-in-down">
          <div className="container-custom py-5 flex justify-between items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <span className="font-poppins text-xl md:text-2xl font-medium tracking-tight">AR<span className="text-salmon">.</span>CONCEPT</span>
            </Link>
            <button 
              className="text-grey-elegant"
              onClick={toggleMenu}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8 pt-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="nav-link text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
