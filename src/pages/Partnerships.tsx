import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { Check, Crown, Award, Medal, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PartnershipForm from "@/components/PartnershipForm";
import trophyGold from "@/assets/trophy-gold.jpeg";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { useLanguage } from "@/contexts/LanguageContext";

const Partnerships = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  const tiers = [
    {
      nameKey: "partnerships.goldPartner",
      amount: isRTL ? "١٠٠,٠٠٠ درهم" : "AED 100,000",
      icon: Crown,
      featured: true,
      benefitKeys: [
        "partnerships.benefits.premierLogo",
        "partnerships.benefits.vipTable10",
        "partnerships.benefits.speakingOpp",
        "partnerships.benefits.mediaCoverage",
        "partnerships.benefits.exclusiveNetworking",
      ],
    },
    {
      nameKey: "partnerships.silverPartner",
      amount: isRTL ? "٧٥,٠٠٠ درهم" : "AED 75,000",
      icon: Award,
      benefitKeys: [
        "partnerships.benefits.prominentLogo",
        "partnerships.benefits.table8",
        "partnerships.benefits.brandVisibility",
        "partnerships.benefits.mediaMentions",
        "partnerships.benefits.networkingAccess",
      ],
    },
    {
      nameKey: "partnerships.bronzePartner",
      amount: isRTL ? "٥٠,٠٠٠ درهم" : "AED 50,000",
      icon: Medal,
      benefitKeys: [
        "partnerships.benefits.logoPlacement",
        "partnerships.benefits.table6",
        "partnerships.benefits.eventMaterials",
        "partnerships.benefits.socialMention",
      ],
    },
    {
      nameKey: "partnerships.redCarpetPartner",
      amount: isRTL ? "٢٥,٠٠٠ درهم" : "AED 25,000",
      icon: Star,
      benefitKeys: [
        "partnerships.benefits.logoMaterials",
        "partnerships.benefits.vipInvitations2",
        "partnerships.benefits.brandAck",
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
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
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
          <div className={`grid lg:grid-cols-2 min-h-[60vh] ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <div className={`relative h-64 lg:h-auto ${isRTL ? 'lg:col-start-2' : ''}`}>
              <img 
                src={trophyGold} 
                alt="ONE UAE Awards Partnership" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className={`flex items-center p-8 lg:p-16 ${isRTL ? 'lg:col-start-1' : ''}`}>
              <div className={`max-w-lg ${isRTL ? 'text-right' : ''}`}>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  {t('partnerships.sponsorship')}
                </span>
                <h1 className="text-4xl md:text-5xl font-display text-foreground mb-6 leading-tight">
                  {t('partnerships.partnerWithExcellence')}
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  {t('partnerships.alignBrand')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className={`reveal-up mb-16 ${isRTL ? 'text-right' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('partnerships.investmentTiers')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                {t('partnerships.partnershipOptions')}
              </h2>
            </div>
            
            {/* Gold - Featured */}
            <div className={`reveal-up mb-8 p-8 lg:p-10 border-2 border-primary/30 rounded-lg bg-primary/5 ${isRTL ? 'text-right' : ''}`}>
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
                <div className={isRTL ? 'lg:col-start-2' : ''}>
                  <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Crown className="w-6 h-6 text-primary" />
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">{t('partnerships.premierTier')}</span>
                  </div>
                  <h3 className="text-2xl font-display text-foreground mb-2">{t(tiers[0].nameKey)}</h3>
                  <p className="text-4xl font-display text-primary">{tiers[0].amount}</p>
                </div>
                <ul className={`space-y-3 ${isRTL ? 'lg:col-start-1' : ''}`}>
                  {tiers[0].benefitKeys.map((benefitKey, i) => (
                    <li key={i} className={`flex items-center gap-3 text-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {t(benefitKey)}
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
                  <div key={index} className={`reveal-up p-6 border border-border rounded-lg ${isRTL ? 'text-right' : ''}`}>
                    <Icon className={`w-5 h-5 text-primary mb-4 ${isRTL ? 'mr-auto' : ''}`} />
                    <h3 className="text-lg font-display text-foreground mb-1">{t(tier.nameKey)}</h3>
                    <p className="text-2xl font-display text-foreground mb-6">{tier.amount}</p>
                    <ul className="space-y-2">
                      {tier.benefitKeys.map((benefitKey, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Check className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                          {t(benefitKey)}
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
                {t('partnerships.expressInterest')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                {t('partnerships.partnershipInquiry')}
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
            <p className="text-muted-foreground mb-2">{t('partnerships.questionsAbout')}</p>
            <Link to="/contact" className="text-xl font-display text-foreground hover:text-primary transition-colors">
              {t('partnerships.contactTeam')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
