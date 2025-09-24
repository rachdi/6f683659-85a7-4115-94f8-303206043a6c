import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import voletAvant from "@/assets/volet-avant.jpg";
import voletApres from "@/assets/volet-apres.jpg";
import serrureAvant from "@/assets/serrure-avant.jpg";
import serrureApres from "@/assets/serrure-apres.jpg";
import fenetreAvant from "@/assets/fenetre-avant.jpg";
import fenetreApres from "@/assets/fenetre-apres.jpg";

const realisations = [
  {
    title: "Motorisation volet roulant",
    category: "Volets Roulants",
    description: "Installation d'un système de motorisation sur volet roulant existant",
    avant: voletAvant,
    apres: voletApres
  },
  {
    title: "Remplacement serrure 3 points",
    category: "Serrurerie",
    description: "Changement complet d'une serrure 3 points avec cylindre sécurisé",
    avant: serrureAvant,
    apres: serrureApres
  },
  {
    title: "Pose fenêtre double vitrage",
    category: "Menuiserie",
    description: "Remplacement fenêtre simple vitrage par double vitrage performant",
    avant: fenetreAvant,
    apres: fenetreApres
  }
];

export const RealisationsSection = () => {
  return (
    <section id="realisations" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-unes de nos interventions récentes. 
            Des transformations avant/après qui parlent d'elles-mêmes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {realisations.map((realisation, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-2 text-primary border-primary/30">
                    {realisation.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {realisation.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {realisation.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {/* Image Avant */}
                  <div className="relative">
                    <div className="absolute top-2 left-2 z-10">
                      <Badge className="bg-accent/90 text-accent-foreground">
                        Avant
                      </Badge>
                    </div>
                    <img 
                      src={realisation.avant} 
                      alt={`${realisation.title} - avant`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Flèche de transition */}
                  <div className="flex items-center justify-center">
                    <div className="bg-primary rounded-full p-2">
                      <ArrowRight className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Image Après */}
                  <div className="relative">
                    <div className="absolute top-2 left-2 z-10">
                      <Badge className="bg-primary text-primary-foreground">
                        Après
                      </Badge>
                    </div>
                    <img 
                      src={realisation.apres} 
                      alt={`${realisation.title} - après`}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Chaque intervention est réalisée avec soin et précision pour garantir votre satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};