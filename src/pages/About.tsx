import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import sheikhPortrait from "@/assets/sheikh-sultan.jpeg";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="About - OneUAE Awards 2026"
        description="Learn about OneUAE Awards' mission to celebrate unity, vision, and excellence across the Emirates. Honoring leaders and changemakers shaping the UAE's future."
        keywords="about OneUAE, UAE awards mission, Sheikh Sultan Al Nuaimi, UAE excellence platform"
        path="/about"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-20 fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">
              About OneUAE Awards
            </h1>
            <div className="gold-divider mb-8" />
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              A national platform for excellence
            </p>
          </div>

          {/* About Content - Two Column Layout */}
          <section className="mb-20 fade-in">
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3 space-y-8">
                <div>
                  <p className="font-sans text-lg text-foreground leading-relaxed font-light mb-6">
                    The OneUAE Awards is a national platform honoring individuals and establishments driving the UAE's 
                    journey of growth, development, and sustainability. Under the patronage of H.E. Sheikh Sultan Bin 
                    Nasser Bin Humaid Al Nuaimi, the Awards celebrate excellence across vital sectors shaping the 
                    future of the nation.
                  </p>
                  <p className="font-sans text-lg text-foreground leading-relaxed font-light">
                    What began as a vision to honor outstanding contributions has grown into a national platform 
                    celebrating the diverse achievements that define the UAE's spirit of unity, vision, and excellence.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">Mission</h2>
                  <div className="w-10 h-px bg-gold mb-4" />
                  <p className="font-sans text-base text-muted-foreground leading-relaxed font-light">
                    To recognize leaders and institutions contributing to national progress and UAE Vision 2071.
                  </p>
                </div>

                <div className="pt-8 border-t border-border">
                  <h2 className="font-serif text-2xl font-medium text-foreground mb-2">Vision</h2>
                  <div className="w-10 h-px bg-gold mb-4" />
                  <p className="font-sans text-base text-muted-foreground leading-relaxed font-light">
                    To build a prestigious tradition of honoring excellence, unity, and sustainable advancement.
                  </p>
                </div>
              </div>

              <div className="md:col-span-2 flex items-start justify-center">
                <div className="w-16 h-px bg-gold mt-12 hidden md:block" />
              </div>
            </div>
          </section>

          {/* Patronage Section */}
          <section className="mb-20 py-30 bg-cool-gray fade-in">
            <div className="max-w-4xl mx-auto px-8">
              <h2 className="font-serif text-3xl font-medium text-center mb-16">Under the Patronage</h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-48 h-48 flex-shrink-0">
                  <img 
                    src={sheikhPortrait} 
                    alt="H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi" 
                    className="w-full h-full object-cover border border-border"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-4 leading-snug">
                    H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed font-light">
                    OneUAE Awards is honored to operate under the distinguished patronage of H.E. Sheikh Sultan 
                    Bin Nasser Bin Humaid Al Nuaimi, whose commitment to excellence and national development 
                    continues to inspire our mission.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-20 fade-in">
            <h2 className="font-serif text-3xl font-medium text-center mb-16">Core values</h2>
            
            <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">Unity</h3>
                <div className="w-10 h-px bg-gold mx-auto mb-4" />
                <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                  Celebrating the strength that comes from our diverse community working together towards shared goals.
                </p>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">Vision</h3>
                <div className="w-10 h-px bg-gold mx-auto mb-4" />
                <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                  Honoring forward-thinking leaders who shape the future through innovation and strategic thinking.
                </p>
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">Excellence</h3>
                <div className="w-10 h-px bg-gold mx-auto mb-4" />
                <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                  Recognizing exceptional achievement and unwavering commitment to the highest standards.
                </p>
              </div>
            </div>
          </section>

          {/* Selection Process */}
          <section className="py-30 bg-cool-gray fade-in">
            <div className="max-w-4xl mx-auto px-8">
              <h2 className="font-serif text-3xl font-medium text-center mb-16">Selection process</h2>
              
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-8 h-8 border border-gold flex items-center justify-center text-gold font-sans text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">Nomination</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                      Individuals and organizations submit nominations highlighting exceptional achievements and 
                      contributions to the UAE.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-8 h-8 border border-gold flex items-center justify-center text-gold font-sans text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">Expert review</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                      A distinguished panel of judges evaluates nominations based on impact, innovation, and 
                      alignment with award criteria.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-8 h-8 border border-gold flex items-center justify-center text-gold font-sans text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">Final selection</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">
                      Winners are selected and honored at our prestigious annual ceremony, celebrating their 
                      remarkable achievements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;