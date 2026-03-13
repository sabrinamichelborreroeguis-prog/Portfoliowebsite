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
      className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black font-mono"
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

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full flex flex-col items-center justify-center py-24 md:py-32">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          
          {/* Aesthetic Glass Box Container for Title */}
          <div className="relative group p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col items-center">
            {/* Animated Glow behind the box */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-50"></div>
            
            {/* Shapes decorativas flotantes sutiles */}
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 animate-float-y2k opacity-60 pointer-events-none">
               <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-blue-400/50" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 animate-pulse opacity-40 pointer-events-none">
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-purple-400/30"></div>
            </div>

            {/* Título Principal: PORTAFOLIO (Unificado y Estético) */}
            <div className="relative z-10 flex flex-col items-center text-center">
               <h2 className="text-5xl md:text-8xl font-black tracking-[0.2em] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] select-none uppercase">
                 Portafolio
               </h2>
               
               {/* Año en estilo Moderno / Digital */}
               <div className="mt-4 md:mt-6 bg-white/10 px-4 py-1 rounded-full border border-white/20">
                  <span className="text-2xl md:text-4xl font-mono font-bold text-blue-400 tracking-[0.3em]">
                    2025
                  </span>
               </div>

               {/* Subtítulo: Graphic Design */}
               <div className="mt-8 flex items-center gap-6">
                 <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-white/40"></div>
                 <span className="text-sm md:text-xl uppercase tracking-[0.5em] font-medium text-white/80">
                   Graphic <span className="text-purple-400">Design</span>
                 </span>
                 <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-white/40"></div>
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