import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/30 to-primary/5 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Devis et déplacement</span>{" "}
            <span className="text-accent font-black">GRATUIT !</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground mb-4 font-medium">
            Intervention rapide sur Toulouse & périphérie
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Rideaux métalliques, volets roulants, serrure...
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="hero" size="lg" className="text-xl px-8 py-4">
              <Phone className="h-6 w-6 mr-2" />
              06.51.14.78.72
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Demander un devis
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Intervention 24h/24</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Toulouse & périphérie</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-accent rounded-full"></span>
              <span>Déplacement dans la demi-heure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};