import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Award, Star, Utensils, CalendarPlus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";
import trophyGold from "@/assets/trophy-gold.jpeg";
import oneUaeLogo from "@/assets/one-uae-logo.png";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { gsap, ScrollTrigger } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { generateICSFile } from "@/utils/calendar";
import SocialShare from "@/components/SocialShare";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  // Section reveals
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(el, {
          y: 60,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
      gsap.utils.toArray('.reveal-stagger').forEach((container: any) => {
        const children = container.children;
        gsap.fromTo(children, {
          y: 40,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead />
      <Navigation />
      
      {/* Hero - Video Background */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        
        {/* Video Background */}
        {!prefersReducedMotion() ? (
          <video autoPlay muted loop playsInline poster={heroBg} className="absolute inset-0 w-full h-full object-cover">
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        )}

        {/* Overlay - asymmetric gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Content - Left-aligned editorial */}
        <div className="relative z-10 min-h-[100svh] flex items-end pb-20 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Logo */}
              <div className="mb-6">
                <img src={oneUaeLogo} alt="ONE UAE Awards" className="h-14 md:h-16 drop-shadow-lg" />
              </div>
              
              {/* Main Headline - ONE UAE Awards prominent */}
              <h1 className="text-[clamp(3rem,10vw,7rem)] font-display text-white leading-[0.9] tracking-tight mb-4">
                {t('hero.title')}<br />
                <span className="text-primary">{t('hero.titleAccent')}</span>
              </h1>
              
              {/* Secondary tagline - smaller */}
              <p className="text-white/70 text-xl md:text-2xl font-medium mb-4">
                {t('hero.tagline')}
              </p>
              
              {/* Patronage */}
              <p className="text-white/50 text-base md:text-lg max-w-xl mb-4">
                {t('hero.patronage')}
              </p>
              
              {/* Date & Location Tag */}
              <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-sm mb-10 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <span className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Calendar className="w-4 h-4" />
                  {t('hero.date')}
                </span>
                <span className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-4 h-4" />
                  {t('hero.venue')}
                </span>
              </div>
              
              {/* CTAs */}
              <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link to="/nominate">
                  <Button size="lg" className={`bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('hero.submitNomination')}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base">
                    {t('hero.learnMore')}
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={generateICSFile} className={`bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CalendarPlus className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('hero.addToCalendar')}
                </Button>
              </div>
              
              {/* Social Share */}
              <div className="mt-6">
                <SocialShare />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll hint - minimal */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
      </section>

      {/* Marquee */}
      <MarqueeStrip />

      {/* Stats - Horizontal strip */}
      <section className="py-16 md:py-20 bg-card border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`reveal-stagger flex flex-col md:flex-row md:items-baseline md:justify-between gap-8 md:gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            {[
              { value: "750+", labelKey: "stats.guests" },
              { value: "18", labelKey: "stats.categories" },
              { value: "6", labelKey: "stats.dignitaries" },
              { value: "1", labelKey: "stats.night" },
            ].map((stat, i) => (
              <div key={i} className={`flex items-baseline gap-3 md:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-none">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {t(stat.labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Split layout with large image */}
      <section id="main-content" className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Left - Image */}
            <div className={`reveal-up ${isRTL ? 'lg:col-start-2' : ''}`}>
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img src={trophyGold} alt="ONE UAE Awards Trophy" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className={`reveal-up lg:sticky lg:top-32 ${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('about.label')}
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-6">
                {t('about.title')}
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('about.description')}
              </p>
              
              <div className="space-y-4 mb-10">
                <div className={`flex gap-4 items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className={isRTL ? 'text-right' : ''}>
                    <p className="font-medium text-foreground">{t('about.date')}</p>
                    <p className="text-sm text-muted-foreground">{t('about.galaLabel')}</p>
                  </div>
                </div>
                <div className={`flex gap-4 items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className={isRTL ? 'text-right' : ''}>
                    <p className="font-medium text-foreground">{t('about.venueTitle')}</p>
                    <p className="text-sm text-muted-foreground">{t('about.venueDetail')}</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className={`group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('about.discoverStory')}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - List style */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="reveal-up mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              {t('categories.label')}
            </span>
            <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
                {t('categories.title')}
              </h2>
              <Link to="/categories">
                <Button variant="ghost" className={`group text-muted-foreground hover:text-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('categories.viewAll')}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="reveal-stagger divide-y divide-border">
            {(t('categories.list') as unknown as string[]).map((category: string, index: number) => (
              <div key={category} className={`py-6 flex items-center justify-between group cursor-pointer hover:bg-background/50 -mx-4 px-4 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-sm text-muted-foreground font-mono w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {category}
                  </span>
                </div>
                <ArrowRight className={`w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            {t('categories.more')}
          </p>
        </div>
      </section>

      {/* Event Program - Dark section */}
      <section className="py-24 md:py-32 lg:py-40 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            {/* Left */}
            <div className={`reveal-up ${isRTL ? 'lg:col-start-2' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4 block">
                {t('program.label')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-background mb-8">
                {t('program.title')}
              </h2>
              
              <div className="reveal-stagger space-y-0">
                {[
                  { time: "6:00 PM", eventKey: "program.reception", icon: Users },
                  { time: "6:45 PM", eventKey: "program.opening", icon: Award },
                  { time: "7:15 PM", eventKey: "program.awards", icon: Star },
                  { time: "8:45 PM", eventKey: "program.dinner", icon: Utensils },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className={`flex items-center gap-6 py-5 border-b border-background/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-primary font-mono text-sm w-20">{item.time}</span>
                      <Icon className="w-5 h-5 text-background/40" />
                      <span className="text-background/80 text-lg">{t(item.eventKey)}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-10">
                <Link to="/gala">
                  <Button variant="outline" size="lg" className={`border-background/30 text-background hover:bg-background/10 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('program.viewDetails')}
                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right - Details */}
            <div className={`reveal-up lg:pt-16 ${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className="space-y-8">
                {[
                  { labelKey: "program.dateLabel", valueKey: "about.date" },
                  { labelKey: "program.venueLabel", value: t('hero.venue') },
                  { labelKey: "program.formatLabel", valueKey: "program.format" },
                  { labelKey: "program.attendeesLabel", valueKey: "program.attendees" },
                ].map((item, index) => (
                  <div key={index}>
                    <span className="text-xs uppercase tracking-[0.15em] text-background/40 block mb-1">
                      {t(item.labelKey)}
                    </span>
                    <span className="text-xl text-background/90">
                      {item.value || t(item.valueKey!)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="reveal-up text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              {t('audience.label')}
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">
              {t('audience.title')}
            </h2>
          </div>
          
          <div className={`reveal-stagger flex flex-wrap justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {(t('audience.list') as unknown as string[]).map((item: string, index: number) => (
              <span key={index} className="px-5 py-3 bg-secondary text-foreground text-sm rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 md:py-32 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <div className="reveal-up">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              {t('partnership.label')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
              {t('partnership.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              {t('partnership.description')}
            </p>
            <Link to="/partnerships">
              <Button size="lg" className={`h-14 px-10 text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('partnership.explore')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-2">{t('contact.question')}</p>
          <a href="mailto:info@oneuaeawards.ae" className="text-xl md:text-2xl font-display text-foreground hover:text-primary transition-colors">
            info@oneuaeawards.ae
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;