import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, CheckCircle } from "lucide-react";
import locksmithImage from "@/assets/locksmith-service.jpg";
import glazierImage from "@/assets/glazier-service.jpg";
import shutterImage from "@/assets/metal-shutter-service.jpg";

const services = [
  {
    title: "Volets roulants",
    description: "Installation, réparation et motorisation de volets roulants",
    details: "Installation sur mesure (PVC, aluminium, manuels ou motorisés). Réparation rapide (sangle cassée, moteur bloqué, lames endommagées). Motorisation de volets existants.",
    image: locksmithImage,
    icon: CheckCircle,
  },
  {
    title: "Serrurerie",
    description: "Dépannage serrurerie et sécurisation de portes",
    details: "Ouverture de portes sans dégâts. Remplacement de serrures toutes marques. Sécurisation (serrures multipoints, cylindres renforcés, verrous).",
    image: glazierImage,
    icon: Shield,
  },
  {
    title: "Menuiserie extérieure",
    description: "Portes, fenêtres et menuiseries sur mesure",
    details: "Pose et remplacement de fenêtres PVC, aluminium ou bois. Installation de portes d'entrée robustes et élégantes. Portails et clôtures sur mesure.",
    image: shutterImage,
    icon: Clock,
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
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground/80 mb-6">
                    {service.details}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">À propos</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Basée à Toulouse, <strong className="text-foreground">Simalik Rénovation</strong> est une entreprise spécialisée dans la rénovation et le dépannage auprès des particuliers et des professionnels.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Avec plusieurs années d'expérience, nous intervenons dans trois domaines clés : <strong className="text-primary">volets roulants, serrurerie et menuiserie extérieure</strong>.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-accent">Nos engagements :</strong> intervention rapide, travail soigné et de qualité artisanale, devis gratuit et conseils personnalisés.
              </p>
            </div>
            <div className="text-center">
              <Button variant="call" size="lg" className="mb-4">
                <Clock className="h-5 w-5 mr-2" />
                Contactez-nous
              </Button>
              <p className="text-sm text-muted-foreground">
                Une équipe à l'écoute et réactive pour votre satisfaction. <strong className="text-foreground">Notre exigence : votre satisfaction.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};