import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import oneUaeLogo from "@/assets/one-uae-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", labelKey: "nav.home" },
    { path: "/about", labelKey: "nav.about" },
    { path: "/categories", labelKey: "nav.categories" },
    { path: "/partnerships", labelKey: "nav.partnerships" },
    { path: "/gala", labelKey: "nav.gala" },
    { path: "/contact", labelKey: "nav.contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

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
          scrolled 
            ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center group"
            >
              <img 
                src={oneUaeLogo} 
                alt="ONE UAE International Business Awards" 
                className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
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
                      ? scrolled ? "text-primary" : "text-white"
                      : scrolled 
                        ? "text-muted-foreground hover:text-foreground" 
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {t(link.labelKey)}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-4 left-4' : 'left-4 right-4'} h-0.5 bg-primary rounded-full transition-transform duration-300 ${isRTL ? 'origin-right' : 'origin-left'} ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              ))}
              
              {/* Language Toggle */}
              <div className="mx-2">
                <LanguageToggle variant={scrolled ? 'dark' : 'light'} />
              </div>
              
              {/* CTA Button */}
              <Link
                to="/nominate"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group ${
                  scrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {t('nav.nominate')}
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle variant={scrolled ? 'dark' : 'light'} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled 
                    ? "text-foreground hover:bg-muted" 
                    : "text-white hover:bg-white/10"
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
            <div className="py-6 space-y-1 border-t border-border/50">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
              
              <Link
                to="/nominate"
                onClick={() => setIsOpen(false)}
                className="block mt-4 mx-4 px-4 py-3 bg-primary text-primary-foreground rounded-lg text-center font-medium"
              >
                {t('nav.submitNomination')}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;