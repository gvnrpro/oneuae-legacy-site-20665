import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";
const Home = () => {
  return <div className="min-h-screen">
      <SEOHead />
      <Navigation />
      
      {/* Hero Section - SKGEP Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
        
        {/* Video Background */}
        <video autoPlay loop muted playsInline poster={heroBg} className="absolute inset-0 w-full h-full object-cover" onError={e => {
        e.currentTarget.style.display = 'none';
      }}>
          <source src="/hero-video.mov" type="video/quicktime" />
          <source src="/hero-video.mov" type="video/mp4" />
        </video>
        
        {/* Fallback Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10" style={{
        backgroundImage: `url(${heroBg})`
      }} />
        
        {/* Minimal Overlay - Only for text legibility */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Hero Content - Minimal & Centered */}
        <div className="relative z-10 container mx-auto px-4 text-center fade-in">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-white mb-6 tracking-wide" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}>
              ONEUAE AWARDS 2026
            </h1>
            
            <div className="font-sans text-lg md:text-xl text-white/90 mb-4 font-light" style={{
            letterSpacing: '0.03em'
          }}>
              Under the Patronage of<br />
              H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
            </div>
            
            <p className="font-sans text-base md:text-lg text-white/80 font-light" style={{
            letterSpacing: '0.1em',
            marginTop: '1rem'
          }}>
              Celebrating Growth · Development · Sustainability
            </p>
          </div>
        </div>
        
        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About OneUAE Awards - Two Column Layout */}
      <section id="main-content" className="py-30 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            {/* Left Column - Content */}
            <div className="md:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-deep-charcoal mb-8" style={{
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}>
                About OneUAE Awards
              </h2>
              
              <p className="font-sans text-base md:text-lg text-slate-gray mb-12 leading-relaxed" style={{
              fontWeight: 300,
              lineHeight: 1.8
            }}>
                The OneUAE Awards is a national platform honoring individuals and establishments driving the UAE's journey of growth, development, and sustainability. Under the patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi, the Awards celebrate excellence across vital sectors shaping the future of the nation.
              </p>
              
              <div className="space-y-8">
                <div>
                  <div className="w-10 h-px bg-gold mb-4" />
                  <h3 className="font-serif text-xl text-deep-charcoal mb-3" style={{
                  fontWeight: 500
                }}>Mission</h3>
                  <p className="font-sans text-base text-slate-gray leading-relaxed" style={{
                  fontWeight: 300,
                  lineHeight: 1.8
                }}>
                    To recognize leaders and institutions contributing to national progress and UAE Vision 2071.
                  </p>
                </div>
                
                <div>
                  <div className="w-10 h-px bg-gold mb-4" />
                  <h3 className="font-serif text-xl text-deep-charcoal mb-3" style={{
                  fontWeight: 500
                }}>Vision</h3>
                  <p className="font-sans text-base text-slate-gray leading-relaxed" style={{
                  fontWeight: 300,
                  lineHeight: 1.8
                }}>
                    To build a prestigious tradition of honoring excellence, unity, and sustainable advancement.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Subtle Accent */}
            <div className="md:col-span-2 flex items-center justify-center">
              <div className="w-px h-64 bg-gradient-to-b from-transparent via-gold to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-30 bg-cool-gray">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-deep-charcoal mb-20" style={{
          fontWeight: 500,
          letterSpacing: '0.05em'
        }}>
            The Three Pillars
          </h2>
          
          <div className="space-y-20">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl text-deep-charcoal mb-4" style={{
              fontWeight: 500
            }}>
                Growth & Economic Excellence
              </h3>
              <div className="w-16 h-px bg-gold mx-auto mb-6" />
              <p className="font-sans text-base text-slate-gray leading-relaxed" style={{
              fontWeight: 300,
              lineHeight: 1.8
            }}>
                Honoring achievements in entrepreneurship, innovation, corporate leadership, finance, retail, hospitality, technology, and digital transformation.
              </p>
            </div>
            
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl text-deep-charcoal mb-4" style={{
              fontWeight: 500
            }}>
                Development & Human Progress
              </h3>
              <div className="w-16 h-px bg-gold mx-auto mb-6" />
              <p className="font-sans text-base text-slate-gray leading-relaxed" style={{
              fontWeight: 300,
              lineHeight: 1.8
            }}>
                Recognizing contributions in education, healthcare, community service, culture, arts, and youth excellence.
              </p>
            </div>
            
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl text-deep-charcoal mb-4" style={{
              fontWeight: 500
            }}>
                Sustainability & Global Leadership
              </h3>
              <div className="w-16 h-px bg-gold mx-auto mb-6" />
              <p className="font-sans text-base text-slate-gray leading-relaxed" style={{
              fontWeight: 300,
              lineHeight: 1.8
            }}>
                Celebrating environmental stewardship, infrastructure innovation, international diplomacy, media excellence, and lifetime achievement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories - MIITE Style */}
      <section className="py-30 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-deep-charcoal mb-20" style={{
          fontWeight: 500,
          letterSpacing: '0.05em'
        }}>
            Award Categories
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Growth & Economic Excellence', 'Entrepreneurship & Innovation', 'Corporate Leadership', 'Finance & Banking', 'Retail & Hospitality', 'Technology & Digital Transformation', 'Development & Human Progress', 'Education', 'Healthcare', 'Community Service', 'Culture & Arts', 'Youth Excellence', 'Sustainability & Global Leadership', 'Sustainability & Environment', 'Infrastructure & Construction', 'International Relations & Diplomacy', 'Media & Communication', 'Lifetime Achievement & Legacy'].map(category => <div key={category} className="border border-border bg-white p-10 text-center transition-colors duration-300 hover:border-gold" style={{
            borderRadius: '4px'
          }}>
                <h3 className="font-serif text-lg text-deep-charcoal mb-4" style={{
              fontWeight: 500
            }}>
                  {category}
                </h3>
                <div className="w-10 h-px bg-gold mx-auto" />
              </div>)}
          </div>
        </div>
      </section>

      {/* Event Details - Two Column */}
      <section className="py-30 bg-cool-gray">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-deep-charcoal mb-20" style={{
          fontWeight: 500,
          letterSpacing: '0.05em'
        }}>
            Event Details
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - Event Facts */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-deep-charcoal mb-6" style={{
              fontWeight: 500
            }}>Event Facts</h3>
              <div className="space-y-4 font-sans text-base text-slate-gray" style={{
              fontWeight: 300
            }}>
                <p><span className="text-deep-charcoal" style={{
                  fontWeight: 400
                }}>Date:</span> January 4, 2026</p>
                <p><span className="text-deep-charcoal" style={{
                  fontWeight: 400
                }}>Venue:</span> Main Ballroom, Zabeel Ladies Club, Dubai</p>
                <p><span className="text-deep-charcoal" style={{
                  fontWeight: 400
                }}>Format:</span> Ceremony + Gala Dinner</p>
                <p><span className="text-deep-charcoal" style={{
                  fontWeight: 400
                }}>Attendees:</span> 750</p>
                <p><span className="text-deep-charcoal" style={{
                  fontWeight: 400
                }}>VIP Dignitaries:</span> 5–6</p>
              </div>
            </div>
            
            {/* Right - Program Flow */}
            <div className="space-y-6 md:border-l md:border-gold/30 md:pl-16">
              <h3 className="font-serif text-xl text-deep-charcoal mb-6" style={{
              fontWeight: 500
            }}>Program Flow</h3>
              <div className="space-y-4 font-sans text-base text-slate-gray" style={{
              fontWeight: 300
            }}>
                <p>6:00 PM – Reception</p>
                <p>6:45 PM – Opening</p>
                <p>7:15 PM – Award Ceremony</p>
                <p>8:45 PM – Dinner</p>
                <p>10:00 PM – Closing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Profile */}
      <section className="py-30 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-deep-charcoal mb-20" style={{
          fontWeight: 500,
          letterSpacing: '0.05em'
        }}>
            Audience Profile
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {['Government Representatives', 'Business & Corporate Leaders', 'Entrepreneurs & Innovators', 'Healthcare & Education Professionals', 'Media & Cultural Figures'].map(audience => <div key={audience} className="text-center">
                <div className="w-10 h-10 border border-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-1 h-1 bg-gold rounded-full" />
                </div>
                <p className="font-sans text-sm text-slate-gray" style={{
              fontWeight: 400
            }}>
                  {audience}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers - Minimal Equal Treatment */}
      <section className="py-30 bg-cool-gray">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-deep-charcoal mb-20" style={{
          fontWeight: 500,
          letterSpacing: '0.05em'
        }}>
            Sponsorship Tiers
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            name: 'Gold Partner',
            amount: 'AED 100,000'
          }, {
            name: 'Silver Partner',
            amount: 'AED 75,000'
          }, {
            name: 'Bronze Partner',
            amount: 'AED 50,000'
          }, {
            name: 'Red-Carpet Partner',
            amount: 'AED 25,000'
          }].map(tier => <div key={tier.name} className="border border-gold bg-white p-12 text-center transition-all duration-300 hover:border-2" style={{
            borderRadius: '4px'
          }}>
                <h3 className="font-serif text-lg text-deep-charcoal mb-4" style={{
              fontWeight: 500
            }}>
                  {tier.name}
                </h3>
                <div className="w-16 h-px bg-gold mx-auto mb-4" />
                <p className="font-sans text-base text-slate-gray" style={{
              fontWeight: 300
            }}>
                  {tier.amount}
                </p>
              </div>)}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/partnerships">
              <Button variant="outline" className="border border-gold bg-transparent text-deep-charcoal hover:bg-gold hover:text-white transition-colors duration-300" style={{
              fontWeight: 400,
              letterSpacing: '0.05em'
            }}>
                Learn More About Partnerships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal & Centered */}
      <section className="py-30 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-charcoal mb-12" style={{
          fontWeight: 500,
          letterSpacing: '0.05em'
        }}>
            Contact
          </h2>
          
          <div className="space-y-4 font-sans text-base text-slate-gray" style={{
          fontWeight: 300
        }}>
            <p className="text-deep-charcoal" style={{
            fontWeight: 400
          }}>OneUAE Awards Secretariat</p>
            <a className="block hover:text-gold transition-colors duration-300" href="mailto:info@oneuaeawards.ae">
              info@oneuaeawards.ae
            </a>
            <a href="tel:+971562555100" className="block hover:text-gold transition-colors duration-300">
              +971 56 255 5100
            </a>
          </div>
          
          <div className="uae-accent-line mx-auto mt-12" />
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;