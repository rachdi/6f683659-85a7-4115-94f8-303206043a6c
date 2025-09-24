import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, CheckCircle } from "lucide-react";
import locksmithImage from "@/assets/locksmith-service.jpg";
import glazierImage from "@/assets/glazier-service.jpg";
import shutterImage from "@/assets/metal-shutter-service.jpg";

const services = [
  {
    title: "Serrurerie",
    description: "Ouvertures de porte, réparation et remplacement de serrures",
    icon: Shield,
    image: locksmithImage,
    features: ["Intervention 7j/7", "Ouverture porte claquée", "Changement de serrure", "Installation de verrous"],
  },
  {
    title: "Vitrerie",
    description: "Remplacement de vitres, fenêtres et portes vitrées",
    icon: CheckCircle,
    image: glazierImage,
    features: ["Réparation vitre cassée", "Simple et double vitrage", "Fenêtres sur mesure", "Vitrage sécurisé"],
  },
  {
    title: "Volets Roulants",
    description: "Installation, réparation et motorisation de volets",
    icon: Clock,
    image: shutterImage,
    features: ["Motorisation volets", "Réparation lames", "Changement sangle", "Volets sur mesure"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Spécialistes en volets roulants, serrurerie et menuiserie extérieure
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="h-8 w-8 text-primary bg-background/90 rounded-full p-1.5" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Une urgence ? Besoin d'un dépannage rapide ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Intervention 7j/7, devis gratuit par téléphone
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="emergency" size="lg">
                <Clock className="h-5 w-5 mr-2" />
                Appel d'urgence
              </Button>
              <Button variant="outline" size="lg">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};