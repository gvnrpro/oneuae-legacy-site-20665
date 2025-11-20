import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import SocialProof from "@/components/SocialProof";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        {/* Video Background with Fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroBg}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            // Fallback to background image if video fails
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
        
        {/* Sophisticated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px)`
        }} />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            {/* Premium Date Badge with Glow */}
            <div className="mb-8 md:mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="inline-block px-8 py-3 border-2 border-gold-light/40 rounded-full backdrop-blur-md bg-gradient-to-r from-gold-dark/20 via-gold/10 to-gold-dark/20 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <p className="font-sans text-sm md:text-base text-gold-light font-medium tracking-[0.15em] uppercase">
                  January 4th, 2026 • Zabeel Ladies Club
                </p>
              </div>
            </div>
            
            {/* Headline with Gradient Text */}
            <h1 
              className="font-serif font-bold text-white mb-8 md:mb-10 leading-[1.05] tracking-tight opacity-0 animate-fade-in-up text-shadow-gold" 
              style={{ 
                animationDelay: '0.3s', 
                animationFillMode: 'forwards',
                fontSize: 'clamp(2.5rem, 8vw, 6rem)'
              }}
            >
              Celebrating Unity, Vision,<br className="hidden sm:block" /> 
              <span className="text-gradient-gold">and Excellence</span>
            </h1>
            
            {/* Enhanced Subheadline */}
            <p 
              className="font-sans text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide opacity-0 animate-fade-in-up" 
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Honouring the leaders, innovators, and changemakers<br className="hidden md:block" /> 
              shaping the legacy of the <span className="text-gold-light font-medium">Emirates</span>
            </p>
            
            {/* Premium Buttons with Glow Effects */}
            <div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-up max-w-2xl mx-auto" 
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <Link to="/nominate" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-dark hover:via-gold hover:to-gold-dark text-white font-sans text-base md:text-lg px-12 md:px-14 py-7 md:py-8 transition-all duration-500 hover:scale-105 btn-glow font-semibold tracking-wide shadow-2xl"
                >
                  Nominate Now
                </Button>
              </Link>
              <Link to="/partnerships" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-gold-light/60 bg-white/5 backdrop-blur-sm text-white hover:bg-gold/20 hover:border-gold-light hover:text-white font-sans text-base md:text-lg px-12 md:px-14 py-7 md:py-8 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] font-semibold tracking-wide"
                >
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <div className="w-7 h-12 border-2 border-gold-light/50 rounded-full flex items-start justify-center p-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <div className="w-1.5 h-3 bg-gold-light rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Celebration Begins In
            </h2>
            <p className="font-sans text-muted-foreground">
              January 4th, 2026 • Zabeel Ladies Club, Dubai
            </p>
          </div>
          <CountdownTimer />
        </div>
      </section>

      <SocialProof />

      {/* About Preview */}
      <section id="main-content" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="gold-divider mb-12 md:mb-16" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 md:mb-8 tracking-tight">
              A National Platform for Excellence
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto font-light">
              OneUAE Awards celebrates the remarkable individuals and organizations who embody the spirit of the Emirates. 
              Through unity, vision, and excellence, we honour those who inspire progress and shape our nation's legacy.
            </p>
            <Link to="/about">
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 hover:bg-transparent font-sans text-base md:text-lg transition-all duration-300 group font-medium"
              >
                Learn More About Our Mission 
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">→</span>
              </Button>
            </Link>
            <div className="gold-divider mt-12 md:mt-16" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
