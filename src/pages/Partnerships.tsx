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
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">{tier.icon}</div>
                <h3 className="font-serif text-3xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="font-serif text-2xl text-primary mb-6">{tier.amount}</div>
                <div className="h-px bg-primary/20 mb-6" />
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="font-sans text-muted-foreground flex items-start font-light">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
