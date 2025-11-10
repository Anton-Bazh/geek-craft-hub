import { Product } from "@/types/product";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Tag, Package, Calendar, Factory } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { TalkAboutProduct } from "./TalkAboutProduct";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProductDetailModal = ({ product, open, onOpenChange }: ProductDetailModalProps) => {
  const [showTalkAbout, setShowTalkAbout] = useState(false);

  if (!product) return null;

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in:\n${product.title}\nSKU: ${product.id}\nPrice: ${formatPrice(product.price_suggested, product.currency)}`
    );
    const whatsappUrl = `https://wa.me/${'+525551234567'.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.title}</DialogTitle>
          {product.subtitle && (
            <p className="text-muted-foreground">{product.subtitle}</p>
          )}
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {product.attributes.limited_edition && (
              <Badge className="absolute top-4 right-4 bg-gradient-secondary text-secondary-foreground">
                Limited Edition
              </Badge>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {formatPrice(product.price_suggested, product.currency)}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Package className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Stock: {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                </span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {product.description_long || product.description_short}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Categories & Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    {category}
                  </Badge>
                ))}
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {Object.keys(product.attributes).length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Product Details</h3>
                <div className="space-y-2 text-sm">
                  {product.attributes.material && (
                    <div className="flex items-center gap-2">
                      <Factory className="w-4 h-4 text-muted-foreground" />
                      <span>Material: {product.attributes.material}</span>
                    </div>
                  )}
                  {product.attributes.height_cm && (
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-muted-foreground" />
                      <span>Height: {product.attributes.height_cm}cm</span>
                    </div>
                  )}
                  {product.attributes.manufacturer && (
                    <div className="flex items-center gap-2">
                      <Factory className="w-4 h-4 text-muted-foreground" />
                      <span>Manufacturer: {product.attributes.manufacturer}</span>
                    </div>
                  )}
                  {product.attributes.series && (
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      <span>Series: {product.attributes.series}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <Separator />

            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                size="lg"
                onClick={handleWhatsAppClick}
                disabled={product.stock === 0}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask about this product on WhatsApp
              </Button>

              <Button
                variant="outline"
                className="w-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
                size="lg"
                onClick={() => setShowTalkAbout(true)}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Tell me more about this product
              </Button>
            </div>
          </div>
        </div>

        {showTalkAbout && (
          <TalkAboutProduct 
            product={product} 
            onClose={() => setShowTalkAbout(false)} 
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
