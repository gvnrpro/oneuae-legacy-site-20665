import { Link } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Award, TrendingUp, Heart, Globe, Utensils, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";
import trophyGold from "@/assets/trophy-gold.jpeg";
import oneUaeLogo from "@/assets/one-uae-logo.png";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { MissionReveal } from "@/components/MissionReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { gsap, ScrollTrigger } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const originalText = "ONE UAE INTERNATIONAL BUSINESS AWARDS 2026";

  const categories = [
    'Growth & Economic Excellence', 
    'Entrepreneurship & Innovation', 
    'Corporate Leadership', 
    'Finance & Banking', 
    'Retail & Hospitality', 
    'Technology & Digital Transformation', 
  ];

  const stats = [
    { value: "750+", label: "Distinguished Guests" },
    { value: "18", label: "Award Categories" },
    { value: "6", label: "VIP Dignitaries" },
  ];

  // Hero cinematic reveal
  useLayoutEffect(() => {
    if (!heroRef.current || !overlayRef.current || prefersReducedMotion()) {
      setHeroLoaded(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setHeroLoaded(true),
      });

      // Dark veil wipe away
      tl.to(overlayRef.current, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.2,
        ease: 'power3.inOut',
      });

      // Gold edge sweep
      tl.fromTo(
        '.hero-gold-edge',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );

      // Content reveal
      tl.fromTo(
        '.hero-content > *',
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.15, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Section parallax and reveals
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Parallax shapes
      gsap.utils.toArray('.parallax-shape').forEach((shape: any) => {
        gsap.to(shape, {
          y: -100,
          scrollTrigger: {
            trigger: shape,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Section reveals
      gsap.utils.toArray('.gsap-reveal').forEach((section: any) => {
        gsap.fromTo(
          section.children,
          { y: 50, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster={heroBg} 
          className="absolute inset-0 w-full h-full object-cover scale-105"
          onError={e => {
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/hero-video.mov" type="video/quicktime" />
          <source src="/hero-video.mov" type="video/mp4" />
        </video>
        
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" 
          style={{ backgroundImage: `url(${heroBg})` }} 
        />

        {/* Grid Background */}
        <div className="hero-grid absolute inset-0 pointer-events-none opacity-20" />

        {/* Cinematic Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-background z-20"
          style={{ clipPath: 'inset(0 0 0 0)' }}
        />
        
        {/* Gold Edge */}
        <div className="hero-gold-edge absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-30 origin-left" />
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-[5]" />
        
        {/* Hero Content */}
        <div className="hero-content relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Animated Logo */}
            <div className="mb-8 lg:mb-12">
              <img 
                src={oneUaeLogo} 
                alt="ONE UAE Awards Logo" 
                className="h-28 md:h-36 lg:h-44 mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Main Heading */}
            <h1
              className="font-display text-white mb-6 lg:mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 500,
                lineHeight: 1.1,
              }}
            >
              {originalText}
            </h1>
            
            {/* Patronage */}
            <div className="mb-8">
              <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-2">
                Under the Patronage of
              </p>
              <p className="text-white/90 text-lg md:text-xl font-light">
                H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
              </p>
            </div>
            
            {/* Tagline */}
            <div className="flex items-center justify-center gap-3 text-white/70 mb-12">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
              <p className="text-sm md:text-base tracking-widest uppercase">
                Growth · Development · Sustainability
              </p>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton strength={0.2}>
                <Link to="/nominate">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full group"
                  >
                    Submit Nomination
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link to="/about">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-base font-medium rounded-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <MarqueeStrip />

      {/* Stats Bar */}
      <section className="relative -mt-20 z-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="gsap-reveal bg-background/95 backdrop-blur-xl rounded-2xl shadow-premium-lg border border-border/50 p-6 md:p-8">
            <div className="grid grid-cols-3 divide-x divide-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-4">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Reveal Transition */}
      <MissionReveal />

      {/* About Section - Asymmetric layout */}
      <section id="main-content" className="section-breathing bg-background relative">
        {/* Parallax Shape */}
        <div className="parallax-shape absolute top-20 right-10 w-40 h-40 rounded-full bg-primary/5 pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            {/* Content - 3 columns */}
            <div className="lg:col-span-3 gsap-reveal">
              <p className="editorial-label mb-4">About The Awards</p>
              
              <h2 className="section-title-editorial mb-6">
                A National Platform for Excellence
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                The ONE UAE International Business Awards is a prestigious national platform honoring individuals and establishments driving the UAE's journey of growth, development, and sustainability. Under the patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi, the Awards celebrate excellence across vital sectors shaping the future of the nation.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-sm">January 4, 2026</p>
                    <p className="text-xs text-muted-foreground">Gala Night</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Zabeel Ladies Club</p>
                    <p className="text-xs text-muted-foreground">Dubai, UAE</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <Button variant="outline" className="group">
                  Discover Our Story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* Trophy Image - 2 columns */}
            <div className="lg:col-span-2 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={trophyGold} 
                  alt="ONE UAE Awards Trophy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-primary/20 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="section-padding bg-secondary/30 relative">
        <div className="parallax-shape absolute bottom-20 left-10 w-32 h-32 rounded-full bg-primary/5 pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16 gsap-reveal">
            <p className="editorial-label mb-4">Foundation</p>
            <h2 className="section-title-editorial">The Three Pillars</h2>
          </div>
          
          <div className="gsap-reveal grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth & Economic Excellence",
                description: "Honoring achievements in entrepreneurship, innovation, corporate leadership, finance, retail, hospitality, and digital transformation.",
                icon: TrendingUp
              },
              {
                title: "Development & Human Progress",
                description: "Recognizing contributions in education, healthcare, community service, culture, arts, and youth excellence.",
                icon: Heart
              },
              {
                title: "Sustainability & Global Leadership",
                description: "Celebrating environmental stewardship, infrastructure innovation, international diplomacy, and lifetime achievement.",
                icon: Globe
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="card-standard text-center h-full p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Award Categories Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 gsap-reveal">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                18 Categories
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Award Categories
              </h2>
            </div>
            <Link to="/categories">
              <Button variant="outline" className="group">
                View All Categories
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="gsap-reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div 
                key={category}
                className="card-premium rounded-xl p-6 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-medium text-foreground">
                  {category}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              + 12 more categories
            </p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="section-padding bg-deep-charcoal text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        </div>
        <div className="parallax-shape absolute top-40 right-20 w-48 h-48 rounded-full bg-primary/5 pointer-events-none" />
        
        <div className="relative container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Event Facts */}
            <div className="gsap-reveal">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-8">
                Event Details
              </h2>
              
              <div className="space-y-6">
                {[
                  { label: "Date", value: "January 4, 2026" },
                  { label: "Venue", value: "Main Ballroom, Zabeel Ladies Club, Dubai" },
                  { label: "Format", value: "Ceremony + Gala Dinner" },
                  { label: "Attendees", value: "750 Distinguished Guests" },
                  { label: "VIP Dignitaries", value: "5–6 Royal & Government Officials" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-6 border-b border-white/10">
                    <span className="text-white/40 text-sm w-28 flex-shrink-0">{item.label}</span>
                    <span className="text-white/90">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Program Flow */}
            <div className="lg:border-l lg:border-white/10 lg:pl-20 gsap-reveal">
              <h3 className="font-display text-2xl text-white mb-8">
                Program Flow
              </h3>
              
              <div className="space-y-6">
                {[
                  { time: "6:00 PM", event: "Reception & Networking", icon: Users },
                  { time: "6:45 PM", event: "Opening Ceremony", icon: Award },
                  { time: "7:15 PM", event: "Award Presentations", icon: Star },
                  { time: "8:45 PM", event: "Gala Dinner", icon: Utensils },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-6">
                      <span className="text-primary font-medium w-20">{item.time}</span>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-white/80">{item.event}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-12">
                <Link to="/gala">
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10 group"
                  >
                    View Gala Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Profile */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 gsap-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Our Audience
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              Distinguished Guests
            </h2>
          </div>
          
          <div className="gsap-reveal grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "Government Representatives" },
              { title: "Business Leaders" },
              { title: "Entrepreneurs" },
              { title: "Healthcare Leaders" },
              { title: "Media Figures" },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center p-6 bg-secondary/30 rounded-xl">
                  <p className="font-medium text-foreground text-sm">
                    {item.title}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center gsap-reveal">
          <p className="editorial-label mb-4">Partner With Us</p>
          <h2 className="section-title-editorial mb-6">
            Become a Sponsor
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join prestigious brands in supporting the UAE's premier business awards ceremony. 
            Multiple sponsorship tiers available.
          </p>
          <MagneticButton strength={0.15}>
            <Link to="/partnerships">
              <Button size="lg" className="px-8">
                Explore Partnerships <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-compact bg-background border-t border-border/20">
        <div className="container mx-auto px-4 text-center gsap-reveal">
          <p className="editorial-label mb-4">Get in Touch</p>
          <h2 className="text-2xl font-display text-foreground mb-6">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us at{" "}
            <a href="mailto:info@oneuaeawards.ae" className="text-primary hover:underline">
              info@oneuaeawards.ae
            </a>
          </p>
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
