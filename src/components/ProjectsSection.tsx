import { ArrowRight, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('proyectos');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  return (
    <section
      id="proyectos"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 80% 50%, #4a0080 0%, #200040 30%, #0d001a 70%)'
      }}
    >
      {/* Glow orb right side */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(160,32,240,0.55) 0%, rgba(100,0,200,0.25) 50%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10 text-center">
          <FolderOpen className="h-8 w-8 md:h-12 md:w-12 text-purple-400 mb-1 md:mb-2" />
          <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight md:uppercase">
            Mis Proyectos
          </h2>
        </div>

        {/* CTA Button - centered on the full width */}
        <div className="w-full flex justify-center">
          <Button
            onClick={() => navigate('/portfolio')}
            className="px-10 py-5 md:px-14 md:py-6 rounded-full text-base md:text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              boxShadow: '0 0 30px rgba(147,51,234,0.5)',
              color: 'white',
              border: 'none',
            }}
          >
            Ver Portafolio
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}