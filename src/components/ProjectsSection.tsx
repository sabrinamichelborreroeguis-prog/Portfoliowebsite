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
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Fondo ambiental suave (no cubre toda la pantalla) */}
      <div className="absolute inset-0 z-0 bg-black/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          
          {/* El "Cuadro Grande" Estético (Versión Vidrio Luminoso) */}
          <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/5 to-purple-500/20 backdrop-blur-3xl shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden border border-white/10 group">
            
            {/* Capa de destellos sutiles en el fondo del cuadro */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
              <div className="absolute top-10 left-10 w-2 h-2 bg-purple-300 rounded-full animate-ping delay-700"></div>
              <div className="absolute bottom-20 right-40 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-20 w-3 h-3 bg-violet-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 p-12 md:p-20 space-y-12">
              {/* Información superior */}
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.5em] text-purple-400 font-bold">Project 2024</span>
                  <div className="h-0.5 w-12 bg-purple-500/50"></div>
                </div>
                <Badge variant="outline" className="border-white/10 text-white/40 uppercase tracking-widest text-[10px] bg-white/5">
                  Visual Excellence
                </Badge>
              </div>

              {/* Título Central Refinado */}
              <div className="text-center space-y-4">
                <div className="inline-block relative">
                  <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl select-none"
                      style={{ 
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        textTransform: 'uppercase'
                      }}>
                    Portafolio
                  </h2>
                  {/* Destello de luz sobre el texto */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
                </div>
                
                <div className="flex items-center justify-center gap-6 mt-4 opacity-50">
                  <span className="text-sm uppercase tracking-[0.4em] font-light">Graphic Design</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  <span className="text-sm uppercase tracking-[0.4em] font-light">Creative Direction</span>
                </div>
              </div>

              {/* Descripción y CTA */}
              <div className="max-w-2xl mx-auto text-center space-y-10">
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Una curaduría de mis mejores trabajos donde la estética digital se encuentra con la funcionalidad. Explora una visión única del diseño.
                </p>

                <Button
                  size="lg"
                  className="bg-white/90 text-black hover:bg-white px-10 py-7 text-sm font-bold rounded-full uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
                  onClick={() => window.location.hash = 'portfolio'}
                >
                  <Play className="mr-3 h-4 w-4 fill-black" />
                  Descubrir
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}