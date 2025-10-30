import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <div className="gold-divider mb-8 max-w-md mx-auto" />
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We welcome your inquiries about nominations, partnerships, and the awards ceremony.
            </p>
          </div>

          <div className="max-w-3xl mx-auto fade-in-up">
            <div className="bg-card p-12 rounded-lg border border-border text-center">
              <h2 className="font-playfair text-3xl font-bold text-primary mb-8">
                OneUAE Awards
              </h2>
              
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Location</h3>
                    <p className="font-lato text-muted-foreground leading-relaxed">
                      Zabeel Ladies Club<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="gold-divider my-8" />

                <div className="flex flex-col items-center gap-3">
                  <Mail className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:info@oneuaeaward.ae" 
                      className="font-lato text-lg text-primary hover:text-primary/80 transition-colors"
                    >
                      info@oneuaeaward.ae
                    </a>
                  </div>
                </div>

                <div className="gold-divider my-8" />

                <div className="flex flex-col items-center gap-3">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Phone</h3>
                    <a 
                      href="tel:+971562555100" 
                      className="font-lato text-lg text-primary hover:text-primary/80 transition-colors"
                    >
                      +971 56 255 5100
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="font-lato text-sm text-muted-foreground">
                  For partnership inquiries and sponsorship opportunities, please contact us directly via email or phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
