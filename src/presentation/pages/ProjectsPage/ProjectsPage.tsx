import { useTranslation } from 'react-i18next';
import { ProjectCard } from '@presentation/components/ProjectCard';
import { useProjects } from '@presentation/hooks/useProjects';
import styles from './ProjectsPage.module.css';

export function ProjectsPage() {
  const { t } = useTranslation('projects');
  const { projects } = useProjects();

  return (
    <section className={styles.page} aria-label="Projects list">
      <header className={styles.header}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>{t('description')}</p>
      </header>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </section>
  );
}
