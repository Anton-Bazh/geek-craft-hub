import { Category } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) => {
  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons] as any;
    return Icon ? <Icon className="w-4 h-4" /> : null;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={
              selectedCategory === category.id
                ? "bg-gradient-primary hover:opacity-90"
                : "hover:border-primary"
            }
            onClick={() => onCategoryChange(category.id)}
          >
            {category.icon && getIcon(category.icon)}
            <span className="ml-2">{category.name}</span>
            {category.product_count && (
              <Badge variant="secondary" className="ml-2">
                {category.product_count}
              </Badge>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};
