import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import oneUaeLogo from "@/assets/one-uae-logo.png";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { MagneticButton } from "@/components/MagneticButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  const footerLinks = {
    main: [
      { labelKey: "nav.about", path: "/about" },
      { labelKey: "nav.awardees", path: "/awardees/2026" },
      { labelKey: "nav.contact", path: "/contact" },
    ],
  };

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/oneuaeawards", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    )},
    { label: "LinkedIn", href: "https://linkedin.com/company/oneuaeawards", icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    )},
  ];

  useLayoutEffect(() => {
    if (!footerRef.current || !headingRef.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { scale: 0.95, autoAlpha: 0 }, {
        scale: 1, autoAlpha: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%', toggleActions: 'play none none none' }
      });

      gsap.fromTo('.footer-link', { y: 20, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 85%', toggleActions: 'play none none none' }
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-deep-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Brand watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span className="text-7xl md:text-8xl font-display text-white/[0.03] tracking-tight whitespace-nowrap">ONE UAE</span>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className={`py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          {/* Brand Column */}
          <div ref={headingRef} className={`${isRTL ? 'lg:col-start-3' : ''}`}>
            <Link to="/" className="inline-block mb-6">
              <img src={oneUaeLogo} alt="ONE UAE International Business Awards" className="h-14 w-auto opacity-95 hover:opacity-100 transition-opacity" />
            </Link>
            <p className={`text-white/50 text-sm leading-relaxed max-w-md mb-6 ${isRTL ? 'text-right' : ''}`}>
              {t('footer.patronageLabel')}<br />
              <span className="text-white/70">{t('hero.patronage').replace('Under the Patronage of ', '').replace('تحت رعاية ', '')}</span>
            </p>
            {/* Social links */}
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className={isRTL ? 'lg:col-start-2' : ''}>
            <h4 className={`editorial-label text-white/30 mb-6 ${isRTL ? 'text-right' : ''}`}>
              {t('footer.explore')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.main.map(link => (
                <li key={link.path} className={isRTL ? 'text-right' : ''}>
                  <MagneticButton strength={0.15}>
                    <Link to={link.path} className={`footer-link group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {t(link.labelKey)}
                      <ArrowUpRight className={`w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 ${isRTL ? '-translate-x-1 translate-y-1 group-hover:-translate-x-0' : ''}`} />
                    </Link>
                  </MagneticButton>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className={isRTL ? 'lg:col-start-1' : ''}>
            <h4 className={`editorial-label text-white/30 mb-6 ${isRTL ? 'text-right' : ''}`}>
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className={isRTL ? 'text-right' : ''}>
                <MagneticButton strength={0.1}>
                  <a className={`footer-link flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm ${isRTL ? 'flex-row-reverse' : ''}`} href="mailto:info@oneuaeawards.ae">
                    <Mail className="w-4 h-4 text-primary/70" />
                    info@oneuaeawards.ae
                  </a>
                </MagneticButton>
              </li>
              <li className={isRTL ? 'text-right' : ''}>
                <MagneticButton strength={0.1}>
                  <a href="tel:+971562555100" className={`footer-link flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Phone className="w-4 h-4 text-primary/70" />
                    +971 56 255 5100
                  </a>
                </MagneticButton>
              </li>
              <li className={isRTL ? 'text-right' : ''}>
                <div className={`footer-link flex items-center gap-3 text-white/60 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-4 h-4 text-primary/70" />
                  {isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates'}
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={`py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p className="text-white/30 text-xs">
            {t('footer.copyright').replace('{year}', String(currentYear))}
          </p>
          
          {/* UAE Colors Accent - wider */}
          <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="w-8 h-0.5 bg-uae-green/60 rounded-full" />
            <span className="w-8 h-0.5 bg-white/40 rounded-full" />
            <span className="w-8 h-0.5 bg-uae-red/60 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
