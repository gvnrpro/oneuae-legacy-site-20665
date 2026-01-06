import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, Users, FileText, Award, Trophy, FileCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import NominationForm from "@/components/NominationForm";
import SEOHead from "@/components/SEOHead";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { useLanguage } from "@/contexts/LanguageContext";

const Nominate = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  const eligibility = [
    { icon: Users, titleKey: "nominate.eligibility.individualsOrgs", descKey: "nominate.eligibility.individualsOrgsDesc" },
    { icon: FileText, titleKey: "nominate.eligibility.documented", descKey: "nominate.eligibility.documentedDesc" },
    { icon: Award, titleKey: "nominate.eligibility.excellence", descKey: "nominate.eligibility.excellenceDesc" },
  ];

  const steps = [
    { icon: FileCheck, titleKey: "nominate.steps.reviewed", descKey: "nominate.steps.reviewedDesc" },
    { icon: Users, titleKey: "nominate.steps.contacted", descKey: "nominate.steps.contactedDesc" },
    { icon: Award, titleKey: "nominate.steps.selection", descKey: "nominate.steps.selectionDesc" },
    { icon: Trophy, titleKey: "nominate.steps.celebrated", descKey: "nominate.steps.celebratedDesc" },
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
        title="Submit Nomination - ONE UAE International Business Awards 2026"
        description="Nominate outstanding individuals and organizations for the ONE UAE International Business Awards."
        keywords="nominate UAE awards, submit nomination, business awards application"
        path="/nominate"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-8 lg:pt-40 lg:pb-12">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              {t('nominate.nominationsOpen')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-4">
              {t('nominate.submitYourNomination')}
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {t('nominate.recognizeExceptional')}
            </p>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <CountdownTimer />
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8">
              {eligibility.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="reveal-up text-center">
                    <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-foreground mb-2">{t(item.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
            <div className="reveal-up text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('nominate.application')}
              </span>
              <h2 className="text-2xl font-display text-foreground">{t('nominate.nominationForm')}</h2>
            </div>
            
            <div className="reveal-up">
              <NominationForm />
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="reveal-up text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('nominate.theProcess')}
              </span>
              <h2 className="text-2xl md:text-3xl font-display text-foreground">{t('nominate.whatHappensNext')}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className={`reveal-up relative p-6 bg-background border border-border rounded-lg ${isRTL ? 'text-right' : ''}`}>
                    <span className={`absolute top-4 text-4xl font-display text-primary/20 ${isRTL ? 'left-4' : 'right-4'}`}>
                      {isRTL ? ['١', '٢', '٣', '٤'][index] : index + 1}
                    </span>
                    <Icon className={`w-8 h-8 text-primary mb-4 ${isRTL ? 'mr-auto' : ''}`} />
                    <h3 className="font-display text-foreground mb-2">{t(step.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(step.descKey)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Help */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`reveal-up p-6 border border-border rounded-lg ${isRTL ? 'text-right' : ''}`}>
                <h3 className="font-display text-lg text-foreground mb-4">{t('nominate.needHelp')}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {t('nominate.helpDesc')}
                </p>
                <div className="space-y-3">
                  <Link to="/categories">
                    <Button variant="outline" size="sm" className={`w-full justify-between group ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {t('nominate.viewAllCategories')}
                      <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className={`w-full justify-between group ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {t('nominate.contactUs')}
                      <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="reveal-up p-6 border border-border rounded-lg flex flex-col items-center text-center">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{t('nominate.questions')}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t('nominate.contactAt')}</p>
                <a href="mailto:info@oneuaeawards.ae" className="text-primary hover:underline font-medium">
                  info@oneuaeawards.ae
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nominate;