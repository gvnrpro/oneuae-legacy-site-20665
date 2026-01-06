import { useRef, useLayoutEffect } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      labelKey: "contact.email",
      value: "info@oneuaeawards.ae",
      href: "mailto:info@oneuaeawards.ae",
    },
    {
      icon: Phone,
      labelKey: "contact.phone",
      value: "+971 56 255 5100",
      href: "tel:+971562555100",
    },
    {
      icon: MapPin,
      labelKey: "contact.locationLabel",
      valueKey: "hero.venue",
      href: null,
    },
    {
      icon: Clock,
      labelKey: "contact.officeHours",
      valueKey: "contact.officeHoursValue",
      href: null,
    },
  ];

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title="Contact Us - ONE UAE International Business Awards 2026"
        description="Get in touch with ONE UAE International Business Awards for nominations, partnerships, and inquiries."
        keywords="contact ONE UAE, awards inquiry, Dubai contact, partnership inquiry"
        path="/contact"
      />
      <Navigation />
      
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className={`max-w-lg reveal-up ${isRTL ? 'mr-auto text-right' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
                {t('contact.getInTouch')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground">
                {t('contact.contactTitle')}
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className={`reveal-up mb-12 ${isRTL ? 'text-right' : ''}`}>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                {t('contact.awardsSecretariat')}
              </span>
              <h2 className="text-2xl font-display text-foreground">
                {isRTL ? 'جوائز الإمارات الموحدة للأعمال الدولية' : 'ONE UAE International Business Awards'}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const displayValue = item.valueKey ? t(item.valueKey) : item.value;
                const content = (
                  <div className={`reveal-up p-6 border border-border rounded-lg hover:border-primary/30 transition-colors ${isRTL ? 'text-right' : ''}`}>
                    <Icon className={`w-5 h-5 text-primary mb-4 ${isRTL ? 'mr-auto' : ''}`} />
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{t(item.labelKey)}</p>
                    <p className={`font-medium ${item.href ? 'text-foreground hover:text-primary transition-colors' : 'text-foreground'}`}>
                      {displayValue}
                    </p>
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="reveal-up mt-20 pt-12 border-t border-border text-center">
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                {t('contact.dedicatedTeam')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;