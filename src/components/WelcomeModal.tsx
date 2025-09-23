<<<<<<< HEAD
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
    // Show modal after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:0656869166";
    setIsOpen(false);
  };

  const handleQuoteRequest = () => {
    onRequestQuote();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </button>
        
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-bold text-primary mb-2">
            Bienvenue chez Simalik Rénovation !
          </DialogTitle>
          <p className="text-muted-foreground">
            Votre spécialiste en volets roulants, serrurerie et menuiserie à Toulouse
          </p>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button onClick={handleCall} variant="call" className="flex items-center gap-2 h-12">
            <Phone className="h-5 w-5" />
            Appeler maintenant - 06.56.86.91.66
          </Button>
          
          <Button onClick={handleQuoteRequest} variant="default" className="flex items-center gap-2 h-12">
            <FileText className="h-5 w-5" />
            Demander un devis gratuit
          </Button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            ✅ Intervention rapide • ✅ Devis gratuit sous 24h • ✅ Toulouse & alentours
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
=======
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
    // Show modal after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:0656869166";
    setIsOpen(false);
  };

  const handleQuoteRequest = () => {
    onRequestQuote();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fermer</span>
        </button>
        
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-bold text-primary mb-2">
            Bienvenue chez Simalik Rénovation !
          </DialogTitle>
          <p className="text-muted-foreground">
            Votre spécialiste en volets roulants, serrurerie et menuiserie à Toulouse
          </p>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button onClick={handleCall} variant="call" className="flex items-center gap-2 h-12">
            <Phone className="h-5 w-5" />
            Appeler maintenant - 06.56.86.91.66
          </Button>
          
          <Button onClick={handleQuoteRequest} variant="default" className="flex items-center gap-2 h-12">
            <FileText className="h-5 w-5" />
            Demander un devis gratuit
          </Button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            ✅ Intervention rapide • ✅ Devis gratuit sous 24h • ✅ Toulouse & alentours
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
>>>>>>> 3c494f1 (Initial commit)
};