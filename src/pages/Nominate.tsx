import { Sparkles, Award, Users, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import NominationForm from "@/components/NominationForm";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";

const Nominate = () => {
  const eligibilityCriteria = [
    {
      icon: Award,
      title: "Excellence",
      description: "Demonstrated exceptional achievement in their respective field"
    },
    {
      icon: Users,
      title: "Impact",
      description: "Made significant contributions to the UAE community or economy"
    },
    {
      icon: FileCheck,
      title: "Leadership",
      description: "Shown visionary leadership and innovation in their work"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Nominate - ONE UAE International Business Awards 2026"
        description="Submit a nomination for the ONE UAE International Business Awards 2026. Recognize excellence and honor individuals making extraordinary contributions to the Emirates."
        keywords="UAE nomination, nominate leader, ONE UAE nomination, award nomination, recognize excellence, international business awards"
        path="/nominate"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Nominations Open
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Submit a Nomination
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Recognize excellence. Nominate an individual or organization making extraordinary contributions to the Emirates.
              </p>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="section-padding-sm bg-background border-b border-border">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <AnimatedSection>
              <div className="text-center mb-8">
                <h2 className="font-display text-xl md:text-2xl text-foreground mb-2">
                  Time Until Awards Ceremony
                </h2>
                <p className="text-muted-foreground text-sm">
                  January 4, 2026 · Zabeel Ladies Club, Dubai
                </p>
              </div>
              <CountdownTimer />
            </AnimatedSection>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Who Can Be Nominated?
                </h2>
                <div className="gold-divider" />
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-6">
              {eligibilityCriteria.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="card-premium rounded-2xl p-8 text-center h-full">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Nomination Form
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Complete the form below to submit your nomination. All fields marked with an asterisk (*) are required.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="card-premium rounded-2xl p-8 lg:p-12">
                <NominationForm />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-deep-charcoal text-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              Need Assistance?
            </h2>
            <p className="text-white/70 mb-8">
              Our team is here to help with any questions about the nomination process or award categories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/categories">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full group"
                >
                  View Categories
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

export default Nominate;
