import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@oneuaeaward.ae",
      href: "mailto:info@oneuaeaward.ae",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 56 255 5100",
      href: "tel:+971562555100",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Zabeel Ladies Club, Dubai, UAE",
      href: null,
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Sunday - Thursday, 9AM - 6PM GST",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us - ONE UAE International Business Awards 2026"
        description="Get in touch with ONE UAE International Business Awards for nominations, partnerships, and inquiries. Located at Zabeel Ladies Club, Dubai."
        keywords="contact ONE UAE, awards inquiry, Dubai contact, partnership inquiry, international business awards"
        path="/contact"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Get In Touch
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Contact Us
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                For inquiries about nominations, partnerships, or general information about the ONE UAE International Business Awards.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  ONE UAE Awards Secretariat
                </h2>
                <div className="gold-divider" />
              </div>
            </AnimatedSection>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="card-premium rounded-2xl p-8 h-full group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      {item.label}
                    </p>
                    <p className={`font-medium ${item.href ? 'text-primary group-hover:text-primary/80' : 'text-foreground'} transition-colors`}>
                      {item.value}
                    </p>
                  </div>
                );

                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    {item.href ? (
                      <a href={item.href} className="block h-full">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Decorative Section */}
            <AnimatedSection animation="fade-in" delay={400}>
              <div className="text-center py-12 border-t border-border">
                <div className="uae-accent-line mx-auto mb-8" />
                <p className="text-muted-foreground max-w-xl mx-auto">
                  We look forward to hearing from you. Our team is dedicated to ensuring your experience with the ONE UAE International Business Awards is exceptional.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
