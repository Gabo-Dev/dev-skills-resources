import { Icon } from '@presentation/components/ui/Icon';
import { navigateTo } from '@presentation/hooks/useRoute';
import styles from './Breadcrumb.module.css';

interface Props {
  items: { label: string; route?: string }[];
}

export function Breadcrumb({ items }: Props) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} className={styles.item}>
          {i > 0 && <Icon name="chevronRight" size={14} />}
          {item.route ? (
            <a href={`#${item.route}`} onClick={(e) => { e.preventDefault(); navigateTo(item.route as 'home' | 'projects'); }}>
              {item.label}
            </a>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
