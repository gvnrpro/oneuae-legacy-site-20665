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
          {/* Hero Banner */}
          <div className="max-w-6xl mx-auto mb-20 fade-in">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/10 via-gold-light/5 to-gold-dark/10 p-12 md:p-16 border border-gold/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl" />
              <div className="relative text-center">
                <h1 className="font-serif font-bold text-foreground mb-6 text-gradient-gold" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                  About OneUAE Awards
                </h1>
                <div className="gold-divider mb-6 max-w-md mx-auto" />
                <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A National Platform for Excellence
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-20 fade-in-up">
              <div className="group bg-gradient-to-br from-card to-secondary p-8 md:p-10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/30">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="font-serif text-3xl font-semibold text-primary mb-4">Our Vision</h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  To establish a distinguished platform that recognizes and celebrates the individuals and organizations 
                  who exemplify the highest standards of excellence, innovation, and service to the United Arab Emirates.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-card to-secondary p-8 md:p-10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/30">
                  <span className="text-3xl">✨</span>
                </div>
                <h2 className="font-serif text-3xl font-semibold text-primary mb-4">Our Mission</h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  OneUAE Awards is dedicated to honouring the leaders, visionaries, and changemakers who contribute 
                  to the prosperity and cultural richness of the Emirates. Through our annual recognition ceremony on 
                  <strong className="text-primary"> January 4th, 2026</strong>, we aim to inspire continued excellence.
                </p>
              </div>
            </div>

            {/* Enhanced Patronage Section */}
            <section className="mb-20 fade-in-up">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-card to-secondary p-10 md:p-14 border-2 border-gold/30 shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl" />
                
                <div className="relative">
                  <h2 className="font-serif text-4xl font-semibold text-center mb-12 text-gradient-gold">Under the Patronage</h2>
                  
                  <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-light via-gold to-gold-dark rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gold shadow-2xl shadow-gold/40">
                        <img 
                          src={sheikhPortrait} 
                          alt="H.E. Sheikh Sultan Bin Nasser Bin Humaid Rashed Al Nuaimi" 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                        H.E. Sheikh Sultan Bin Nasser<br />Bin Humaid Rashed Al Nuaimi
                      </h3>
                      <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                        OneUAE Awards is honoured to operate under the distinguished patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Rashed Al Nuaimi, 
                        whose commitment to excellence and national development continues to inspire our mission.
                      </p>
                      <div className="inline-block px-6 py-3 bg-gold/10 border border-gold/30 rounded-full">
                        <p className="font-sans text-sm text-primary font-medium tracking-wide">Distinguished Patron</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Journey Enhanced */}
            <section className="mb-20 fade-in-up">
              <div className="bg-gradient-to-r from-secondary via-card to-secondary p-10 md:p-12 rounded-2xl border border-primary/20">
                <h2 className="font-serif text-4xl font-semibold text-primary mb-8 text-center">Our Journey</h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6 max-w-4xl mx-auto">
                  OneUAE Awards evolved from the 1YOUAE initiative, expanding our commitment to recognizing excellence 
                  across every sector of the Emirates. What began as a vision to honor outstanding contributions has grown 
                  into a national platform celebrating the diverse achievements that define the UAE's spirit.
                </p>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Each year, we bring together leaders, innovators, and visionaries who exemplify the values of unity, 
                  vision, and excellence. Our awards ceremony has become a symbol of national pride, highlighting the 
                  remarkable individuals and organizations shaping the future of the Emirates.
                </p>
              </div>
            </section>

            {/* Values Section */}
            <section className="mb-20 fade-in-up">
              <h2 className="font-serif text-4xl font-semibold text-center mb-12 text-gradient-gold">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-gradient-to-br from-card to-secondary rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/30">
                    <span className="text-4xl">🤝</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Unity</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    Celebrating the strength that comes from our diverse community working together towards shared goals.
                  </p>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-card to-secondary rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/30">
                    <span className="text-4xl">👁️</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Vision</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    Honoring forward-thinking leaders who shape the future through innovation and strategic thinking.
                  </p>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-card to-secondary rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/30">
                    <span className="text-4xl">⭐</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Excellence</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    Recognizing exceptional achievement and unwavering commitment to the highest standards.
                  </p>
                </div>
              </div>
            </section>

            {/* Selection Process */}
            <section className="fade-in-up">
              <div className="bg-gradient-to-br from-gold/5 via-background to-gold-light/5 p-10 md:p-14 rounded-2xl border border-gold/20">
                <h2 className="font-serif text-4xl font-semibold text-primary mb-10 text-center">Selection Process</h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-gold/30">
                      1
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Nomination</h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        Individuals and organizations submit nominations highlighting exceptional achievements and contributions to the UAE.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-gold/30">
                      2
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Expert Review</h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        A distinguished panel of judges evaluates nominations based on impact, innovation, and alignment with award criteria.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-gold/30">
                      3
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Final Selection</h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        Winners are selected and honored at our prestigious annual ceremony, celebrating their remarkable achievements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
