import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Página no encontrada - GeekHub MX"
        description="La página que buscas no existe. Regresa al inicio o explora nuestro catálogo."
      />
      
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-2xl font-semibold mb-2">Página no encontrada</h2>
            <p className="text-muted-foreground">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/">
                <Home className="mr-2 w-5 h-5" />
                Volver al inicio
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/catalog">
                <Search className="mr-2 w-5 h-5" />
                Ver catálogo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
