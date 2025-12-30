import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import sheikhPortrait from "@/assets/sheikh-sultan.jpeg";
import trophySkyline from "@/assets/trophy-skyline.jpeg";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";

const About = () => {
  const mainRef = useRef<HTMLDivElement>(null);

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
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background">
      <SEOHead
        title="About - ONE UAE International Business Awards 2026"
        description="Learn about ONE UAE International Business Awards' mission to celebrate unity, vision, and excellence across the Emirates."
        keywords="about ONE UAE, UAE awards mission, Sheikh Sultan Al Nuaimi, UAE excellence platform"
        path="/about"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero - Full bleed image with offset text */}
        <section className="pt-20">
          <div className="relative h-[50vh] min-h-[400px]">
            <img 
              src={trophySkyline} 
              alt="ONE UAE Awards" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl -mt-32 relative z-10">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                About the Awards
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight">
                A National Platform for Excellence
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 reveal-up">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  The ONE UAE International Business Awards is a prestigious national platform honoring individuals and establishments driving the UAE's journey of growth, development, and sustainability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What began as a vision to honor outstanding contributions has grown into a platform celebrating the diverse achievements that define the UAE's spirit of unity, vision, and excellence.
                </p>
              </div>
              
              <div className="reveal-up space-y-8">
                <div>
                  <span className="text-6xl font-display text-foreground">18</span>
                  <p className="text-sm text-muted-foreground mt-1">Award Categories</p>
                </div>
                <div>
                  <span className="text-6xl font-display text-foreground">750</span>
                  <p className="text-sm text-muted-foreground mt-1">Distinguished Guests</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="reveal-up p-8 bg-background rounded-lg">
                <Target className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-xl font-display text-foreground mb-3">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To recognize leaders and institutions contributing to national progress and UAE Vision 2071.
                </p>
              </div>
              <div className="reveal-up p-8 bg-background rounded-lg">
                <Eye className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-xl font-display text-foreground mb-3">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build a prestigious tradition of honoring excellence, unity, and sustainable advancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patronage - Dark section */}
        <section className="py-24 md:py-32 lg:py-40 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="reveal-up">
                <span className="text-xs uppercase tracking-[0.2em] text-background/40 mb-4 block">
                  Under the Patronage
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-background mb-6 leading-tight">
                  H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
                </h2>
                <p className="text-background/60 leading-relaxed">
                  ONE UAE International Business Awards is honored to operate under the distinguished patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi, whose commitment to excellence and national development continues to inspire our mission.
                </p>
              </div>
              
              <div className="reveal-up flex justify-center lg:justify-end">
                <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-lg overflow-hidden">
                  <img 
                    src={sheikhPortrait} 
                    alt="H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="reveal-up mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                The Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground">
                Selection Process
              </h2>
            </div>
            
            <div className="space-y-0 divide-y divide-border">
              {[
                { step: "01", title: "Nomination", desc: "Individuals and organizations submit nominations highlighting exceptional achievements." },
                { step: "02", title: "Expert Review", desc: "A distinguished panel evaluates nominations based on impact and innovation." },
                { step: "03", title: "Final Selection", desc: "Winners are selected and honored at our prestigious annual ceremony." },
              ].map((item, index) => (
                <div key={index} className="reveal-up py-8 flex gap-8 items-start">
                  <span className="text-4xl font-display text-primary/30 flex-shrink-0 w-16">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-display text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="reveal-up mt-12">
              <Link to="/nominate">
                <Button size="lg" className="h-14 px-8">
                  Submit Your Nomination
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
