import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EvalTable } from './EvalTable';

describe('EvalTable', () => {
  it('renders headers and rows', () => {
    render(<EvalTable headers={['A', 'B']} rows={[['1', '2']]} />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
