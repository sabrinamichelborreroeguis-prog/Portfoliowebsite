import { ArrowRight } from 'lucide-react';
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
        className={`relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Bordered title box */}
        <div
          className="w-full mb-5"
          style={{
            border: '2px solid rgba(120, 60, 255, 0.7)',
            padding: '18px 32px',
            boxShadow: '0 0 24px rgba(120,60,255,0.25), inset 0 0 20px rgba(120,60,255,0.06)',
          }}
        >
          <h2
            className="font-black text-white leading-none select-none"
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              letterSpacing: '-0.02em',
              textShadow: '0 0 40px rgba(160,80,255,0.3)',
            }}
          >
            Portafolio
          </h2>
        </div>

        {/* Name below box */}
        <p
          className="font-bold tracking-wide mb-10"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: '#a855f7',
            letterSpacing: '0.05em',
          }}
        >
          Sabrina Borrero Eguis
        </p>

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