import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { EducationSection } from "./components/EducationSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { PortfolioPage } from "./pages/PortfolioPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Aplicar tema oscuro por defecto
    document.documentElement.classList.add("dark");

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "portfolio") {
        setCurrentPage("portfolio");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col pt-[72px]">
      {/* Ambiente galáctico - orbes morados y azules */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "15s", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <Header currentPage={currentPage} />
        <main className="flex-1">
          {currentPage === "portfolio" ? (
            <PortfolioPage />
          ) : (
            <>
              <HeroSection />
              <EducationSection />
              <ServicesSection />
              <ProjectsSection />
              <ContactSection />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}