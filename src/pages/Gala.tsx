import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import trophyBanner from "@/assets/trophy-banner.jpeg";

const Gala = () => {
  const programFlow = [
    { time: "6:00 PM", event: "Reception & Networking", description: "Welcome drinks and networking" },
    { time: "6:45 PM", event: "Opening Ceremony", description: "Welcome address and opening remarks" },
    { time: "7:15 PM", event: "Award Presentations", description: "Recognition across all categories" },
    { time: "8:45 PM", event: "Gala Dinner", description: "Fine dining with entertainment" },
    { time: "10:00 PM", event: "Closing Remarks", description: "Final address and networking" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Gala Night - ONE UAE International Business Awards 2026"
        description="Join us for an exclusive black-tie awards ceremony on February 6th, 2026 at Zabeel Ladies Club. An evening celebrating excellence and national pride."
        keywords="UAE gala night, awards ceremony Dubai, black tie event, ONE UAE gala 2026, international business awards"
        path="/gala"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero Banner - Clean, no watermark */}
        <section className="relative pt-20">
          <div className="relative h-[45vh] min-h-[360px] overflow-hidden">
            <img 
              src={trophyBanner} 
              alt="ONE UAE Awards Trophy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          
          {/* Floating Date Card */}
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="relative -mt-24">
              <div className="inline-block bg-background border border-border rounded-2xl p-8 shadow-lg">
                <p className="editorial-label mb-2">Save the Date</p>
                <p className="font-display text-4xl md:text-5xl text-foreground">
                  February 6<sup className="text-primary">,</sup> 2026
                </p>
                <p className="text-muted-foreground mt-2">Awards Gala Night</p>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="section-compact bg-background border-b border-border">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <CountdownTimer />
          </div>
        </section>

        {/* Event Overview - Asymmetric layout */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              <div className="lg:col-span-3">
                <AnimatedSection>
                  <p className="editorial-label mb-4">The Evening</p>
                  <h2 className="section-title-editorial mb-6">
                    An Exclusive Black-Tie Celebration
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The ONE UAE International Business Awards Gala brings together distinguished leaders, innovators, and visionaries from across the Emirates. This prestigious evening celebrates the extraordinary achievements of individuals and organizations who embody the spirit of excellence.
                  </p>
                  <div className="gold-rule-left" />
                </AnimatedSection>
              </div>
              
              {/* Quick Info */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Calendar, label: "Date", value: "February 6, 2026" },
                    { icon: MapPin, label: "Venue", value: "Zabeel Ladies Club" },
                    { icon: Clock, label: "Time", value: "6:00 PM onwards" },
                    { icon: Users, label: "Guests", value: "750+" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <AnimatedSection key={index} delay={index * 100}>
                        <div className="card-minimal">
                          <Icon className="w-4 h-4 text-primary mb-2" />
                          <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                          <p className="font-medium text-foreground text-sm">{item.value}</p>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details - Side by side cards */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection>
                <div className="card-standard h-full">
                  <p className="editorial-label mb-4">Location</p>
                  <h3 className="font-display text-xl text-foreground mb-4">Venue</h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p className="font-medium text-foreground">Main Ballroom</p>
                    <p>Zabeel Ladies Club</p>
                    <p>Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <div className="card-standard h-full">
                  <p className="editorial-label mb-4">Attire</p>
                  <h3 className="font-display text-xl text-foreground mb-4">Dress Code</h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p className="font-medium text-foreground">Black Tie / National Dress</p>
                    <p>Formal evening attire required</p>
                    <p>Traditional national dress welcome</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Program Flow - Timeline */}
        <section className="section-breathing bg-deep-charcoal text-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <p className="editorial-label text-white/40 mb-4">Schedule</p>
              <h2 className="font-display text-3xl md:text-4xl text-white">
                Program Flow
              </h2>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[72px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
              
              <div className="space-y-4">
                {programFlow.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <div className="flex gap-6 p-5 rounded-xl bg-white/5 hover:bg-white/[0.07] transition-colors">
                      <div className="flex-shrink-0 w-16 text-right">
                        <span className="text-primary font-medium text-sm">{item.time}</span>
                      </div>
                      <div className="flex-shrink-0 relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm mb-0.5">{item.event}</h4>
                        <p className="text-white/50 text-xs">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <AnimatedSection>
              <p className="editorial-label mb-4">Join Us</p>
              <h2 className="section-title-editorial mb-6">
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
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gala;