import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders breadcrumb items', () => {
    render(<Breadcrumb items={[{ label: 'Projects', route: 'projects' }, { label: 'Detail' }]} />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Detail')).toBeInTheDocument();
  });
});
