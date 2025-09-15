import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import aasoLogo from "@/assets/aaso-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/30 to-secondary/60 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img src={aasoLogo} alt="Simalik Rénovation" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Simalik Rénovation</h3>
                <p className="text-sm text-muted-foreground">Volets, serrurerie, menuiserie</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              25 chemin du séminaire<br />
              31200 Toulouse
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:0656869166" className="w-full">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  06.56.86.91.66
                </Button>
              </a>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                contact@simalik-renov.com
              </Button>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Suivez-nous</h4>
            <div className="flex justify-center md:justify-end space-x-3">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Copyright © 2024 Simalik Rénovation - Tous droits réservés
          </p>
          <p className="text-xs text-muted-foreground">
            Afin de vous offrir une expérience en ligne optimale, ce site web utilise des cookies. 
            En utilisant notre site web, vous acceptez notre utilisation des cookies.
          </p>
        </div>
      </div>
    </footer>
  );
};