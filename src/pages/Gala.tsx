import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import SEOHead from "@/components/SEOHead";

const Gala = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Gala Night - OneUAE Awards 2026"
        description="Join us for an exclusive black-tie awards ceremony on January 4th, 2026 at Zabeel Ladies Club. An evening celebrating excellence and national pride."
        keywords="UAE gala night, awards ceremony Dubai, black tie event, OneUAE gala 2026"
        path="/gala"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">
              Awards Gala Night
            </h1>
            <div className="gold-divider mb-8" />
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              An evening of elegance, celebration, and national pride
            </p>
          </div>

          <div className="mb-20 fade-in">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-2">
                Event countdown
              </h2>
              <p className="font-sans text-muted-foreground font-light">
                January 4, 2026
              </p>
            </div>
            <CountdownTimer />
          </div>

          <div className="max-w-4xl mx-auto space-y-20 fade-in">
            <section>
              <h2 className="font-serif text-3xl font-medium text-foreground mb-8">
                The evening
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed font-light mb-6">
                The OneUAE Awards Gala is an exclusive black-tie ceremony bringing together distinguished leaders, 
                innovators, and visionaries from across the Emirates. This prestigious evening celebrates the 
                extraordinary achievements of individuals and organizations who embody the spirit of excellence.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed font-light">
                Guests will experience a sophisticated evening featuring award presentations, inspiring speeches, 
                and networking opportunities with the nation's most influential figures.
              </p>
            </section>

            <section className="py-30 bg-cool-gray px-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-12 text-center">Event details</h2>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-3xl mx-auto">
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">Venue</h3>
                  <div className="w-10 h-px bg-gold mb-3" />
                  <p className="font-sans text-sm text-muted-foreground font-light">
                    Main Ballroom<br />
                    Zabeel Ladies Club<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">Date</h3>
                  <div className="w-10 h-px bg-gold mb-3" />
                  <p className="font-sans text-sm text-muted-foreground font-light">
                    January 4, 2026
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">Format</h3>
                  <div className="w-10 h-px bg-gold mb-3" />
                  <p className="font-sans text-sm text-muted-foreground font-light">
                    Ceremony + Gala Dinner
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">Dress code</h3>
                  <div className="w-10 h-px bg-gold mb-3" />
                  <p className="font-sans text-sm text-muted-foreground font-light">
                    Black Tie / National Dress
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-12 text-center">Program flow</h2>
              
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="flex gap-6 pb-6 border-b border-border">
                  <span className="font-sans text-sm text-gold font-light flex-shrink-0 w-20">6:00 PM</span>
                  <span className="font-sans text-sm text-foreground font-light">Reception</span>
                </div>
                <div className="flex gap-6 pb-6 border-b border-border">
                  <span className="font-sans text-sm text-gold font-light flex-shrink-0 w-20">6:45 PM</span>
                  <span className="font-sans text-sm text-foreground font-light">Opening</span>
                </div>
                <div className="flex gap-6 pb-6 border-b border-border">
                  <span className="font-sans text-sm text-gold font-light flex-shrink-0 w-20">7:15 PM</span>
                  <span className="font-sans text-sm text-foreground font-light">Award Ceremony</span>
                </div>
                <div className="flex gap-6 pb-6 border-b border-border">
                  <span className="font-sans text-sm text-gold font-light flex-shrink-0 w-20">8:45 PM</span>
                  <span className="font-sans text-sm text-foreground font-light">Dinner</span>
                </div>
                <div className="flex gap-6 pb-6">
                  <span className="font-sans text-sm text-gold font-light flex-shrink-0 w-20">10:00 PM</span>
                  <span className="font-sans text-sm text-foreground font-light">Closing</span>
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

export default Gala;