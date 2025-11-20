import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Award, Users, Palette, GraduationCap, Heart, Building, Lightbulb, Globe } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Entrepreneurship",
      description: "Recognizing innovative business leaders and startups driving economic growth",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Service",
      description: "Honouring those who strengthen communities through dedicated service",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Culture & Arts",
      description: "Celebrating artists and cultural ambassadors preserving UAE heritage",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Acknowledging educators shaping future generations",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Recognizing healthcare professionals advancing wellness and innovation",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Sustainability",
      description: "Honouring environmental stewards and sustainable development leaders",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Youth Excellence",
      description: "Celebrating young achievers making remarkable contributions",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Relations",
      description: "Recognizing diplomats and leaders fostering global partnerships",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Award Categories - OneUAE Awards 2026"
        description="Explore 8 award categories celebrating excellence across entrepreneurship, healthcare, education, culture, sustainability, youth, and more in the UAE."
        keywords="UAE award categories, entrepreneurship awards, healthcare excellence, education awards, cultural awards"
        path="/categories"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Award Categories
            </h1>
            <div className="gold-divider mb-8 max-w-md mx-auto" />
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Excellence takes many forms. Our categories honour the diverse contributions that shape the Emirates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-up">
            {categories.map((category, index) => {
              const gradients = [
                'from-gold/20 via-gold-light/10 to-gold-dark/20',
                'from-uae-green/20 via-uae-green/10 to-background',
                'from-primary/20 via-primary-light/10 to-background',
                'from-accent/20 via-accent/10 to-background',
                'from-gold-dark/20 via-gold/10 to-background',
                'from-uae-green/15 via-background to-gold/10',
                'from-gold-light/20 via-gold/10 to-primary/20',
                'from-primary/15 via-gold-light/10 to-uae-green/15',
              ];
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden bg-gradient-to-br ${gradients[index]} p-8 rounded-2xl border-2 border-primary/20 hover:border-gold transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] cursor-pointer`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full blur-2xl group-hover:bg-gold/20 transition-colors duration-500" />
                  
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl group-hover:bg-gold/40 transition-all duration-500" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-gold/30">
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm mb-4">
                    {category.description}
                  </p>
                  
                  {/* Animated Bottom Bar */}
                  <div className="h-1 w-0 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full group-hover:w-full transition-all duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link to="/nominate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-sans text-lg px-8 py-6 font-medium">
                Nominate a Candidate
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
