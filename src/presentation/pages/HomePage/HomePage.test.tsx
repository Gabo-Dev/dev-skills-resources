import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders title', () => {
    render(<HomePage />);
    expect(screen.getByText('dev-skills-resources')).toBeInTheDocument();
  });
});
