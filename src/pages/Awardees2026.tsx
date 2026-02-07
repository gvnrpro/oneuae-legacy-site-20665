import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RefreshCcw, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { gsap } from "@/utils/gsap-config";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { useLanguage } from "@/contexts/LanguageContext";

// Register ScrollTrigger for GSAP
gsap.registerPlugin(ScrollTrigger);

interface Awardee {
  name: string;
  organization: string;
  award: string;
  year: number;
  slug: string;
  image: string;
}

const Awardees2026 = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLUListElement>(null);
  const { isRTL } = useLanguage(); // Removed 't' as we aren't using it for the fixed text
  const [awardees, setAwardees] = useState<Awardee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    setError(false);
    fetch("/data/awardees-2026.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then((data: Awardee[]) => {
        setAwardees(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || loading || error) return;
    ScrollTrigger.refresh();
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-animate", { y: 40, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 1, stagger: 0.1, ease: "power3.out",
      });

      if (gridRef.current) {
        const cards = gsap.utils.toArray<HTMLElement>(".awardee-card");
        ScrollTrigger.batch(cards, {
          start: "top 90%",
          onEnter: (batch) => {
            gsap.fromTo(batch, { y: 50, autoAlpha: 0 }, {
                y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1, ease: "power2.out", overwrite: true,
            });
          },
          once: true,
        });
      }

      gsap.fromTo(".cta-animate", { y: 30, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.8,
          scrollTrigger: { trigger: ".cta-section", start: "top 85%" },
      });
    }, mainRef);
    return () => ctx.revert();
  }, [loading, error, awardees]);

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <SEOHead
        title="2026 Awardees - ONE UAE International Business Awards"
        description="Celebrating the distinguished recipients of the ONE UAE International Business Awards 2026."
        keywords="ONE UAE awardees 2026, business excellence, UAE awards"
        path="/awardees/2026"
      />
      <Navigation />

      <main id="main-content">
        {/* --- HERO SECTION (HARDCODED) --- */}
        <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-transparent pointer-events-none -z-10" />
          
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className={`${isRTL ? "text-right" : "text-left"}`}>
              <span className="hero-animate editorial-label mb-4 inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                ONE UAE Awards 2026
              </span>
              
              <h1 className="hero-animate text-4xl sm:text-5xl md:text-7xl font-display text-foreground leading-[1.1] mb-6 tracking-tight">
                Award Recipients
              </h1>
              
              <p className="hero-animate text-muted-foreground text-base md:text-xl max-w-2xl leading-relaxed">
                {loading 
                  ? "Retrieving honorees..." 
                  : "Celebrating the pioneers and organizations recognized at the ONE UAE Awards 2026."}
              </p>
            </div>
          </div>
        </section>

        {/* --- GRID SECTION --- */}
        <section className="py-16 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-[3/4] w-full rounded-xl bg-background/10" />
                    <Skeleton className="h-4 w-2/3 bg-background/10" />
                    <Skeleton className="h-3 w-full bg-background/10" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/5">
                <p className="text-background/70 mb-6">Failed to load recipients.</p>
                <Button variant="outline" onClick={fetchData} className="gap-2 border-white/20 text-background hover:bg-white/10">
                   <RefreshCcw className="w-4 h-4" /> Retry
                </Button>
              </div>
            ) : awardees.length === 0 ? (
              <div className="text-center py-24 opacity-60">
                <Award className="w-12 h-12 mx-auto mb-4 text-background/30" />
                <h3 className="text-xl font-display">Coming Soon</h3>
                <p className="text-sm mt-2">The 2026 honorees will be listed here shortly.</p>
              </div>
            ) : (
              <ul ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {awardees.map((awardee) => (
                  <li key={awardee.slug} className="awardee-card opacity-0">
                    <Link
                      to={`/awardees/2026/${awardee.slug}`}
                      className="group flex flex-col h-full rounded-xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 hover:md:border-primary/50 hover:md:-translate-y-2 hover:shadow-2xl"
                    >
                      <article className="flex flex-col h-full">
                        <div className="aspect-[3/4] overflow-hidden bg-background/10">
                          <img
                            src={`/awardees/2026/${awardee.image}`}
                            alt={awardee.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className={`p-6 flex-1 flex flex-col ${isRTL ? "text-right" : "text-left"}`}>
                          <p className="text-[10px] font-bold tracking-widest text-primary mb-2 uppercase">
                            {awardee.award}
                          </p>
                          <h3 className="text-xl font-display text-background leading-snug mb-4 group-hover:text-primary transition-colors">
                            {awardee.name}
                          </h3>
                          <div className="mt-auto pt-4 border-t border-white/10">
                            <p className="text-xs text-background/50 italic truncate">
                              {awardee.organization}
                            </p>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* --- CTA SECTION (HARDCODED) --- */}
        <section className="cta-section py-20 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
            <div className="cta-animate bg-muted/30 rounded-3xl p-8 md:p-16 border border-border/50">
              <span className="editorial-label mb-4 block text-primary font-bold tracking-[0.2em] uppercase text-xs">
                2027 Edition
              </span>
              <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
                Submit a Nomination
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                To submit a nomination for the 2027 edition of the ONE UAE Awards, please contact the Awards Secretariat.
              </p>
              <Link to="/contact">
                <Button size="lg" className={`h-14 px-10 text-base rounded-full shadow-lg group gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  Contact Awards Secretariat
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:-translate-x-2" : "group-hover:translate-x-2"}`} />
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

export default Awardees2026;
