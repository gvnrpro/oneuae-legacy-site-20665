import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, Check, Crown, Award, Medal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PartnershipForm from "@/components/PartnershipForm";
import trophyGold from "@/assets/trophy-gold.jpeg";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";

const Partnerships = () => {
  const mainRef = useRef<HTMLDivElement>(null);

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
      benefits: [
        "Logo on materials",
        "2 VIP invitations",
        "Brand acknowledgment",
      ],
    },
  ];

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background">
      <SEOHead
        title="Partnerships - ONE UAE International Business Awards 2026"
        description="Partner with the ONE UAE International Business Awards. Gold, Silver, Bronze, and Red-Carpet sponsorship tiers available."
        keywords="UAE awards partnership, sponsorship opportunities, business awards sponsor, brand visibility UAE"
        path="/partnerships"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero - Split layout */}
        <section className="pt-20">
          <div className="grid lg:grid-cols-2 min-h-[60vh]">
            <div className="relative h-64 lg:h-auto order-2 lg:order-1">
              <img 
                src={trophyGold} 
                alt="ONE UAE Awards Partnership" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center order-1 lg:order-2 p-8 lg:p-16">
              <div className="max-w-lg">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  Sponsorship
                </span>
                <h1 className="text-4xl md:text-5xl font-display text-foreground mb-6 leading-tight">
                  Partner With Excellence
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Align your brand with the UAE's most prestigious business awards. Connect with industry leaders and showcase your commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="reveal-up mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                Investment Tiers
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                Partnership Options
              </h2>
            </div>
            
            {/* Gold - Featured */}
            <div className="reveal-up mb-8 p-8 lg:p-10 border-2 border-primary/30 rounded-lg bg-primary/5">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Crown className="w-6 h-6 text-primary" />
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">Premier Tier</span>
                  </div>
                  <h3 className="text-2xl font-display text-foreground mb-2">{tiers[0].name}</h3>
                  <p className="text-4xl font-display text-primary">{tiers[0].amount}</p>
                </div>
                <ul className="space-y-3">
                  {tiers[0].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Other Tiers */}
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.slice(1).map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <div key={index} className="reveal-up p-6 border border-border rounded-lg">
                    <Icon className="w-5 h-5 text-primary mb-4" />
                    <h3 className="text-lg font-display text-foreground mb-1">{tier.name}</h3>
                    <p className="text-2xl font-display text-foreground mb-6">{tier.amount}</p>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
            <div className="reveal-up text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                Express Interest
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                Partnership Inquiry
              </h2>
            </div>
            
            <div className="reveal-up">
              <PartnershipForm />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <p className="text-muted-foreground mb-2">Questions about partnerships?</p>
            <Link to="/contact" className="text-xl font-display text-foreground hover:text-primary transition-colors">
              Contact our team →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
