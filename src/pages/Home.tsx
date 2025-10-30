import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroBg}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
        </video>
        
        {/* Fallback Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Hero Content with Staggered Animation */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Celebrating Unity, Vision,<br />and Excellence
          </h1>
          <p className="font-lato text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            Honouring the leaders, innovators, and changemakers shaping the legacy of the Emirates
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <Link to="/nominate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-lato text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                Nominate Now
              </Button>
            </Link>
            <Link to="/partnerships">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground font-lato text-lg px-8 py-6 transition-all duration-300 hover:scale-105">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview with Parallax */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="gold-divider mb-12 animate-expand" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8 scroll-reveal" style={{ animationDelay: '0.1s' }}>
              A National Platform for Excellence
            </h2>
            <p className="font-lato text-lg text-muted-foreground mb-8 leading-relaxed scroll-reveal" style={{ animationDelay: '0.2s' }}>
              OneUAE Awards celebrates the remarkable individuals and organizations who embody the spirit of the Emirates. 
              Through unity, vision, and excellence, we honour those who inspire progress and shape our nation's legacy.
            </p>
            <Link to="/about" className="scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <Button variant="ghost" className="text-primary hover:text-primary/80 font-lato text-lg transition-all duration-300 hover:scale-105 group">
                Learn More About Our Mission 
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">→</span>
              </Button>
            </Link>
            <div className="gold-divider mt-12 animate-expand" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
