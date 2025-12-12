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
      {/* Decorative gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>
      
      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={oneUaeLogo} 
                alt="ONE UAE International Business Awards" 
                className="h-16 w-auto opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
              Celebrating exceptional individuals and organizations shaping the UAE's future. Under the distinguished patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/80">
                January 4, 2026
              </span>
              <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">
                Dubai, UAE
              </span>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@oneuaeaward.ae"
                  className="group flex items-start gap-3 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm">info@oneuaeaward.ae</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+971562555100"
                  className="group flex items-start gap-3 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm">+971 56 255 5100</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <span className="text-sm">Zabeel Ladies Club<br />Dubai, UAE</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} ONE UAE International Business Awards. All rights reserved.
          </p>
          
          <div className="uae-accent-line" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
