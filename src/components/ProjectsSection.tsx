import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import portfolioBg from "../assets/32204cad6ec5f429b07bf17aaf39dcd3639d7cf7.png"; // Usando la misma imagen para mantener consistencia o podrías pedir otra

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
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden py-32"
    >
      {/* Fondo con Efecto Vidrio Brillante y Destellos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[100px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
        
        {/* Destellos animados morados */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-400/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grain Texture para ese toque "brillante/vidrioso" */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Layout superior refinado */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-2">
              <span className="text-sm uppercase tracking-[0.4em] text-purple-400 font-bold">Updated</span>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="border-orange-500 text-orange-500 rounded-full px-5 py-1 text-xs font-black bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  2024
                </Badge>
              </div>
            </div>
            
            <div className="hidden md:block">
              <span className="text-sm uppercase tracking-[0.3em] text-white/50 font-medium">Graphic Design</span>
            </div>

            <div className="text-right">
              <span className="text-sm uppercase tracking-[0.3em] text-white/50 border-b border-white/20 pb-2">Creative Direction</span>
            </div>
          </div>

          {/* Gran texto PORTAFOLIO central con efecto de luz */}
          <div className="relative group">
             <h2 className="text-[14vw] md:text-[16vw] font-black leading-none text-white transition-all duration-700 tracking-tighter select-none text-center drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                 style={{ 
                   fontFamily: 'system-ui, -apple-system, sans-serif',
                   textTransform: 'uppercase'
                 }}>
              PORTAFOLIO
            </h2>
            
            {/* Destellos interactivos (CSS puros) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
               <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-70"></div>
               <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.5s' }}></div>
               <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-violet-200 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>

          {/* Sección inferior con descripción y botón masivo */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-white/10">
            <p className="text-xl text-white/60 max-w-2xl text-center md:text-left leading-relaxed font-light tracking-wide">
              Una propuesta visual que trasciende lo convencional. Explora mi trayectoria a través de piezas que combinan estética radical y funcionalidad pura, ahora en una experiencia inmersiva.
            </p>

            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-12 py-8 text-xl font-black rounded-none uppercase tracking-[0.2em] transition-all duration-500 group hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105"
              onClick={() => window.location.hash = 'portfolio'}
            >
              <Play className="mr-3 h-6 w-6 fill-black" />
              Explorar
              <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}