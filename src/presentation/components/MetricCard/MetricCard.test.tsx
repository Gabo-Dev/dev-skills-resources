import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricCard } from './MetricCard';

describe('MetricCard', () => {
  it('renders metric values', () => {
    render(<MetricCard label="Perf" value="96" unit="/100" status="good" context="Lighthouse" />);
    expect(screen.getByText('96/100')).toBeInTheDocument();
    expect(screen.getByText('Perf')).toBeInTheDocument();
  });
});
