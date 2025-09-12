import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import aasoLogo from "@/assets/aaso-logo.png";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-[var(--shadow-card)]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={aasoLogo} alt="AASO H24" className="h-12 w-12 rounded-full" />
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-foreground">AASO H24</h1>
            <p className="text-xs text-muted-foreground">Services professionnels 24h/24</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#tarifs" className="text-foreground hover:text-primary transition-colors font-medium">
            Tarifs
          </a>
          <a href="#temoignages" className="text-foreground hover:text-primary transition-colors font-medium">
            Témoignages
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="call" className="hidden sm:flex">
            <Phone className="h-4 w-4" />
            06.51.14.78.72
          </Button>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};