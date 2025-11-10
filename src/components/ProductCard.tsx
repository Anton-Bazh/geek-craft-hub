import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Package, Tag } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  const stockStatus = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
  const stockColors = {
    'in-stock': 'bg-primary/10 text-primary',
    'low-stock': 'bg-accent/10 text-accent',
    'out-of-stock': 'bg-muted text-muted-foreground'
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {product.attributes.limited_edition && (
          <Badge className="absolute top-2 right-2 bg-gradient-secondary text-secondary-foreground">
            Limited
          </Badge>
        )}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium ${stockColors[stockStatus]}`}>
          {stockStatus === 'in-stock' && `${product.stock} available`}
          {stockStatus === 'low-stock' && `Only ${product.stock} left!`}
          {stockStatus === 'out-of-stock' && 'Out of stock'}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1 mb-1">{product.title}</h3>
        {product.subtitle && (
          <p className="text-sm text-muted-foreground line-clamp-1 mb-2">{product.subtitle}</p>
        )}
        <p className="text-sm text-foreground/80 line-clamp-2 mb-3">{product.description_short}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {product.categories.slice(0, 2).map((category) => (
            <Badge key={category} variant="outline" className="text-xs">
              <Tag className="w-3 h-3 mr-1" />
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {formatPrice(product.price_suggested, product.currency)}
          </span>
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground">
          <Package className="w-4 h-4" />
          <span className="text-xs">SKU: {product.id.split('-')[1]}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
