import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, CheckCircle2, Users, FileText, Award, Trophy, Mail, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import NominationForm from "@/components/NominationForm";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";

const Nominate = () => {
  const eligibility = [
    {
      icon: Users,
      title: "Individuals & Organizations",
      description: "Open to individuals, businesses, and institutions operating in the UAE."
    },
    {
      icon: FileText,
      title: "Documented Achievements",
      description: "Must demonstrate measurable impact and verified accomplishments."
    },
    {
      icon: Award,
      title: "Excellence Standards",
      description: "Contributions aligned with UAE Vision 2071 and national development goals."
    }
  ];

  const steps = [
    {
      icon: FileCheck,
      title: "Application Reviewed",
      description: "Our panel reviews each submission thoroughly",
    },
    {
      icon: Users,
      title: "Shortlisted Nominees Contacted",
      description: "Selected nominees are notified via email",
    },
    {
      icon: Award,
      title: "Final Selection Announced",
      description: "Winners revealed at the Gala Night ceremony",
    },
    {
      icon: Trophy,
      title: "Winners Celebrated",
      description: "Recognition on stage with trophy presentation",
    },
  ];

  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!stepsContainerRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.step-card');
      
      cards.forEach((card: any, i) => {
        // Initial state
        gsap.set(card, {
          scale: 0.8,
          rotation: (Math.random() - 0.5) * 6,
          autoAlpha: 0,
        });

        // Scroll-triggered animation
        gsap.to(card, {
          scale: 1,
          rotation: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.15,
        });
      });

      // Hover effects
      cards.forEach((card: any) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -12,
            rotation: 0,
            scale: 1.02,
            zIndex: 10,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            zIndex: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, stepsContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Submit Nomination - ONE UAE International Business Awards 2026"
        description="Nominate outstanding individuals and organizations for the ONE UAE International Business Awards. Recognize excellence across 18 categories."
        keywords="nominate UAE awards, submit nomination, business awards application, excellence recognition, award nomination form"
        path="/nominate"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section - Countdown as hero */}
        <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <p className="editorial-label mb-4">Nominations Open</p>
              <h1 className="section-title-editorial mb-4">
                Submit Your Nomination
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Recognize exceptional achievements and contributions shaping the UAE's future.
              </p>
            </div>
            
            <CountdownTimer />
          </div>
        </section>

        {/* Eligibility */}
        <section className="section-compact bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6">
              {eligibility.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mx-auto mb-4 border border-border">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-base text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nomination Form */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl">
            <div className="text-center mb-12">
              <p className="editorial-label mb-4">Application</p>
              <h2 className="font-display text-2xl text-foreground">Nomination Form</h2>
            </div>
            
            <AnimatedSection>
              <NominationForm />
            </AnimatedSection>
          </div>
        </section>

        {/* Stacking Steps Cards */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <p className="editorial-label mb-4">The Process</p>
              <h2 className="font-display text-2xl text-foreground">What Happens Next?</h2>
            </div>
            
            <div
              ref={stepsContainerRef}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="step-card relative bg-background border border-border rounded-xl p-6 cursor-pointer transition-shadow hover:shadow-lg"
                    style={{ transformOrigin: 'center center' }}
                  >
                    <span className="absolute top-4 right-4 text-4xl font-display text-primary/20">
                      {index + 1}
                    </span>
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-display text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="card-standard">
                  <h3 className="font-display text-lg text-foreground mb-4">Need Help?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Our team is available to assist with your nomination or answer any questions.
                  </p>
                  <div className="space-y-3">
                    <Link to="/categories">
                      <Button variant="outline" size="sm" className="w-full justify-between group">
                        View All Categories
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="w-full justify-between group">
                        Contact Us
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <div className="card-standard flex flex-col items-center text-center">
                  <Mail className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display text-lg text-foreground mb-2">Questions?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Contact us at
                  </p>
                  <a 
                    href="mailto:info@oneuaeaward.ae" 
                    className="text-primary hover:underline font-medium"
                  >
                    info@oneuaeaward.ae
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nominate;
