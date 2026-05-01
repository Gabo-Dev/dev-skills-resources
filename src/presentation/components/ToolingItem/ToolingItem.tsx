import type { ToolingItem as ToolingItemType } from '@domain/project/Project';
import styles from './ToolingItem.module.css';

interface Props {
  item: ToolingItemType;
}

export function ToolingItem({ item }: Props) {
  return (
    <li className={styles.item}>
      <div>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.desc}>{item.description}</div>
      </div>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Docs →
      </a>
    </li>
  );
}
