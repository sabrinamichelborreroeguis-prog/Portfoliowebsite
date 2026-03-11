import { ArrowRight, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mis Proyectos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Una selección de mis mejores proyectos, categorizados por disciplina. Descubre mi enfoque en diseño, modelado 3D comercial, branding y más.
          </p>

          <Button
            size="lg"
            className="group bg-[#C3A8FF] hover:bg-[#B59BE5] text-white px-8 py-6 text-xl rounded-2xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 galactic-breath scale-105"
            onClick={() => window.location.hash = 'portfolio'}
          >
            <FolderOpen className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
            Ver Portfolio Completo
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}