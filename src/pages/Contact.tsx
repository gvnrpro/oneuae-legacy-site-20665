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
    { icon: Mail, labelKey: "contact.email", value: "info@oneuaeawards.ae", href: "mailto:info@oneuaeawards.ae" },
    { icon: Phone, labelKey: "contact.phone", value: "+971 56 255 5100", href: "tel:+971562555100" },
    { icon: MapPin, labelKey: "contact.locationLabel", valueKey: "hero.venue", href: null },
    { icon: Clock, labelKey: "contact.officeHours", valueKey: "contact.officeHoursValue", href: null },
  ];

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
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
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className={`max-w-lg reveal-up ${isRTL ? 'mr-auto text-right' : ''}`}>
              <p className="text-primary text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
                {t('contact.getInTouch')}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight">
                {t('contact.contactTitle')}
              </h1>
              <div className="h-px w-12 bg-primary/40 mt-6" />
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className={`reveal-up mb-10 ${isRTL ? 'text-right' : ''}`}>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                {t('contact.awardsSecretariat')}
              </span>
              <h2 className="text-xl font-display text-foreground">
                {isRTL ? 'جوائز الإمارات الموحدة للأعمال الدولية' : 'ONE UAE International Business Awards'}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const displayValue = item.valueKey ? t(item.valueKey) : item.value;
                const content = (
                  <div className={`reveal-up p-6 md:p-8 border border-border/50 rounded-lg hover:border-primary/20 transition-colors duration-500 group ${isRTL ? 'text-right' : ''}`}>
                    <Icon className={`w-4 h-4 text-primary/70 mb-3 ${isRTL ? 'mr-auto' : ''}`} />
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{t(item.labelKey)}</p>
                    <p className={`font-medium text-base ${item.href ? 'text-foreground group-hover:text-primary transition-colors' : 'text-foreground'}`}>
                      {displayValue}
                    </p>
                  </div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">{content}</a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="reveal-up mt-16 pt-10 border-t border-border/50 text-center">
              <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
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
