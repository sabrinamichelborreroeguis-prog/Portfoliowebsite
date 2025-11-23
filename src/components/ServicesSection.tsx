import { Code, Smartphone, Palette, Globe, Database, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web Full Stack",
      description: "Desarrollo completo de aplicaciones web usando React, Node.js, y tecnologías modernas. Desde el frontend hasta el backend y bases de datos.",
      features: ["React & Next.js", "Node.js & Express", "APIs RESTful", "Base de datos SQL/NoSQL"]
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Creación de aplicaciones móviles nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales.",
      features: ["React Native", "Flutter", "Apps Nativas", "UI/UX Móvil"]
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Diseño de interfaces intuitivas y experiencias de usuario centradas en la conversión y usabilidad.",
      features: ["Prototipado", "Design Systems", "Testing de Usuario", "Responsive Design"]
    },
    {
      icon: Globe,
      title: "Diseño de Idetidad de Marca",
      description: "Desarrollo de identidad de marca visuales e impresas, para el mejoramiento de la empresa o emprendimiento,",
      features: ["Marca", "Branding", "Litografia", "Imprenta"]
    },
    {
      icon: Database,
      title: "Campañas Publicitarias",
      description: "Diseño e implementación de campañas publicitarias a la necesidad o busqueda del cliente.",
      features: ["Branding", "Redes Sociales", "Edicion de Video"]
    },
    {
      icon: Zap,
      title: "Auditora Interna en el Sistema de Gestión de Calidad",
      description: "Auditora Enfocada a la Mejora del Desempeño de la Organizacón, con Fundamento en la ISO 9001:2015.",
      features: ["Auditoría de Calidad", "Estratega", "Direccionamiento"]
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mis Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco soluciones tecnológicas completas, desde el diseño hasta la implementación,
            adaptadas a las necesidades específicas de cada proyecto
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group glass-card-hover border-border bg-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Proceso de trabajo */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12 fade-in delay-300">
            Mi Proceso de Trabajo
          </h3>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Análisis", description: "Entendimiento profundo de tus necesidades y objetivos" },
              { step: "02", title: "Diseño", description: "Creación de prototipos y diseños centrados en el usuario" },
              { step: "03", title: "Desarrollo", description: "Implementación usando las mejores prácticas y tecnologías" },
              { step: "04", title: "Entrega", description: "Testing, optimización y puesta en producción" }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4 slide-up" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                  {process.step}
                </div>
                <h4 className="font-semibold text-foreground">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}