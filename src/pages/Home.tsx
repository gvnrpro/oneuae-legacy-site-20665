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
      // Hero cinematic sequence
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Gold line wipe
      heroTl.fromTo('.hero-gold-line', 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, 0.3
      );
      
      // Logo fade
      heroTl.fromTo('.hero-logo', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 0.6
      );
      
      // Title clip reveal
      heroTl.fromTo('.hero-title-line', 
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 }, 
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.inOut' }, 0.9
      );
      
      // Tagline & meta fade up
      heroTl.fromTo('.hero-meta', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 1.6
      );

      // Stats count-up animation
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
        gsap.fromTo(el, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
      });
      gsap.utils.toArray('.reveal-stagger').forEach((container: any) => {
        const children = container.children;
        gsap.fromTo(children, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: container, start: 'top 80%', toggleActions: 'play none none none' }
        });
      });

      // About section image parallax
      const aboutImg = document.querySelector('.about-parallax-img');
      if (aboutImg) {
        gsap.to(aboutImg, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: aboutImg,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
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
      
      {/* Hero - Cinematic */}
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

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)' }} />
        
        {/* Animated gold line */}
        <div className="hero-gold-line absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent origin-left" style={{ transform: 'scaleX(0)' }} />
        
        {/* Content */}
        <div className="relative z-10 min-h-[100svh] flex items-end pb-20 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="hero-logo mb-8 opacity-0">
                <img src={oneUaeLogo} alt="ONE UAE Awards" className="h-14 md:h-16 drop-shadow-lg" />
              </div>
              
              <h1 className="text-[clamp(3rem,10vw,7rem)] font-display text-white leading-[0.9] tracking-tight mb-4">
                <span className="hero-title-line block">{t('hero.title')}</span>
                <span className="hero-title-line block text-primary">{t('hero.titleAccent')}</span>
              </h1>
              
              <p className="hero-meta text-white/70 text-xl md:text-2xl font-medium mb-4 opacity-0">
                {t('hero.tagline')}
              </p>
              
              <p className="hero-meta text-white/40 text-base md:text-lg max-w-xl mb-4 opacity-0">
                {t('hero.patronage')}
              </p>
              
              {/* Date & Location Tag */}
              <div className={`hero-meta flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-sm mb-10 opacity-0 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
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
              <div className={`hero-meta flex flex-wrap gap-4 opacity-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link to="/awardees/2026">
                  <Button size="lg" className={`bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base group ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {t('hero.viewAwardees')}
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 h-14 px-8 text-base">
                    {t('hero.learnMore')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll hint - pulsing line with label */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-transparent animate-scroll-pulse" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeStrip />

      {/* Stats - Monumental */}
      <section className="py-20 md:py-28 bg-card border-b border-border/50 relative overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px'
        }} />
        <div ref={statsRef} className="container mx-auto px-6 lg:px-8 relative">
          <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            {[
              { value: 750, suffix: "+", labelKey: "stats.guests" },
              { value: 18, suffix: "", labelKey: "stats.categories" },
              { value: 27, suffix: "", labelKey: "stats.awardees" },
              { value: 1, suffix: "", labelKey: "stats.night" },
            ].map((stat, i, arr) => (
              <div key={i} className={`flex items-center gap-3 md:gap-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'} md:items-center`}>
                  <span 
                    className="stat-number text-7xl md:text-8xl lg:text-9xl font-display text-foreground leading-none font-light"
                    data-value={stat.value}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-2">
                    {t(stat.labelKey)}
                  </span>
                </div>
                {/* Gold divider between stats */}
                {i < arr.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent mx-auto" />
                )}
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
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative group">
                {/* Gold frame */}
                <div className="absolute inset-0 border border-primary/20 rounded-lg z-10 pointer-events-none group-hover:border-primary/40 transition-colors duration-700" />
                <img src={trophyGold} alt="ONE UAE Awards Trophy" className="about-parallax-img w-full h-full object-cover scale-110" />
              </div>
            </div>
            
            <div className={`reveal-up lg:sticky lg:top-32 ${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('about.label')}
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-6">
                {t('about.title')}
              </h2>

              {/* Animated gold rule */}
              <div className="gold-divider-left mb-8" />
              
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

      {/* 2026 Awardees Spotlight - Featured Layout */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="reveal-up mb-14">
            <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-background/40 mb-4 block">
                  {t('awardees.label')}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-background">
                  {t('awardees.title')}
                </h2>
              </div>
              <Link to="/awardees/2026">
                <Button variant="outline" size="lg" className={`group border-background/20 text-background hover:bg-background/10 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('awardees.viewAll')}
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured grid: 1 large + 3 smaller */}
          <div className="reveal-stagger grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {spotlightAwardees.map((awardee, i) => (
              <Link
                key={awardee.slug}
                to={`/awardees/2026/${awardee.slug}`}
                className={`group block rounded-xl overflow-hidden bg-background/5 border border-background/10 transition-all duration-500 hover:md:border-primary/50 hover:md:-translate-y-2 relative shimmer ${
                  i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''
                }`}
              >
                {/* Number badge */}
                <div className="absolute top-4 left-4 z-10 text-primary/70 font-display text-sm tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={`overflow-hidden ${i === 0 ? 'aspect-[3/4] md:aspect-auto md:h-full' : 'aspect-[3/4]'}`}>
                  <img
                    src={`/awardees/2026/${awardee.image}`}
                    alt={`${awardee.name} – ${awardee.award}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className={`p-4 md:p-5 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className="text-sm md:text-base font-display text-background leading-snug mb-1 truncate group-hover:text-primary transition-colors">{awardee.name}</h3>
                  <p className="text-xs text-background/40 truncate">{awardee.award}</p>
                </div>
                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery - Cloudinary - Dark section */}
      <section className="py-20 md:py-28 bg-foreground text-background relative">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="reveal-up mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-background/40 mb-4 block">
              {t('gallery.label')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-background">
              {t('gallery.title')}
            </h2>
          </div>
          {/* Gallery with edge fade masks */}
          <div className="reveal-up relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />
            <div id="my-gallery" className="min-h-[300px] rounded-lg overflow-hidden border border-background/10" />
          </div>
        </div>
      </section>

      {/* 2027 Edition Teaser - Dark dramatic section */}
      <section className="relative py-32 md:py-44 bg-background overflow-hidden">
        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[16rem] lg:text-[20rem] font-display text-foreground/[0.03] leading-none tracking-tight">
            2027
          </span>
        </div>
        {/* Gold line divider at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center relative z-10">
          <div className="reveal-up">
            <span className="text-xs uppercase tracking-[0.2em] text-primary mb-6 block">
              {t('nextEdition.label')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-4">
              {t('nextEdition.title')}
            </h2>
            <p className="text-2xl text-muted-foreground font-display mb-6">
              {t('nextEdition.dateTBA')}
            </p>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              {t('nextEdition.description')}
            </p>
            <Link to="/contact">
              <Button size="lg" className={`h-14 px-10 text-base btn-glow group ${isRTL ? 'flex-row-reverse' : ''}`}>
                {t('nextEdition.contactUs')}
                <ArrowRight className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section className="py-16 bg-background border-t border-border/50">
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
