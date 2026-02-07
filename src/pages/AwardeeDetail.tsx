import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building2, Trophy } from "lucide-react";
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

const AwardeeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const mainRef = useRef<HTMLDivElement>(null);
  const { isRTL } = useLanguage();
  const [awardee, setAwardee] = useState<Awardee | null>(null);
  const [allAwardees, setAllAwardees] = useState<Awardee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/awardees-2026.json")
      .then((res) => res.json())
      .then((data: Awardee[]) => {
        setAllAwardees(data);
        const found = data.find((a) => a.slug === slug);
        setAwardee(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

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
  }, [loading, slug]);

  // Find previous/next awardees for navigation
  const currentIndex = allAwardees.findIndex((a) => a.slug === slug);
  const prevAwardee = currentIndex > 0 ? allAwardees[currentIndex - 1] : null;
  const nextAwardee = currentIndex < allAwardees.length - 1 ? allAwardees[currentIndex + 1] : null;

  if (loading) {
    return (
      <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <Skeleton className="aspect-[3/4] w-full rounded-lg" />
              <div className="space-y-4 lg:pt-8">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!awardee) {
    return (
      <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">
            <h1 className="text-3xl font-display text-foreground mb-4">Awardee Not Found</h1>
            <p className="text-muted-foreground mb-8">The awardee you're looking for could not be found.</p>
            <Link to="/awardees/2026">
              <Button variant="outline">Back to All Awardees</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <SEOHead
        title={`${awardee.name} - ONE UAE Awards 2026`}
        description={`${awardee.name} received the ${awardee.award} at the ONE UAE International Business Awards 2026.`}
        keywords={`${awardee.name}, ${awardee.award}, ONE UAE Awards 2026, ${awardee.organization}`}
        path={`/awardees/2026/${awardee.slug}`}
      />
      <Navigation />

      <main id="main-content">
        {/* Back link */}
        <section className="pt-24 pb-4">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <Link
              to="/awardees/2026"
              className={`inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              All Awardees
            </Link>
          </div>
        </section>

        {/* Main content */}
        <section className="pt-4 pb-20 md:pb-28">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${isRTL ? "lg:grid-flow-dense" : ""}`}>
              {/* Photo */}
              <div className={`reveal-up ${isRTL ? "lg:col-start-2" : ""}`}>
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={`/awardees/2026/${awardee.image}`}
                    alt={`${awardee.name} – ${awardee.award}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className={`reveal-up lg:sticky lg:top-32 ${isRTL ? "lg:col-start-1 lg:row-start-1 text-right" : ""}`}>
                <span className="editorial-label mb-4 block">2026 Awardee</span>

                <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-6">
                  {awardee.name}
                </h1>

                <div className="gold-divider-left mb-8" />

                {/* Award */}
                <div className={`flex items-start gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Trophy className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Award</p>
                    <p className="text-xl font-display text-foreground leading-snug">
                      {awardee.award}
                    </p>
                  </div>
                </div>

                {/* Organisation */}
                <div className={`flex items-start gap-4 mb-10 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Organisation</p>
                    <p className="text-lg text-foreground">{awardee.organization}</p>
                  </div>
                </div>

                {/* Year badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  ONE UAE Awards 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next navigation */}
        {(prevAwardee || nextAwardee) && (
          <section className="py-12 border-t border-border">
            <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
              <div className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                {prevAwardee ? (
                  <Link
                    to={`/awardees/2026/${prevAwardee.slug}`}
                    className={`group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <ArrowLeft className={`w-4 h-4 group-hover:-translate-x-1 transition-transform ${isRTL ? "rotate-180 group-hover:translate-x-1" : ""}`} />
                    <div className={isRTL ? "text-right" : ""}>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Previous</p>
                      <p className="text-sm font-medium text-foreground">{prevAwardee.name}</p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextAwardee ? (
                  <Link
                    to={`/awardees/2026/${nextAwardee.slug}`}
                    className={`group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <div className={isRTL ? "text-left" : "text-right"}>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Next</p>
                      <p className="text-sm font-medium text-foreground">{nextAwardee.name}</p>
                    </div>
                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AwardeeDetail;
