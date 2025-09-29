import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import aasoLogo from "@/assets/aaso-logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-[var(--shadow-card)]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={aasoLogo} alt="Simalik Rénovation" className="h-12 w-12 rounded-full" />
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-foreground">Simalik Rénovation</h1>
            <p className="text-xs text-muted-foreground">Volets roulants, serrurerie, menuiserie</p>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#realisations" className="text-foreground hover:text-primary transition-colors font-medium">
            Réalisations
          </a>
          <a href="#avis" className="text-foreground hover:text-primary transition-colors font-medium">
            Avis clients
          </a>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <a href="tel:0656869166">
            <Button variant="call" className="hidden sm:flex">
              <Phone className="h-4 w-4" />
              06.56.86.91.66
            </Button>
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a 
                  href="#services" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Services
                </a>
                <a 
                  href="#realisations" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Réalisations
                </a>
                <a 
                  href="#avis" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Avis clients
                </a>
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Contact
                </Link>
                <a href="tel:0656869166" className="pt-4">
                  <Button variant="call" className="w-full">
                    <Phone className="h-4 w-4" />
                    06.56.86.91.66
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};