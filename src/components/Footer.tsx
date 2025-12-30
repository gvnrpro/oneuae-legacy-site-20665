import { Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import oneUaeLogo from "@/assets/one-uae-logo.png";
import { gsap, ScrollTrigger } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";
import { MagneticButton } from "@/components/MagneticButton";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const footerLinks = {
    main: [{
      label: "About",
      path: "/about"
    }, {
      label: "Categories",
      path: "/categories"
    }, {
      label: "Partnerships",
      path: "/partnerships"
    }, {
      label: "Gala Night",
      path: "/gala"
    }],
    actions: [{
      label: "Submit Nomination",
      path: "/nominate"
    }, {
      label: "Contact Us",
      path: "/contact"
    }]
  };
  useLayoutEffect(() => {
    if (!footerRef.current || !headingRef.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      // Heading scale reveal
      gsap.fromTo(headingRef.current, {
        scale: 0.95,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });

      // Links stagger reveal
      gsap.fromTo('.footer-link', {
        y: 20,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);
  return <footer ref={footerRef} className="bg-deep-charcoal text-white relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div ref={headingRef} className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={oneUaeLogo} alt="ONE UAE International Business Awards" className="h-14 w-auto opacity-95 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              Under the distinguished patronage of<br />
              <span className="text-white/70">H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi</span>
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-white/40">February 5, 2026</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-white/40">Dubai, UAE</span>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="editorial-label text-white/30 mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.main.map(link => <li key={link.path}>
                  <MagneticButton strength={0.15}>
                    <Link to={link.path} className="footer-link group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </MagneticButton>
                </li>)}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="editorial-label text-white/30 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <MagneticButton strength={0.1}>
                  <a className="footer-link flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm" href="mailto:info@oneuaeawards.ae">
                    <Mail className="w-4 h-4 text-primary/70" />
                    info@oneuaeawards.ae
                  </a>
                </MagneticButton>
              </li>
              <li>
                <MagneticButton strength={0.1}>
                  <a href="tel:+971562555100" className="footer-link flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm">
                    <Phone className="w-4 h-4 text-primary/70" />
                    +971 56 255 5100
                  </a>
                </MagneticButton>
              </li>
              <li>
                <div className="footer-link flex items-center gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 text-primary/70" />
                  Zabeel Ladies Club, Dubai
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} ONE UAE International Business Awards
          </p>
          
          {/* UAE Colors Accent */}
          <div className="flex items-center gap-1">
            <span className="w-6 h-0.5 bg-uae-green/60 rounded-full" />
            <span className="w-6 h-0.5 bg-white/40 rounded-full" />
            <span className="w-6 h-0.5 bg-uae-red/60 rounded-full" />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;