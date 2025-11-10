import { Product } from "@/types/product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface TalkAboutProductProps {
  product: Product;
  onClose: () => void;
}

export const TalkAboutProduct = ({ product, onClose }: TalkAboutProductProps) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const handleTalkAbout = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('talk-about-product', {
        body: { product }
      });

      if (error) {
        if (error.message?.includes('429')) {
          toast.error("Rate limit exceeded. Please try again in a moment.");
        } else if (error.message?.includes('402')) {
          toast.error("AI credits depleted. Please add credits to continue.");
        } else {
          toast.error("Failed to analyze product. Please try again.");
        }
        console.error('Error:', error);
        return;
      }

      setResponse(data);
    } catch (error) {
      console.error('Error calling talk-about-product:', error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppWithAI = () => {
    if (!response) return;
    
    const message = encodeURIComponent(response.whatsapp_text);
    const whatsappUrl = `https://wa.me/${'+525551234567'.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          AI Product Insights
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {!response && !loading && (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              Let our AI tell you everything about this product!
            </p>
            <Button onClick={handleTalkAbout} size="lg" className="bg-gradient-primary">
              <Sparkles className="w-5 h-5 mr-2" />
              Analyze Product
            </Button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Analyzing product with AI...</p>
          </div>
        )}

        {response && !loading && (
          <div className="space-y-4 animate-in fade-in duration-500">
            <div>
              <h3 className="font-bold text-xl mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {response.title}
              </h3>
              <p className="text-foreground/90 leading-relaxed">{response.pitch}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="space-y-2">
                {response.bullets.map((bullet: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Our Recommendation
              </h4>
              <p className="text-sm text-foreground/80">{response.recommendation}</p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">{response.stock_text}</p>
            </div>

            <Button 
              className="w-full bg-gradient-primary hover:opacity-90"
              size="lg"
              onClick={handleWhatsAppWithAI}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact us on WhatsApp
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
