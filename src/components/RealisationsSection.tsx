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
    title: "Rénovation volet roulant",
    category: "Volets roulants",
    description: "Remplacement complet d'un volet roulant endommagé",
    avant: voletAvant,
    apres: voletApres,
    details: "Ancien volet roulant avec lames cassées remplacé par un modèle PVC motorisé"
  },
  {
    title: "Sécurisation serrurerie",
    category: "Serrurerie",
    description: "Installation d'une serrure multipoints haute sécurité",
    avant: serrureAvant,
    apres: serrureApres,
    details: "Remplacement d'une ancienne serrure par un système multipoints renforcé"
  },
  {
    title: "Remplacement fenêtres",
    category: "Menuiserie",
    description: "Pose de nouvelles fenêtres PVC double vitrage",
    avant: fenetreAvant,
    apres: fenetreApres,
    details: "Fenêtres anciennes remplacées par du PVC haute performance"
  }
];

export const RealisationsSection = () => {
  return (
    <section id="realisations" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques exemples de nos interventions en volets roulants, serrurerie et menuiserie extérieure
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
                      <Badge className="bg-destructive text-destructive-foreground">
                        Avant
                      </Badge>
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img 
                        src={realisation.avant} 
                        alt={`${realisation.title} - avant`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  {/* Flèche de transition */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Transformation</span>
                    </div>
                  </div>
                  
                  {/* Image Après */}
                  <div className="relative">
                    <div className="absolute top-2 left-2 z-10">
                      <Badge className="bg-green-600 text-white">
                        Après
                      </Badge>
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img 
                        src={realisation.apres} 
                        alt={`${realisation.title} - après`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground/80 pt-2 border-t border-border/50">
                    {realisation.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Chaque intervention est réalisée avec soin et précision pour garantir votre satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};