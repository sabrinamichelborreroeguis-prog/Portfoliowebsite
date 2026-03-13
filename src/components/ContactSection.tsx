import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export function ContactSection() {
  // Tu número de WhatsApp (formato internacional sin + ni espacios)
  const whatsappNumber = 'https://wa.link/e53d2b';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir el mensaje de WhatsApp con todos los datos del formulario
    const whatsappMessage = `Hola! Me contacto desde tu portafolio.

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Abrir WhatsApp con el mensaje prellenado
    const whatsappUrl = `https://wa.link/e53d2b`;
    window.open(whatsappUrl, '_blank');
    
    // Opcional: Limpiar el formulario después de enviar
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sabrinamipersonal@gmail.com",
      description: "Respondo en menos de 24 horas"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 350 2393590",
      description: "Disponible de 9 AM a 6 PM"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Barranquilla, Colombia",
      description: "Trabajo de forma remota"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contáctame
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea o proyecto en mente? Me encantaría escuchar sobre ello.
            Conversemos sobre cómo puedo ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-8 slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-foreground">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Sígueme en</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="p-3"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Disponibilidad */}
            <Card className="border-border glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Disponibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Estado actual:</span>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      Disponible
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tiempo de respuesta:</span>
                    <span className="text-sm">24 horas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Modalidad:</span>
                    <span className="text-sm">Remoto/Híbrido</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <Card className="border-border glass-card slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl">Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre completo"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-input"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input
                    id="subject"
                    placeholder="¿En qué puedo ayudarte?"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntame más sobre tu proyecto o idea..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-input"
                  />
                </div>
                
                <Button type="submit" className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enviar mensaje
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}