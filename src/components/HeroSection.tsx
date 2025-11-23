import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Hola, Soy
                <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent block">
                  Sabrina
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Publicista, Diseñadora Gráfica, Auditora En
                Gestión y Calidad & Diseñadora UI/UX
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed"></p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group"
                asChild
              >
                <a 
                  href={portfolioUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver mis proyectos
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href={cvUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar CV
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Botón de conversación */}
            <div>
              <Button
                size="lg"
                variant="outline"
                className="group bg-green-600 hover:bg-green-700"
                asChild
              >
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                   Iniciemos una conversación
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-3" asChild>
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-3" asChild>
                <a 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-3" asChild>
                <a 
                  href={emailUrl}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Imagen de perfil */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 bg-muted shadow-2xl glow-purple-strong">
                <img
                  src={profileImage}
                  alt="Foto de perfil profesional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decoraciones moradas galácticas */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-violet-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" style={{ animation: 'ambientBreath 6s ease-in-out infinite' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}