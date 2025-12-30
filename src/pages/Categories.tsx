import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, TrendingUp, Lightbulb, Briefcase, Building2, ShoppingBag, Cpu, GraduationCap, HeartPulse, Users, Palette, Star, Globe, Leaf, HardHat, Handshake, Radio, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";

const Categories = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { icon: TrendingUp, title: "Growth & Economic Excellence", pillar: "Growth" },
    { icon: Lightbulb, title: "Entrepreneurship & Innovation", pillar: "Growth" },
    { icon: Briefcase, title: "Corporate Leadership", pillar: "Growth" },
    { icon: Building2, title: "Finance & Banking", pillar: "Growth" },
    { icon: ShoppingBag, title: "Retail & Hospitality", pillar: "Growth" },
    { icon: Cpu, title: "Technology & Digital Transformation", pillar: "Growth" },
    { icon: GraduationCap, title: "Education", pillar: "Development" },
    { icon: HeartPulse, title: "Healthcare", pillar: "Development" },
    { icon: Users, title: "Community Service", pillar: "Development" },
    { icon: Palette, title: "Culture & Arts", pillar: "Development" },
    { icon: Star, title: "Youth Excellence", pillar: "Development" },
    { icon: Globe, title: "International Relations & Diplomacy", pillar: "Sustainability" },
    { icon: Leaf, title: "Sustainability & Environment", pillar: "Sustainability" },
    { icon: HardHat, title: "Infrastructure & Construction", pillar: "Sustainability" },
    { icon: Handshake, title: "Development & Human Progress", pillar: "Sustainability" },
    { icon: Radio, title: "Media & Communication", pillar: "Sustainability" },
    { icon: Award, title: "Lifetime Achievement & Legacy", pillar: "Sustainability" },
    { icon: Award, title: "Global Leadership", pillar: "Sustainability" },
  ];

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

      gsap.utils.toArray('.category-item').forEach((el: any, i) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.03,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
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
        title="Award Categories - ONE UAE International Business Awards 2026"
        description="Explore 18 award categories honoring excellence across economic growth, innovation, leadership, and sustainability."
        keywords="UAE awards categories, business award categories, innovation awards, sustainability awards"
        path="/categories"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="reveal-up">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  Recognition
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground">
                  Award Categories
                </h1>
              </div>
              <div className="reveal-up">
                <span className="text-7xl lg:text-8xl font-display text-foreground leading-none">18</span>
                <p className="text-sm text-muted-foreground">Categories of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories List */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="divide-y divide-border">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={index}
                    className="category-item py-5 flex items-center gap-6 group cursor-default hover:bg-background/50 -mx-4 px-4 transition-colors"
                  >
                    <span className="text-sm text-muted-foreground font-mono w-8 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium text-foreground flex-1 group-hover:text-primary transition-colors">
                      {category.title}
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider hidden sm:block">
                      {category.pillar}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <div className="reveal-up">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                Ready to Apply?
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Submit Your Nomination
              </h2>
              <p className="text-muted-foreground mb-10">
                Recognize excellence in your organization or nominate a deserving leader.
              </p>
              <Link to="/nominate">
                <Button size="lg" className="h-14 px-10">
                  Start Nomination
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

export default Categories;
