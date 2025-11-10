import { storeInfo } from "@/data/sampleProducts";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";

export const StoreHeader = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${storeInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              {storeInfo.name}
            </h1>
            <p className="text-muted-foreground text-sm">{storeInfo.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              {storeInfo.contact.social?.instagram && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://instagram.com/${storeInfo.contact.social.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {storeInfo.contact.social?.twitter && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://twitter.com/${storeInfo.contact.social.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {storeInfo.contact.social?.facebook && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={`https://facebook.com/${storeInfo.contact.social.facebook}`} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>
            
            <Button 
              className="bg-gradient-accent hover:opacity-90" 
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
