import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Award, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";
import trophyGold from "@/assets/trophy-gold.jpeg";
import oneUaeLogo from "@/assets/one-uae-logo.png";

const Home = () => {
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

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Animated Logo */}
            <div className="animate-logo-reveal mb-8 lg:mb-12">
              <img 
                src={oneUaeLogo} 
                alt="ONE UAE Awards Logo" 
                className="h-28 md:h-36 lg:h-44 mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Main Heading */}
            <h1 
              className="font-display text-white mb-6 lg:mb-8 animate-fade-in-up" 
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                animationDelay: '0.3s',
                animationFillMode: 'both'
              }}
            >
              ONE UAE INTERNATIONAL<br />
              <span className="text-gradient-gold">BUSINESS AWARDS</span> 2026
            </h1>
            
            {/* Patronage */}
            <div 
              className="animate-fade-in-up mb-8" 
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-2">
                Under the Patronage of
              </p>
              <p className="text-white/90 text-lg md:text-xl font-light">
                H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
              </p>
            </div>
            
            {/* Tagline */}
            <div 
              className="animate-fade-in-up flex items-center justify-center gap-3 text-white/70 mb-12" 
              style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
            >
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
              <p className="text-sm md:text-base tracking-widest uppercase">
                Growth · Development · Sustainability
              </p>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            {/* CTA Buttons */}
            <div 
              className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" 
              style={{ animationDelay: '0.9s', animationFillMode: 'both' }}
            >
              <Link to="/nominate">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full group"
                >
                  Submit Nomination
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-base font-medium rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up" 
          style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
        >
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-20 z-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-background/95 backdrop-blur-xl rounded-2xl shadow-premium-lg border border-border/50 p-6 md:p-8">
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

      {/* About Section */}
      <section id="main-content" className="section-padding bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                About The Awards
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                A National Platform for <span className="text-gradient-gold">Excellence</span>
              </h2>
              
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                The ONE UAE International Business Awards is a prestigious national platform honoring individuals and establishments driving the UAE's journey of growth, development, and sustainability. Under the patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi, the Awards celebrate excellence across vital sectors shaping the future of the nation.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">January 4, 2026</h4>
                    <p className="text-sm text-muted-foreground">Gala Night</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Zabeel Ladies Club</h4>
                    <p className="text-sm text-muted-foreground">Dubai, UAE</p>
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
            
            {/* Trophy Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src={trophyGold} 
                  alt="ONE UAE Awards Trophy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              The Three Pillars
            </h2>
            <div className="gold-divider mt-6" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth & Economic Excellence",
                description: "Honoring achievements in entrepreneurship, innovation, corporate leadership, finance, retail, hospitality, technology, and digital transformation.",
                icon: "📈"
              },
              {
                title: "Development & Human Progress",
                description: "Recognizing contributions in education, healthcare, community service, culture, arts, and youth excellence.",
                icon: "🌱"
              },
              {
                title: "Sustainability & Global Leadership",
                description: "Celebrating environmental stewardship, infrastructure innovation, international diplomacy, media excellence, and lifetime achievement.",
                icon: "🌍"
              }
            ].map((pillar, index) => (
              <div 
                key={index}
                className="card-premium rounded-2xl p-8 lg:p-10 text-center group"
              >
                <div className="text-4xl mb-6">{pillar.icon}</div>
                <h3 className="font-display text-xl lg:text-2xl text-foreground mb-4">
                  {pillar.title}
                </h3>
                <div className="gold-divider-left mx-auto mb-4" style={{ width: '40px' }} />
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Categories Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        
        <div className="relative container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Event Facts */}
            <div>
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
            <div className="lg:border-l lg:border-white/10 lg:pl-20">
              <h3 className="font-display text-2xl text-white mb-8">
                Program Flow
              </h3>
              
              <div className="space-y-6">
                {[
                  { time: "6:00 PM", event: "Reception & Networking" },
                  { time: "6:45 PM", event: "Opening Ceremony" },
                  { time: "7:15 PM", event: "Award Presentations" },
                  { time: "8:45 PM", event: "Gala Dinner" },
                  { time: "10:00 PM", event: "Closing Remarks" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <span className="text-primary font-medium w-20">{item.time}</span>
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-white/80">{item.event}</span>
                  </div>
                ))}
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Our Audience
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              Distinguished Guests
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: "🏛️", title: "Government Representatives" },
              { icon: "💼", title: "Business Leaders" },
              { icon: "💡", title: "Entrepreneurs" },
              { icon: "🏥", title: "Healthcare Leaders" },
              { icon: "📺", title: "Media Figures" },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="text-sm text-muted-foreground">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join the most prestigious business awards in the UAE. Multiple partnership tiers available starting from AED 25,000.
          </p>
          <Link to="/partnerships">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full group"
            >
              Explore Partnerships
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
            Get In Touch
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg text-foreground font-medium">
              ONE UAE Awards Secretariat
            </p>
            <a 
              className="block text-primary hover:text-primary/80 transition-colors" 
              href="mailto:info@oneuaeaward.ae"
            >
              info@oneuaeaward.ae
            </a>
            <a 
              href="tel:+971562555100" 
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              +971 56 255 5100
            </a>
          </div>
          
          <Link to="/contact">
            <Button variant="outline" className="group">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
