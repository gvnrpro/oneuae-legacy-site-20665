import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Building2, Trophy, X, Share2 } from "lucide-react";
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

const AwardeeShareButtons = ({ awardee, pageUrl }: { awardee: Awardee; pageUrl: string }) => {
  const text = `${awardee.name} – ${awardee.award} | ONE UAE Awards 2026`;
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">Share</span>
      <div className="flex gap-2">
        <a href={`https://wa.me/?text=${encodeURIComponent(`${text}\n${pageUrl}`)}`} target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="Share on WhatsApp">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="Share on LinkedIn">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="Share on X">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>
    </div>
  );
};

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
        gsap.fromTo(el, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, [loading, slug]);

  const currentIndex = allAwardees.findIndex((a) => a.slug === slug);
  const prevAwardee = currentIndex > 0 ? allAwardees[currentIndex - 1] : null;
  const nextAwardee = currentIndex < allAwardees.length - 1 ? allAwardees[currentIndex + 1] : null;

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
            worksFor: { "@type": "Organization", name: awardee.organization },
            description: `${awardee.name} received the ${awardee.award} at the ONE UAE International Business Awards 2026.`,
          })}
        </script>
      </Helmet>

      <Navigation />

      {/* Dark hero band */}
      <div className="bg-foreground pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <Link
            to="/awardees/2026"
            className="inline-flex items-center gap-2 text-sm text-background/50 hover:text-background transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Awardees
          </Link>
          
          <span className="editorial-label block mb-3 text-primary/70">
            Honoured at the ONE UAE Awards 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-background leading-tight">
            {awardee.name}
          </h1>
        </div>
      </div>

      <main className="pb-24 container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start -mt-8">
          {/* Image with gold frame */}
          <div className="reveal-up relative">
            <div className="absolute -inset-3 border border-primary/20 rounded-xl pointer-events-none" />
            <img
              src={`/awardees/2026/${awardee.image}`}
              alt={`${awardee.name} – ${awardee.award}`}
              className="w-full h-auto rounded-xl shadow-2xl cursor-zoom-in transition-transform duration-500 hover:scale-[1.02] relative z-10"
              onClick={() => setIsPreviewOpen(true)}
            />
          </div>

          {/* Details */}
          <div className="reveal-up lg:sticky lg:top-32 pt-12">
            {/* Decorative gold rule with trophy */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
              <Trophy className="w-4 h-4 text-primary/50" />
              <div className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
            </div>

            {/* Award */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Award Title
              </p>
              <p className="text-2xl md:text-3xl font-display leading-snug text-foreground">
                {awardee.award}
              </p>
            </div>

            {/* Organisation */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Organisation
              </p>
              <p className="text-lg text-foreground flex items-center gap-3">
                <Building2 className="w-4 h-4 text-primary/60 flex-shrink-0" />
                {awardee.organization}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-8">
              ONE UAE Awards 2026
            </div>

            {/* Share buttons */}
            <div className="pt-6 border-t border-border">
              <AwardeeShareButtons awardee={awardee} pageUrl={pageUrl} />
            </div>
          </div>
        </div>

        {/* Prev / Next with thumbnails */}
        {(prevAwardee || nextAwardee) && (
          <div className="mt-24 pt-10 border-t border-border grid grid-cols-2 gap-6">
            {prevAwardee ? (
              <Link to={`/awardees/2026/${prevAwardee.slug}`} className="group flex items-center gap-4">
                <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-border">
                  <img src={`/awardees/2026/${prevAwardee.image}`} alt={prevAwardee.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">Previous</p>
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{prevAwardee.name}</p>
                </div>
              </Link>
            ) : <span />}

            {nextAwardee ? (
              <Link to={`/awardees/2026/${nextAwardee.slug}`} className="group flex items-center gap-4 justify-end text-right">
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">Next</p>
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{nextAwardee.name}</p>
                </div>
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-border">
                  <img src={`/awardees/2026/${nextAwardee.image}`} alt={nextAwardee.name} className="w-full h-full object-cover" />
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </Link>
            ) : <span />}
          </div>
        )}
      </main>

      {/* Image Preview */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-6"
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
