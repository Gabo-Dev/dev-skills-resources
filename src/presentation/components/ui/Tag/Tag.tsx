import styles from './Tag.module.css';

interface Props {
  children: string;
  variant?: 'default' | 'accent';
}

export function Tag({ children, variant = 'default' }: Props) {
  return <span className={`${styles.tag} ${styles[variant]}`}>{children}</span>;
}
