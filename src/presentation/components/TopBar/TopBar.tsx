import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@presentation/components/ui/Icon';
import { useThemeStore } from '@store/useThemeStore';
import { useLangStore } from '@store/useLangStore';
import styles from './TopBar.module.css';

interface Props {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: Props) {
  const { theme, toggle } = useThemeStore();
  const { lang, setLang } = useLangStore();
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const handleLangChange = (l: 'en' | 'es') => {
    setLang(l);
    i18n.changeLanguage(l);
    document.documentElement.lang = l;
    setLangOpen(false);
  };

  return (
    <header className={styles.topBar} role="banner">
      <div className={styles.left}>
        <button
          className={styles.btnIcon}
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <Icon name="menu" />
        </button>
      </div>

      <div className={styles.right}>
        <button className={styles.btnIcon} onClick={toggle} aria-label="Toggle dark mode">
          <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
        </button>

        <div className={styles.langWrapper} ref={langRef}>
          <button
            className={styles.btnIcon}
            onClick={(e) => {
              e.stopPropagation();
              setLangOpen(!langOpen);
            }}
            aria-label="Change language"
            aria-expanded={langOpen}
          >
            <Icon name="globe" />
          </button>
          <div className={`${styles.langDropdown} ${langOpen ? styles.active : ''}`} role="menu">
            <button
              className={`${styles.langOption} ${lang === 'en' ? styles.active : ''}`}
              onClick={() => handleLangChange('en')}
              role="menuitem"
            >
              <span>🇬🇧</span>
              <span>English</span>
            </button>
            <button
              className={`${styles.langOption} ${lang === 'es' ? styles.active : ''}`}
              onClick={() => handleLangChange('es')}
              role="menuitem"
            >
              <span>🇪🇸</span>
              <span>Español</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
