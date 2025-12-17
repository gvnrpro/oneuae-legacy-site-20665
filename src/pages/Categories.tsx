import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, TrendingUp, Lightbulb, Briefcase, Building2, ShoppingBag, Cpu, GraduationCap, HeartPulse, Users, Palette, Star, Globe, Leaf, HardHat, Handshake, Radio, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { gsap, ScrollTrigger } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";

const Categories = () => {
  const categories = [
    { icon: TrendingUp, title: "Growth & Economic Excellence", featured: true },
    { icon: Lightbulb, title: "Entrepreneurship & Innovation", featured: true },
    { icon: Briefcase, title: "Corporate Leadership", featured: true },
    { icon: Building2, title: "Finance & Banking" },
    { icon: ShoppingBag, title: "Retail & Hospitality" },
    { icon: Cpu, title: "Technology & Digital Transformation" },
    { icon: Users, title: "Development & Human Progress" },
    { icon: GraduationCap, title: "Education" },
    { icon: HeartPulse, title: "Healthcare" },
    { icon: Users, title: "Community Service" },
    { icon: Palette, title: "Culture & Arts" },
    { icon: Star, title: "Youth Excellence" },
    { icon: Globe, title: "Sustainability & Global Leadership" },
    { icon: Leaf, title: "Sustainability & Environment" },
    { icon: HardHat, title: "Infrastructure & Construction" },
    { icon: Handshake, title: "International Relations & Diplomacy" },
    { icon: Radio, title: "Media & Communication" },
    { icon: Award, title: "Lifetime Achievement & Legacy" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const scrollWidth = scrollContainer.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Horizontal scroll
      const scrollTween = gsap.to(scrollContainer, {
        x: -(scrollWidth - viewportWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // Card 3D tilt on enter
      gsap.utils.toArray('.category-card').forEach((card: any) => {
        gsap.fromTo(
          card,
          { rotateY: -8, opacity: 0.5 },
          {
            rotateY: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: 'left 80%',
              end: 'left 50%',
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Award Categories - ONE UAE International Business Awards 2026"
        description="Explore 18 award categories honoring excellence across economic growth, innovation, leadership, sustainability, and more at the ONE UAE International Business Awards."
        keywords="UAE awards categories, business award categories, innovation awards, sustainability awards, leadership recognition"
        path="/categories"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section - Large number accent */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <div>
                <p className="editorial-label mb-4">Recognition</p>
                <h1 className="section-title-editorial">
                  Award Categories
                </h1>
              </div>
              <div className="lg:text-right">
                <span className="editorial-number">18</span>
                <p className="text-muted-foreground text-sm">Categories of Excellence</p>
              </div>
            </div>
            <div className="gold-rule mt-12" />
          </div>
        </section>

        {/* Progress Bar */}
        <div className="fixed top-20 left-0 right-0 h-1 bg-border/20 z-40">
          <div
            ref={progressRef}
            className="h-full bg-primary transition-none"
            style={{ width: '0%' }}
          />
        </div>

        {/* Horizontal Scroll Categories */}
        <section ref={containerRef} className="bg-card min-h-screen">
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-8 px-8 py-20 min-h-screen"
            style={{ perspective: '1000px' }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`category-card flex-shrink-0 ${
                    category.featured ? 'w-80 h-96' : 'w-72 h-80'
                  } bg-background border border-border/40 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-primary/40 transition-all duration-300`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {category.featured && (
                    <span className="text-xs text-primary uppercase tracking-widest mb-4">Featured</span>
                  )}
                  <Icon className={`${category.featured ? 'h-16 w-16' : 'h-12 w-12'} text-primary mb-6`} />
                  <h3 className={`${category.featured ? 'text-xl' : 'text-lg'} font-display text-foreground`}>
                    {category.title}
                  </h3>
                  <div className="w-12 h-px bg-primary/40 mt-6" />
                </div>
              );
            })}
            
            {/* CTA Card at end */}
            <div className="category-card flex-shrink-0 w-80 h-96 bg-primary/10 border border-primary/40 rounded-lg p-8 flex flex-col items-center justify-center text-center">
              <Award className="h-16 w-16 text-primary mb-6" />
              <h3 className="text-xl font-display text-foreground mb-4">Ready to Nominate?</h3>
              <p className="text-muted-foreground mb-6">Submit your nomination today</p>
              <Link to="/nominate">
                <Button>
                  Nominate Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <p className="editorial-label mb-4">Ready to Apply?</p>
            <h2 className="section-title-editorial mb-6">
              Submit Your Nomination
            </h2>
            <p className="text-muted-foreground mb-8">
              Recognize excellence in your organization or nominate a deserving leader.
            </p>
            <Link to="/nominate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group">
                Start Nomination
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
