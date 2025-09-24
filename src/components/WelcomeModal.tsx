import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, FileText, X } from "lucide-react";

interface WelcomeModalProps {
  onRequestQuote: () => void;
}

export const WelcomeModal = ({ onRequestQuote }: WelcomeModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleQuoteRequest = () => {
    handleClose();
    onRequestQuote();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary text-center">
            🔧 Besoin d'un dépannage urgent ?
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Volet bloqué ? Serrure cassée ? Problème de menuiserie ?
            </p>
            
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="font-semibold text-foreground">
                ⚡ Intervention d'urgence 7j/7
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Devis gratuit par téléphone en 5 minutes
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:0656869166" className="flex-1">
              <Button variant="emergency" size="lg" className="w-full">
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </Button>
            </a>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleQuoteRequest}
              className="flex-1"
            >
              <FileText className="mr-2 h-4 w-4" />
              Devis gratuit
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Artisan local • Toulouse et alentours • Garantie décennale
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};