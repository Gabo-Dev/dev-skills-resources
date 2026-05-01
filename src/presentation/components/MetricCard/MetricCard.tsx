import styles from './MetricCard.module.css';

interface Props {
  label: string;
  value: string;
  unit: string;
  status: 'good' | 'warning' | 'bad';
  context: string;
}

export function MetricCard({ label, value, unit, status, context }: Props) {
  return (
    <div className={styles.card}>
      <div className={`${styles.value} ${styles[status]}`}>
        {value}{unit}
      </div>
      <div className={styles.label}>{label}</div>
      <div className={styles.context}>{context}</div>
    </div>
  );
}
