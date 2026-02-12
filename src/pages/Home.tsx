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
import { useLanguage } from "@/contexts/LanguageContext";

declare global {
  interface Window {
    cloudinary?: any;
  }
}

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  // Hero cinematic reveal + section reveals
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      heroTl.fromTo('.hero-gold-line', 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, 0.3
      );
      
      heroTl.fromTo('.hero-logo', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 0.6
      );
      
      heroTl.fromTo('.hero-title-line', 
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 }, 
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.inOut' }, 0.9
      );
      
      heroTl.fromTo('.hero-meta', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 1.6
      );

      // Stats count-up
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('.stat-number');
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute('data-value') || '0');
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
              once: true,
            },
            onUpdate: () => {
              (counter as HTMLElement).textContent = Math.round(obj.val).toLocaleString() + (counter.getAttribute('data-suffix') || '');
            }
          });
        });
      }

      // Section reveals
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        });
      });

      // About image parallax
      const aboutImg = document.querySelector('.about-parallax-img');
      if (aboutImg) {
        gsap.to(aboutImg, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: aboutImg, start: 'top bottom', end: 'bottom top', scrub: 1 }
        });
      }
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

    if (window.cloudinary) {
      initGallery();
    } else {
      const checkInterval = setInterval(() => {
        if (window.cloudinary) {
          clearInterval(checkInterval);
          initGallery();
        }
      }, 500);
      return () => clearInterval(checkInterval);
    }
  }, []);

  const spotlightAwardees = [
    { name: "Ahmed Lamraoui", slug: "ahmed-lamraoui-global-investment", image: "ahmed-lamraoui-global-investment.jpg", award: "Global Investment & Human Rights Advocacy" },
    { name: "Dr Abdullah Belhaif Al Nuaimi", slug: "dr-abdullah-belhaif-al-nuaimi-public-governance", image: "dr-abdullah-belhaif-al-nuaimi-public-governance.jpg", award: "Public Governance & Legislative Leadership" },
    { name: "Francis Lapp", slug: "francis-lapp-sustainable-yachting", image: "francis-lapp-sustainable-yachting.jpg", award: "Sustainable Luxury Yachting" },
    { name: "T.P. Jamaludeen", slug: "tp-jamaludeen-lifetime-achievement", image: "tp-jamaludeen-lifetime-achievement.jpg", award: "Lifetime Achievement" },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead />
      <Navigation />
      
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        
        {!prefersReducedMotion() ? (
          <video autoPlay muted loop playsInline poster={heroBg} className="absolute inset-0 w-full h-full object-cover">
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />
        
        {/* Gold line */}
        <div className="hero-gold-line absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-left" style={{ transform: 'scaleX(0)' }} />
        
        <div className="relative z-10 min-h-[100svh] flex items-end pb-16 md:pb-24 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="hero-logo mb-6 md:mb-8 opacity-0">
                <img src={oneUaeLogo} alt="ONE UAE Awards" className="h-12 md:h-14 drop-shadow-lg" />
              </div>
              
              <h1 className="text-[clamp(2.8rem,9vw,6.5rem)] font-display text-white leading-[0.9] tracking-tight mb-5">
                <span className="hero-title-line block">{t('hero.title')}</span>
                <span className="hero-title-line block text-primary">{t('hero.titleAccent')}</span>
              </h1>
              
              <p className="hero-meta text-white/60 text-lg md:text-xl font-medium mb-3 opacity-0 max-w-xl">
                {t('hero.tagline')}
              </p>
              
              <p className="hero-meta text-white/30 text-sm md:text-base max-w-lg mb-3 opacity-0">
                {t('hero.patronage')}
              </p>
              
              <div className={`hero-meta flex flex-wrap items-center gap-x-5 gap-y-1.5 text-white/30 text-xs mb-8 opacity-0 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <span className={`flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Calendar className="w-3.5 h-3.5" />
                  {t('hero.date')}
                </span>
                <span className={`flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-3.5 h-3.5" />
                  {t('hero.venue')}
                </span>
              </div>
              
              <div className={`hero-meta flex flex-wrap gap-3 opacity-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link to="/awardees/2026">
                  <Button size="lg" className={`bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-13 px-7 text-sm group ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('hero.viewAwardees')}
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="bg-transparent border-white/15 text-white/80 hover:bg-white/5 hover:text-white h-12 md:h-13 px-7 text-sm">
                    {t('hero.learnMore')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
          <span className="text-white/20 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-transparent animate-scroll-pulse" />
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Stats */}
      <section className="py-16 md:py-24 bg-card border-b border-border/30">
        <div ref={statsRef} className="container mx-auto px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 ${isRTL ? 'md:direction-rtl' : ''}`}>
            {[
              { value: 750, suffix: "+", labelKey: "stats.guests" },
              { value: 18, suffix: "", labelKey: "stats.categories" },
              { value: 27, suffix: "", labelKey: "stats.awardees" },
              { value: 1, suffix: "", labelKey: "stats.night" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-center relative">
                <span 
                  className="stat-number text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-none font-light tracking-tight"
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                >
                  0{stat.suffix}
                </span>
                <span className="block text-[10px] text-muted-foreground uppercase tracking-[0.15em] mt-2">
                  {t(stat.labelKey)}
                </span>
                {/* Separator — only between items on desktop */}
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="main-content" className="py-20 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-start ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
            <div className={`reveal-up ${isRTL ? 'lg:col-start-2' : ''}`}>
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
                <img src={trophyGold} alt="ONE UAE Awards Trophy" className="about-parallax-img w-full h-full object-cover scale-110" />
              </div>
            </div>
            
            <div className={`reveal-up lg:sticky lg:top-32 ${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('about.label')}
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-5">
                {t('about.title')}
              </h2>

              <div className="h-px w-12 bg-primary/40 mb-7" />
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                {t('about.description')}
              </p>
              
              <div className="space-y-3 mb-8">
                <div className={`flex gap-3 items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Calendar className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div className={isRTL ? 'text-right' : ''}>
                    <p className="font-medium text-foreground text-sm">{t('about.date')}</p>
                    <p className="text-xs text-muted-foreground">{t('about.galaLabel')}</p>
                  </div>
                </div>
                <div className={`flex gap-3 items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div className={isRTL ? 'text-right' : ''}>
                    <p className="font-medium text-foreground text-sm">{t('about.venueTitle')}</p>
                    <p className="text-xs text-muted-foreground">{t('about.venueDetail')}</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className={`group text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('about.discoverStory')}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Awardees Spotlight */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="reveal-up mb-10">
            <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-background/30 mb-3 block">
                  {t('awardees.label')}
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-background">
                  {t('awardees.title')}
                </h2>
              </div>
              <Link to="/awardees/2026">
                <Button variant="outline" className={`group border-background/15 text-background/70 hover:bg-background/5 hover:text-background text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('awardees.viewAll')}
                  <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-1.5'}`} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Grid: first card featured on desktop */}
          <div className="reveal-up grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {spotlightAwardees.map((awardee, i) => (
              <Link
                key={awardee.slug}
                to={`/awardees/2026/${awardee.slug}`}
                className={`group block rounded-lg overflow-hidden relative ${
                  i === 0 ? 'col-span-2 row-span-1 md:row-span-2' : ''
                }`}
              >
                <div className={`overflow-hidden ${i === 0 ? 'aspect-[3/4] md:aspect-auto md:h-full' : 'aspect-[3/4]'}`}>
                  <img
                    src={`/awardees/2026/${awardee.image}`}
                    alt={`${awardee.name} – ${awardee.award}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Number */}
                <span className="absolute top-3 left-3 text-[10px] font-mono text-white/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Info */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className="text-sm md:text-base font-display text-white leading-snug mb-0.5 group-hover:text-primary transition-colors">{awardee.name}</h3>
                  <p className="text-[10px] md:text-xs text-white/50">{awardee.award}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery — Cloudinary */}
      <section className="py-16 md:py-24 bg-foreground text-background border-t border-background/5">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="reveal-up mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] text-background/30 mb-3 block text-center">
              {t('gallery.label')}
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-background text-center">
              {t('gallery.title')}
            </h2>
          </div>
          <div className="reveal-up relative">
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />
            <div id="my-gallery" className="min-h-[300px] rounded-lg overflow-hidden" />
          </div>
        </div>
      </section>

      {/* 2027 Edition Teaser */}
      <section className="relative py-28 md:py-40 bg-background overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-display text-foreground/[0.02] leading-none tracking-tighter">
            2027
          </span>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center relative z-10">
          <div className="reveal-up">
            <span className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase mb-4 block">
              {t('nextEdition.label')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-3">
              {t('nextEdition.title')}
            </h2>
            <p className="text-xl text-muted-foreground font-display mb-4">
              {t('nextEdition.dateTBA')}
            </p>
            <p className="text-muted-foreground text-base mb-10 max-w-md mx-auto leading-relaxed">
              {t('nextEdition.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" className={`h-12 px-8 text-sm group ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('nextEdition.contactUs')}
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact — Minimal */}
      <section className="py-12 bg-background border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm mb-1.5">{t('contact.question')}</p>
          <a href="mailto:info@oneuaeawards.ae" className="text-lg md:text-xl font-display text-foreground hover:text-primary transition-colors">
            info@oneuaeawards.ae
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
