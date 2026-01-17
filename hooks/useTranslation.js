import { useRouter } from 'next/router';
import de from '../locales/de.json';
import en from '../locales/en.json';

const translations = { de, en };

export function useTranslation() {
  const router = useRouter();
  const { locale = 'de' } = router;
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };
  
  const switchLocale = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };
  
  return { t, locale, switchLocale };
}
