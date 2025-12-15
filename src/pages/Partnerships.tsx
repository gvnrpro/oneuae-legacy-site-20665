import { Sparkles, Check, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnershipForm from "@/components/PartnershipForm";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import trophyGold from "@/assets/trophy-gold.jpeg";

const Partnerships = () => {
  const tiers = [
    { 
      name: "Gold Partner", 
      amount: "AED 100,000",
      featured: true,
      benefits: ["Premium logo placement", "VIP table for 10", "Award presentation rights", "Media coverage priority"]
    },
    { 
      name: "Silver Partner", 
      amount: "AED 75,000",
      featured: false,
      benefits: ["Logo on all materials", "VIP table for 8", "Social media features", "Event program listing"]
    },
    { 
      name: "Bronze Partner", 
      amount: "AED 50,000",
      featured: false,
      benefits: ["Logo visibility", "Reserved seating for 6", "Website recognition", "Certificate of partnership"]
    },
    { 
      name: "Red-Carpet Partner", 
      amount: "AED 25,000",
      featured: false,
      benefits: ["Event branding", "Reserved seating for 4", "Digital recognition", "Networking access"]
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Partnership Opportunities - ONE UAE International Business Awards 2026"
        description="Partner with ONE UAE International Business Awards and align your brand with excellence. Explore sponsorship opportunities for the UAE's most prestigious awards ceremony."
        keywords="UAE sponsorship, awards partnership, brand partnership, UAE corporate sponsorship, international business awards"
        path="/partnerships"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Partnership Opportunities
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                Align Your Brand with <span className="text-gradient-gold">Excellence</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Partner with ONE UAE International Business Awards to showcase your commitment to excellence and connect with 750+ distinguished leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Trophy Visual Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection animation="slide-right">
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
                    <img 
                      src={trophyGold} 
                      alt="ONE UAE Awards Trophy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
                  Join an Elite Group of Visionary Companies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a partner of the ONE UAE International Business Awards, your organization gains exclusive visibility among distinguished attendees including government representatives, business leaders, and industry innovators.
                </p>
                <div className="space-y-3">
                  {["750+ Distinguished Guests", "Government & Royal Attendance", "Premium Media Coverage", "Exclusive Networking"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  Partnership Tiers
                </h2>
                <p className="text-muted-foreground">
                  Choose the partnership level that aligns with your goals
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div 
                    className={`card-premium rounded-2xl p-6 lg:p-8 h-full relative ${
                      tier.featured ? 'border-primary ring-1 ring-primary/20' : ''
                    }`}
                  >
                    {tier.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6 pt-2">
                      <h3 className="font-display text-lg lg:text-xl text-foreground mb-2">
                        {tier.name}
                      </h3>
                      <div className="w-8 h-px bg-primary mx-auto mb-3" />
                      <p className="text-primary font-medium text-lg">
                        {tier.amount}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Inquiry Form */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Partnership Inquiry
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  For detailed information about partnership benefits and to discuss customized packages, please submit an inquiry below.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card-premium rounded-2xl p-8 lg:p-12">
                <PartnershipForm />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-deep-charcoal text-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-white/70 mb-8">
              Our partnerships team is ready to discuss how we can create a customized package for your organization.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
