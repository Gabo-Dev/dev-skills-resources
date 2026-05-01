import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectDetailPage } from './ProjectDetailPage';

describe('ProjectDetailPage', () => {
  it('renders project detail', () => {
    render(<ProjectDetailPage id="design-md-landing-eval" />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('shows not found for invalid id', () => {
    render(<ProjectDetailPage id="nonexistent" />);
    expect(screen.getByText('Project not found')).toBeInTheDocument();
  });
});
