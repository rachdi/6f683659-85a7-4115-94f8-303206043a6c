import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Euro, Clock, Phone } from "lucide-react";

const pricingItems = [
  {
    title: "Ouverture porte claquée / fermée à clé",
    subtitle: "SERRURERIE - DÉPANNAGE - TARIFS JOUR",
    price: "À partir de 90€",
    note: "(Tarifs nuits (à partir de 19h), week-end & jour férié : Majoration 35€)",
    icon: Euro,
    featured: true,
  },
  {
    title: "Vitrerie en simple vitrage 4mm",
    subtitle: "Tarifs exprimés en m²",
    price: "Sur devis",
    note: "Prix selon dimensions et type de verre",
    icon: Euro,
    featured: false,
  },
  {
    title: "Rideau Métallique",
    subtitle: "Plusieurs possibilités / Choix multiples",
    price: "Sur devis",
    note: "Installation et réparation selon besoins",
    icon: Euro,
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="tarifs" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exemples de Tarifs
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparence et clarté sur nos prix
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className={`relative ${item.featured ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''} hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-border/50`}>
                {item.featured && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Plus demandé
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {item.price}
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      {item.note}
                    </p>
                  </div>
                  <Button variant={item.featured ? "default" : "outline"} className="w-full">
                    {item.price.includes("devis") ? "Demander un devis" : "Contacter"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/50 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Inscrivez-vous pour recevoir nos réductions exclusives et tarifs promotionnels
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="hero" size="lg">
              Je m'inscris aux News d'AASO
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Je me renseigne par téléphone
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};