import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'light' | 'dark';
}

const LanguageToggle = ({ variant = 'dark' }: LanguageToggleProps) => {
  const { language, setLanguage, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        variant === 'light'
          ? 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
          : 'bg-muted hover:bg-muted/80 text-foreground'
      }`}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
      dir="ltr"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {language === 'en' ? 'عربي' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
