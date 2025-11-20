import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PartnershipForm from "@/components/PartnershipForm";
import SEOHead from "@/components/SEOHead";
import { Star, Award, Trophy, Sparkles } from "lucide-react";

const Partnerships = () => {
  const tiers = [
    {
      icon: <Trophy className="w-12 h-12" />,
      name: "Gold Partner",
      amount: "AED 100,000",
      benefits: [
        "Premier brand positioning at awards ceremony",
        "Full-page feature in awards programme",
        "VIP seating for 10 guests",
        "Logo on all digital and print materials",
        "Exclusive networking opportunities",
        "Social media feature campaign",
      ],
    },
    {
      icon: <Award className="w-12 h-12" />,
      name: "Silver Partner",
      amount: "AED 75,000",
      benefits: [
        "Prominent brand placement at ceremony",
        "Half-page feature in awards programme",
        "VIP seating for 6 guests",
        "Logo on digital materials",
        "Networking opportunities",
        "Social media mentions",
      ],
    },
    {
      icon: <Star className="w-12 h-12" />,
      name: "Bronze Partner",
      amount: "AED 50,000",
      benefits: [
        "Brand placement at ceremony",
        "Quarter-page feature in programme",
        "VIP seating for 4 guests",
        "Logo on select materials",
        "Networking access",
      ],
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      name: "Red-Carpet Partner",
      amount: "AED 25,000",
      benefits: [
        "Red-carpet brand visibility",
        "Recognition in programme",
        "VIP seating for 2 guests",
        "Digital presence",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Partnership Opportunities - OneUAE Awards 2026"
        description="Partner with OneUAE Awards and align your brand with excellence. Explore sponsorship opportunities for the UAE's most prestigious awards ceremony."
        keywords="UAE sponsorship, awards partnership, brand partnership, UAE corporate sponsorship"
        path="/partnerships"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Partnership Opportunities
            </h1>
            <div className="gold-divider mb-8 max-w-md mx-auto" />
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Align your brand with excellence. Partner with OneUAE Awards to showcase your commitment 
              to celebrating national achievement and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 fade-in-up">
            {tiers.map((tier, index) => {
              const tierStyles = [
                {
                  gradient: 'from-gold via-gold-light to-gold',
                  border: 'border-gold',
                  shadow: 'shadow-[0_20px_60px_rgba(212,175,55,0.4)]',
                  badge: 'Premium Choice',
                  scale: 'md:scale-105'
                },
                {
                  gradient: 'from-gray-300 via-gray-100 to-gray-300',
                  border: 'border-gray-300',
                  shadow: 'shadow-[0_15px_40px_rgba(0,0,0,0.15)]',
                  badge: null,
                  scale: ''
                },
                {
                  gradient: 'from-amber-700 via-amber-500 to-amber-700',
                  border: 'border-amber-500',
                  shadow: 'shadow-[0_15px_40px_rgba(217,119,6,0.3)]',
                  badge: null,
                  scale: ''
                },
                {
                  gradient: 'from-uae-red via-red-500 to-uae-red',
                  border: 'border-uae-red/50',
                  shadow: 'shadow-[0_15px_40px_rgba(220,38,38,0.25)]',
                  badge: 'Entry Level',
                  scale: ''
                },
              ];
              
              const style = tierStyles[index];
              
              return (
                <div
                  key={index}
                  className={`relative group bg-gradient-to-br from-card to-secondary p-10 rounded-2xl border-2 ${style.border} hover:${style.border} transition-all duration-500 ${style.shadow} hover:scale-105 ${style.scale}`}
                >
                  {/* Badge if applicable */}
                  {style.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className={`px-6 py-2 bg-gradient-to-r ${style.gradient} rounded-full text-white font-sans text-sm font-semibold shadow-lg`}>
                        {style.badge}
                      </div>
                    </div>
                  )}
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${style.gradient} opacity-10 rounded-bl-full blur-2xl`} />
                  
                  {/* Icon with Gradient */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${style.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-xl mx-auto`}>
                    {tier.icon}
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
                    {tier.name}
                  </h3>
                  
                  <div className="font-serif text-3xl text-primary mb-8 text-center font-bold">{tier.amount}</div>
                  
                  <div className={`h-1 bg-gradient-to-r ${style.gradient} mb-8 rounded-full`} />
                  
                  <ul className="space-y-4">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="font-sans text-muted-foreground flex items-start gap-3">
                        <span className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${style.gradient} rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5`}>
                          ✓
                        </span>
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${style.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                </div>
              );
            })}
          </div>

          <div className="bg-secondary p-12 rounded-lg fade-in">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4 text-center">
              Partnership Inquiry Form
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-light text-center">
              Complete the form below to discuss partnership opportunities and how we can work together 
              to celebrate excellence across the Emirates.
            </p>
            <PartnershipForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
