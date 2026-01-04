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

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const categories = [
    'Growth & Economic Excellence', 
    'Entrepreneurship & Innovation', 
    'Corporate Leadership', 
    'Finance & Banking', 
    'Retail & Hospitality', 
    'Technology & Digital',
  ];

  // Section reveals
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

      gsap.utils.toArray('.reveal-stagger').forEach((container: any) => {
        const children = container.children;
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
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
      <SEOHead />
      <Navigation />
      
      {/* Hero - Video Background */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        
        {/* Video Background */}
        {!prefersReducedMotion() ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroBg}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${heroBg})` }} 
          />
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
                <img 
                  src={oneUaeLogo} 
                  alt="ONE UAE Awards" 
                  className="h-14 md:h-16 drop-shadow-lg"
                />
              </div>
              
              {/* Main Headline - ONE UAE Awards prominent */}
              <h1 className="text-[clamp(3rem,10vw,7rem)] font-display text-white leading-[0.9] tracking-tight mb-4">
                ONE UAE<br />
                <span className="text-primary">Awards</span>
              </h1>
              
              {/* Secondary tagline - smaller */}
              <p className="text-white/70 text-xl md:text-2xl font-medium mb-4">
                International Business Awards
              </p>
              
              {/* Patronage */}
              <p className="text-white/50 text-base md:text-lg max-w-xl mb-4">
                Under the Patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
              </p>
              
              {/* Date & Location Tag */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-sm mb-10">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  February 5, 2026
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Zabeel Ladies Club, Dubai
                </span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to="/nominate">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-base"
                  >
                    Submit Nomination
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base"
                  >
                    Learn More
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={generateICSFile}
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base"
                >
                  <CalendarPlus className="mr-2 w-5 h-5" />
                  Add to Calendar
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={generateICSFile}
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base"
                >
                  <CalendarPlus className="mr-2 w-5 h-5" />
                  Add to Calendar
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
          <div className="reveal-stagger flex flex-col md:flex-row md:items-baseline md:justify-between gap-8 md:gap-4">
            {[
              { value: "750+", label: "Distinguished Guests" },
              { value: "18", label: "Award Categories" },
              { value: "6", label: "VIP Dignitaries" },
              { value: "1", label: "Prestigious Night" },
            ].map((stat, i) => (
              <div key={i} className="flex items-baseline gap-3 md:gap-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-display text-foreground leading-none">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Split layout with large image */}
      <section id="main-content" className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Image */}
            <div className="reveal-up order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src={trophyGold} 
                  alt="ONE UAE Awards Trophy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="reveal-up order-1 lg:order-2 lg:sticky lg:top-32">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                About the Awards
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-6">
                A National Platform for Excellence
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The ONE UAE International Business Awards is a prestigious national platform honoring individuals and establishments driving the UAE's journey of growth, development, and sustainability.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex gap-4 items-start">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">February 5, 2026</p>
                    <p className="text-sm text-muted-foreground">Gala Night Ceremony</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Zabeel Ladies Club</p>
                    <p className="text-sm text-muted-foreground">Main Ballroom, Dubai</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <Button variant="outline" size="lg" className="group">
                  Discover Our Story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              18 Categories
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
                Award Categories
              </h2>
              <Link to="/categories">
                <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
                  View All
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="reveal-stagger divide-y divide-border">
            {categories.map((category, index) => (
              <div 
                key={category}
                className="py-6 flex items-center justify-between group cursor-pointer hover:bg-background/50 -mx-4 px-4 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted-foreground font-mono w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {category}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            + 12 more categories
          </p>
        </div>
      </section>

      {/* Event Program - Dark section */}
      <section className="py-24 md:py-32 lg:py-40 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div className="reveal-up">
              <span className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4 block">
                The Evening
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-background mb-8">
                Program Flow
              </h2>
              
              <div className="reveal-stagger space-y-0">
                {[
                  { time: "6:00 PM", event: "Reception & Networking", icon: Users },
                  { time: "6:45 PM", event: "Opening Ceremony", icon: Award },
                  { time: "7:15 PM", event: "Award Presentations", icon: Star },
                  { time: "8:45 PM", event: "Gala Dinner", icon: Utensils },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-6 py-5 border-b border-background/10">
                      <span className="text-primary font-mono text-sm w-20">{item.time}</span>
                      <Icon className="w-5 h-5 text-background/40" />
                      <span className="text-background/80 text-lg">{item.event}</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-10">
                <Link to="/gala">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-background/30 text-background hover:bg-background/10 group"
                  >
                    View Gala Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right - Details */}
            <div className="reveal-up lg:pt-16">
              <div className="space-y-8">
                {[
                  { label: "Date", value: "February 5, 2026" },
                  { label: "Venue", value: "Zabeel Ladies Club, Dubai" },
                  { label: "Format", value: "Ceremony + Gala Dinner" },
                  { label: "Attendees", value: "750 Distinguished Guests" },
                ].map((item, index) => (
                  <div key={index}>
                    <span className="text-xs uppercase tracking-[0.15em] text-background/40 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-xl text-background/90">{item.value}</span>
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
              Who Attends
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground">
              Distinguished Guests
            </h2>
          </div>
          
          <div className="reveal-stagger flex flex-wrap justify-center gap-3">
            {[
              "Government Representatives",
              "Business Leaders",
              "Entrepreneurs",
              "Healthcare Leaders",
              "Media Figures",
              "Finance Executives",
              "Tech Innovators",
            ].map((item, index) => (
              <span 
                key={index} 
                className="px-5 py-3 bg-secondary text-foreground text-sm rounded-full"
              >
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
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
              Become a Sponsor
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Join prestigious brands in supporting the UAE's premier business awards ceremony.
            </p>
            <Link to="/partnerships">
              <Button size="lg" className="h-14 px-10 text-base">
                Explore Partnerships
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-2">Have questions?</p>
          <a 
            href="mailto:info@oneuaeawards.ae" 
            className="text-xl md:text-2xl font-display text-foreground hover:text-primary transition-colors"
          >
            info@oneuaeawards.ae
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
