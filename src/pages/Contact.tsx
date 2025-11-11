// File: src/pages/Contact.tsx
import { useState } from "react";
import { MessageCircle, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEOHead } from "@/components/seo/SEOHead";
import { storeInfo } from "@/data/sampleProducts";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hola, soy ${formData.name}.\n\nEmail: ${formData.email}\n\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappPhone = storeInfo.contact.whatsapp.replace(/[^0-9]/g, '');
    const whatsappURL = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    toast.success("Redirigiendo a WhatsApp...");
  };

  const handleWhatsAppDirect = () => {
    const whatsappPhone = storeInfo.contact.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${whatsappPhone}`, '_blank');
  };

  return (
    <>
      <SEOHead
        title="Contacto - GeekHub MX"
        description="Ponte en contacto con GeekHub MX. Envíanos tus preguntas sobre productos, pedidos o cualquier consulta. Estamos aquí para ayudarte."
        ogImage="/og-contact.jpg"
      />

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
              <p className="text-xl text-muted-foreground">
                ¿Tienes preguntas? Estamos aquí para ayudarte
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-card rounded-lg shadow-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Escribe tu mensaje aquí..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Al enviar, se abrirá WhatsApp con tu mensaje prellenado
                </p>
              </div>

              {/* Direct Contact */}
              <div className="space-y-6">
                <div className="bg-card rounded-lg shadow-card p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold">WhatsApp directo</h2>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    ¿Prefieres contactarnos directamente? Haz clic en el botón de abajo para 
                    iniciar una conversación por WhatsApp.
                  </p>

                  <Button 
                    onClick={handleWhatsAppDirect}
                    className="w-full bg-gradient-accent hover:opacity-90"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Abrir WhatsApp
                  </Button>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Teléfono:</strong><br />
                      {storeInfo.contact.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-hero text-primary-foreground rounded-lg p-8">
                  <h3 className="font-bold text-xl mb-4">Horario de atención</h3>
                  <div className="space-y-2 text-sm">
                    <p>Lunes - Viernes: 10:00 - 20:00</p>
                    <p>Sábados: 10:00 - 21:00</p>
                    <p>Domingos: 11:00 - 19:00</p>
                  </div>
                  <p className="text-sm mt-4 opacity-90">
                    Respondemos todos los mensajes dentro de las 24 horas hábiles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
