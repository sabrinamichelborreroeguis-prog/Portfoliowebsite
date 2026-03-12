import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToSection = (sectionId: string) => {
    if (sectionId === 'portfolio') {
      window.location.hash = 'portfolio';
    } else {
      if (currentPage !== 'home') {
        window.location.hash = 'home';
        // Give time for layout to render before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 border-b border-primary/20 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gradient-purple cursor-pointer" onClick={() => navigateToSection('inicio')}>Sabrina</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => navigateToSection('inicio')}
              className={`transition-colors ${currentPage === 'home' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'}`}
            >
              Inicio
            </button>
            <button
              onClick={() => navigateToSection('educacion')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Educación
            </button>
            <button
              onClick={() => navigateToSection('servicios')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => navigateToSection('portfolio')}
              className={`transition-colors text-lg px-3 py-1.5 rounded-md ${currentPage === 'portfolio' ? 'text-white bg-purple-500/20 font-bold border border-purple-500/50' : 'text-purple-400 hover:text-purple-300 font-semibold border border-transparent'} galactic-breath`}
            >
              Portafolio
            </button>
            <button
              onClick={() => navigateToSection('contacto')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card rounded-lg mt-2">
              <button
                onClick={() => navigateToSection('inicio')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => navigateToSection('educacion')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Educación
              </button>
              <button
                onClick={() => navigateToSection('servicios')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => navigateToSection('portfolio')}
                className={`block px-3 py-2 transition-colors w-full text-left ${currentPage === 'portfolio' ? 'text-purple-300 font-bold bg-purple-900/40 rounded' : 'text-purple-400 font-semibold hover:text-purple-300'}`}
              >
                Portafolio
              </button>
              <button
                onClick={() => navigateToSection('contacto')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}