import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building2, Trophy, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Skeleton } from "@/components/ui/skeleton";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";

interface Awardee {
  name: string;
  organization: string;
  award: string;
  year: number;
  slug: string;
  image: string;
}

const SITE_URL = "https://oneuaeawards.ae";

const AwardeeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const mainRef = useRef<HTMLDivElement>(null);
  const { isRTL } = useLanguage();

  const [awardee, setAwardee] = useState<Awardee | null>(null);
  const [allAwardees, setAllAwardees] = useState<Awardee[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    fetch("/data/awardees-2026.json")
      .then((res) => res.json())
      .then((data: Awardee[]) => {
        setAllAwardees(data);
        setAwardee(data.find((a) => a.slug === slug) || null);
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
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, [loading, slug]);

  const currentIndex = allAwardees.findIndex((a) => a.slug === slug);
  const prevAwardee = currentIndex > 0 ? allAwardees[currentIndex - 1] : null;
  const nextAwardee =
    currentIndex < allAwardees.length - 1
      ? allAwardees[currentIndex + 1]
      : null;

  if (loading) {
    return (
      <div ref={mainRef} className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20 container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <Skeleton className="h-[480px] rounded-xl" />
            <div className="space-y-6">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!awardee) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-display mb-4">Awardee Not Found</h1>
          <Link to="/awardees/2026">
            <Button variant="outline">Back to All Awardees</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const ogImageUrl = `${SITE_URL}/awardees/2026/${awardee.image}`;
  const pageUrl = `${SITE_URL}/awardees/2026/${awardee.slug}`;

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? "rtl" : "ltr"}>
      <SEOHead
        title={`${awardee.name} – ONE UAE Awards 2026`}
        description={`${awardee.name} received the ${awardee.award} at the ONE UAE International Business Awards 2026.`}
        path={`/awardees/2026/${awardee.slug}`}
        image={ogImageUrl}
      />

      {/* Additional structured data for the awardee */}
      <Helmet>
        <meta property="og:image:alt" content={`${awardee.name} – ${awardee.award}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: awardee.name,
            award: awardee.award,
            image: ogImageUrl,
            url: pageUrl,
            worksFor: {
              "@type": "Organization",
              name: awardee.organization,
            },
            description: `${awardee.name} received the ${awardee.award} at the ONE UAE International Business Awards 2026.`,
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-24 container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Back */}
        <Link
          to="/awardees/2026"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          All Awardees
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="reveal-up relative">
            <div className="absolute -inset-6 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl -z-10" />
            <img
              src={`/awardees/2026/${awardee.image}`}
              alt={`${awardee.name} – ${awardee.award}`}
              className="w-full h-auto rounded-xl shadow-2xl cursor-zoom-in transition-transform duration-500 hover:scale-[1.02]"
              onClick={() => setIsPreviewOpen(true)}
            />
          </div>

          {/* Details */}
          <div className="reveal-up lg:sticky lg:top-32">
            <span className="editorial-label block mb-4">
              Honoured at the ONE UAE Awards 2026
            </span>

            <h1 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
              {awardee.name}
            </h1>

            <div className="gold-divider-left mb-8" />

            {/* Award */}
            <div className="flex gap-4 mb-8">
              <Trophy className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Award Title
                </p>
                <p className="text-2xl font-display leading-snug">
                  {awardee.award}
                </p>
              </div>
            </div>

            {/* Organisation */}
            <div className="flex gap-4 mb-10">
              <Building2 className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Organisation
                </p>
                <p className="text-lg">{awardee.organization}</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
              ONE UAE Awards 2026
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        {(prevAwardee || nextAwardee) && (
          <div className="mt-24 pt-10 border-t border-border flex justify-between">
            {prevAwardee ? (
              <Link to={`/awardees/2026/${prevAwardee.slug}`} className="text-sm">
                ← {prevAwardee.name}
              </Link>
            ) : <span />}

            {nextAwardee ? (
              <Link to={`/awardees/2026/${nextAwardee.slug}`} className="text-sm">
                {nextAwardee.name} →
              </Link>
            ) : <span />}
          </div>
        )}
      </main>

      {/* Image Preview */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={() => setIsPreviewOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setIsPreviewOpen(false)}
          >
            <X />
          </button>
          <img
            src={`/awardees/2026/${awardee.image}`}
            alt={awardee.name}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AwardeeDetail;
