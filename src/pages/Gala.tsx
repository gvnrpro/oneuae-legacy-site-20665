import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const Gala = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Awards Gala Night
            </h1>
            <div className="gold-divider mb-8 max-w-md mx-auto" />
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              An evening of elegance, celebration, and national pride
            </p>
          </div>

          <div className="mb-16 fade-in-up">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Event Countdown
              </h2>
              <p className="font-sans text-muted-foreground">
                Join us on January 4th, 2026
              </p>
            </div>
            <CountdownTimer />
          </div>

          <div className="max-w-4xl mx-auto space-y-12 fade-in-up">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6">
                The Evening
              </h2>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                The OneUAE Awards Gala is an exclusive black-tie ceremony bringing together distinguished leaders, 
                innovators, and visionaries from across the Emirates. This prestigious evening on <strong className="text-foreground">January 4th, 2026</strong> celebrates the 
                extraordinary achievements of individuals and organizations who embody the spirit of excellence.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed font-light">
                Guests will experience a sophisticated evening featuring award presentations, inspiring speeches, 
                cultural performances, and networking opportunities with the nation's most influential figures.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">Venue</h3>
                </div>
                <p className="font-sans text-muted-foreground">
                  Zabeel Ladies Club<br />
                  Dubai, United Arab Emirates
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">Date</h3>
                </div>
                <p className="font-sans text-muted-foreground">
                  <strong className="text-foreground">January 4th, 2026</strong>
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">Timing</h3>
                </div>
                <p className="font-sans text-muted-foreground">
                  Evening Reception & Awards Ceremony
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">Dress Code</h3>
                </div>
                <p className="font-sans text-muted-foreground">
                  Black Tie / National Dress
                </p>
              </div>
            </div>

            <section className="bg-card p-8 rounded-lg border border-primary/20">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6 text-center">
                Experience Excellence
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-sans text-xs text-muted-foreground">Gallery</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Red Carpet</h4>
                  <p className="font-sans text-sm text-muted-foreground">Exclusive photography and media coverage</p>
                </div>
                <div className="p-4">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-sans text-xs text-muted-foreground">Gallery</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Award Ceremony</h4>
                  <p className="font-sans text-sm text-muted-foreground">Honouring exceptional achievements</p>
                </div>
                <div className="p-4">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="font-sans text-xs text-muted-foreground">Gallery</span>
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Networking</h4>
                  <p className="font-sans text-sm text-muted-foreground">Connect with UAE's finest leaders</p>
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
