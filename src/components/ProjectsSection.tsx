import { ArrowRight, Play } from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-mono"
      style={{
        background: 'radial-gradient(ellipse at 60% 50%, #2d0a5e 0%, #150030 40%, #08001a 100%)'
      }}
    >
      {/* Fondo de Estrellas Parpadeantes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
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

      {/* Orbes flotantes izquierda */}
      <div
        className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 pointer-events-none animate-float-y2k"
        style={{ filter: 'blur(0px)' }}
      >
        <div
          className="w-56 h-56 md:w-80 md:h-80 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 40% 35%, #c026d3 0%, #7c3aed 35%, #4c1d95 70%, #1e0040 100%)',
            boxShadow: '0 0 80px 30px rgba(147,51,234,0.5), inset 0 0 40px rgba(255,255,255,0.08)',
          }}
        >
          {/* Logo abstracto dentro del orbe */}
          <div className="text-white/70 flex flex-col items-center justify-center">
            <div className="text-3xl md:text-5xl font-black tracking-tighter leading-none opacity-80">SB</div>
            <div className="w-10 h-0.5 bg-white/40 mt-1"></div>
          </div>
        </div>
      </div>

      {/* Orbe flotante top-right */}
      <div
        className="absolute -right-14 top-16 z-10 pointer-events-none"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      >
        <div
          className="w-36 h-36 md:w-52 md:h-52 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 40% 35%, #e879f9 0%, #a855f7 35%, #6d28d9 70%, #2e0060 100%)',
            boxShadow: '0 0 60px 20px rgba(168,85,247,0.45), inset 0 0 30px rgba(255,255,255,0.06)',
          }}
        >
          <div className="text-white/60 text-xl md:text-3xl font-black">GD</div>
        </div>
      </div>

      {/* Orbe flotante bottom-right */}
      <div
        className="absolute -right-10 bottom-10 z-10 pointer-events-none"
        style={{ animation: 'float 8s ease-in-out infinite reverse' }}
      >
        <div
          className="w-28 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 40% 35%, #d946ef 0%, #9333ea 40%, #581c87 100%)',
            boxShadow: '0 0 50px 15px rgba(147,51,234,0.35)',
          }}
        >
          <div className="text-white/50 text-lg md:text-2xl font-black">25</div>
        </div>
      </div>

      {/* Contenido central */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* ── Glass Card estilo MetaSphere ── */}
          <div
            className="w-full rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center text-center py-16 md:py-24 px-8 md:px-16 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 0 80px rgba(147,51,234,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            {/* Glow interno sutil */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 50% 30%, rgba(168,85,247,0.12) 0%, transparent 70%)'
            }}></div>

            {/* Etiqueta pequeña decorativa */}
            <div className="flex items-center gap-3 mb-8 md:mb-10 relative z-10">
              <div className="w-8 md:w-12 h-px bg-purple-400/50"></div>
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-purple-300/80 font-medium">Portafolio</span>
              <div className="w-8 md:w-12 h-px bg-purple-400/50"></div>
            </div>

            {/* Título principal */}
            <h2
              className="relative z-10 text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-black text-white leading-none tracking-tight"
              style={{
                textShadow: '0 0 60px rgba(168,85,247,0.4), 0 0 120px rgba(147,51,234,0.2)'
              }}
            >
              Sabrina
            </h2>

            {/* Subtítulo descriptivo */}
            <p className="relative z-10 mt-6 md:mt-8 text-base md:text-xl text-white/60 max-w-2xl leading-relaxed">
              Diseñadora Gráfica & UI/UX · Creadora de experiencias visuales con impacto.
              <br className="hidden md:block" />
              Explora mis proyectos y trabajos creativos.
            </p>

            {/* Año + categoría */}
            <div className="relative z-10 flex items-center gap-6 mt-10 md:mt-14">
              <span className="text-sm md:text-base uppercase tracking-[0.5em] text-purple-400/70 font-medium">2025</span>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></div>
              <span className="text-sm md:text-base uppercase tracking-[0.5em] text-purple-400/70 font-medium">Graphic Design</span>
            </div>
          </div>

          {/* Botón "Ver Portafolio" */}
          <div className="mt-10 md:mt-14 flex justify-center">
            <Button
              variant="outline"
              className="group relative bg-transparent border-purple-500/40 text-white hover:bg-purple-500/10 px-8 py-5 md:px-10 md:py-6 rounded-full text-base md:text-lg font-semibold tracking-[0.15em] transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.35)] overflow-hidden"
              onClick={() => window.location.href = '/portfolio'}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                <div className="absolute top-2 left-6 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 right-6 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
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