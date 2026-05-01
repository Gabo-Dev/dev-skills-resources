import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsPage } from './ProjectsPage';

describe('ProjectsPage', () => {
  it('renders title', () => {
    render(<ProjectsPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders project cards', () => {
    render(<ProjectsPage />);
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });
});
