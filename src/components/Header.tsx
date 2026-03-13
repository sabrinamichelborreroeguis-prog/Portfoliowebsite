import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 border-b border-primary/20 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gradient-purple">Mi Portafolio</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('educacion')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Educación
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
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
                onClick={() => scrollToSection('inicio')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('educacion')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Educación
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
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