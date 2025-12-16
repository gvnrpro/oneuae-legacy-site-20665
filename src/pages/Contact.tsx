import { Mail, Phone, MapPin, Clock } from "lucide-react";
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
        {/* Hero Section - Minimal */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="max-w-lg">
              <p className="editorial-label mb-4">Get in Touch</p>
              <h1 className="section-title-editorial mb-6">
                Contact
              </h1>
              <div className="gold-rule-left" />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <AnimatedSection>
              <div className="mb-12">
                <p className="editorial-label mb-2">Awards Secretariat</p>
                <h2 className="font-display text-2xl text-foreground">
                  ONE UAE International Business Awards
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="card-standard h-full">
                    <Icon className="w-5 h-5 text-primary mb-4" />
                    <p className="editorial-label mb-1">{item.label}</p>
                    <p className={`font-medium text-sm ${item.href ? 'text-foreground hover:text-primary' : 'text-foreground'} transition-colors`}>
                      {item.value}
                    </p>
                  </div>
                );

                return (
                  <AnimatedSection key={index} delay={index * 80}>
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

            {/* Closing Note */}
            <AnimatedSection delay={400}>
              <div className="mt-16 pt-12 border-t border-border text-center">
                <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
                  Our team is dedicated to ensuring your experience with the ONE UAE International Business Awards is exceptional.
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