import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Play,
  Info,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import profileImage from "figma:asset/32204cad6ec5f429b07bf17aaf39dcd3639d7cf7.png";

export function HeroSection() {
  // Configuración de links - Puedes cambiar estos valores
  const portfolioUrl = "https://www.behance.net/sabrinaborrero"; // Cambia este link a tu portafolio
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20 z-10"></div>
        <img
          src={profileImage}
          alt="Background"
          className="w-[80%] md:w-[60%] h-full object-cover object-[center_20%]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal - Lado izquierdo */}
          <div className="space-y-6">
            {/* Título principal con estilo cinematográfico */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-muted-foreground">PORTAFOLIO | 2025 | Diseño & Creatividad</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight" style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}>
                SABRINA 
                <br />
                <span className="text-gradient-purple">
                  BORRERO EGUIS
                </span>
              </h1>
              
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Diseñadora Gráfica
                </span>
                <span>|</span>
                <span>Automatizadora</span>
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
            <div className="flex flex-wrap gap-4">
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
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-400/50 hover:bg-purple-500/10"
                onClick={() => scrollToSection('proyectos')}
              >
                <Info className="mr-2 h-5 w-5" />
                Más Info
              </Button>
            </div>

          </div>

          {/* Lado derecho vaciado para mostrar el fondo integrado */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => scrollToSection('proyectos')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs">Explorar</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}