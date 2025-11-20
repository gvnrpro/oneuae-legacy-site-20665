import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen">
      <SEOHead
        title="Contact Us - OneUAE Awards 2026"
        description="Get in touch with OneUAE Awards for nominations, partnerships, and inquiries. Located at Zabeel Ladies Club, Dubai."
        keywords="contact OneUAE, awards inquiry, Dubai contact, partnership inquiry"
        path="/contact"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Contact Us
            </h1>
            <div className="gold-divider mb-8 max-w-md mx-auto" />
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              We welcome your inquiries about nominations, partnerships, and the awards ceremony.
            </p>
          </div>

          <div className="max-w-3xl mx-auto fade-in-up">
            <div className="relative overflow-hidden bg-gradient-to-br from-card via-secondary to-card p-12 md:p-16 rounded-2xl border-2 border-primary/30 shadow-2xl text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-light/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <h2 className="font-serif text-4xl font-semibold text-gradient-gold mb-12">
                  Get in Touch
                </h2>
                
                <div className="space-y-10">
                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-gold/30">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Location</h3>
                    <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                      Zabeel Ladies Club<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>

                  <div className="gold-divider my-10" />

                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-gold/30">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Email</h3>
                    <a 
                      href="mailto:info@oneuaeawards.ae" 
                      className="inline-block font-sans text-xl text-primary hover:text-primary-light transition-colors duration-300 px-6 py-3 bg-gold/5 rounded-lg hover:bg-gold/10"
                    >
                      info@oneuaeawards.ae
                    </a>
                  </div>

                  <div className="gold-divider my-10" />

                  <div className="group">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-gold/30">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Phone</h3>
                    <a 
                      href="tel:+971562555100" 
                      className="inline-block font-sans text-xl text-primary hover:text-primary-light transition-colors duration-300 px-6 py-3 bg-gold/5 rounded-lg hover:bg-gold/10"
                    >
                      +971 56 255 5100
                    </a>
                  </div>
                </div>

                <div className="mt-14 pt-10 border-t border-primary/20">
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    For partnership inquiries and sponsorship opportunities,<br className="hidden md:block" />
                    please contact us directly via email or phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Contact;