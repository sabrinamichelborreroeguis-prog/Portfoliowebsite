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
                asChild
              >
                <a 
                  href={portfolioUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Play className="mr-2 h-5 w-5 fill-white" />
                  Ver Proyectos
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

            {/* Redes sociales con estilo moderno */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Sígueme:</span>
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
              {/* Imagen principal con border y efectos */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl glow-purple-strong">
                <img
                  src={profileImage}
                  alt="Sabrina - Diseñadora Creativa"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                
                {/* Info overlay en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-6 glass-card border-0 rounded-none">
                  <h3 className="text-foreground mb-1">Sabrina Borrero</h3>
                  <p className="text-sm text-muted-foreground mb-3">Diseñadora Creativa</p>
                  <Button 
                    size="sm"
                    className="w-full bg-[#C3A8FF] hover:bg-[#B59BE5] text-white"
                    asChild
                  >
                    <a 
                      href={cvUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Descargar CV
                    </a>
                  </Button>
                </div>
              </div>

              {/* Efectos de luz decorativos */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
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