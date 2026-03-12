import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { Badge } from './ui/badge';

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

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full flex flex-col items-center justify-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          
          {/* Layout Principal Central (Basado en imagen) */}
          <div className="relative flex flex-col items-center md:items-start gap-4">
            
            {/* Shapes decorativas flotantes */}
            <div className="absolute -top-20 -left-10 md:-left-20 animate-float-y2k opacity-80">
               <Sparkles className="w-12 h-12 text-blue-400 fill-blue-400/20" />
            </div>
            <div className="absolute top-0 -right-10 md:-right-20 animate-bounce opacity-80" style={{ animationDuration: '4s' }}>
               <div className="w-8 h-8 rounded-full border-4 border-blue-400/40"></div>
            </div>

            {/* Fila de Título: Port + folio */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-0 md:gap-4">
               <h2 className="text-8xl md:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-600 tracking-tight leading-none drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                 Port
               </h2>
               <div className="relative inline-block border-[6px] border-cyan-400/80 rounded-[2.5rem] bg-gradient-to-b from-blue-500/80 to-purple-800/80 px-8 py-2 md:mb-4 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                 <h2 className="text-8xl md:text-[10rem] font-black text-white leading-none tracking-tighter">
                   folio
                 </h2>
               </div>
            </div>

            {/* Año en estilo Digital/Pixel */}
            <div className="mt-2 pl-2">
               <span className="text-5xl md:text-7xl font-mono font-black text-white/90 tracking-widest" style={{ letterSpacing: '0.2em' }}>
                 2025
               </span>
            </div>

            {/* Graphic Design con detalles de píxeles decorativos */}
            <div className="mt-12 flex items-center gap-6 w-full">
               <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500 via-white to-transparent opacity-40"></div>
               <span className="text-2xl md:text-3xl uppercase tracking-[0.3em] font-bold text-white whitespace-nowrap">
                 Graphic <span className="text-blue-400">Design</span>
               </span>
               <div className="grid grid-cols-2 gap-1 opacity-60">
                 <div className="w-3 h-3 bg-white"></div>
                 <div className="w-3 h-3 bg-blue-500"></div>
                 <div className="w-3 h-3 bg-blue-500"></div>
                 <div className="w-3 h-3 bg-white"></div>
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