import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function EducationSection() {
  const educationData = [
    {
      title: "Tecnica Profesional En Producción Grafica y Multimedial",
      institution: "Institución Universitaria de Barranquilla",
      period: "2022 - 2023",
      status: "Graduado",
      description: "Fundamentos en Ilustración, Fotografia, Edicion y Retoque Fotografico.",
    },
    {
      title: "Auditora Interna en el Sistema de Gestión de Calidad",
      institution: "Centro Empresarial Buenavista - Icontec - ISO 9001:2015",
      period: "2023",
      status: "Completado",
      description: "Auditora Enfocada a la Mejora del Desempeño de la Organizacón, con Fundamento en la ISO 9001:2015.",
    },
    {
      title: "Tecnologia en producción Grafica y Multimedial",
      institution: "Institución Universitaria de Barranquilla",
      period: "2025",
      status: "Cursando",
      description: "Branding, Litografia, Publicidad en Diferentes formatos de imprenta, Redes sociales y Marketing Digital.",
    },
    {
      title: "Curso de UX/UI Design",
      institution: "Google UX Design Professional",
      period: "2024",
      status: "Completado",
      description: "Diseño centrado en el usuario, prototipado y testing de usabilidad.",
    }
  ];

  return (
    <section id="educacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Educación y Formación
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria académica y profesional que respalda mi experiencia en las diferentes areas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((item, index) => (
            <Card key={index} className="group glass-card-hover border-border bg-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in delay-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Años de Estudio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Certificaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Especializaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Dedicación</div>
          </div>
        </div>
      </div>
    </section>
  );
}