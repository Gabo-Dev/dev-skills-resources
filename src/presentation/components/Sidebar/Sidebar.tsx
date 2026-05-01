import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@presentation/components/ui/Icon';
import { useProjects } from '@presentation/hooks/useProjects';
import { navigateTo } from '@presentation/hooks/useRoute';
import { useRoute } from '@presentation/hooks/useRoute';
import styles from './Sidebar.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: Props) {
  const { t } = useTranslation('common');
  const { projects } = useProjects();
  const route = useRoute();

  const handleNav = useCallback(
    (target: string) => {
      if (target === 'home') navigateTo('home');
      else if (target === 'projects') navigateTo('projects');
      else navigateTo('project', target);
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.header}>
          <div className={styles.logo}>
            dev<span>-skills</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close navigation menu">
            <Icon name="close" size={24} />
          </button>
        </div>

        <div className={styles.nav}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>{t('nav.main')}</div>
            <button
              className={`${styles.navLink} ${route.name === 'home' ? styles.active : ''}`}
              onClick={() => handleNav('home')}
            >
              <Icon name="home" size={18} />
              <span>{t('nav.home')}</span>
            </button>
            <button
              className={`${styles.navLink} ${route.name === 'projects' || route.name === 'project' ? styles.active : ''}`}
              onClick={() => handleNav('projects')}
            >
              <Icon name="projects" size={18} />
              <span>{t('nav.projects')}</span>
            </button>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>{t('nav.projectsList')}</div>
            <div className={styles.projectList}>
              {projects.map((p) => (
                <button
                  key={p.id}
                  className={`${styles.projectItem} ${route.name === 'project' && route.params.id === p.id ? styles.active : ''}`}
                  onClick={() => handleNav(p.id)}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>{t('sidebar.footer')}</div>
      </nav>
    </>
  );
}
