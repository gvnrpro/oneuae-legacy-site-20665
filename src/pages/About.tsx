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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
                About OneUAE Awards
              </h1>
              <div className="gold-divider mb-8" />
            </div>

            <div className="space-y-16 fade-in-up">
              {/* Vision */}
              <section>
                <h2 className="font-serif text-3xl font-semibold text-primary mb-6">Our Vision</h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed font-light">
                  To establish a distinguished platform that recognizes and celebrates the individuals and organizations 
                  who exemplify the highest standards of excellence, innovation, and service to the United Arab Emirates.
                </p>
              </section>

              {/* Mission */}
              <section>
                <h2 className="font-serif text-3xl font-semibold text-primary mb-6">Our Mission</h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed font-light">
                  OneUAE Awards is dedicated to honouring the leaders, visionaries, and changemakers who contribute 
                  to the prosperity and cultural richness of the Emirates. Through our annual recognition ceremony on 
                  <strong className="text-foreground"> January 4th, 2026</strong>, we aim to inspire continued excellence and celebrate the unity that defines our nation.
                </p>
              </section>

              {/* Patronage */}
              <section className="bg-secondary p-8 md:p-12 rounded-lg">
                <h2 className="font-serif text-3xl font-semibold text-primary mb-8">Under the Patronage</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-56 h-56 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                    <img 
                      src={sheikhPortrait} 
                      alt="H.E. Sheikh Sultan Bin Nasser Bin Humaid Rashed Al Nuaimi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                      H.E. Sheikh Sultan Bin Nasser Bin Humaid Rashed Al Nuaimi
                    </h3>
                    <p className="font-sans text-lg text-muted-foreground leading-relaxed font-light">
                      OneUAE Awards is honoured to operate under the distinguished patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Rashed Al Nuaimi, 
                      whose commitment to excellence and national development continues to inspire our mission.
                    </p>
                  </div>
                </div>
              </section>

              {/* Evolution */}
              <section>
                <h2 className="font-serif text-3xl font-semibold text-primary mb-6">Our Journey</h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                  OneUAE Awards evolved from the 1YOUAE initiative, expanding our commitment to recognizing excellence 
                  across all seven emirates. This transformation reflects our dedication to creating a comprehensive 
                  platform that celebrates achievement in every corner of the nation.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-4xl font-serif font-semibold text-primary mb-2">2020</div>
                    <p className="font-sans text-sm text-muted-foreground">Foundation as 1YOUAE</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-4xl font-serif font-semibold text-primary mb-2">2023</div>
                    <p className="font-sans text-sm text-muted-foreground">Evolution to OneUAE</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg">
                    <div className="text-4xl font-serif font-semibold text-primary mb-2">2026</div>
                    <p className="font-sans text-sm text-muted-foreground">National Recognition</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
