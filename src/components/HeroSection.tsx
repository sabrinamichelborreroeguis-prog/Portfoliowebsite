import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Play,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import profileImage from "../assets/32204cad6ec5f429b07bf17aaf39dcd3639d7cf7.png";

export function HeroSection() {
  // Configuración de links - Puedes cambiar estos valores
  const cvUrl = "https://www.canva.com/design/DAFcE0uQVjQ/3EibMhT-um_K_eK6WERiEw/edit?utm_content=DAFcE0uQVjQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
  const githubUrl = "https://github.com/tuusuario"; // Tu perfil de GitHub
  const linkedinUrl = "https://www.linkedin.com/in/tuusuario"; // Tu perfil de LinkedIn
  const emailUrl = "sabrinamipersonal@gmail.com"; // Tu email
  const whatsappUrl = "https://wa.link/e53d2b"; // Tu WhatsApp

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pb-32"
    >
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <img
          src={profileImage}
          alt="Background"
          className="w-full h-full object-cover opacity-40"
          style={{ objectPosition: '70% center' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal - Lado izquierdo */}
          <div className="space-y-6">
            {/* Título principal con estilo cinematográfico */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-purple-500/90 text-white border-purple-400 px-3 py-1">
                  PORTAFOLIO
                </Badge>
                <span className="text-sm text-muted-foreground">2025 | Diseño & Creatividad</span>
              </div>

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
                  Automatizadors
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
              productos eficientes, intuitivos y escalables..
            </p>

            {/* Botones de acción principales */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group bg-[#C3A8FF] hover:bg-[#B59BE5] text-white"
                onClick={() => window.location.hash = 'portfolio'}
              >
                <Play className="mr-2 h-5 w-5 fill-white" />
                Ver Portafolio
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-purple-400/50 hover:bg-purple-500/10"
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

            {/* Redes sociales con estilo moderno */}
            <div className="flex items-center gap-4 mt-12 mb-8">
              <span className="text-sm text-muted-foreground font-medium">Sígueme:</span>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-3 hover:bg-purple-500/20 rounded-full"
                  asChild
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-3 hover:bg-purple-500/20 rounded-full"
                  asChild
                >
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-3 hover:bg-purple-500/20 rounded-full"
                  asChild
                >
                  <a
                    href={`mailto:${emailUrl}`}
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-3 hover:bg-green-500/20 rounded-full"
                  asChild
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Lado derecho - Imagen de perfil estilo cinematográfico */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Imagen principal estéticamente limpia con gradiente suave */}
              <div className="relative aspect-[3/4] overflow-hidden flex items-end mb-12">
                <img
                  src={profileImage}
                  alt="Sabrina - Diseñadora Creativa"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
                {/* Overlay gradient desde abajo hacia arriba, muy suave y transparente */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              </div>

              {/* Efectos de luz decorativos */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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