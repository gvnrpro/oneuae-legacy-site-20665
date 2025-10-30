import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Award Categories
            </h1>
            <div className="gold-divider mb-8 max-w-md mx-auto" />
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Excellence takes many forms. Our categories honour the diverse contributions that shape the Emirates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="font-lato text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                <div className="h-0.5 w-0 bg-primary mt-6 group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/nominate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-lato text-lg px-8 py-6">
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
