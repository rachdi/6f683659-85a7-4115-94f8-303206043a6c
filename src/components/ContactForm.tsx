import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, X } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
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
    
    onClose();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </button>

        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">
            Demander un devis gratuit
          </DialogTitle>
          <p className="text-muted-foreground">
            Décrivez-nous vos besoins, nous vous recontactons sous 24h !
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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

        <div className="text-center text-sm text-muted-foreground mt-4">
          <p>Nous mettons tout en œuvre pour vous répondre rapidement.</p>
          <p className="font-semibold">Merci de votre confiance !</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};