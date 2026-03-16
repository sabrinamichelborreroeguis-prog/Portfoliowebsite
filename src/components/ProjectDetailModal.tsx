import { useState } from 'react';
import { X, Calendar, Building2, Tag, ExternalLink, Play, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
}

export interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  media: ProjectMedia;
  gallery?: ProjectMedia[];
  technologies: string[];
  type: string;
  client: string;
  year: string;
  projectUrl?: string;
  coverFit?: 'cover' | 'contain';
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!isOpen || !project) return null;

  // Combinar media principal con galería
  const allMedia: ProjectMedia[] = [
    project.media,
    ...(project.gallery || [])
  ];

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % allMedia.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const currentMedia = allMedia[currentMediaIndex];

  return (
    <>
      <div
        className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
        onClick={handleBackdropClick}
      >
        <div className="min-h-screen">
          {/* Botón de cerrar flotante */}
          <Button
            onClick={onClose}
            size="icon"
            className="fixed top-6 right-6 z-50 rounded-full bg-purple-500/80 hover:bg-purple-600 text-white backdrop-blur-sm shadow-lg"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Hero Section - Imagen principal grande estilo Netflix */}
          <div className="relative h-screen">
            {/* Imagen de fondo con gradiente */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={currentMedia.url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40"></div>
            </div>

            {/* Contenido sobre la imagen */}
            <div className="relative h-full flex items-end pb-24 px-8 md:px-16 lg:px-24">
              <div className="max-w-3xl space-y-6">
                {/* Badge y metadata */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Badge className="bg-purple-500/90 text-white border-purple-400 px-3 py-1.5">
                    <Tag className="h-3 w-3 mr-1" />
                    {project.type}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-purple-200">
                    <span className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      {project.client}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Título */}
                <h1 className="text-5xl md:text-7xl text-foreground" style={{ fontStyle: 'italic', letterSpacing: '-0.02em' }}>
                  {project.title}
                </h1>

                {/* Descripción */}
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>

                {/* Botones de acción */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.projectUrl && (
                    <Button
                      size="lg"
                      className="bg-[#C3A8FF] hover:bg-[#B59BE5] text-white"
                      asChild
                    >
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-5 w-5 fill-white" />
                        Ver en Behance
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-400/50 hover:bg-purple-500/10"
                    onClick={() => {
                      const element = document.getElementById('project-details');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Más Detalles
                  </Button>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-primary/30 text-muted-foreground bg-background/20 backdrop-blur-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sección de detalles adicionales */}
          <div id="project-details" className="relative bg-background px-8 md:px-16 lg:px-24 py-16">
            <div className="max-w-7xl mx-auto space-y-16">

              {/* Galería de medios - Layout tipo Netflix */}
              {allMedia.length > 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Galería del Proyecto</h2>
                    <p className="text-muted-foreground">Haz clic en cualquier imagen para verla en grande</p>
                  </div>

                  {/* Grid asimétrico dinámico */}
                  <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
                    {/* Primera imagen - Grande */}
                    {allMedia[0] && (
                      <div
                        className="col-span-12 md:col-span-8 row-span-2 relative group cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => openLightbox(0)}
                      >
                        <ImageWithFallback
                          src={allMedia[0].url}
                          alt={`${project.title} - 1`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center">
                            <Maximize2 className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Segunda imagen - Vertical */}
                    {allMedia[1] && (
                      <div
                        className="col-span-6 md:col-span-4 row-span-2 relative group cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => openLightbox(1)}
                      >
                        <ImageWithFallback
                          src={allMedia[1].url}
                          alt={`${project.title} - 2`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center">
                            <Maximize2 className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tercera imagen - Horizontal */}
                    {allMedia[2] && (
                      <div
                        className="col-span-6 md:col-span-5 row-span-1 relative group cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => openLightbox(2)}
                      >
                        <ImageWithFallback
                          src={allMedia[2].url}
                          alt={`${project.title} - 3`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center">
                            <Maximize2 className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Cuarta imagen - Cuadrada */}
                    {allMedia[3] && (
                      <div
                        className="col-span-6 md:col-span-3 row-span-1 relative group cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => openLightbox(3)}
                      >
                        <ImageWithFallback
                          src={allMedia[3].url}
                          alt={`${project.title} - 4`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center">
                            <Maximize2 className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quinta imagen - Panorámica */}
                    {allMedia[4] && (
                      <div
                        className="col-span-12 md:col-span-8 row-span-1 relative group cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => openLightbox(4)}
                      >
                        <ImageWithFallback
                          src={allMedia[4].url}
                          alt={`${project.title} - 5`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center">
                            <Maximize2 className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Sexta imagen */}
                    {allMedia[5] && (
                      <div
                        className="col-span-12 md:col-span-4 row-span-1 relative group cursor-pointer overflow-hidden rounded-xl"
                        onClick={() => openLightbox(5)}
                      >
                        <ImageWithFallback
                          src={allMedia[5].url}
                          alt={`${project.title} - 6`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-10 h-10 rounded-full bg-purple-500/90 backdrop-blur-sm flex items-center justify-center">
                            <Maximize2 className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Información adicional estilo cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Card de información del proyecto */}
                <div className="glass-card p-8 rounded-2xl space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Acerca del Proyecto</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Building2 className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Cliente</p>
                        <p className="text-foreground">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Calendar className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Año</p>
                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Tag className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Categoría</p>
                        <p className="text-foreground">{project.type}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card de tecnologías */}
                <div className="glass-card p-8 rounded-2xl space-y-4">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Habilidades Aplicadas</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-foreground hover:bg-purple-500/30 transition-colors"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Final */}
              {project.projectUrl && (
                <div className="text-center py-12">
                  <div className="glass-card rounded-2xl p-12 max-w-2xl mx-auto galactic-breath">
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      ¿Te gustó este proyecto?
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Visita mi perfil de Behance para ver el proyecto completo con todos los detalles y procesos creativos.
                    </p>
                    <Button
                      size="lg"
                      className="bg-[#C3A8FF] hover:bg-[#B59BE5] text-white"
                      asChild
                    >
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Ver Proyecto Completo
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox para ver imágenes en grande */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Botón cerrar */}
          <Button
            onClick={closeLightbox}
            size="icon"
            className="absolute top-6 right-6 z-50 rounded-full bg-purple-500/80 hover:bg-purple-600 text-white backdrop-blur-sm shadow-lg"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navegación anterior */}
          {allMedia.length > 1 && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-purple-500/80 hover:bg-purple-600 text-white backdrop-blur-sm shadow-lg w-14 h-14"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}

          {/* Navegación siguiente */}
          {allMedia.length > 1 && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-purple-500/80 hover:bg-purple-600 text-white backdrop-blur-sm shadow-lg w-14 h-14"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          {/* Imagen en pantalla completa */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={allMedia[lightboxIndex].url}
              alt={`${project.title} - ${lightboxIndex + 1}`}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />

            {/* Contador de imágenes */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-purple-500/90 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              {lightboxIndex + 1} / {allMedia.length}
            </div>
          </div>

          {/* Instrucciones */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-muted-foreground text-sm">
            <p>Usa las flechas o haz clic fuera de la imagen para cerrar</p>
          </div>
        </div>
      )}
    </>
  );
}