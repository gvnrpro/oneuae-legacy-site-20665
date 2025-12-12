import { Link } from "react-router-dom";
import oneUaeLogo from "@/assets/one-uae-logo.png";

const Footer = () => {
  return (
    <footer className="bg-deep-charcoal text-white py-16">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="flex justify-center mb-6">
          <img 
            src={oneUaeLogo} 
            alt="ONE UAE International Business Awards" 
            className="h-20 w-auto opacity-90"
          />
        </div>
        
        <p className="font-serif text-lg mb-3" style={{ fontWeight: 500, opacity: 0.9 }}>
          ONE UAE International Business Awards 2026
        </p>
        
        <p className="font-sans text-sm mb-8" style={{ fontWeight: 300, opacity: 0.7, lineHeight: 1.6 }}>
          Under the Patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi
        </p>
        
        <div className="flex justify-center gap-8 mb-8 font-sans text-sm" style={{ fontWeight: 300 }}>
          <Link to="/about" className="hover:text-gold transition-colors duration-300" style={{ opacity: 0.8 }}>
            About
          </Link>
          <Link to="/categories" className="hover:text-gold transition-colors duration-300" style={{ opacity: 0.8 }}>
            Categories
          </Link>
          <Link to="/contact" className="hover:text-gold transition-colors duration-300" style={{ opacity: 0.8 }}>
            Contact
          </Link>
        </div>
        
        <div className="uae-accent-line mx-auto" />
      </div>
    </footer>
  );
};

export default Footer;
