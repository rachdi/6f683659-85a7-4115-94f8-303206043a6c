import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Service rapide et travail impeccable, je recommande ! Les volets roulants ont été installés en une journée avec un résultat parfait.",
    author: "Marie",
    location: "Toulouse",
    rating: 5,
  },
  {
    text: "Devis clair, intervention soignée, entreprise sérieuse. Ma porte d'entrée a été remplacée dans les délais annoncés.",
    author: "Pierre",
    location: "Colomiers",
    rating: 5,
  },
  {
    text: "Réparation de volets roulants rapide et efficace. L'équipe est professionnelle et les prix sont corrects. Je recommande Simalik.",
    author: "Sophie",
    location: "Balma",
    rating: 5,
  },
  {
    text: "Excellent travail pour la motorisation de mes volets. Service client au top et finitions impeccables.",
    author: "Jean-Luc",
    location: "Toulouse",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="avis" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Avis clients
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez les retours de nos clients satisfaits
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