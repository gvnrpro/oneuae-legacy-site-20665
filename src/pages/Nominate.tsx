import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Mail, CheckCircle2, Calendar } from "lucide-react";

const Nominate = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Submit a Nomination
            </h1>
            <div className="gold-divider mb-8 max-w-md mx-auto" />
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Recognize excellence. Nominate an individual or organization making extraordinary contributions to the Emirates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 fade-in-up">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                Nomination Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-playfair font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      Select a Category
                    </h3>
                    <p className="font-lato text-muted-foreground leading-relaxed">
                      Review our award categories and select the one that best represents your nominee's achievements.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-playfair font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      Complete the Form
                    </h3>
                    <p className="font-lato text-muted-foreground leading-relaxed">
                      Provide detailed information about your nominee, including their achievements, impact, and contributions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-playfair font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      Submit Supporting Materials
                    </h3>
                    <p className="font-lato text-muted-foreground leading-relaxed">
                      Include supporting documents, testimonials, or media materials that demonstrate excellence.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-playfair font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      Evaluation & Selection
                    </h3>
                    <p className="font-lato text-muted-foreground leading-relaxed">
                      Our distinguished panel will review all nominations and select the most deserving candidates.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-8 rounded-lg text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                  Submit via Email
                </h3>
                <p className="font-lato text-muted-foreground mb-6 leading-relaxed">
                  Send your nomination details directly to our team
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-lato"
                  onClick={() => window.location.href = "mailto:info@oneuaeaward.ae"}
                >
                  Email Nomination
                </Button>
              </div>

              <div className="bg-secondary p-8 rounded-lg text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                  Download PDF Form
                </h3>
                <p className="font-lato text-muted-foreground mb-6 leading-relaxed">
                  Complete our official nomination form offline
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-lato"
                >
                  Download Form
                </Button>
              </div>
            </div>

            <section className="bg-card p-8 rounded-lg border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
                    Key Dates
                  </h2>
                  <div className="space-y-4 font-lato text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span><strong className="text-foreground">Nominations Open:</strong> January 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span><strong className="text-foreground">Nominations Close:</strong> March 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span><strong className="text-foreground">Finalist Announcement:</strong> April 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span><strong className="text-foreground">Awards Ceremony:</strong> To be announced</span>
                    </div>
                  </div>
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

export default Nominate;
