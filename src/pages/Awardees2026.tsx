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
  const { isRTL } = useLanguage();
  const [awardees, setAwardees] = useState<Awardee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    setError(false);
    fetch("/data/awardees-2026.json")
      .then((res) => { if (!res.ok) throw new Error("Failed to load"); return res.json(); })
      .then((data: Awardee[]) => { setAwardees(data); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  };

  useEffect(() => { fetchData(); }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || loading || error || awardees.length === 0) return;
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      const ctx = gsap.context(() => {
        // Hero elements
        gsap.fromTo(".hero-animate", { y: 40, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 1, stagger: 0.1, ease: "power3.out",
        });

        // Animate cards individually with ScrollTrigger (not batch — more reliable on mobile)
        if (gridRef.current) {
          const cards = gridRef.current.querySelectorAll<HTMLElement>(".awardee-card");
          cards.forEach((card, i) => {
            gsap.fromTo(card, 
              { y: 40, autoAlpha: 0 }, 
              {
                y: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out",
                delay: (i % 4) * 0.08,
                scrollTrigger: {
                  trigger: card,
                  start: "top 95%",
                  once: true,
                },
              }
            );
          });
        }

        gsap.fromTo(".cta-animate", { y: 30, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.8,
          scrollTrigger: { trigger: ".cta-section", start: "top 85%" },
        });
      }, mainRef);
      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
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
        {/* Hero — asymmetric editorial layout */}
        <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 overflow-hidden">
          {/* Large decorative year */}
          <div className="absolute top-20 md:top-16 right-0 pointer-events-none select-none overflow-hidden">
            <span className="hero-animate text-[8rem] md:text-[14rem] lg:text-[18rem] font-display text-foreground/[0.03] leading-none tracking-tighter block translate-x-[10%]">
              2026
            </span>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
            <div className={`max-w-3xl ${isRTL ? "text-right ml-auto" : "text-left"}`}>
              <p className="hero-animate text-primary text-[11px] font-semibold tracking-[0.25em] uppercase mb-6">
                The ONE UAE Awards
              </p>
              
              <h1 className="hero-animate text-[clamp(2.5rem,8vw,6rem)] font-display text-foreground leading-[0.95] tracking-tight mb-6">
                Award<br />Recipients
              </h1>
              
              <div className="hero-animate h-px w-16 bg-primary/50 mb-6" />
              
              <p className="hero-animate text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
                {loading 
                  ? "Retrieving honourees…" 
                  : `${awardees.length} pioneers and organisations recognised for outstanding contribution across ${awardees.length > 18 ? '18' : awardees.length} categories.`}
              </p>
            </div>
          </div>
        </section>

        {/* Grid — dark section */}
        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            {/* Count + decorative line */}
            {!loading && !error && awardees.length > 0 && (
              <div className={`flex items-center gap-4 mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-background/25 text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
                  {awardees.length} Honourees
                </span>
                <div className="flex-1 h-px bg-background/10" />
              </div>
            )}

            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="aspect-[3/4] w-full rounded-lg bg-background/10" />
                    <Skeleton className="h-3 w-2/3 bg-background/10" />
                    <Skeleton className="h-2 w-full bg-background/10" />
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
                <p className="text-sm mt-2">The 2026 honourees will be listed here shortly.</p>
              </div>
            ) : (
              <ul ref={gridRef} className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
                {awardees.map((awardee, index) => (
                  <li key={awardee.slug} className="awardee-card" style={{ visibility: 'hidden' }}>
                    <Link
                      to={`/awardees/2026/${awardee.slug}`}
                      className="group block h-full"
                    >
                      <article className="h-full flex flex-col">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-background/5">
                          <img
                            src={`/awardees/2026/${awardee.image}`}
                            alt={awardee.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            loading="lazy"
                          />
                          {/* Gradient overlay at bottom */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                          
                          {/* Number */}
                          <span className="absolute top-3 left-3 text-[10px] font-mono text-white/30 tracking-wider">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          
                          {/* Name overlay on image — mobile friendly */}
                          <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 ${isRTL ? 'text-right' : ''}`}>
                            <h3 className="text-sm md:text-base font-display text-white leading-snug mb-0.5 drop-shadow-lg">
                              {awardee.name}
                            </h3>
                            <p className="text-[10px] md:text-xs text-white/60 leading-tight line-clamp-2">
                              {awardee.award}
                            </p>
                          </div>
                          
                          {/* Hover arrow */}
                          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        
                        {/* Minimal text below — organisation only */}
                        <div className={`pt-2.5 pb-1 ${isRTL ? 'text-right' : ''}`}>
                          <p className="text-[11px] text-background/35 truncate italic">
                            {awardee.organization}
                          </p>
                        </div>
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* CTA — clean, not boxed */}
        <section className="cta-section py-24 md:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
            <div className="cta-animate">
              <p className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
                2027 Edition
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5 leading-tight">
                Nominations for 2027
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
                To submit a nomination for the next edition, please contact the Awards Secretariat.
              </p>
              <Link to="/contact">
                <Button size="lg" className={`h-13 px-8 text-sm tracking-wide group ${isRTL ? "flex-row-reverse" : ""}`}>
                  Contact Secretariat
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
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
