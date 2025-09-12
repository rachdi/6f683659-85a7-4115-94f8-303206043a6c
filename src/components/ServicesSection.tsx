import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, CheckCircle } from "lucide-react";
import locksmithImage from "@/assets/locksmith-service.jpg";
import glazierImage from "@/assets/glazier-service.jpg";
import shutterImage from "@/assets/metal-shutter-service.jpg";

const services = [
  {
    title: "Dépannage d'urgence serrurerie",
    description: "AASO intervient en toute circonstance, de jour comme de nuit. Nos équipes se déplacent dans la demi-heure suivant votre demande d'intervention.",
    details: "Avant toute intervention, nous effectuons une expertise GRATUITE pour que vous puissiez connaître à l'avance vos tarifs et la durée moyenne du service.",
    image: locksmithImage,
    icon: Clock,
  },
  {
    title: "Service de vitrerie",
    description: "Pose et/ou remplacement de fenêtres, vitrines, double vitrage, baies coulissantes, lucarnes de toit.",
    details: "Toutes nos interventions en miroiterie et vitrerie vous offrent la garantie d'un travail de qualité réalisé par des équipes disponibles 24h/24 et 7j/7.",
    image: glazierImage,
    icon: Shield,
  },
  {
    title: "Rideaux Métalliques",
    description: "Il est indispensable de mettre en place une protection efficace pour garantir une sécurité à votre activité.",
    details: "AASO intervient pour le remplacement et/ou la pose de votre rideau métallique. Devis gratuit et intervention d'urgence à votre service.",
    image: shutterImage,
    icon: CheckCircle,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Services Professionnels
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des artisans reconnus pour leur disponibilité, leur travail et leur efficacité sur le terrain
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
                    <strong className="text-foreground">AASO</strong> {service.description.replace('AASO ', '')}
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
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">AASO H24</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong className="text-foreground">AASO</strong> est une entreprise à taille humaine, proposant un service de proximité immédiat et à la demande.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Avec nos spécialistes formés et notre équipement moderne, <strong className="text-primary">nous travaillons au plus haut niveau</strong> pour garantir votre satisfaction et votre sécurité.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous intervenons <strong className="text-accent">de jour comme de nuit</strong>, 7 jours sur 7, dans le grand Sud-Ouest de la France.
              </p>
            </div>
            <div className="text-center">
              <Button variant="call" size="lg" className="mb-4">
                <Clock className="h-5 w-5 mr-2" />
                Contactez-nous 24h/24
              </Button>
              <p className="text-sm text-muted-foreground">
                Basé à Toulouse, notre siège social accueille des <strong className="text-foreground">techniciens disponibles</strong> pour répondre à tout type d'urgence dans les 30 minutes suivant votre demande d'intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};