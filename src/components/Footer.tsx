import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import oneUaeLogo from "@/assets/one-uae-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    main: [
      { label: "About", path: "/about" },
      { label: "Categories", path: "/categories" },
      { label: "Partnerships", path: "/partnerships" },
      { label: "Gala Night", path: "/gala" },
    ],
    actions: [
      { label: "Submit Nomination", path: "/nominate" },
      { label: "Contact Us", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-deep-charcoal text-white relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={oneUaeLogo} 
                alt="ONE UAE International Business Awards" 
                className="h-14 w-auto opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
              Under the distinguished patronage of<br />
              <span className="text-white/70">H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi</span>
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-white/40">January 4, 2026</span>
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
              {footerLinks.main.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="editorial-label text-white/30 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@oneuaeaward.ae"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 text-primary/70" />
                  info@oneuaeaward.ae
                </a>
              </li>
              <li>
                <a 
                  href="tel:+971562555100"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4 text-primary/70" />
                  +971 56 255 5100
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60 text-sm">
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
    </footer>
  );
};

export default Footer;