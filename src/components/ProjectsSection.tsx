import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Configuración del link para el botón de conversación
  const conversationUrl = "https://wa.link/e53d2b";
  
  const projects = [
    {
      title: "Loto del Sur",
      description: "Lanzamiento del nuevo produto basado en la batalla de flores de Medellin.",
      media: {
        type: "image",
        url: "https://historiasdelsur.com/wp-content/uploads/2016/03/cropped-1523284_1452033528343739_127387866_o.jpg"
      },
      technologies: ["Fotografia", "Edicion", "Producto", "Redes Sociales"],
      type: "Proyecto Empresarial",
      client: "Loto del Sur",
      year: "2025",
      projectUrl: "https://www.behance.net/gallery/236510327/Loto-del-Sur?share=1"
    },
    {
      title: "IA",
      description: "Web-app que proporciona informacion de IA y paginas que te pueden ayudar como diseñador.",
      media: {
        type: "image",
        url: "https://whitestack.com/wp-content/uploads/2023/11/AI-1.webp"
      },
      technologies: ["AI" , "UX/UI" , "Web-App" , "Diseño"],
      type: "Proyecto Personal",
      client: "Proyecto Personal",
      year: "2025",
      projectUrl: "https://www.behance.net/gallery/236794675/manual-de-narca-smilig"
    },
    {
      title: "Zarache - Reina ",
      description: "Campaña Publicitaria de Lanzamiento como Reina de Malambo 2025.",
      media: {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMVkTA4iE3gOvt10_BOKxQzeyd4CRQHi1RA&s"
      },
      technologies: ["Campañas","Redes sociales", "Fotografia", "Edicion"],
      type: "Proyecto Empresarial",
      client: "Proyecto Empresarial",
      year: "2025",
      projectUrl: "https://www.behance.net/gallery/236795051/Zarache"
    },
    {
      title: "Smiling",
      description: "Idetidad de marca para Odontologia, con apertura en Barranquilla.",
      media: {
        type: "image",
        url: "https://smilingclinicadental.com/wp-content/uploads/2024/05/Diseno-sin-titulo-8.png"
      },
      technologies: ["Identidad de marca" , "Branding" , "Fotografia" , "Diseño"],
      type: "Proyecto Empresarial",
      client: "Smilingt",
      year: "2024",
      projectUrl: "https://www.behance.net/gallery/236794675/manual-de-narca-smilig"
    },
    {
      title: "Blender",
      description: "Diseños en 3D, Creados para proyectos personales u estudiantiles.",
      media: {
        type: "image",
        url: "https://p.turbosquid.com/ts-thumb/uj/C8rfwh/TZ/1/jpg/1614359447/600x600/fit_q87/4ba3b377b85eb4f9e6ad5a9f065c742165f884d5/1.jpg"
      },
      technologies: ["Blender", "3D"],
      type: "Proyecto Personal",
      client: "Proyecto Personal",
      year: "2023 - 2025",
      projectUrl: "https://www.behance.net/gallery/236795635/Blender"
    },
    {
      title: "Marquesado de Saint Cyprien",
      description: "Paquina web que proporciona información de lotes para residencias.",
      media: {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDQyOg18ySuTHsf1GLdjWA-tfR-1jDALiOg&s"
      },
      technologies: ["WordPress", "PHP", "WEB", "JavaScript"],
      type: "Proyecto Empresarial",
      client: "Club & Resort Marquesado de Saint Cyprien",
      year: "2024 - 2025",
      projectUrl: "https://marquisatdesaintcyprien.org"
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mis Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia y habilidades en diferentes tecnologías y sectores
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden glass-card-hover border-border bg-card transition-all duration-500 ${
                isVisible ? 'slide-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                minHeight: '520px'
              }}
            >
              <div className="relative overflow-hidden h-64">
                {project.media.type === 'video' ? (
                  <video
                    src={project.media.url}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <ImageWithFallback
                    src={project.media.url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={project.type === 'Proyecto Personal' ? 'default' : 'secondary'} 
                    className="bg-purple-500/90 text-white border-purple-400"
                  >
                    {project.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 text-xs text-purple-100 bg-purple-950/70 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {project.year}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Cliente: {project.client}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-2">
                  <Button 
                    size="sm" 
                    className="w-full bg-[#C3A8FF] hover:bg-[#B59BE5] text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#C3A8FF]/20"
                    asChild
                  >
                    <a 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Proyecto
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 ${isVisible ? 'fade-in delay-500' : 'opacity-0'}`}>
          <div className="glass-card rounded-lg p-8 max-w-2xl mx-auto galactic-breath">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-muted-foreground mb-6">
              Estoy siempre interesado en nuevos desafíos y oportunidades de colaboración.
              Conversemos sobre cómo puedo ayudarte a hacer realidad tu idea.
            </p>
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a 
                href={conversationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Iniciemos una conversación
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}