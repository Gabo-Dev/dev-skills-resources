import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from '@presentation/components/Breadcrumb';
import { ToolingItem } from '@presentation/components/ToolingItem';
import { MetricCard } from '@presentation/components/MetricCard';
import { EvalTable } from '@presentation/components/EvalTable';
import { Tag } from '@presentation/components/ui/Tag';
import { Icon } from '@presentation/components/ui/Icon';
import { useProjects } from '@presentation/hooks/useProjects';
import { navigateTo } from '@presentation/hooks/useRoute';
import styles from './ProjectDetailPage.module.css';

interface Props {
  id: string;
}

export function ProjectDetailPage({ id }: Props) {
  const { t } = useTranslation('projectDetail');
  const { findById } = useProjects();
  const project = useMemo(() => findById(id), [id, findById]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project not found</h1>
        <button className={styles.backBtn} onClick={() => navigateTo('projects')}>
          ← Back to Projects
        </button>
      </div>
    );
  }

  const isMetrics = project.evaluation.type === 'metrics';

  return (
    <section className={styles.page} aria-label="Project detail">
      <article>
        <header className={styles.header}>
          <Breadcrumb
            items={[
              { label: 'Projects', route: 'projects' },
              { label: project.title },
            ]}
          />
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.tags}>
            <Tag variant="accent">{project.capability}</Tag>
            <Tag>{project.framework}</Tag>
            <Tag>{project.artifact}</Tag>
            <Tag>{project.deployment}</Tag>
          </div>
        </header>

        <div className={styles.grid}>
          <div className={styles.main}>
            <section className={styles.section} aria-labelledby="desc-title">
              <h2 className={styles.sectionTitle} id="desc-title">
                <Icon name="file" size={20} />
                <span>{t('description')}</span>
              </h2>
              <p>{project.description}</p>
            </section>

            <section className={styles.section} aria-labelledby="tooling-title">
              <h2 className={styles.sectionTitle} id="tooling-title">
                <Icon name="wrench" size={20} />
                <span>{t('tooling')}</span>
              </h2>
              <ul className={styles.toolingList}>
                {project.tooling.map((tItem) => (
                  <ToolingItem key={tItem.name} item={tItem} />
                ))}
              </ul>
            </section>

            <section className={styles.section} aria-labelledby="eval-title">
              <h2 className={styles.sectionTitle} id="eval-title">
                <Icon name="chart" size={20} />
                <span>{t('evaluation')}</span>
              </h2>
              {isMetrics ? (
                <div className={styles.metricsGrid}>
                  {project.evaluation.data.map((m) => (
                    <MetricCard
                      key={m.label}
                      label={m.label}
                      value={m.value}
                      unit={m.unit}
                      status={m.status}
                      context={m.context}
                    />
                  ))}
                </div>
              ) : (
                <EvalTable
                  headers={project.evaluation.headers || []}
                  rows={project.evaluation.rows || []}
                />
              )}
            </section>
          </div>

          <aside className={styles.sidebar}>
            <section className={styles.section} aria-labelledby="meta-title">
              <h2 className={styles.sectionTitle} id="meta-title">
                <Icon name="info" size={20} />
                <span>{t('meta')}</span>
              </h2>
              <div className={styles.metaList}>
                <p><strong>{t('capability')}:</strong> {project.capability}</p>
                <p><strong>{t('framework')}:</strong> {project.framework}</p>
                <p><strong>{t('artifact')}:</strong> {project.artifact}</p>
                <p><strong>{t('deployment')}:</strong> {project.deployment}</p>
              </div>
            </section>

            <section className={styles.section} aria-labelledby="links-title">
              <h2 className={styles.sectionTitle} id="links-title">
                <Icon name="link" size={20} />
                <span>{t('links')}</span>
              </h2>
              <div className={styles.linksList}>
                {project.links.map((link) => (
                  <p key={link.label}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} →
                    </a>
                  </p>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </article>
    </section>
  );
}
