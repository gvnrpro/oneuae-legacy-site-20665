import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us - ONE UAE International Business Awards 2026"
        description="Get in touch with ONE UAE International Business Awards for nominations, partnerships, and inquiries. Located at Zabeel Ladies Club, Dubai."
        keywords="contact ONE UAE, awards inquiry, Dubai contact, partnership inquiry, international business awards"
        path="/contact"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Contact
            </h1>
            <div className="gold-divider mb-8" />
            <p className="font-sans text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              For inquiries about nominations, partnerships, or general information
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center fade-in">
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-6">
                  ONE UAE Awards Secretariat
                </h2>
                <div className="w-16 h-px bg-gold mx-auto mb-8" />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-sans text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 font-light">
                    Location
                  </h3>
                  <p className="font-sans text-sm md:text-base text-foreground font-light">
                    Zabeel Ladies Club<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>

                <div>
                  <h3 className="font-sans text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 font-light">
                    Email
                  </h3>
                  <a 
                    href="mailto:info@oneuaeaward.ae" 
                    className="font-sans text-sm md:text-base text-gold hover:text-gold/80 transition-colors font-light"
                  >
                    info@oneuaeaward.ae
                  </a>
                </div>

                <div>
                  <h3 className="font-sans text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 font-light">
                    Phone
                  </h3>
                  <a 
                    href="tel:+971562555100" 
                    className="font-sans text-sm md:text-base text-gold hover:text-gold/80 transition-colors font-light"
                  >
                    +971 56 255 5100
                  </a>
                </div>
              </div>

              <div className="pt-12">
                <div className="uae-accent-line mx-auto" />
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
