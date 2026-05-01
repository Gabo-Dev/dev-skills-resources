import { useTranslation } from 'react-i18next';
import { Icon } from '@presentation/components/ui/Icon';
import { navigateTo } from '@presentation/hooks/useRoute';
import type { Project } from '@domain/project/Project';
import styles from './ProjectCard.module.css';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { t } = useTranslation('projects');

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.capability}>{project.capability}</span>
      </div>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.meta}>
        <span>
          <Icon name="code" size={14} />
          {project.framework}
        </span>
        <span>
          <Icon name="file" size={14} />
          {project.artifact}
        </span>
      </div>
      <button
        className={styles.btn}
        onClick={() => navigateTo('project', project.id)}
        aria-label={`View project ${project.title}`}
      >
        <span>{t('viewProject')}</span>
        <Icon name="arrowRight" size={16} />
      </button>
    </article>
  );
}
