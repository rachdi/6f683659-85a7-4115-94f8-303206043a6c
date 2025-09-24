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

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Demande de devis gratuit
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom">Nom *</Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => handleChange("nom", e.target.value)}
                required
                className="border-2 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => handleChange("prenom", e.target.value)}
                required
                className="border-2 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telephone">Téléphone *</Label>
              <Input
                id="telephone"
                type="tel"
                value={formData.telephone}
                onChange={(e) => handleChange("telephone", e.target.value)}
                required
                className="border-2 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="border-2 focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sujet">Sujet de votre demande *</Label>
            <Select 
              value={formData.sujet} 
              onValueChange={(value) => handleChange("sujet", value)}
              required
            >
              <SelectTrigger className="border-2 focus:border-primary">
                <SelectValue placeholder="Sélectionnez le type de service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="volets-roulants">Volets roulants</SelectItem>
                <SelectItem value="serrurerie">Serrurerie</SelectItem>
                <SelectItem value="menuiserie">Menuiserie extérieure</SelectItem>
                <SelectItem value="depannage-urgence">Dépannage d'urgence</SelectItem>
                <SelectItem value="motorisation">Motorisation</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Décrivez votre projet *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              className="border-2 focus:border-primary min-h-[120px]"
              placeholder="Décrivez votre besoin, les dimensions si connues, l'urgence..."
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="rgpd"
              checked={formData.rgpd}
              onCheckedChange={(checked) => handleChange("rgpd", checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="rgpd" className="text-sm text-muted-foreground leading-relaxed">
              J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de cette demande. 
              Conformément au RGPD, vous pouvez exercer vos droits en nous contactant.
            </Label>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex items-center space-x-2"
            >
              <X className="h-4 w-4" />
              <span>Annuler</span>
            </Button>
            <Button
              type="submit"
              className="flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Envoyer la demande</span>
            </Button>
          </div>
        </form>
        
        <div className="mt-6 p-4 bg-secondary/30 rounded-lg border-l-4 border-primary">
          <h4 className="font-semibold text-primary mb-2">Zone d'intervention</h4>
          <p className="text-sm text-muted-foreground mb-2">
            Toulouse et communes limitrophes dans un rayon de 30km
          </p>
          <p className="text-xs text-muted-foreground">
            Pour les interventions urgentes, nous nous déplaçons 7j/7
          </p>
          <p className="font-semibold">Merci de votre confiance !</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};