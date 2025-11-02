import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mov" type="video/mp4" />
        </video>
        
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 md:mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="inline-block px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                <p className="font-sans text-sm md:text-base text-white/90 font-light tracking-widest uppercase">
                  January 4th, 2026 • Zabeel Ladies Club
                </p>
              </div>
            </div>
            <h1 
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-8 md:mb-10 leading-[1.1] tracking-tight opacity-0 animate-fade-in-up" 
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Celebrating Unity, Vision,<br className="hidden sm:block" /> and Excellence
            </h1>
            <p 
              className="font-sans text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide opacity-0 animate-fade-in-up" 
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Honouring the leaders, innovators, and changemakers<br className="hidden md:block" /> shaping the legacy of the Emirates
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center opacity-0 animate-fade-in-up max-w-2xl mx-auto" 
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <Link to="/nominate" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-sans text-base md:text-lg px-10 md:px-12 py-6 md:py-7 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 font-medium tracking-wide"
                >
                  Nominate Now
                </Button>
              </Link>
              <Link to="/partnerships" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-white/90 text-white hover:bg-white/15 hover:border-white backdrop-blur-md font-sans text-base md:text-lg px-10 md:px-12 py-6 md:py-7 transition-all duration-300 hover:scale-[1.03] font-medium tracking-wide"
                >
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-secondary relative overflow-hidden">
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
