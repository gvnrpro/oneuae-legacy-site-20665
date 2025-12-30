import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowRight, Calendar, MapPin, Clock, Users, Award, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import SEOHead from "@/components/SEOHead";
import trophyBanner from "@/assets/trophy-banner.jpeg";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";

const Gala = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const programFlow = [
    { time: "6:00 PM", event: "Reception & Networking", icon: Users },
    { time: "6:45 PM", event: "Opening Ceremony", icon: Award },
    { time: "7:15 PM", event: "Award Presentations", icon: Star },
    { time: "8:45 PM", event: "Gala Dinner", icon: Utensils },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-background">
      <SEOHead
        title="Gala Night - ONE UAE International Business Awards 2026"
        description="Join us for an exclusive black-tie awards ceremony on February 6th, 2026 at Zabeel Ladies Club."
        keywords="UAE gala night, awards ceremony Dubai, black tie event, ONE UAE gala 2026"
        path="/gala"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero */}
        <section className="pt-20">
          <div className="relative h-[50vh] min-h-[400px]">
            <img 
              src={trophyBanner} 
              alt="ONE UAE Awards Trophy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl -mt-32 relative z-10">
            <div className="reveal-up inline-block bg-background border border-border rounded-lg p-8 shadow-lg">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                Save the Date
              </span>
              <p className="text-4xl md:text-5xl font-display text-foreground">
                February 6, 2026
              </p>
              <p className="text-muted-foreground mt-2">Awards Gala Night</p>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <CountdownTimer />
          </div>
        </section>

        {/* Event Info */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div className="reveal-up">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  The Evening
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6 leading-tight">
                  An Exclusive Black-Tie Celebration
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The ONE UAE International Business Awards Gala brings together distinguished leaders, innovators, and visionaries from across the Emirates. This prestigious evening celebrates the extraordinary achievements of individuals and organizations who embody the spirit of excellence.
                </p>
              </div>
              
              <div className="reveal-up grid grid-cols-2 gap-6">
                {[
                  { icon: Calendar, label: "Date", value: "February 6, 2026" },
                  { icon: MapPin, label: "Venue", value: "Zabeel Ladies Club" },
                  { icon: Clock, label: "Time", value: "6:00 PM onwards" },
                  { icon: Users, label: "Guests", value: "750+" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="p-5 border border-border rounded-lg">
                      <Icon className="w-5 h-5 text-primary mb-3" />
                      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Program - Dark section */}
        <section className="py-24 md:py-32 lg:py-40 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="reveal-up mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-background/40 mb-4 block">
                Schedule
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-background">
                Program Flow
              </h2>
            </div>
            
            <div className="space-y-0 divide-y divide-background/10">
              {programFlow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="reveal-up py-6 flex items-center gap-6">
                    <span className="text-primary font-mono text-sm w-20 flex-shrink-0">{item.time}</span>
                    <Icon className="w-5 h-5 text-background/40 flex-shrink-0" />
                    <span className="text-background/80 text-lg">{item.event}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Venue & Dress Code */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="reveal-up p-8 bg-secondary/50 rounded-lg">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  Location
                </span>
                <h3 className="text-xl font-display text-foreground mb-4">Venue</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-foreground">Main Ballroom</p>
                  <p>Zabeel Ladies Club</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="reveal-up p-8 bg-secondary/50 rounded-lg">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                  Attire
                </span>
                <h3 className="text-xl font-display text-foreground mb-4">Dress Code</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-foreground">Black Tie / National Dress</p>
                  <p>Formal evening attire required</p>
                  <p>Traditional national dress welcome</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <div className="reveal-up">
              <span className="text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
                Join Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Be Part of the Celebration
              </h2>
              <p className="text-muted-foreground mb-10">
                Submit your nomination or become a partner to join us at this prestigious event.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/nominate">
                  <Button size="lg" className="h-14 px-8">
                    Submit Nomination
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/partnerships">
                  <Button size="lg" variant="outline" className="h-14 px-8">
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gala;
