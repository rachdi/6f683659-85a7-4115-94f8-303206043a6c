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
    text: "Intervention de qualité pour ma serrure cassée. Artisan professionnel et très arrangeant sur les horaires.",
    author: "Jean-Pierre",
    location: "Colomiers",
    rating: 5,
  },
  {
    text: "Excellent travail de réparation de mes fenêtres. Prix très correct et respect des délais annoncés.",
    author: "Sophie",
    location: "Blagnac",
    rating: 5,
  },
  {
    text: "AASO m'a dépanné un dimanche soir pour une porte bloquée. Très réactif, je recommande vivement !",
    author: "Michel",
    location: "Tournefeuille",
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
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Plus de 500 clients satisfaits nous font confiance
          </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-accent fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(502 avis)</span>
          </div>
        </div>
      </div>
    </section>
  );
};