import { useState, useEffect, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCarouselProps {
  children: ReactNode[];
  autoScrollSpeed?: number; // milliseconds per pixel
  isPaused?: boolean; // Control externo de pausa
  onPauseChange?: (paused: boolean) => void;
}

export function ProjectCarousel({
  children,
  autoScrollSpeed = 30,
  isPaused = false
}: ProjectCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Auto-scroll continuo e infinito
  useEffect(() => {
    if (isPaused || !containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    const maxScroll = content.scrollWidth / 2; // Dividimos entre 2 porque duplicamos el contenido

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;

      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      // Calcular cuánto desplazar basado en el tiempo transcurrido
      const scrollIncrement = (deltaTime / autoScrollSpeed);

      setScrollPosition(prev => {
        const newPosition = prev + scrollIncrement;
        // Loop infinito - cuando llegamos al final del contenido duplicado, volvemos al inicio
        if (newPosition >= maxScroll) {
          return 0;
        }
        return newPosition;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      lastTimeRef.current = 0;
    };
  }, [isPaused, autoScrollSpeed]);

  // Aplicar posición de scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handlePrevious = () => {
    if (!containerRef.current) return;
    const cardWidth = 420; // Ancho aproximado de una tarjeta + gap
    setScrollPosition(prev => Math.max(0, prev - cardWidth));
  };

  const handleNext = () => {
    if (!containerRef.current || !contentRef.current) return;
    const cardWidth = 420;
    const maxScroll = contentRef.current.scrollWidth / 2;
    setScrollPosition(prev => {
      const newPos = prev + cardWidth;
      return newPos >= maxScroll ? 0 : newPos;
    });
  };


  return (
    <div className="relative group">
      {/* Controles flotantes */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          onClick={handlePrevious}
          size="icon"
          className="rounded-full bg-purple-500/90 hover:bg-purple-600 text-white backdrop-blur-sm shadow-lg border border-purple-400/50"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          onClick={handleNext}
          size="icon"
          className="rounded-full bg-purple-500/90 hover:bg-purple-600 text-white backdrop-blur-sm shadow-lg border border-purple-400/50"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Contenedor del carrusel */}
      <div
        ref={containerRef}
        className="overflow-x-hidden"
      >
        <div
          ref={contentRef}
          className="flex gap-8"
          style={{
            width: 'max-content',
          }}
        >
          {/* Duplicar el contenido para efecto infinito suave */}
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}