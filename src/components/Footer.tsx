import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Sabrina Borrero. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex items-center space-x-1 text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>y mucha pasión</span>
          </div>
        </div>
      </div>
    </footer>
  );
}