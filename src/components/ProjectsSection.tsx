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
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24"
    >
      {/* Fondo con imagen y overlay oscuro estilo cinematográfico */}
      <div className="absolute inset-0 z-0">
        <img 
          src={portfolioBg} 
          alt="Portafolio Background" 
          className="w-full h-full object-cover grayscale opacity-20"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Layout superior estilo imagen de referencia */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
            <div className="space-y-2">
              <span className="text-sm uppercase tracking-[0.3em] text-purple-400 font-medium">Updated</span>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="border-orange-500 text-orange-500 rounded-full px-4 py-0.5 text-xs font-bold bg-orange-500/10">
                  2024
                </Badge>
              </div>
            </div>
            
            <div className="hidden md:block">
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Graphic Design</span>
            </div>

            <div className="text-right">
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground border-b border-muted-foreground/30 pb-1">Ical Zalfa</span>
            </div>
          </div>

          {/* Gran texto PORTAFOLIO central */}
          <div className="relative">
             <h2 className="text-[12vw] md:text-[15vw] font-black leading-none text-white transition-all duration-700 tracking-tighter select-none opacity-90 text-center"
                 style={{ 
                   fontFamily: 'system-ui, -apple-system, sans-serif',
                   textTransform: 'uppercase'
                 }}>
              PORTAFOLIO
            </h2>
            
            {/* Elemento decorativo flotante para añadir impacto */}
            <div className="absolute -top-4 -right-4 md:top-0 md:right-10 w-12 h-12 md:w-20 md:h-20 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>

          {/* Sección inferior con descripción y botón */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
            <p className="text-lg text-white/50 max-w-xl text-center md:text-left leading-relaxed font-light">
              Una propuesta visual que trasciende lo convencional. Explora mi trayectoria a través de piezas que combinan estética radical y funcionalidad pura.
            </p>

            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-10 py-7 text-lg font-bold rounded-none uppercase tracking-widest transition-all duration-300 group hover:scale-105"
              onClick={() => window.location.hash = 'portfolio'}
            >
              <Play className="mr-3 h-5 w-5 fill-black" />
              Explorar
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}