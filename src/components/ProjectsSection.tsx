import { ExternalLink, ArrowRight, FolderOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';
import { ProjectCarousel } from './ProjectCarousel';
import { ProjectDetailModal, Project } from './ProjectDetailModal';

// UniSalamanca images
import uniCover from '../assets/unisalamanca/cover.jpg';
import uniMatriculate from '../assets/unisalamanca/matriculate.png';
import uniMediosPago from '../assets/unisalamanca/medios-pago.png';
import uniRuta from '../assets/unisalamanca/ruta.jpg';

// InteBien images
import intebienCover from '../assets/intebien/cover.png';
import intebienMarketing from '../assets/intebien/marketing-digital.jpg';
import intebienProgramacion from '../assets/intebien/programacion.jpg';

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Configuración del link para el botón de conversación
  const conversationUrl = "https://wa.link/e53d2b";
  
  const projects: Project[] = [
    {
      title: "Loto del Sur",
      description: "Lanzamiento del nuevo producto basado en la batalla de flores de Medellín.",
      detailedDescription: "Campaña fotográfica completa para el lanzamiento del nuevo producto de Loto del Sur, inspirado en la icónica batalla de flores de Medellín. El proyecto incluyó dirección de arte, fotografía de producto, edición avanzada y estrategia de contenido para redes sociales, capturando la esencia vibrante y colorida de la cultura colombiana.",
      media: {
        type: "image",
        url: "https://historiasdelsur.com/wp-content/uploads/2016/03/cropped-1523284_1452033528343739_127387866_o.jpg"
      },
      gallery: [
        {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/ba16fd236510327.68ed86dbd7891.jpg"
        },
        {
          type: "image",
          url:  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/e837e3236510327.68ed86dbd5f5d.jpg"
        },
        {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/50f0e3236510327.68ed86dbd6f63.jpg"
        },
        {
          type: "image",
          url:  "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/802440236510327.68ed86dbd67af.jpg"
        }
      ],
      technologies: ["Fotografia", "Edicion", "Producto", "Redes Sociales"],
      type: "Proyecto Empresarial",
      client: "Loto del Sur",
      year: "2025",
      projectUrl: "https://www.behance.net/gallery/236510327/Loto-del-Sur?share=1"
    },
    {
      title: "IA",
      description: "Web-app que proporciona informacion de IA y paginas que te pueden ayudar como diseñador.",
      detailedDescription: "Desarrollo de una aplicación web moderna que centraliza recursos de inteligencia artificial para diseñadores. La plataforma ofrece una curación de herramientas de IA, tutoriales, mejores prácticas y recursos educativos, todo con una interfaz UX/UI intuitiva y atractiva.",
      media: {
        type: "image",
        url: "https://whitestack.com/wp-content/uploads/2023/11/AI-1.webp"
      },
      gallery: [
      
      ],
      technologies: ["AI" , "UX/UI" , "Web-App" , "Diseño"],
      type: "Proyecto Personal",
      client: "Proyecto Personal",
      year: "2025",
      projectUrl: "https://www.figma.com/proto/ZDrSY92ZyEfWJ8z4efdubz/PROYECTO-IA?t=LOFW9U3QXwNpTNmv-1"
    },
    {
      title: "Zarache - Reina ",
      description: "Campaña Publicitaria de Lanzamiento como Reina de Malambo 2025.",
      detailedDescription: "Campaña publicitaria integral para el lanzamiento como Reina de Malambo 2025. El proyecto abarcó desde la conceptualización creativa hasta la ejecución completa, incluyendo sesiones fotográficas profesionales, edición de alta calidad y gestión estratégica de contenido para redes sociales, resaltando la elegancia y tradición del evento.",
      media: {
        type: "image",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/56a7ac236795051.68f2f4aebb246.jpg"
      },
      gallery: [
        {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/9b6947236795051.68f2f4aeba606.jpg"
        },
        {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/117438236795051.68f2f4aebadc2.jpg"
        }
      ],
      technologies: ["Campañas","Redes sociales", "Fotografia", "Edicion"],
      type: "Proyecto Empresarial",
      client: "Proyecto Empresarial",
      year: "2025",
      projectUrl: "https://www.behance.net/gallery/236795051/Zarache"
    },
    {
      title: "Smiling",
      description: "Identidad de marca para Odontología, con apertura en Barranquilla.",
      detailedDescription: "Desarrollo completo de identidad de marca para clínica odontológica en Barranquilla. El proyecto incluyó creación de branding desde cero, manual de marca, diseño de elementos visuales, fotografía corporativa y de instalaciones, garantizando una imagen profesional y confiable que transmite calidez y excelencia en servicios de salud dental.",
      media: {
        type: "image",
        url: "https://smilingclinicadental.com/wp-content/uploads/2024/05/Diseno-sin-titulo-8.png"
      },
      gallery: [
        {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4be934236794675.68f2f0b237c97.jpg"
        },
        {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cce516236794675.68f2f0b236103.jpg"
        }
      ],
      technologies: ["Identidad de marca" , "Branding" , "Fotografia" , "Diseño"],
      type: "Proyecto Empresarial",
      client: "Smiling",
      year: "2024",
      projectUrl: "https://www.behance.net/gallery/236794675/manual-de-narca-smilig"
    },
    {
      title: "Blender",
      description: "Diseños en 3D, creados para proyectos personales y estudiantiles.",
      detailedDescription: "Colección de modelados y renders 3D creados con Blender para diversos proyectos personales y académicos. Explora diferentes técnicas de modelado, iluminación, texturizado y composición, demostrando versatilidad en la creación de escenas realistas y estilizadas en 3D.",
      media: {
        type: "image",
        url: "https://p.turbosquid.com/ts-thumb/uj/C8rfwh/TZ/1/jpg/1614359447/600x600/fit_q87/4ba3b377b85eb4f9e6ad5a9f065c742165f884d5/1.jpg"
      },
      gallery: [
        {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c5d85b236795635.68f2fc578089f.jpg"
        },
        {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8c262a236795635.68f2fea3c131f.jpg"
        },
         {
          type: "image",
          url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4d6be5236795635.68f2fc5780f7d.png"
        }
      ],
      technologies: ["Blender", "3D"],
      type: "Proyecto Personal",
      client: "Proyecto Personal",
      year: "2023 - 2025",
      projectUrl: "https://www.behance.net/gallery/236795635/Blender"
    },
    {
      title: "Marquesado de Saint Cyprien",
      description: "Página web que proporciona información de lotes para residencias.",
      detailedDescription: "Desarrollo de sitio web corporativo para club y resort de lujo. El proyecto incluyó diseño web en WordPress, programación PHP personalizada, integración de JavaScript para interactividad avanzada, y optimización de experiencia de usuario para presentar información de lotes residenciales de manera elegante y funcional.",
      media: {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDQyOg18ySuTHsf1GLdjWA-tfR-1jDALiOg&s"
      },
      gallery: [
        {
          type: "image",
          url: "https://marquisatdesaintcyprien.org/wp-content/uploads/2024/04/Enscape_2023-12-23-19-27-18-1024x529.jpg"
        },
        {
          type: "image",
          url: "https://marquisatdesaintcyprien.org/wp-content/uploads/2024/04/Enscape_2024-01-30-18-54-28-scaled.jpg"
        }
      ],
      technologies: ["WordPress", "PHP", "WEB", "JavaScript"],
      type: "Proyecto Empresarial",
      client: "Club & Resort Marquesado de Saint Cyprien",
      year: "2024 - 2025",
      projectUrl: "https://marquisatdesaintcyprien.org"
    },
    {
      title: "UniSalamanca",
      description: "Corporación Universitaria Empresarial de Salamanca. Formación integral con enfoque empresarial, impacto regional y visión global.",
      detailedDescription: "Creación de piezas gráficas para la Corporación Universitaria Empresarial de Salamanca (UniSalamanca). El proyecto incluyó diseño de contenido visual para redes sociales, campañas de matrícula, infografías informativas sobre rutas académicas y medios de pago, manteniendo la identidad visual institucional con una estética fresca y atractiva orientada al público universitario.",
      media: {
        type: "image",
        url: uniCover
      },
      gallery: [
        {
          type: "image",
          url: uniMatriculate
        },
        {
          type: "image",
          url: uniMediosPago
        },
        {
          type: "image",
          url: uniRuta
        }
      ],
      technologies: ["Diseño Gráfico", "Redes Sociales", "Piezas Gráficas", "Branding"],
      type: "Proyecto Empresarial",
      client: "UniSalamanca",
      year: "2026",
      projectUrl: ""
    },
    {
      title: "InteBien",
      description: "Proyecto Educativo Institucional enfocado en el desarrollo de competencias específicas y desempeños esperados en Técnicos Laborales por Competencias.",
      detailedDescription: "Diseño y producción de piezas gráficas para InteBien, Instituto Técnico de Formación Laboral para el Bienestar Social. El trabajo abarcó la creación de contenido visual para redes sociales promocionando sus programas de formación técnica laboral por competencias, incluyendo Marketing Digital y Programación y Desarrollo de Software, con una identidad visual vibrante y profesional.",
      media: {
        type: "image",
        url: intebienCover
      },
      gallery: [
        {
          type: "image",
          url: intebienMarketing
        },
        {
          type: "image",
          url: intebienProgramacion
        }
      ],
      technologies: ["Diseño Gráfico", "Redes Sociales", "Piezas Gráficas", "Branding"],
      type: "Proyecto Empresarial",
      client: "InteBien",
      year: "2026",
      projectUrl: ""
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-4">
            <FolderOpen className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mis Proyectos
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia y habilidades en diferentes tecnologías y sectores
          </p>
        </div>

        {/* Carrusel de proyectos */}
        <div className={`mb-16 ${isVisible ? 'fade-in delay-200' : 'opacity-0'}`}>
          <ProjectCarousel autoScrollSpeed={40} isPaused={isCarouselPaused}>
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden glass-card-hover border-border bg-card transition-all duration-500 cursor-pointer w-[400px] shrink-0"
                style={{ 
                  minHeight: '520px'
                }}
                onClick={() => handleProjectClick(project)}
                onMouseEnter={() => setIsCarouselPaused(true)}
                onMouseLeave={() => setIsCarouselPaused(false)}
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
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ProjectCarousel>
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

      {/* Modal de detalles */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}