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
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
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

          {/* Lado derecho - Imagen principal con animaciones - 600px alto con degradado morado */}
          <div className="relative group w-full max-w-sm lg:max-w-none lg:w-[480px] mx-auto lg:ml-auto mt-12 lg:mt-0 perspective-1000">
            {/* Destello sutil en la parte de atrás - Ajustado para ser más elegante */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/5 rounded-3xl blur-[100px] transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-1000 ease-out"></div>
            
            {/* Cuadro contenedor */}
            <div className="relative z-10 w-full lg:h-[600px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 bg-black/10 backdrop-blur-sm shadow-2xl transition-all duration-700 ease-out transform group-hover:-translate-y-4 group-hover:shadow-[0_50px_90px_-20px_rgba(168,85,247,0.25)] group-hover:border-purple-500/10">
              
              {/* Imagen con zoom sutil */}
              <img
                src={profileImage}
                alt="Sabrina Borrero Eguis"
                className="w-full h-full object-cover object-[center_15%] transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Degradado morado sutil persistente en la parte inferior para fundir la base */}
              <div className="absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-background via-purple-500/15 to-transparent z-10"></div>

              {/* Overlay interactivo (se aclara al pasar el cursor) */}
              <div className="absolute inset-0 bg-black/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out z-20"></div>
              
              {/* Marcos decorativos animados minimalistas */}
              <div className="absolute inset-8 border border-white/5 rounded-[2rem] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-1000 ease-out delay-100 pointer-events-none z-30"></div>
              
              <div className="absolute bottom-10 left-6 right-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-200 flex justify-center z-30">
                <Badge variant="secondary" className="bg-white/5 backdrop-blur-xl border border-white/10 text-[9px] uppercase tracking-widest px-5 py-1.5 shadow-2xl pointer-events-none text-white whitespace-nowrap">
                  <Play className="w-2.5 h-2.5 mr-2 text-purple-400 fill-purple-400" /> Curaduría Digital
                </Badge>
              </div>
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