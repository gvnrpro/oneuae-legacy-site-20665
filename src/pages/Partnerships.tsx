import { Link } from "react-router-dom";
import { ArrowRight, Check, Crown, Award, Medal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PartnershipForm from "@/components/PartnershipForm";
import AnimatedSection from "@/components/AnimatedSection";
import trophyGold from "@/assets/trophy-gold.jpeg";

const Partnerships = () => {
  const tiers = [
    {
      name: "Gold Partner",
      amount: "AED 100,000",
      icon: Crown,
      featured: true,
      benefits: [
        "Premier logo placement",
        "VIP table for 10 guests",
        "Speaking opportunity",
        "Media coverage priority",
        "Exclusive networking access",
      ],
    },
    {
      name: "Silver Partner",
      amount: "AED 75,000",
      icon: Award,
      featured: false,
      benefits: [
        "Prominent logo placement",
        "Table for 8 guests",
        "Brand visibility",
        "Media mentions",
        "Networking access",
      ],
    },
    {
      name: "Bronze Partner",
      amount: "AED 50,000",
      icon: Medal,
      featured: false,
      benefits: [
        "Logo placement",
        "Table for 6 guests",
        "Event materials",
        "Social media mention",
      ],
    },
    {
      name: "Red-Carpet Partner",
      amount: "AED 25,000",
      icon: Star,
      featured: false,
      benefits: [
        "Logo on materials",
        "2 VIP invitations",
        "Brand acknowledgment",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Partnerships - ONE UAE International Business Awards 2026"
        description="Partner with the ONE UAE International Business Awards. Gold, Silver, Bronze, and Red-Carpet sponsorship tiers available. Align your brand with excellence."
        keywords="UAE awards partnership, sponsorship opportunities, business awards sponsor, brand visibility UAE, Gold partner"
        path="/partnerships"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section - Split screen */}
        <section className="pt-20 bg-background">
          <div className="grid lg:grid-cols-2 min-h-[60vh]">
            {/* Left - Image */}
            <div className="relative h-64 lg:h-auto order-2 lg:order-1">
              <img 
                src={trophyGold} 
                alt="ONE UAE Awards Partnership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background lg:hidden" />
            </div>
            
            {/* Right - Content */}
            <div className="flex items-center order-1 lg:order-2 p-8 lg:p-16">
              <div className="max-w-lg">
                <p className="editorial-label mb-4">Sponsorship</p>
                <h1 className="section-title-editorial mb-6">
                  Partner With Excellence
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Align your brand with the UAE's most prestigious business awards. Connect with industry leaders and showcase your commitment to excellence.
                </p>
                <div className="gold-rule-left" />
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <p className="editorial-label mb-4">Investment Tiers</p>
              <h2 className="section-title-editorial">Partnership Options</h2>
            </div>
            
            {/* Gold Partner - Featured */}
            <AnimatedSection>
              <div className="card-featured mb-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Crown className="w-6 h-6 text-primary" />
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">Premier Tier</span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2">Gold Partner</h3>
                    <p className="font-display text-4xl text-primary mb-4">AED 100,000</p>
                    <p className="text-muted-foreground text-sm">
                      Maximum visibility and engagement as the leading partner of the ONE UAE Awards.
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {tiers[0].benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Other Tiers */}
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.slice(1).map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <AnimatedSection key={index} delay={(index + 1) * 100}>
                    <div className="card-standard h-full">
                      <Icon className="w-5 h-5 text-primary mb-4" />
                      <h3 className="font-display text-lg text-foreground mb-1">{tier.name}</h3>
                      <p className="font-display text-2xl text-foreground mb-4">{tier.amount}</p>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
            <div className="text-center mb-12">
              <p className="editorial-label mb-4">Express Interest</p>
              <h2 className="section-title-editorial">Partnership Inquiry</h2>
            </div>
            
            <AnimatedSection>
              <PartnershipForm />
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <AnimatedSection>
              <h2 className="font-display text-2xl text-foreground mb-4">
                Questions about partnerships?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team is ready to discuss customized partnership opportunities.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="group">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
