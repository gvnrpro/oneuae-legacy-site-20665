import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SkipToContent from "./SkipToContent";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/categories", label: "Award Categories" },
    { path: "/partnerships", label: "Partnerships" },
    { path: "/gala", label: "Gala" },
    { path: "/nominate", label: "Nominate" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <SkipToContent />
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress transition-transform duration-200"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-premium border-b transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg border-primary/10 bg-background/95' 
            : 'border-border/50 bg-background/90'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo with Gold Accent */}
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-gold-light to-gold-dark rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              <div className={`relative bg-gradient-to-br from-gold via-gold-light to-gold p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
            </div>
            <h1 className={`font-serif font-semibold text-primary transition-all duration-300 tracking-tight ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
              OneUAE Awards
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm transition-all duration-300 relative group tracking-wide ${
                  isActive(link.path)
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary font-medium"
                }`}
              >
                {link.label}
                {/* Animated Underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold-light via-gold to-gold-dark transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="menu"
        >
          <div className="py-6 border-t border-primary/10 bg-gradient-to-b from-background/50 to-secondary/30 backdrop-blur-sm">
            <div className="flex flex-col space-y-5">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-sm transition-all duration-300 tracking-wide transform px-2 py-1 rounded-md ${
                    isActive(link.path)
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5 font-medium"
                  } ${isOpen ? 'translate-x-0' : '-translate-x-4'}`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Navigation;
