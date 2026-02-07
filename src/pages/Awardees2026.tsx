import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t, isRTL } = useLanguage();
  const [awardees, setAwardees] = useState<Awardee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/awardees-2026.json")
      .then((res) => res.json())
      .then((data: Awardee[]) => {
        setAwardees(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || loading) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-up").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, [loading]);

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <SEOHead
        title="2026 Awardees - ONE UAE International Business Awards"
        description="Meet the 27 distinguished recipients of the ONE UAE International Business Awards 2026, honoured for their outstanding contributions across industries."
        keywords="ONE UAE awardees 2026, award recipients, UAE business excellence, international awards"
        path="/awardees/2026"
      />
      <Navigation />

      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pb-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className={`reveal-up ${isRTL ? "text-right" : ""}`}>
              <span className="editorial-label mb-4 block">2026 Awardees</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight mb-6">
                Award Recipients
              </h1>
              <p className="text-muted-foreground text-lg">
                {awardees.length > 0
                  ? `${awardees.length} individuals and organisations honoured for excellence`
                  : "Loading honorees…"}
              </p>
              <div className="gold-divider-left mt-8" />
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 md:py-28 bg-foreground text-background">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-[3/4] w-full rounded-lg" />
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {awardees.map((awardee) => (
                  <Link
                    key={awardee.slug}
                    to={`/awardees/2026/${awardee.slug}`}
                    className="reveal-up group rounded-xl overflow-hidden border border-background/10 bg-background/5 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)] block"
                  >
                    <article>
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={`/awardees/2026/${awardee.image}`}
                          alt={`${awardee.name} – ${awardee.award}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className={`p-5 ${isRTL ? "text-right" : ""}`}>
                        <h3 className="text-lg font-display text-background leading-snug mb-1">
                          {awardee.name}
                        </h3>
                        <p className="text-sm text-primary leading-relaxed mb-2">
                          {awardee.award}
                        </p>
                        <p className="text-xs text-background/50">
                          {awardee.organization}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
            <div className="reveal-up">
              <span className="editorial-label mb-4 block">Nominations</span>
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Know Someone Exceptional?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Nominate an individual or organisation whose achievements deserve recognition on the national stage.
              </p>
              <Link to="/nominate">
                <Button size="lg" className={`h-14 px-8 ${isRTL ? "flex-row-reverse" : ""}`}>
                  Submit a Nomination
                  <ArrowRight className={`w-5 h-5 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
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
