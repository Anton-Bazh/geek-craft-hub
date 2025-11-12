import { useState, useMemo } from "react";
import { ArrowRight, Package, Star, TrendingUp } from "lucide-react";
import { Product } from "@/types/product";
import { sampleProducts, categories } from "@/data/sampleProducts";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchAndSort } from "@/components/SearchAndSort";
import { StoreHeader } from "@/components/StoreHeader";
import { SEOHead } from "@/components/seo/SEOHead";

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = sampleProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.categories.includes(selectedCategory));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description_short.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price_suggested - b.price_suggested);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price_suggested - a.price_suggested);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // newest - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <>
      <SEOHead
        title="Catálogo - GeekLands MX"
        description="Explora nuestro catálogo completo de figuras, mangas y coleccionables de anime. Encuentra tus productos favoritos en GeekLands MX."
        ogImage="/og-catalog.jpg"
      />
      
      <div className="min-h-screen bg-background">
        <StoreHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="mb-8">
          <SearchAndSort
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </main>

        <ProductDetailModal
          product={selectedProduct}
          open={!!selectedProduct}
          onOpenChange={(open) => !open && setSelectedProduct(null)}
        />
      </div>
    </>
  );
};

export default Catalog;
