import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Eye, Heart, Lightbulb, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import sheikhPortrait from "@/assets/sheikh-sultan.jpeg";
import trophySkyline from "@/assets/trophy-skyline.jpeg";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="About - ONE UAE International Business Awards 2026"
        description="Learn about ONE UAE International Business Awards' mission to celebrate unity, vision, and excellence across the Emirates. Honoring leaders and changemakers shaping the UAE's future."
        keywords="about ONE UAE, UAE awards mission, Sheikh Sultan Al Nuaimi, UAE excellence platform, international business awards"
        path="/about"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                About Us
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                A National Platform for <span className="text-gradient-gold">Excellence</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Celebrating the exceptional individuals and organizations shaping the UAE's future through innovation, leadership, and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              <div className="lg:col-span-3 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground text-lg leading-relaxed">
                    The ONE UAE International Business Awards is a prestigious national platform honoring individuals and establishments driving the UAE's journey of growth, development, and sustainability. Under the patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi, the Awards celebrate excellence across vital sectors shaping the future of the nation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    What began as a vision to honor outstanding contributions has grown into a national platform celebrating the diverse achievements that define the UAE's spirit of unity, vision, and excellence.
                  </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid sm:grid-cols-2 gap-6 pt-8">
                  <div className="card-premium rounded-2xl p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">Mission</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To recognize leaders and institutions contributing to national progress and UAE Vision 2071.
                    </p>
                  </div>

                  <div className="card-premium rounded-2xl p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">Vision</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To build a prestigious tradition of honoring excellence, unity, and sustainable advancement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trophy Image */}
              <div className="lg:col-span-2">
                <div className="relative sticky top-32">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img 
                      src={trophySkyline} 
                      alt="ONE UAE Awards Trophy with Dubai skyline" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-primary/20 rounded-xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="section-padding bg-deep-charcoal text-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Under the Patronage</p>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                  H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  ONE UAE International Business Awards is honored to operate under the distinguished patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi, whose commitment to excellence and national development continues to inspire our mission.
                </p>
                <div className="uae-accent-line" />
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-white/10">
                    <img 
                      src={sheikhPortrait} 
                      alt="H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-2xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Core Values
              </h2>
              <div className="gold-divider mt-6" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Unity",
                  description: "Celebrating the strength that comes from our diverse community working together towards shared goals."
                },
                {
                  icon: Lightbulb,
                  title: "Vision",
                  description: "Honoring forward-thinking leaders who shape the future through innovation and strategic thinking."
                },
                {
                  icon: Star,
                  title: "Excellence",
                  description: "Recognizing exceptional achievement and unwavering commitment to the highest standards."
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                Selection Process
              </h2>
              <p className="text-muted-foreground text-lg">
                A rigorous and transparent evaluation journey
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Nomination",
                  description: "Individuals and organizations submit nominations highlighting exceptional achievements and contributions to the UAE."
                },
                {
                  step: "02",
                  title: "Expert Review",
                  description: "A distinguished panel of judges evaluates nominations based on impact, innovation, and alignment with award criteria."
                },
                {
                  step: "03",
                  title: "Final Selection",
                  description: "Winners are selected and honored at our prestigious annual ceremony, celebrating their remarkable achievements."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="card-premium rounded-2xl p-8 flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-xl">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/nominate">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group">
                  Submit Your Nomination
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

export default About;
