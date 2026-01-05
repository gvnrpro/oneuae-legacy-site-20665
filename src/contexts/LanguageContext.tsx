import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations
const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      categories: 'Categories',
      partnerships: 'Partnerships',
      gala: 'Gala',
      contact: 'Contact',
      nominate: 'Nominate',
      submitNomination: 'Submit Nomination',
    },
    hero: {
      title: 'ONE UAE',
      titleAccent: 'Awards',
      tagline: 'International Business Awards',
      patronage: 'Under the Patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi',
      date: 'February 5, 2026',
      venue: 'Zabeel Ladies Club, Dubai',
      submitNomination: 'Submit Nomination',
      learnMore: 'Learn More',
      addToCalendar: 'Add to Calendar',
    },
    stats: {
      guests: 'Distinguished Guests',
      categories: 'Award Categories',
      dignitaries: 'VIP Dignitaries',
      night: 'Prestigious Night',
    },
    about: {
      label: 'About the Awards',
      title: 'A National Platform for Excellence',
      description: 'The ONE UAE International Business Awards is a prestigious national platform honoring individuals and establishments driving the UAE\'s journey of growth, development, and sustainability.',
      date: 'February 5, 2026',
      galaLabel: 'Gala Night Ceremony',
      venueTitle: 'Zabeel Ladies Club',
      venueDetail: 'Main Ballroom, Dubai',
      discoverStory: 'Discover Our Story',
    },
    categories: {
      label: '18 Categories',
      title: 'Award Categories',
      viewAll: 'View All',
      more: '+ 12 more categories',
      list: [
        'Growth & Economic Excellence',
        'Entrepreneurship & Innovation',
        'Corporate Leadership',
        'Finance & Banking',
        'Retail & Hospitality',
        'Technology & Digital',
      ],
    },
    program: {
      label: 'The Evening',
      title: 'Program Flow',
      reception: 'Reception & Networking',
      opening: 'Opening Ceremony',
      awards: 'Award Presentations',
      dinner: 'Gala Dinner',
      viewDetails: 'View Gala Details',
      dateLabel: 'Date',
      venueLabel: 'Venue',
      formatLabel: 'Format',
      attendeesLabel: 'Attendees',
      format: 'Ceremony + Gala Dinner',
      attendees: '750 Distinguished Guests',
    },
    audience: {
      label: 'Who Attends',
      title: 'Distinguished Guests',
      list: [
        'Government Representatives',
        'Business Leaders',
        'Entrepreneurs',
        'Healthcare Leaders',
        'Media Figures',
        'Finance Executives',
        'Tech Innovators',
      ],
    },
    partnership: {
      label: 'Partner With Us',
      title: 'Become a Sponsor',
      description: 'Join prestigious brands in supporting the UAE\'s premier business awards ceremony.',
      explore: 'Explore Partnerships',
    },
    contact: {
      question: 'Have questions?',
    },
    footer: {
      explore: 'Explore',
      contact: 'Contact',
      patronageLabel: 'Under the distinguished patronage of',
      copyright: '© {year} ONE UAE International Business Awards',
    },
    social: {
      share: 'Share',
      shareOn: 'Share on {platform}',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن الجائزة',
      categories: 'الفئات',
      partnerships: 'الشراكات',
      gala: 'الحفل',
      contact: 'تواصل معنا',
      nominate: 'ترشيح',
      submitNomination: 'قدم ترشيحك',
    },
    hero: {
      title: 'جوائز الإمارات',
      titleAccent: 'الموحدة',
      tagline: 'جوائز الأعمال الدولية',
      patronage: 'تحت رعاية سعادة الشيخ سلطان بن ناصر بن حميد النعيمي',
      date: '٥ فبراير ٢٠٢٦',
      venue: 'نادي الزعبيل للسيدات، دبي',
      submitNomination: 'قدم ترشيحك',
      learnMore: 'اكتشف المزيد',
      addToCalendar: 'أضف إلى التقويم',
    },
    stats: {
      guests: 'ضيوف مميزون',
      categories: 'فئات الجوائز',
      dignitaries: 'كبار الشخصيات',
      night: 'ليلة استثنائية',
    },
    about: {
      label: 'عن الجوائز',
      title: 'منصة وطنية للتميز',
      description: 'جوائز الإمارات الموحدة للأعمال الدولية هي منصة وطنية مرموقة تكرم الأفراد والمؤسسات الذين يقودون مسيرة النمو والتطوير والاستدامة في دولة الإمارات.',
      date: '٥ فبراير ٢٠٢٦',
      galaLabel: 'حفل الليلة الكبرى',
      venueTitle: 'نادي الزعبيل للسيدات',
      venueDetail: 'القاعة الرئيسية، دبي',
      discoverStory: 'اكتشف قصتنا',
    },
    categories: {
      label: '١٨ فئة',
      title: 'فئات الجوائز',
      viewAll: 'عرض الكل',
      more: '+ ١٢ فئة إضافية',
      list: [
        'النمو والتميز الاقتصادي',
        'ريادة الأعمال والابتكار',
        'القيادة المؤسسية',
        'المالية والمصارف',
        'التجزئة والضيافة',
        'التكنولوجيا والرقمنة',
      ],
    },
    program: {
      label: 'الأمسية',
      title: 'برنامج الحفل',
      reception: 'الاستقبال والتواصل',
      opening: 'حفل الافتتاح',
      awards: 'تقديم الجوائز',
      dinner: 'عشاء الحفل',
      viewDetails: 'تفاصيل الحفل',
      dateLabel: 'التاريخ',
      venueLabel: 'المكان',
      formatLabel: 'الشكل',
      attendeesLabel: 'الحضور',
      format: 'حفل + عشاء فاخر',
      attendees: '٧٥٠ ضيفاً مميزاً',
    },
    audience: {
      label: 'من يحضر',
      title: 'الضيوف المميزون',
      list: [
        'ممثلو الحكومة',
        'قادة الأعمال',
        'رواد الأعمال',
        'قادة الرعاية الصحية',
        'شخصيات إعلامية',
        'التنفيذيون الماليون',
        'المبتكرون التقنيون',
      ],
    },
    partnership: {
      label: 'شاركنا',
      title: 'كن راعياً',
      description: 'انضم إلى العلامات التجارية المرموقة في دعم حفل جوائز الأعمال الأبرز في الإمارات.',
      explore: 'استكشف الشراكات',
    },
    contact: {
      question: 'هل لديك أسئلة؟',
    },
    footer: {
      explore: 'استكشف',
      contact: 'تواصل',
      patronageLabel: 'تحت الرعاية الكريمة لـ',
      copyright: '© {year} جوائز الإمارات الموحدة للأعمال الدولية',
    },
    social: {
      share: 'مشاركة',
      shareOn: 'مشاركة على {platform}',
    },
  },
};
