import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, Lightbulb, Award, Building2, ShoppingBag, Cpu, 
  GraduationCap, Heart, Users, Palette, Users2, Leaf, 
  TreePine, Construction, Globe2, Radio, Crown 
} from "lucide-react";

const Categories = () => {
  const categories = [
    { icon: TrendingUp, title: "Growth & Economic Excellence" },
    { icon: Lightbulb, title: "Entrepreneurship & Innovation" },
    { icon: Award, title: "Corporate Leadership" },
    { icon: Building2, title: "Finance & Banking" },
    { icon: ShoppingBag, title: "Retail & Hospitality" },
    { icon: Cpu, title: "Technology & Digital Transformation" },
    { icon: Users2, title: "Development & Human Progress" },
    { icon: GraduationCap, title: "Education" },
    { icon: Heart, title: "Healthcare" },
    { icon: Users, title: "Community Service" },
    { icon: Palette, title: "Culture & Arts" },
    { icon: Users2, title: "Youth Excellence" },
    { icon: Globe2, title: "Sustainability & Global Leadership" },
    { icon: Leaf, title: "Sustainability & Environment" },
    { icon: Construction, title: "Infrastructure & Construction" },
    { icon: Globe2, title: "International Relations & Diplomacy" },
    { icon: Radio, title: "Media & Communication" },
    { icon: Crown, title: "Lifetime Achievement & Legacy" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Award Categories - ONE UAE International Business Awards 2026"
        description="Explore 18 award categories celebrating excellence across growth, development, and sustainability in the UAE."
        keywords="UAE award categories, entrepreneurship awards, healthcare excellence, education awards, cultural awards, international business awards"
        path="/categories"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                18 Categories
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Award Categories
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Excellence takes many forms. Our categories honor the diverse contributions that shape the Emirates and drive its vision forward.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="card-premium rounded-xl p-6 lg:p-8 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground mb-1 block">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="card-premium rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
                <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                  Ready to Nominate?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Submit your nomination for any of our 18 award categories and celebrate excellence in the UAE.
                </p>
                <Link to="/nominate">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group">
                    Submit Nomination
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
