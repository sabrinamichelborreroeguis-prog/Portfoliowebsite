import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('proyectos');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="proyectos" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black font-mono py-20"
    >
      {/* Fondo de Estrellas Parpadeantes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full flex flex-col items-center justify-center py-20 md:py-32">
        <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          
          {/* Large, Full-screen Aesthetic Glass Box */}
          <div className="relative group w-full p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl flex flex-col items-center min-h-[60vh] justify-center">
            {/* Animated Glow behind the box */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-60"></div>
            
            {/* Shapes decorativas flotantes sutiles */}
            <div className="absolute top-12 left-12 md:top-20 md:left-20 animate-float-y2k opacity-60 pointer-events-none">
               <Sparkles className="w-10 h-10 md:w-16 md:h-16 text-blue-400/50" />
            </div>
            <div className="absolute bottom-12 right-12 md:bottom-20 md:right-20 animate-pulse opacity-40 pointer-events-none">
               <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-purple-400/30"></div>
            </div>

            {/* Título Principal: PORTAFOLIO (Unificado y Estético) */}
            <div className="relative z-10 flex flex-col items-center text-center w-full">
               <h2 className="text-6xl md:text-[10rem] font-black tracking-[0.2em] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] select-none uppercase leading-none">
                 Portafolio
               </h2>
               
               {/* Año en estilo Moderno / Digital */}
               <div className="mt-8 md:mt-12 bg-white/10 px-8 py-2 md:px-12 md:py-4 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-500">
                  <span className="text-3xl md:text-6xl font-mono font-bold text-blue-400 tracking-[0.4em]">
                    2025
                  </span>
               </div>

               {/* Subtítulo: Graphic Design */}
               <div className="mt-12 md:mt-20 flex items-center gap-10 md:gap-16 w-full max-w-4xl">
                 <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                 <span className="text-lg md:text-3xl uppercase tracking-[0.6em] font-medium text-white/90 whitespace-nowrap">
                   Graphic <span className="text-purple-400 font-bold">Design</span>
                 </span>
                 <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-white/40 to-transparent"></div>
               </div>
            </div>
          </div>

          {/* Botón "Ver Portafolio" pequeño y elegante */}
          <div className="mt-16 flex justify-center">
            <Button
              variant="outline"
              className="group relative bg-transparent border-blue-500/50 text-white hover:bg-blue-500/10 px-8 py-6 rounded-full text-lg font-bold tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] overflow-hidden"
              onClick={() => window.location.hash = 'portfolio'}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-2 right-4 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500"></div>
              </div>
              <Play className="mr-3 h-4 w-4 fill-white" />
              Ver portafolio
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}