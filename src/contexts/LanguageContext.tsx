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
      awardees: 'Awardees 2026',
      contact: 'Contact',
    },
    hero: {
      title: 'ONE UAE',
      titleAccent: 'Awards',
      tagline: 'International Business Awards',
      patronage: 'Under the Patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi',
      date: 'February 5, 2026',
      venue: 'Zabeel Ladies Club, Dubai',
      viewAwardees: 'View 2026 Awardees',
      learnMore: 'About the Awards',
    },
    stats: {
      guests: 'Distinguished Guests',
      categories: 'Award Categories',
      awardees: 'Honoured Awardees',
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
      intro: 'What began as a vision to honor outstanding contributions has grown into a platform celebrating the diverse achievements that define the UAE\'s spirit of unity, vision, and excellence.',
      awardCategories: 'Award Categories',
      distinguishedGuests: 'Distinguished Guests',
      mission: 'Mission',
      missionText: 'To recognize leaders and institutions contributing to national progress and UAE Vision 2071.',
      vision: 'Vision',
      visionText: 'To build a prestigious tradition of honoring excellence, unity, and sustainable advancement.',
      underPatronage: 'Under the Patronage',
      patronName: 'H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi',
      patronDesc: 'ONE UAE International Business Awards is honored to operate under the distinguished patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi, whose commitment to excellence and national development continues to inspire our mission.',
      theJourney: 'The Journey',
      selectionProcess: 'Selection Process',
      step1Title: 'Nomination',
      step1Desc: 'Individuals and organizations submit nominations highlighting exceptional achievements.',
      step2Title: 'Expert Review',
      step2Desc: 'A distinguished panel evaluates nominations based on impact and innovation.',
      step3Title: 'Final Selection',
      step3Desc: 'Winners are selected and honored at our prestigious annual ceremony.',
      contactUs: 'Contact Us',
    },
    awardees: {
      label: '2026 Honourees',
      title: 'Award Recipients',
      viewAll: 'View All 27 Awardees',
    },
    gallery: {
      label: 'Event Highlights',
      title: 'Photo Gallery',
    },
    nextEdition: {
      label: 'Coming Soon',
      title: '2027 Edition',
      dateTBA: 'Date — To Be Announced',
      description: 'We welcome nominations and partnership inquiries for the upcoming edition of the ONE UAE International Business Awards.',
      contactUs: 'Contact Us',
    },
    contact: {
      getInTouch: 'Get in Touch',
      contactTitle: 'Contact',
      awardsSecretariat: 'Awards Secretariat',
      email: 'Email',
      phone: 'Phone',
      locationLabel: 'Location',
      officeHours: 'Office Hours',
      officeHoursValue: 'Sunday - Thursday, 9AM - 6PM GST',
      dedicatedTeam: 'Our team is dedicated to ensuring your experience with the ONE UAE International Business Awards is exceptional.',
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
      awardees: 'الفائزون ٢٠٢٦',
      contact: 'تواصل معنا',
    },
    hero: {
      title: 'جوائز الإمارات',
      titleAccent: 'الموحدة',
      tagline: 'جوائز الأعمال الدولية',
      patronage: 'تحت رعاية سعادة الشيخ سلطان بن ناصر بن حميد النعيمي',
      date: '٥ فبراير ٢٠٢٦',
      venue: 'نادي الزعبيل للسيدات، دبي',
      viewAwardees: 'عرض الفائزين ٢٠٢٦',
      learnMore: 'عن الجوائز',
    },
    stats: {
      guests: 'ضيوف مميزون',
      categories: 'فئات الجوائز',
      awardees: 'فائزون مكرّمون',
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
      intro: 'ما بدأ كرؤية لتكريم المساهمات المتميزة نما ليصبح منصة تحتفي بالإنجازات المتنوعة التي تحدد روح الوحدة والرؤية والتميز في الإمارات.',
      awardCategories: 'فئات الجوائز',
      distinguishedGuests: 'ضيوف مميزون',
      mission: 'الرسالة',
      missionText: 'تكريم القادة والمؤسسات الذين يساهمون في التقدم الوطني ورؤية الإمارات 2071.',
      vision: 'الرؤية',
      visionText: 'بناء تقليد مرموق لتكريم التميز والوحدة والتقدم المستدام.',
      underPatronage: 'تحت الرعاية',
      patronName: 'سعادة الشيخ سلطان بن ناصر بن حميد النعيمي',
      patronDesc: 'تتشرف جوائز الإمارات الموحدة للأعمال الدولية بالعمل تحت الرعاية الكريمة لسعادة الشيخ سلطان بن ناصر بن حميد النعيمي، الذي يلهمنا التزامه بالتميز والتنمية الوطنية.',
      theJourney: 'المسيرة',
      selectionProcess: 'عملية الاختيار',
      step1Title: 'الترشيح',
      step1Desc: 'يقدم الأفراد والمنظمات ترشيحات تسلط الضوء على الإنجازات الاستثنائية.',
      step2Title: 'مراجعة الخبراء',
      step2Desc: 'تقوم لجنة متميزة بتقييم الترشيحات بناءً على التأثير والابتكار.',
      step3Title: 'الاختيار النهائي',
      step3Desc: 'يتم اختيار الفائزين وتكريمهم في حفلنا السنوي المرموق.',
      contactUs: 'تواصل معنا',
    },
    awardees: {
      label: 'المكرّمون ٢٠٢٦',
      title: 'الفائزون بالجوائز',
      viewAll: 'عرض جميع الـ ٢٧ فائزاً',
    },
    gallery: {
      label: 'أبرز اللحظات',
      title: 'معرض الصور',
    },
    nextEdition: {
      label: 'قريباً',
      title: 'نسخة ٢٠٢٧',
      dateTBA: 'التاريخ — سيُعلن لاحقاً',
      description: 'نرحب بالترشيحات واستفسارات الشراكة للنسخة القادمة من جوائز الإمارات الموحدة للأعمال الدولية.',
      contactUs: 'تواصل معنا',
    },
    contact: {
      getInTouch: 'تواصل معنا',
      contactTitle: 'اتصل بنا',
      awardsSecretariat: 'أمانة الجوائز',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      locationLabel: 'الموقع',
      officeHours: 'ساعات العمل',
      officeHoursValue: 'الأحد - الخميس، 9 صباحاً - 6 مساءً بتوقيت الخليج',
      dedicatedTeam: 'فريقنا ملتزم بضمان تجربة استثنائية لك مع جوائز الإمارات الموحدة للأعمال الدولية.',
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
