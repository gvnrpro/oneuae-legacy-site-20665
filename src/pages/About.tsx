import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import sheikhPortrait from "@/assets/sheikh-sultan.jpeg";
import trophySkyline from "@/assets/trophy-skyline.jpeg";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
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

  const selectionSteps = [
    { step: "01", titleKey: "about.step1Title", descKey: "about.step1Desc" },
    { step: "02", titleKey: "about.step2Title", descKey: "about.step2Desc" },
    { step: "03", titleKey: "about.step3Title", descKey: "about.step3Desc" },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title="About - ONE UAE International Business Awards 2026"
        description="Learn about ONE UAE International Business Awards' mission to celebrate unity, vision, and excellence across the Emirates."
        keywords="about ONE UAE, UAE awards mission, Sheikh Sultan Al Nuaimi, UAE excellence platform"
        path="/about"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero - Full bleed image with offset text */}
        <section className="pt-20">
          <div className="relative h-[50vh] min-h-[400px]">
            <img 
              src={trophySkyline} 
              alt="ONE UAE Awards" 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${isRTL ? 'from-transparent via-background/70 to-background' : 'from-background via-background/70 to-transparent'}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl -mt-32 relative z-10">
            <div className={`max-w-2xl ${isRTL ? 'mr-auto text-right' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('about.label')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight">
                {t('about.title')}
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className={`grid lg:grid-cols-3 gap-16 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`lg:col-span-2 reveal-up ${isRTL ? 'lg:col-start-2 text-right' : ''}`}>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  {t('about.description')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.intro')}
                </p>
              </div>
              
              <div className={`reveal-up space-y-8 ${isRTL ? 'lg:col-start-1 text-right' : ''}`}>
                <div>
                  <span className="text-6xl font-display text-foreground">{isRTL ? '١٨' : '18'}</span>
                  <p className="text-sm text-muted-foreground mt-1">{t('about.awardCategories')}</p>
                </div>
                <div>
                  <span className="text-6xl font-display text-foreground">{isRTL ? '٧٥٠' : '750'}</span>
                  <p className="text-sm text-muted-foreground mt-1">{t('about.distinguishedGuests')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`reveal-up p-8 bg-background rounded-lg ${isRTL ? 'text-right' : ''}`}>
                <Target className={`w-6 h-6 text-primary mb-4 ${isRTL ? 'mr-auto' : ''}`} />
                <h3 className="text-xl font-display text-foreground mb-3">{t('about.mission')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>
              <div className={`reveal-up p-8 bg-background rounded-lg ${isRTL ? 'text-right' : ''}`}>
                <Eye className={`w-6 h-6 text-primary mb-4 ${isRTL ? 'mr-auto' : ''}`} />
                <h3 className="text-xl font-display text-foreground mb-3">{t('about.vision')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.visionText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patronage - Dark section */}
        <section className="py-24 md:py-32 lg:py-40 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`reveal-up ${isRTL ? 'lg:col-start-2 text-right' : ''}`}>
                <span className="text-xs uppercase tracking-[0.2em] text-background/40 mb-4 block">
                  {t('about.underPatronage')}
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-background mb-6 leading-tight">
                  {t('about.patronName')}
                </h2>
                <p className="text-background/60 leading-relaxed">
                  {t('about.patronDesc')}
                </p>
              </div>
              
              <div className={`reveal-up flex ${isRTL ? 'lg:col-start-1 justify-center lg:justify-start' : 'justify-center lg:justify-end'}`}>
                <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-lg overflow-hidden">
                  <img 
                    src={sheikhPortrait} 
                    alt={t('about.patronName')} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className={`reveal-up mb-16 ${isRTL ? 'text-right' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('about.theJourney')}
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                {t('about.selectionProcess')}
              </h2>
            </div>
            
            <div className="space-y-0 divide-y divide-border">
              {selectionSteps.map((item, index) => (
                <div key={index} className={`reveal-up py-8 flex gap-8 items-start ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <span className="text-4xl font-display text-primary/30 flex-shrink-0 w-16">
                    {isRTL ? ['٠١', '٠٢', '٠٣'][index] : item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-display text-foreground mb-2">{t(item.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(item.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`reveal-up mt-12 ${isRTL ? 'text-right' : ''}`}>
              <Link to="/nominate">
                <Button size="lg" className={`h-14 px-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('about.submitYourNomination')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;