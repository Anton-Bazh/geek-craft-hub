// File: src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { storeInfo } from "@/data/sampleProducts";

export const Footer = () => {
  return (
    <footer className="border-t bg-card/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              {storeInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">{storeInfo.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: {storeInfo.contact.whatsapp}</li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="flex gap-3">
              {storeInfo.contact.social?.instagram && (
                <a
                  href={`https://instagram.com/${storeInfo.contact.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {storeInfo.contact.social?.twitter && (
                <a
                  href={`https://twitter.com/${storeInfo.contact.social.twitter.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {storeInfo.contact.social?.facebook && (
                <a
                  href={`https://facebook.com/${storeInfo.contact.social.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {storeInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
