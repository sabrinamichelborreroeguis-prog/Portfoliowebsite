import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export interface ProjectData {
    title: string;
    client: string;
    year: string;
    category: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    projectUrl: string;
}

const portfolioProjects: ProjectData[] = [
    {
        title: "Smiling",
        client: "Smiling",
        year: "2024",
        category: "Branding",
        description: "Desarrollo completo de identidad de marca para clínica odontológica en Barranquilla. Creación de branding desde cero, manual de marca, diseño de elementos visuales.",
        technologies: ["Identidad de marca", "Branding", "Fotografia", "Diseño"],
        imageUrl: "https://smilingclinicadental.com/wp-content/uploads/2024/05/Diseno-sin-titulo-8.png",
        projectUrl: "https://www.behance.net/gallery/236794675/manual-de-narca-smilig"
    },
    {
        title: "Zarache - Reina",
        client: "Proyecto Empresarial",
        year: "2025",
        category: "Advertising",
        description: "Campaña publicitaria integral para el lanzamiento como Reina de Malambo 2025. Conceptualización creativa, sesiones fotográficas, edición y gestión estratégica.",
        technologies: ["Campañas", "Redes sociales", "Fotografia", "Edicion"],
        imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/56a7ac236795051.68f2f4aebb246.jpg",
        projectUrl: "https://www.behance.net/gallery/236795051/Zarache"
    },
    {
        title: "Blender",
        client: "Proyecto Personal",
        year: "2023 - 2025",
        category: "3D",
        description: "Colección de modelados y renders 3D creados con Blender para diversos proyectos personales y académicos. Técnicas de modelado, iluminación y composición.",
        technologies: ["Blender", "3D"],
        imageUrl: "https://p.turbosquid.com/ts-thumb/uj/C8rfwh/TZ/1/jpg/1614359447/600x600/fit_q87/4ba3b377b85eb4f9e6ad5a9f065c742165f884d5/1.jpg",
        projectUrl: "https://www.behance.net/gallery/236795635/Blender"
    },
    {
        title: "Loto del Sur",
        client: "Loto del Sur",
        year: "2025",
        category: "Photography",
        description: "Campaña fotográfica completa para el lanzamiento del nuevo producto de Loto del Sur, inspirado en la icónica batalla de flores de Medellín.",
        technologies: ["Fotografia", "Edicion", "Producto", "Redes Sociales"],
        imageUrl: "https://historiasdelsur.com/wp-content/uploads/2016/03/cropped-1523284_1452033528343739_127387866_o.jpg",
        projectUrl: "https://www.behance.net/gallery/236510327/Loto-del-Sur?share=1"
    },
    {
        title: "Marquesado de Saint Cyprien",
        client: "Club & Resort Marquesado de Saint Cyprien",
        year: "2024 - 2025",
        category: "Web",
        description: "Desarrollo de sitio web corporativo para club y resort de lujo. Diseño web, programación personalizada e integración de interactividad avanzada.",
        technologies: ["WordPress", "PHP", "WEB", "JavaScript"],
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDQyOg18ySuTHsf1GLdjWA-tfR-1jDALiOg&s",
        projectUrl: "https://marquisatdesaintcyprien.org"
    },
    {
        title: "IA",
        client: "Proyecto Personal",
        year: "2025",
        category: "AI",
        description: "Desarrollo de una aplicación web moderna que centraliza recursos de inteligencia artificial para diseñadores. Herramientas de IA y tutoriales.",
        technologies: ["AI", "UX/UI", "Web-App", "Diseño"],
        imageUrl: "https://whitestack.com/wp-content/uploads/2023/11/AI-1.webp",
        projectUrl: "https://www.figma.com/proto/ZDrSY92ZyEfWJ8z4efdubz/PROYECTO-IA?t=LOFW9U3QXwNpTNmv-1"
    }
];

const categories = ["All", "Branding", "Social Media", "Advertising", "3D", "Photography", "Web", "AI"];

export function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const filteredProjects = activeCategory === "All"
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === activeCategory);

    return (
        <div className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-background transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="max-w-7xl mx-auto">

                {/* Header section */}
                <div className="mb-12 cursor-pointer flex items-center text-muted-foreground hover:text-primary transition-colors w-fit" onClick={() => (window.location.hash = "home")}>
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    <span>Volver al inicio</span>
                </div>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Mi <span className="text-gradient-purple">Portfolio</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Explora de manera detallada mis trabajos agrupados por categorías, desde la dirección de arte hasta el modelado 3D y el diseño UI/UX.
                    </p>
                </div>

                {/* Categories Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === cat
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                                    : "bg-card text-muted-foreground hover:bg-purple-500/10 hover:text-foreground border border-border"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid Container */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="group overflow-hidden glass-card-hover border-border bg-card transition-all duration-500 flex flex-col slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative overflow-hidden h-64 w-full">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-purple-500/90 text-white border-purple-400">
                                        {project.category}
                                    </Badge>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Button
                                        size="sm"
                                        className="w-full bg-[#C3A8FF] hover:bg-[#B59BE5] text-white"
                                        asChild
                                    >
                                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                            Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <CardContent className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs text-muted-foreground bg-purple-900/40 px-2 py-1 rounded-md">
                                        {project.year}
                                    </span>
                                </div>

                                <p className="text-sm text-foreground/70 mb-4 line-clamp-3 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 rounded-sm bg-primary/10 text-primary/80 border border-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-xl text-muted-foreground">No hay proyectos para esta categoría aún.</h3>
                    </div>
                )}
            </div>
        </div>
    );
}
