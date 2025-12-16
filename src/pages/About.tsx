import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Lightbulb, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
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
        {/* Hero Section - Full-width image band with offset headline */}
        <section className="relative pt-20">
          <div className="h-[40vh] min-h-[320px] relative overflow-hidden">
            <img 
              src={trophySkyline} 
              alt="ONE UAE Awards" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          
          {/* Offset headline */}
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="relative -mt-32 lg:-mt-40 max-w-2xl">
              <p className="editorial-label mb-4">About the Awards</p>
              <h1 className="section-title-editorial mb-6">
                A National Platform for Excellence
              </h1>
              <div className="gold-rule-left" />
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
              <div className="lg:col-span-3 space-y-10">
                <AnimatedSection>
                  <div className="space-y-6">
                    <p className="text-lg text-foreground leading-relaxed">
                      The ONE UAE International Business Awards is a prestigious national platform honoring individuals and establishments driving the UAE's journey of growth, development, and sustainability.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      What began as a vision to honor outstanding contributions has grown into a national platform celebrating the diverse achievements that define the UAE's spirit of unity, vision, and excellence.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Pull Quote */}
                <AnimatedSection delay={100}>
                  <blockquote className="pull-quote my-12">
                    "Celebrating the extraordinary achievements of individuals and organizations who embody the spirit of national excellence."
                  </blockquote>
                </AnimatedSection>

                {/* Mission & Vision */}
                <AnimatedSection delay={200}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="card-standard">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-lg text-foreground mb-2">Mission</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        To recognize leaders and institutions contributing to national progress and UAE Vision 2071.
                      </p>
                    </div>

                    <div className="card-standard">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Eye className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-lg text-foreground mb-2">Vision</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        To build a prestigious tradition of honoring excellence, unity, and sustainable advancement.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Stats Column */}
              <div className="lg:col-span-2">
                <div className="sticky top-32 space-y-8">
                  <div className="text-center lg:text-left">
                    <span className="editorial-number">18</span>
                    <p className="text-muted-foreground text-sm mt-2">Award Categories</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <span className="editorial-number">750</span>
                    <p className="text-muted-foreground text-sm mt-2">Distinguished Guests</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <span className="editorial-number">1</span>
                    <p className="text-muted-foreground text-sm mt-2">Unified Vision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="section-breathing bg-deep-charcoal text-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimatedSection>
                <div>
                  <p className="editorial-label text-white/40 mb-4">Under the Patronage</p>
                  <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                    H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-8">
                    ONE UAE International Business Awards is honored to operate under the distinguished patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi, whose commitment to excellence and national development continues to inspire our mission.
                  </p>
                  <div className="gold-rule-left" />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden">
                      <img 
                        src={sheikhPortrait} 
                        alt="H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 rounded-2xl -z-10" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-16">
              <p className="editorial-label mb-4">Our Foundation</p>
              <h2 className="section-title-editorial">Core Values</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
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
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <p className="editorial-label mb-4">The Journey</p>
              <h2 className="section-title-editorial">Selection Process</h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Nomination",
                  description: "Individuals and organizations submit nominations highlighting exceptional achievements and contributions."
                },
                {
                  step: "02",
                  title: "Expert Review",
                  description: "A distinguished panel evaluates nominations based on impact, innovation, and alignment with criteria."
                },
                {
                  step: "03",
                  title: "Final Selection",
                  description: "Winners are selected and honored at our prestigious annual ceremony."
                }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="card-standard flex gap-6 items-start">
                    <span className="font-display text-3xl text-primary/30 flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection delay={400}>
              <div className="text-center mt-12">
                <Link to="/nominate">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group">
                    Submit Your Nomination
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;