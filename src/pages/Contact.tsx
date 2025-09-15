import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    sujet: "",
    message: "",
    rgpd: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rgpd) {
      toast({
        title: "Erreur",
        description: "Veuillez accepter les conditions RGPD pour continuer.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      sujet: "",
      message: "",
      rgpd: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contactez Simalik Rénovation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un devis gratuit sous 24h, c'est simple et rapide ! 
            Décrivez-nous vos besoins, et nous vous recontactons rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Téléphone</p>
                    <a href="tel:0656869166" className="text-muted-foreground hover:text-primary transition-colors">
                      06.56.86.91.66
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:contact@simalik-renov.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@simalik-renov.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Adresse</p>
                    <p className="text-muted-foreground">
                      25 chemin du séminaire<br />
                      31200 Toulouse
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Zone d'intervention</h3>
              <p className="text-muted-foreground">
                Nous intervenons sur Toulouse et ses alentours pour tous vos besoins en 
                volets roulants, serrurerie et menuiserie extérieure.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Demander un devis gratuit
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) => handleInputChange("nom", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input
                    id="prenom"
                    value={formData.prenom}
                    onChange={(e) => handleInputChange("prenom", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone *</Label>
                <Input
                  id="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => handleInputChange("telephone", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sujet">Sujet *</Label>
                <Select value={formData.sujet} onValueChange={(value) => handleInputChange("sujet", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisissez le type de demande" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="devis-volets">Devis - Volets roulants</SelectItem>
                    <SelectItem value="devis-serrurerie">Devis - Serrurerie</SelectItem>
                    <SelectItem value="devis-menuiserie">Devis - Menuiserie extérieure</SelectItem>
                    <SelectItem value="depannage-urgent">Dépannage urgent</SelectItem>
                    <SelectItem value="information">Demande d'information</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez vos besoins en détail..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rgpd"
                  checked={formData.rgpd}
                  onCheckedChange={(checked) => handleInputChange("rgpd", checked as boolean)}
                />
                <Label htmlFor="rgpd" className="text-sm">
                  J'accepte que mes données soient utilisées pour me recontacter concernant ma demande *
                </Label>
              </div>

              <Button type="submit" className="w-full flex items-center gap-2">
                <Send className="h-4 w-4" />
                Envoyer ma demande
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground mt-6">
              <p>Nous mettons tout en œuvre pour vous répondre rapidement.</p>
              <p className="font-semibold">Merci de votre confiance !</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;