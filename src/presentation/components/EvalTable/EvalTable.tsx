import styles from './EvalTable.module.css';

interface Props {
  headers: string[];
  rows: string[][];
}

export function EvalTable({ headers, rows }: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
