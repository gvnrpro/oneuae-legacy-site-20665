import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import NominationForm from "@/components/NominationForm";
import SEOHead from "@/components/SEOHead";

const Nominate = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Nominate - OneUAE Awards 2026"
        description="Submit a nomination for the OneUAE Awards 2026. Recognize excellence and honor individuals making extraordinary contributions to the Emirates."
        keywords="UAE nomination, nominate leader, OneUAE nomination, award nomination, recognize excellence"
        path="/nominate"
      />
      <Navigation />
      
      <main className="pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-6">
              Submit a Nomination
            </h1>
            <div className="gold-divider mb-8 max-w-md mx-auto" />
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Recognize excellence. Nominate an individual or organization making extraordinary contributions to the Emirates.
            </p>
          </div>

          <div className="mb-16 fade-in-up">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Time Until Awards
              </h2>
            </div>
            <CountdownTimer />
          </div>

          <div className="max-w-4xl mx-auto fade-in-up">
            <NominationForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Nominate;
