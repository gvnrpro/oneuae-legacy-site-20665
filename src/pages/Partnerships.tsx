import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnershipForm from "@/components/PartnershipForm";
import SEOHead from "@/components/SEOHead";
import trophyGold from "@/assets/trophy-gold.jpeg";

const Partnerships = () => {
  const tiers = [
    { name: "Gold Partner", amount: "AED 100,000" },
    { name: "Silver Partner", amount: "AED 75,000" },
    { name: "Bronze Partner", amount: "AED 50,000" },
    { name: "Red-Carpet Partner", amount: "AED 25,000" },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Partnership Opportunities - ONE UAE International Business Awards 2026"
        description="Partner with ONE UAE International Business Awards and align your brand with excellence. Explore sponsorship opportunities for the UAE's most prestigious awards ceremony."
        keywords="UAE sponsorship, awards partnership, brand partnership, UAE corporate sponsorship, international business awards"
        path="/partnerships"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Partnerships
            </h1>
            <div className="gold-divider mb-8" />
            <p className="font-sans text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Partner with ONE UAE International Business Awards to showcase your commitment to excellence
            </p>
          </div>

          {/* Trophy Visual Section */}
          <section className="mb-20 fade-in">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              <div className="w-full md:w-1/3 flex justify-center">
                <img 
                  src={trophyGold} 
                  alt="ONE UAE Awards Trophy" 
                  className="w-48 md:w-64 h-auto object-contain opacity-90"
                  style={{ filter: 'contrast(1.05)' }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                  Align your brand with excellence
                </h2>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  As a partner of the ONE UAE International Business Awards, your organization joins an elite group of visionary companies committed to celebrating and advancing excellence across the Emirates. Our partners gain exclusive visibility among 750+ distinguished attendees including government representatives, business leaders, and industry innovators.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20 fade-in">
            <h2 className="font-serif text-xl md:text-2xl font-medium text-center mb-12">Partnership tiers</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-background border border-gold p-6 md:p-8 text-center transition-colors duration-300 hover:border-gold/60"
                >
                  <h3 className="font-serif text-base md:text-xl font-medium text-foreground mb-3">
                    {tier.name}
                  </h3>
                  <div className="w-12 h-px bg-gold mx-auto mb-4" />
                  <p className="font-sans text-sm md:text-base text-gold font-light">
                    {tier.amount}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-30 bg-cool-gray fade-in">
            <div className="max-w-4xl mx-auto px-8">
              <h2 className="font-serif text-xl md:text-2xl font-medium text-center mb-8">Partnership inquiry</h2>
              <p className="font-sans text-sm md:text-base text-muted-foreground text-center mb-12 font-light max-w-2xl mx-auto">
                For detailed information about partnership benefits and to discuss customized packages, please submit an inquiry below.
              </p>
              <PartnershipForm />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
