import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, Calendar, MapPin, Clock, Users, Award, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import SEOHead from "@/components/SEOHead";
import trophyBanner from "@/assets/trophy-banner.jpeg";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { useLanguage } from "@/contexts/LanguageContext";

const Gala = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

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

  const programFlow = [
    { time: isRTL ? "٦:٠٠ م" : "6:00 PM", eventKey: "gala.reception", icon: Users },
    { time: isRTL ? "٦:٤٥ م" : "6:45 PM", eventKey: "gala.opening", icon: Award },
    { time: isRTL ? "٧:١٥ م" : "7:15 PM", eventKey: "gala.awards", icon: Star },
    { time: isRTL ? "٨:٤٥ م" : "8:45 PM", eventKey: "gala.dinner", icon: Utensils },
  ];

  const eventDetails = [
    { icon: Calendar, labelKey: "gala.date", valueKey: "hero.date" },
    { icon: MapPin, labelKey: "gala.venue", valueKey: "gala.venueAddress" },
    { icon: Clock, labelKey: "gala.time", valueKey: "gala.timeValue" },
    { icon: Users, labelKey: "gala.guests", valueKey: "gala.guestsValue" },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title="Gala Night - ONE UAE International Business Awards 2026"
        description="Join us for an exclusive black-tie awards ceremony on February 5th, 2026 at Zabeel Ladies Club."
        keywords="UAE gala night, awards ceremony Dubai, black tie event, ONE UAE gala 2026"
        path="/gala"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20">
          <div className="relative h-[50vh] min-h-[400px]">
            <img 
              src={trophyBanner} 
              alt="ONE UAE Awards Trophy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl -mt-32 relative z-10">
            <div className={`reveal-up inline-block bg-background border border-border rounded-lg p-8 shadow-lg ${isRTL ? 'text-right' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                {t('gala.saveTheDate')}
              </span>
              <p className="text-4xl md:text-5xl font-display text-foreground">
                {t('hero.date')}
              </p>
              <p className="text-muted-foreground mt-2">{t('gala.awardsGalaNight')}</p>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <CountdownTimer />
          </div>
        </section>

        {/* Event Info */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`reveal-up ${isRTL ? 'lg:col-start-2 text-right' : ''}`}>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  {t('gala.theEvening')}
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6 leading-tight">
                  {t('gala.exclusiveBlackTie')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('gala.galaDescription')}
                </p>
              </div>
              
              <div className={`reveal-up grid grid-cols-2 gap-6 ${isRTL ? 'lg:col-start-1' : ''}`}>
                {eventDetails.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className={`p-5 border border-border rounded-lg ${isRTL ? 'text-right' : ''}`}>
                      <Icon className={`w-5 h-5 text-primary mb-3 ${isRTL ? 'mr-auto' : ''}`} />
                      <p className="text-xs text-muted-foreground mb-1">{t(item.labelKey)}</p>
                      <p className="font-medium text-foreground">{t(item.valueKey)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Program - Dark section */}
        <section className="py-24 md:py-32 lg:py-40 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className={`reveal-up mb-16 ${isRTL ? 'text-right' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-background/40 mb-4 block">
                {t('gala.schedule')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-background">
                {t('gala.programFlow')}
              </h2>
            </div>
            
            <div className="space-y-0 divide-y divide-background/10">
              {programFlow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className={`reveal-up py-6 flex items-center gap-6 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="text-primary font-mono text-sm w-20 flex-shrink-0">{item.time}</span>
                    <Icon className="w-5 h-5 text-background/40 flex-shrink-0" />
                    <span className="text-background/80 text-lg">{t(item.eventKey)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Venue & Dress Code */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`reveal-up p-8 bg-secondary/50 rounded-lg ${isRTL ? 'text-right' : ''}`}>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  {t('gala.location')}
                </span>
                <h3 className="text-xl font-display text-foreground mb-4">{t('gala.venueTitle')}</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-foreground">{t('gala.mainBallroom')}</p>
                  <p>{t('gala.venueAddress')}</p>
                  <p>{t('gala.dubaiUAE')}</p>
                </div>
              </div>
              
              <div className={`reveal-up p-8 bg-secondary/50 rounded-lg ${isRTL ? 'text-right' : ''}`}>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  {t('gala.attire')}
                </span>
                <h3 className="text-xl font-display text-foreground mb-4">{t('gala.dressCode')}</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-foreground">{t('gala.blackTieNational')}</p>
                  <p>{t('gala.formalAttire')}</p>
                  <p>{t('gala.traditionalWelcome')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <div className="reveal-up">
              <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                {t('gala.joinUs')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                {t('gala.bePartOf')}
              </h2>
              <p className="text-muted-foreground mb-10">
                {t('gala.submitOrPartner')}
              </p>
              <div className={`flex flex-wrap justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link to="/nominate">
                  <Button size="lg" className={`h-14 px-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('gala.submitNomination')}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                </Link>
                <Link to="/partnerships">
                  <Button size="lg" variant="outline" className="h-14 px-8">
                    {t('gala.becomePartner')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gala;