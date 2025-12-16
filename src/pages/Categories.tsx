import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Lightbulb, Briefcase, Building2, ShoppingBag, Cpu, GraduationCap, HeartPulse, Users, Palette, Star, Globe, Leaf, HardHat, Handshake, Radio, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";

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

        {/* Categories Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            {/* Featured Categories - Larger */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {categories.slice(0, 3).map((category, index) => {
                const Icon = category.icon;
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="card-featured text-center h-full">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs text-primary font-medium mb-2 block">Featured</span>
                      <h3 className="font-display text-lg text-foreground">
                        {category.title}
                      </h3>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
            
            {/* Standard Categories */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.slice(3).map((category, index) => {
                const Icon = category.icon;
                return (
                  <AnimatedSection key={index + 3} delay={(index + 3) * 50}>
                    <div className="card-standard flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-muted-foreground">
                          {String(index + 4).padStart(2, '0')}
                        </span>
                        <h3 className="font-medium text-foreground text-sm leading-tight">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <AnimatedSection>
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
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;