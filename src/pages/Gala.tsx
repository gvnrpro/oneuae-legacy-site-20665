import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Clock, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import SEOHead from "@/components/SEOHead";
import trophyBanner from "@/assets/trophy-banner.jpeg";

const Gala = () => {
  const programFlow = [
    { time: "6:00 PM", event: "Reception & Networking", description: "Welcome drinks and networking with distinguished guests" },
    { time: "6:45 PM", event: "Opening Ceremony", description: "Welcome address and opening remarks" },
    { time: "7:15 PM", event: "Award Presentations", description: "Recognition of excellence across all categories" },
    { time: "8:45 PM", event: "Gala Dinner", description: "Fine dining experience with entertainment" },
    { time: "10:00 PM", event: "Closing Remarks", description: "Final address and networking" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Gala Night - ONE UAE International Business Awards 2026"
        description="Join us for an exclusive black-tie awards ceremony on January 4th, 2026 at Zabeel Ladies Club. An evening celebrating excellence and national pride."
        keywords="UAE gala night, awards ceremony Dubai, black tie event, ONE UAE gala 2026, international business awards"
        path="/gala"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Banner */}
        <section className="relative pt-20">
          <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <img 
              src={trophyBanner} 
              alt="ONE UAE Awards Trophy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  January 4, 2026
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Awards Gala Night
                </h1>
                <p className="text-white/80 text-lg max-w-xl mx-auto">
                  An evening of elegance, celebration, and national pride
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="section-padding-sm bg-background border-b border-border">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <CountdownTimer />
          </div>
        </section>

        {/* Event Overview */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  The Evening
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The ONE UAE International Business Awards Gala is an exclusive black-tie ceremony bringing together distinguished leaders, innovators, and visionaries from across the Emirates. This prestigious evening celebrates the extraordinary achievements of individuals and organizations who embody the spirit of excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Guests will experience a sophisticated evening featuring award presentations, inspiring speeches, and networking opportunities with the nation's most influential figures.
                </p>
              </div>
              
              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: "Date", value: "January 4, 2026" },
                  { icon: MapPin, label: "Venue", value: "Zabeel Ladies Club" },
                  { icon: Clock, label: "Time", value: "6:00 PM onwards" },
                  { icon: Users, label: "Attendees", value: "750+ Guests" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="card-premium rounded-xl p-5">
                      <Icon className="w-5 h-5 text-primary mb-3" />
                      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium text-foreground text-sm">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="section-padding bg-secondary/50">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Event Details
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium rounded-2xl p-8">
                <h3 className="font-display text-xl text-foreground mb-6">Venue</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="font-medium text-foreground">Main Ballroom</p>
                  <p>Zabeel Ladies Club</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="card-premium rounded-2xl p-8">
                <h3 className="font-display text-xl text-foreground mb-6">Dress Code</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="font-medium text-foreground">Black Tie / National Dress</p>
                  <p>Formal evening attire required</p>
                  <p>Traditional national dress welcome</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Flow */}
        <section className="section-padding bg-deep-charcoal text-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Program Flow
              </h2>
              <p className="text-white/60">
                A carefully curated evening of celebration
              </p>
            </div>
            
            <div className="space-y-6">
              {programFlow.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-24">
                    <span className="text-primary font-medium">{item.time}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    {index < programFlow.length - 1 && (
                      <div className="w-px h-full bg-white/20 mt-2" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">{item.event}</h4>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Be Part of the Celebration
            </h2>
            <p className="text-muted-foreground mb-8">
              Submit your nomination or become a partner to join us at this prestigious event.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/nominate">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group">
                  Submit Nomination
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/partnerships">
                <Button size="lg" variant="outline" className="px-8 py-6 rounded-full group">
                  Become a Partner
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

export default Gala;
