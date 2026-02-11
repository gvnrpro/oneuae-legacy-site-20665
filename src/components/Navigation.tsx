import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import oneUaeLogo from "@/assets/one-uae-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { gsap } from "@/utils/gsap-config";
import { prefersReducedMotion } from "@/utils/motion-preference";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { t, isRTL } = useLanguage();
  const logoRef = useRef<HTMLImageElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logo scale transition on scroll
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !logoRef.current) return;
    gsap.to(logoRef.current, {
      height: scrolled ? 40 : 56,
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [scrolled]);

  // Mobile menu stagger animation
  useEffect(() => {
    if (!mobileMenuRef.current || prefersReducedMotion()) return;
    if (isOpen) {
      const links = mobileMenuRef.current.querySelectorAll('.mobile-nav-link');
      gsap.fromTo(links, 
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.06, duration: 0.4, ease: 'power2.out', delay: 0.1 }
      );
    }
  }, [isOpen]);

  const navLinks = [
    { path: "/", labelKey: "nav.home" },
    { path: "/about", labelKey: "nav.about" },
    { path: "/awardees/2026", labelKey: "nav.awardees" },
    { path: "/contact", labelKey: "nav.contact" },
  ];

  const isActive = (path: string) => location.pathname === path || (path === "/awardees/2026" && location.pathname.startsWith("/awardees/2026"));
  const isHome = location.pathname === "/";
  const isOverlay = isHome && !scrolled;

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar"
        style={{ 
          width: `${scrollProgress}%`,
          [isRTL ? 'right' : 'left']: 0,
        }}
      />
      
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isOverlay 
            ? "bg-transparent" 
            : "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50"
        }`}
      >
        {/* Gold accent line when scrolled */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        )}

        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center group"
            >
              <img 
                ref={logoRef}
                src={oneUaeLogo} 
                alt="ONE UAE International Business Awards" 
                className="w-auto transition-transform duration-300 group-hover:scale-105"
                style={{ height: 56 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    isActive(link.path)
                      ? isOverlay ? "text-white" : "text-primary"
                      : isOverlay 
                        ? "text-white/80 hover:text-white" 
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(link.labelKey)}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-4 left-4' : 'left-4 right-4'} h-0.5 bg-primary rounded-full transition-transform duration-300 ${isRTL ? 'origin-right' : 'origin-left'} ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              ))}
              
              <div className="mx-2">
                <LanguageToggle variant={isOverlay ? 'light' : 'dark'} />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle variant={isOverlay ? 'light' : 'dark'} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isOverlay 
                    ? "text-white hover:bg-white/10" 
                    : "text-foreground hover:bg-muted"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-premium ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div ref={mobileMenuRef} className="py-6 space-y-1 border-t border-border/50">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-nav-link block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
