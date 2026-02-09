import { Link } from "react-router-dom";
import { useRef, useLayoutEffect, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";
import trophyGold from "@/assets/trophy-gold.jpeg";
import oneUaeLogo from "@/assets/one-uae-logo.png";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { gsap, ScrollTrigger } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import SocialShare from "@/components/SocialShare";
import { useLanguage } from "@/contexts/LanguageContext";

declare global {
  interface Window {
    cloudinary?: any;
  }
}

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

  // Cloudinary Gallery Widget
  useEffect(() => {
    const initGallery = () => {
      if (window.cloudinary && document.getElementById('my-gallery')) {
        window.cloudinary.galleryWidget({
          container: '#my-gallery',
          cloudName: 'oneuaeaward',
          mediaAssets: [{ tag: 'gallery' }],
        }).render();
      }
    };

    // Check if script already loaded
    if (window.cloudinary) {
      initGallery();
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if (window.cloudinary) {
          clearInterval(checkInterval);
          initGallery();
        }
      }, 500);
      return () => clearInterval(checkInterval);
    }
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 min-h-[100svh] flex items-end pb-20 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6">
                <img src={oneUaeLogo} alt="ONE UAE Awards" className="h-14 md:h-16 drop-shadow-lg" />
              </div>
              
              <h1 className="text-[clamp(3rem,10vw,7rem)] font-display text-white leading-[0.9] tracking-tight mb-4">
                {t('hero.title')}<br />
                <span className="text-primary">{t('hero.titleAccent')}</span>
              </h1>
              
              <p className="text-white/70 text-xl md:text-2xl font-medium mb-4">
                {t('hero.tagline')}
              </p>
              
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
              
              {/* CTAs - Post-event */}
              <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link to="/awardees/2026">
                  <Button size="lg" className={`bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('hero.viewAwardees')}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base">
                    {t('hero.learnMore')}
                  </Button>
                </Link>
              </div>
              
              {/* Social Share */}
              <div className="mt-6">
                <SocialShare />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
      </section>

      {/* Marquee */}
      <MarqueeStrip />

      {/* Stats */}
      <section className="py-16 md:py-20 bg-card border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`reveal-stagger flex flex-col md:flex-row md:items-baseline md:justify-between gap-8 md:gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            {[
              { value: "750+", labelKey: "stats.guests" },
              { value: "18", labelKey: "stats.categories" },
              { value: "27", labelKey: "stats.awardees" },
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

      {/* About */}
      <section id="main-content" className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <div className={`reveal-up ${isRTL ? 'lg:col-start-2' : ''}`}>
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img src={trophyGold} alt="ONE UAE Awards Trophy" className="w-full h-full object-cover" />
              </div>
            </div>
            
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

      {/* 2026 Awardees Spotlight */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="reveal-up mb-12">
            <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4 block">
                  {t('awardees.label')}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-background">
                  {t('awardees.title')}
                </h2>
              </div>
              <Link to="/awardees/2026">
                <Button variant="outline" className={`group border-background/30 text-background hover:bg-background/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('awardees.viewAll')}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="reveal-stagger grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Ahmed Lamraoui", slug: "ahmed-lamraoui-global-investment", image: "ahmed-lamraoui-global-investment.jpg", award: "Global Investment & Human Rights Advocacy" },
              { name: "Dr Abdullah Belhaif Al Nuaimi", slug: "dr-abdullah-belhaif-al-nuaimi-public-governance", image: "dr-abdullah-belhaif-al-nuaimi-public-governance.jpg", award: "Public Governance & Legislative Leadership" },
              { name: "Francis Lapp", slug: "francis-lapp-sustainable-yachting", image: "francis-lapp-sustainable-yachting.jpg", award: "Sustainable Luxury Yachting" },
              { name: "T.P. Jamaludeen", slug: "tp-jamaludeen-lifetime-achievement", image: "tp-jamaludeen-lifetime-achievement.jpg", award: "Lifetime Achievement" },
            ].map((awardee) => (
              <Link
                key={awardee.slug}
                to={`/awardees/2026/${awardee.slug}`}
                className="group block rounded-xl overflow-hidden bg-background/5 border border-background/10 transition-all duration-500 hover:md:border-primary/50 hover:md:-translate-y-2"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={`/awardees/2026/${awardee.image}`}
                    alt={`${awardee.name} – ${awardee.award}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className={`p-4 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className="text-sm font-display text-background leading-snug mb-1 truncate">{awardee.name}</h3>
                  <p className="text-xs text-background/50 truncate">{awardee.award}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery - Cloudinary */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="reveal-up mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              {t('gallery.label')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
              {t('gallery.title')}
            </h2>
          </div>
          <div id="my-gallery" className="reveal-up min-h-[300px]" />
        </div>
      </section>

      {/* 2027 Edition Teaser */}
      <section className="py-24 md:py-32 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
          <div className="reveal-up">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
              {t('nextEdition.label')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
              {t('nextEdition.title')}
            </h2>
            <p className="text-2xl text-muted-foreground font-display mb-6">
              {t('nextEdition.dateTBA')}
            </p>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              {t('nextEdition.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" className={`h-14 px-10 text-base ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('nextEdition.contactUs')}
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
