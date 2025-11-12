// File: src/pages/Home.tsx
import { Link } from "react-router-dom";
import { ArrowRight, Package, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { SEOHead } from "@/components/seo/SEOHead";
import { sampleProducts } from "@/data/sampleProducts";
import { newsArticles } from "@/data/newsData";
import { useState } from "react";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { Product } from "@/types/product";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Get 3 featured products (first 3 from catalog)
  const featuredProducts = sampleProducts.slice(0, 3);
  
  // Get latest news article
  const latestNews = newsArticles[0];

  return (
    <>
      <SEOHead
        title="GeekLands MX - Tu tienda de anime, manga y coleccionables"
        description="Descubre las mejores figuras, mangas y productos de anime en GeekLands MX. Coleccionables exclusivos para verdaderos fans del anime y la cultura otaku."
        ogImage="/og-home.jpg"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Bienvenido a GeekLands MX
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 animate-fade-in">
                Las mejores figuras, mangas y coleccionables de anime para verdaderos fans
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link to="/catalog">
                    Ver catálogo completo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/about">Conocer más</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Productos auténticos</h3>
                <p className="text-muted-foreground">Garantizamos la autenticidad de todos nuestros productos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Calidad premium</h3>
                <p className="text-muted-foreground">Seleccionamos solo los mejores coleccionables</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Últimos lanzamientos</h3>
                <p className="text-muted-foreground">Actualizamos constantemente nuestro inventario</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Productos destacados</h2>
              <p className="text-muted-foreground">Descubre nuestra selección de coleccionables más populares</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/catalog">
                  Ver todos los productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest News */}
        {latestNews && (
          <section className="py-16 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimas noticias</h2>
                <p className="text-muted-foreground">Mantente al día con novedades y lanzamientos</p>
              </div>

              <div className="max-w-2xl mx-auto bg-card rounded-lg shadow-card overflow-hidden">
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {new Date(latestNews.date).toLocaleDateString('es-MX', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{latestNews.title}</h3>
                  <p className="text-muted-foreground mb-4">{latestNews.excerpt}</p>
                  <div className="flex gap-4">
                    <Button asChild variant="outline">
                      <Link to={`/news/${latestNews.slug}`}>Leer más</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link to="/news">Ver todas las noticias</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />
    </>
  );
};

export default Home;
