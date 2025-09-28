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
import { z } from "zod";

const contactSchema = z.object({
  nom: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  prenom: z.string().trim().min(1, "Le prénom est requis").max(100, "Le prénom doit faire moins de 100 caractères"),
  telephone: z.string().trim().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres").max(20, "Le numéro de téléphone est trop long"),
  email: z.string().trim().email("L'email n'est pas valide").max(255, "L'email doit faire moins de 255 caractères"),
  sujet: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(1000, "Le message doit faire moins de 1000 caractères"),
  rgpd: z.boolean().refine(val => val === true, "Vous devez accepter les conditions RGPD")
});

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Create WhatsApp message
      const message = `🏠 *NOUVELLE DEMANDE DE DEVIS*

👤 *Client:* ${validatedData.prenom} ${validatedData.nom}
📧 *Email:* ${validatedData.email}
📱 *Téléphone:* ${validatedData.telephone}

🔧 *Sujet:* ${validatedData.sujet.replace('devis-', 'Devis ').replace('depannage-urgent', 'Dépannage urgent').replace('information', 'Demande d\'information').replace('autre', 'Autre')}

💬 *Message:*
${validatedData.message}

---
Demande reçue via le site web Simalik Rénovation`;

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/33656869166?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Demande envoyée !",
        description: "Votre demande a été transmise via WhatsApp. Nous vous recontacterons rapidement.",
        duration: 5000,
      });
      
      // Reset form after successful submission
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
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Erreur de validation",
          description: "Veuillez corriger les erreurs dans le formulaire.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
                className={errors.nom ? "border-destructive" : ""}
                required
              />
              {errors.nom && <p className="text-sm text-destructive">{errors.nom}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => handleInputChange("prenom", e.target.value)}
                className={errors.prenom ? "border-destructive" : ""}
                required
              />
              {errors.prenom && <p className="text-sm text-destructive">{errors.prenom}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="telephone">Téléphone *</Label>
            <Input
              id="telephone"
              type="tel"
              value={formData.telephone}
              onChange={(e) => handleInputChange("telephone", e.target.value)}
              className={errors.telephone ? "border-destructive" : ""}
              placeholder="06 XX XX XX XX"
              required
            />
            {errors.telephone && <p className="text-sm text-destructive">{errors.telephone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
              placeholder="votre@email.com"
              required
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sujet">Sujet *</Label>
            <Select value={formData.sujet} onValueChange={(value) => handleInputChange("sujet", value)}>
              <SelectTrigger className={errors.sujet ? "border-destructive" : ""}>
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
            {errors.sujet && <p className="text-sm text-destructive">{errors.sujet}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Décrivez vos besoins en détail (type de travaux, délais souhaités, etc.)..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={errors.message ? "border-destructive" : ""}
              rows={4}
              required
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          </div>

          <div className="space-y-2">
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
            {errors.rgpd && <p className="text-sm text-destructive">{errors.rgpd}</p>}
          </div>

          <Button 
            type="submit" 
            className="w-full flex items-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Envoyer ma demande
              </>
            )}
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