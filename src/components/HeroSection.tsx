import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "../assets/32204cad6ec5f429b07bf17aaf39dcd3639d7cf7.png";

export function HeroSection() {
  // Configuración de links - Puedes cambiar estos valores
  const cvUrl = "https://www.canva.com/design/DAFcE0uQVjQ/3EibMhT-um_K_eK6WERiEw/edit?utm_content=DAFcE0uQVjQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pb-24 md:pb-56"
    >
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Degradado suave hacia la izquierda para integrar el texto y la imagen */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10"></div>
        {/* Degradado inferior para mezclarse con la sección siguiente */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
        
        <div className="absolute inset-0 flex justify-end">
          <img
            src={profileImage}
            alt="Sabrina Background"
            className="w-full h-full lg:w-[60%] object-cover opacity-80"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal - Lado izquierdo */}
          <div className="space-y-6">
            {/* Título principal con estilo cinematográfico */}
            <div className="space-y-4">

              <h1 className="text-4xl md:text-7xl font-bold text-foreground leading-tight" style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}>
                SABRINA
                <br />
                <span className="text-gradient-purple">
                  BORRERO EGUIS
                </span>
              </h1>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Automatizadora
                </span>
                <span>|</span>
                <span>Diseñadora Gráfica</span>
                <span>|</span>
                <span>UI/UX</span>
              </div>
            </div>

            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Creo soluciones digitales funcionales y estéticas, combinando pensamiento estratégico,
              experiencia de usuario y tecnología para optimizar procesos, fortalecer marcas y construir
              productos eficientes, intuitivos y escalables.
            </p>

            {/* Botones de acción principales */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-[#C3A8FF] hover:bg-[#B59BE5] text-white"
                asChild
              >
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <button
          onClick={() => scrollToSection('proyectos')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs">Explorar</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>

      {/* Banner caligráfico al final de la sección */}
      <MovingBanner />
    </section>
  );
}

function MovingBanner() {
  return (
    <div className="absolute bottom-0 w-full bg-purple-950/40 backdrop-blur-sm border-t border-purple-500/10 z-30 overflow-hidden h-12 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-white/90 select-none px-12 font-calligraphy italic tracking-wider"
            style={{ fontSize: "1.5rem" }}
          >
            Sabrina Borrero Eguis – 2026
          </span>
        ))}
      </div>
    </div>
  );
}