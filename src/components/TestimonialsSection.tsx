import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Les galères ne préviennent pas quand elles arrivent. Heureusement que j'ai pu compter sur AASO qui a su résoudre mon problème de serrure en moins d'une demi-heure ! MERCI.",
    author: "Sam",
    location: "Toulouse",
    rating: 5,
  },
  {
    text: "Ma vitre a été remplacée par AASO H24, je peux vous dire que leur travail est parfait. Je les recommande les yeux fermés.",
    author: "Nordine",
    location: "Colomiers",
    rating: 5,
  },
  {
    text: "3 fois que les manifestants ont détruit mon rideau métallique !!!! La première fois j'ai fait appel à une société dont je tairai le nom. Mais les deux fois suivantes j'ai fait confiance à AASO. Service parfait. Rien à redire.",
    author: "Simon",
    location: "Toulouse",
    rating: 5,
  },
  {
    text: "Une plaie de trouver un plombier disponible un samedi soir à 22h. J'ai contacté AASO, ils ont résolu mon problème dans la foulée. Au top...",
    author: "Sandrine",
    location: "Balma",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ils en parlent mieux que nous
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez les avis de nos clients satisfaits
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-primary/40 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-foreground/90 italic leading-relaxed mb-4">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex justify-between items-center">
                      <cite className="text-primary font-semibold not-italic">
                        {testimonial.author}
                      </cite>
                      <span className="text-muted-foreground text-sm">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};