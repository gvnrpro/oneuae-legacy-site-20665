import { Link } from "react-router-dom";
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
    { icon: <TrendingUp className="w-8 h-8" />, title: "Growth & Economic Excellence" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Entrepreneurship & Innovation" },
    { icon: <Award className="w-8 h-8" />, title: "Corporate Leadership" },
    { icon: <Building2 className="w-8 h-8" />, title: "Finance & Banking" },
    { icon: <ShoppingBag className="w-8 h-8" />, title: "Retail & Hospitality" },
    { icon: <Cpu className="w-8 h-8" />, title: "Technology & Digital Transformation" },
    { icon: <Users2 className="w-8 h-8" />, title: "Development & Human Progress" },
    { icon: <GraduationCap className="w-8 h-8" />, title: "Education" },
    { icon: <Heart className="w-8 h-8" />, title: "Healthcare" },
    { icon: <Users className="w-8 h-8" />, title: "Community Service" },
    { icon: <Palette className="w-8 h-8" />, title: "Culture & Arts" },
    { icon: <Users2 className="w-8 h-8" />, title: "Youth Excellence" },
    { icon: <Globe2 className="w-8 h-8" />, title: "Sustainability & Global Leadership" },
    { icon: <Leaf className="w-8 h-8" />, title: "Sustainability & Environment" },
    { icon: <Construction className="w-8 h-8" />, title: "Infrastructure & Construction" },
    { icon: <Globe2 className="w-8 h-8" />, title: "International Relations & Diplomacy" },
    { icon: <Radio className="w-8 h-8" />, title: "Media & Communication" },
    { icon: <Crown className="w-8 h-8" />, title: "Lifetime Achievement & Legacy" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Award Categories - OneUAE Awards 2026"
        description="Explore 18 award categories celebrating excellence across growth, development, and sustainability in the UAE."
        keywords="UAE award categories, entrepreneurship awards, healthcare excellence, education awards, cultural awards"
        path="/categories"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">
              Award Categories
            </h1>
            <div className="gold-divider mb-8" />
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Excellence takes many forms. Our categories honor the diverse contributions that shape the Emirates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 fade-in">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-background border border-border p-8 text-center transition-colors duration-300 hover:border-gold"
              >
                <div className="w-12 h-12 mx-auto mb-4 text-gold flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                  {category.title}
                </h3>
                <div className="w-10 h-px bg-gold mx-auto" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/nominate">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans px-12 py-6 font-light"
              >
                Submit nomination
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;