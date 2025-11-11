// File: src/pages/About.tsx
import { MapPin, Clock, Heart } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { storeInfo } from "@/data/sampleProducts";

const About = () => {
  return (
    <>
      <SEOHead
        title="Nosotros - GeekHub MX"
        description="Conoce la historia de GeekHub MX, tu tienda especializada en anime, manga y coleccionables. Pasión por la cultura otaku desde el primer día."
        ogImage="/og-about.jpg"
      />

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre nosotros</h1>
            <p className="text-xl text-muted-foreground">
              Pasión por el anime y la cultura otaku desde el primer día
            </p>
          </div>

          {/* Mission Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-lg shadow-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Nuestra misión</h2>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                En <span className="font-semibold text-foreground">{storeInfo.name}</span>, somos más que una tienda. 
                Somos una comunidad de apasionados del anime, manga y la cultura geek japonesa. 
                Nuestra misión es hacer llegar a México los mejores productos coleccionables con 
                garantía de autenticidad y calidad premium.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada producto que ofrecemos es cuidadosamente seleccionado para asegurar que cumpla 
                con los más altos estándares de calidad. Entendemos la importancia de cada figura, 
                cada manga y cada coleccionable para nuestros clientes.
              </p>
            </div>
          </section>

          {/* Store Info Grid */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="bg-card rounded-lg shadow-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Ubicación</h3>
                </div>
                <div className="text-muted-foreground space-y-2">
                  <p>Av. Reforma 123, Colonia Centro</p>
                  <p>Ciudad de México, CDMX 06000</p>
                  <p>México</p>
                </div>
                <div className="mt-6 bg-muted/30 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">[Mapa de ubicación]</p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card rounded-lg shadow-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Horario</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes</span>
                    <span className="font-medium">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábados</span>
                    <span className="font-medium">10:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingos</span>
                    <span className="font-medium">11:00 - 19:00</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Nota:</strong> Horarios sujetos a cambio en días festivos
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Autenticidad</h3>
                <p className="text-sm opacity-90">
                  Todos nuestros productos son 100% originales y verificados
                </p>
              </div>
              <div className="bg-gradient-secondary text-secondary-foreground rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Pasión</h3>
                <p className="text-sm opacity-90">
                  Amamos lo que hacemos y se nota en cada detalle
                </p>
              </div>
              <div className="bg-gradient-accent text-accent-foreground rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Comunidad</h3>
                <p className="text-sm opacity-90">
                  Creamos espacios para fans del anime y la cultura geek
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
